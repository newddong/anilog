import React from 'react';
import {View, StyleSheet, Platform, PermissionsAndroid, Text, TouchableWithoutFeedback, Image, FlatList} from 'react-native';
import {APRI10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import CameraRoll from '@react-native-community/cameraroll';
// import { hasAndroidPermission } from './camerapermission';
// import { requestPermission, reqeustCameraPermission } from 'permission';
import LocalMedia from 'Molecules/LocalMedia';
import {Bracket48} from '../atom/icon';
// import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

export var exportUriList = []; //겔러리 속 사진들 로컬 주소
export var exportUri = {}; //겔러리 속 사진 로컬 주소

export default AddPhoto = props => {
	const [isVideo, setVideo] = React.useState(true);
	const [photolist, setPhotoList] = React.useState([
		// {
		// 	node: {
		// 		timestamp: 0,
		// 		image: {
		// 			uri: 'https://us.123rf.com/450wm/azvector/azvector1803/azvector180300135/96983949-카메라-아이콘-플랫-카메라-기호-격리-아이콘-기호-벡터.jpg?ver=6',
		// 		},
		// 	},
		// },
	]);
	const [selectedPhoto, setSelectedPhoto] = React.useState([]);
	const isSingle = props.route.name === 'SinglePhotoSelect';

	/**
	 * timeStamp를 이용하여 디바이스의 갤러리에 있는 미디어를 불러옴
	 *
	 *@param {number} timeStamp - 갤러리의 미디어를 불러올 기준 timeStamp (기본값 0)
	 *@param {number} request - 불러올 미디어의 숫자 (기본값 20)
	 *@param {string} type - 불러올 미디어의 타잎('Photos'|'All'|'Videos')
	 */
	const loadPhotos = (request = 8, timeStamp = 0, type = 'All') => {
		// CameraRoll.getPhotos({ first: 10, assetType: 'Photos', groupTypes: 'All', fromTime: 1584356434595, //5 hours back toTime: moment().valueOf(), })
		CameraRoll.getPhotos({
			first: request,
			after: '20',
			// fromTime: timeStamp,
			assetType: type,
			include: ['playableDuration'],
		})
			.then(r => {
				console.log('디바이스 사진 리스트', timeStamp, JSON.stringify(r));

				if (Platform.OS === 'ios') {
					console.log('mac_pageinfo', r.edges.length, r.page_info);
					setPhotoList(photolist.concat(r.edges));
				} else {
					console.log('android_pageinfo', r.edges.length, r.page_info);
					setPhotoList(photolist.concat(r.edges));
				}
			})
			.catch(err => {
				console.log('cameraroll error===>' + err);
			});
	};

	/** 스크롤이 바닥에 닿을때 페이징 처리를 위한 함수 */
	const scrollReachBottom = () => {
		// console.log('scrolllist bottom   ' + JSON.stringify(photolist));
		let timeStamp = photolist.length > 0 ? photolist[photolist.length - 1].node.timestamp : 0;
		// let timeStamp = photolist.length > 0 ? photolist[1].node.timestamp : 0;
		// console.log(timeStamp);
		// loadPhotosMilsec(20,timeStamp);
	};
	const Te = React.useRef();
	const a = React.useRef(1);
	const test = () => {
		// console.log(props.route.params);
		let dummy = {
			node: {
				timestamp: 0,
				image: {
					uri: 'https://us.123rf.com/450wm/azvector/azvector1803/azvector180300135/96983949-카메라-아이콘-플랫-카메라-기호-격리-아이콘-기호-벡터.jpg?ver=6',
				},
			},
		};
		console.log('커서', Te.current);
		let params = Te.current
			? {
					first: a.current++,
					after: Te.current,
					assetType: 'Videos',
					include: ['playableDuration'],
			  }
			: {
					first: a.current++,
					assetType: 'Videos',
					include: ['playableDuration'],
			  };
		console.log('파라메터',params);
		CameraRoll.getPhotos(params)
			.then(r => {
				console.log('디바이스 사진 리스트', JSON.stringify(r));
				Te.current = r.page_info.end_cursor;

				console.log('android_pageinfo', r.edges.length, r.page_info);
				let push = [...r.edges, ...Array.from({length: 4 - (r.edges.length % 4)}, (v, i) => dummy)];

				// setPhotoList(photolist.concat(push));
				setPhotoList(photolist.concat(r.edges));
			})
			.catch(err => {
				console.log('cameraroll error===>' + err);
			});
	};

	/** 이전 페이지에서 이미 선택한 사진이 있을 경우 선택한 것으로 표시 */
	// React.useEffect(() => {
	// 	exportUriList.splice(0);
	// 	if (props.route.params?.selectedImages?.length > 0) {
	// 		console.log('선택한 이미지가 있음');
	// 		exportUriList = props.route.params.selectedImages;
	// 		setSelectedPhoto(props.route.params.selectedImages.map(v => v));
	// 	} else {
	// 		console.log('선택한 이미지가 없음');
	// 		setSelectedPhoto([]);
	// 	}
	// }, []);

	/** 퍼미션 처리, 사진을 불러오기 전 갤러리 접근 권한을 유저에게 요청 */
	React.useEffect(() => {
		if (Platform.OS === 'ios') {
			loadPhotos();
		} else {
			try {
				/** 외부 저장소 접근권한 */
				const isAllowExternalStorage = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

				PermissionsAndroid.check(isAllowExternalStorage).then(isPermit => {
					if (isPermit) {
						// loadPhotos();
					} else {
						PermissionsAndroid.request(isAllowExternalStorage).then(permission => {
							console.log(permission);
							if (permission === 'granted') {
								// loadPhotos();
							} else {
								alert('기기의 사진 접근권한을 허용해 주세요');
							}
						});
					}
				});
			} catch (err) {
				console.warn(err);
			}
		}
	}, []);

	// React.useEffect(() => {
	// 	props.navigation.addListener('focus', () => {
	// 		// loadPhotos();
	// 		loadPhotosMilsec();
	// 	});
	// });

	const selectPhoto = photo => {
		// if (isSingle) {
		// 	exportUriList.splice(0);
		// 	exportUriList.push(photo);
		// 	setSelectedPhoto(exportUriList.map(v => v));
		// 	return;
		// }
		// exportUriList.push(photo);
		// setSelectedPhoto(exportUriList.map(v => v));
	};

	const cancelPhoto = photo => {
		// if (isSingle) {
		// 	exportUriList.splice(0);
		// 	setSelectedPhoto(exportUriList.map(v => v));
		// 	return;
		// }
		// exportUriList.forEach((v, i, a) => {
		// 	if (v.uri === photo.uri) a.splice(i, 1);
		// });
		// setSelectedPhoto(exportUriList.map(v => v));
	};

	const renderList = ({item, index}) => {
		// if (index === 0) {
		// 	return <Photos isSingle={isSingle} isCamera navigation={props.navigation} />;
		// } else {
		// 	return <Photos isSingle={isSingle} data={item.node} onSelect={selectPhoto} onCancel={cancelPhoto} selectedList={selectedPhoto} />
		// }
		return (
			
				<LocalMedia data={item.node} isSingleSelection={false} onSelect={selectPhoto} onCancel={cancelPhoto} index={index} />
			
		);
	};

	const clickcheck = () => {
		// console.log(props.route.params);
		// console.log(exportUriList);
		// props.navigation.navigate(props.route.params?.navfrom,{})
		// props.navigation.navigate({ name: props.route.params.navfrom, params: { localSelectedImages: exportUriList[0] }, merge: true });
		// props.navigation.navigate({name: props.route.params?.navfrom, params: {image: exportUriList[0]}, merge: true});
		// setPhotoList([]);
		setVideo(false);
		console.log(JSON.stringify(photolist));
	};

	return (
		<View style={lo.wrp_main}>
			{/* {selectedPhoto[selectedPhoto.length - 1]?.isVideo ? (
				<View />
			) : (
				<Video style={lo.box_img} source={{uri: ''}}/>
				// <Video style={lo.box_img} source={{uri: selectedPhoto[selectedPhoto.length-1]?.uri}} muted />
				// <Image style={lo.box_img} source={{uri: selectedPhoto[selectedPhoto.length - 1]?.uri}} />
			)} */}
			<Video style={lo.box_img} source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}} muted />

			<View style={lo.box_title}>
				<TouchableWithoutFeedback onPress={test}>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<Text style={txt.noto36}>최근 항목</Text>
						<Bracket48 />
					</View>
				</TouchableWithoutFeedback>
				{isSingle && (
					<TouchableWithoutFeedback onPress={clickcheck}>
						<View style={[btn.confirm_button, btn.shadow]}>
							<Text style={[txt.noto28b, txt.white]}>사진등록</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>
			<View style={{flex: 1}}>
				<FlatList
					contentContainerStyle={lo.box_photolist}
					data={photolist}
					renderItem={renderList}
					// extraData={selectedPhoto}
					// columnWrapperStyle={{backgroundColor:'green',borderColor:'red',borderWidth:3*DP}}
					// keyExtractor={item => item.node?.image.uri}
					keyExtractor={(item, index) => item.node.image.uri + index}
					// onEndReachedThreshold={0.1}
					// onEndReached={()=>console.log('d')}
					numColumns={4}
					onEndReached={scrollReachBottom}
					// initialNumToRender={20}
					windowSize={3}
				/>
			</View>
		</View>
	);
};

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_img: {
		height: 750 * DP,
		backgroundColor: 'gray',
	},
	box_title: {
		height: 102 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	box_photolist: {
		// flexDirection: 'row',
		justifyContent: 'space-between',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
});

const btn = StyleSheet.create({
	confirm_button: {
		height: 70 * DP,
		width: 120 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: APRI10,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		elevation: 2,
	},
});
