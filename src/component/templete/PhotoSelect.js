import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image, ScrollView, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { txt } from 'Root/config/textstyle';
import { Bracket48 } from '../atom/icon';
import LocalMedia from '../molecules/LocalMedia';
import { login_style, temp_style, photoSelect } from './style_templete';
import CameraRoll from '@react-native-community/cameraroll';
import { item } from 'Root/screens/common/style_address';
export default PhotoSelect = props => {
	const isSingle = props.route.name === 'SinglePhotoSelect';

	let indexArray = [];
	indexArray.length = 5;

	const [photo, setPhotos] = React.useState([]); // 페이지 하단에 출력되는 사진목록들
	const [photoArray, setPhotoArray] = React.useState([]); // 선택된 사진목록들 (다중선택 모드)
	const [selectedPhotos, setselectedPhotos] = React.useState();
	const [selectedIndex, setSelectedIndex] = React.useState([1, 2, 3, 4, 5]); // 선택된 사진의 index (다중선택모드)
	const [number, setNumber] = React.useState(1);
	const [selectDisable, setSelectDisable] = React.useState(false);

	const loadPhotosMilsec = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'Photos',
		})
			.then(r => {
				let copy = [...r.edges]
				copy.map((v, i) => {
					copy[i] = {
						img_uri: v.node.image.uri
						, state: false
					}
				})
				setPhotos(copy)

			})
			.catch(err => {
				console.log(err);
			});
		return () => { };
	};

	React.useEffect(() => {
		if (Platform.OS === 'ios') {
			// loadPhotos();
			loadPhotosMilsec();
		} else {
			try {
				const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
				PermissionsAndroid.check(permission).then(isPermit => {
					if (isPermit) {
						// loadPhotos();
						loadPhotosMilsec();
					} else {
						PermissionsAndroid.request(permission).then(result => {
							console.log(result);
							if (result === 'granted') {
								// loadPhotos();
								loadPhotosMilsec();
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

	React.useEffect(() => {
		props.navigation.addListener('focus', () => {
			loadPhotosMilsec();
		});
	});

	const checkOut = () => {
		props.onCheckOut(photoArray);
		console.log('체크아웃 - 보낼 Photo의 img_uri', photoArray)
		console.log('Photoselect에서 체크아웃 - 돌아갈 navigation 네임 ', props.route.params);
		props.navigation.navigate(props.route.params, photoArray);
	};

	const onSelect = (img, state, index) => {
		//단일선택모드
		if (isSingle) {
			//선택
			if (state) {
				let copy = [...photo]
				copy.map((v, i) => {
					i == index ? copy[i].state = true : copy[i].state = false
				})
				setPhotos(copy)
				setPhotoArray(img)
			}
			//선택취소
		} else if (!state) {
			copy[index].state = false
			setPhotos(copy)

		}
		//다중선택모드
		else {
			let photoArray_dummy = [...photoArray];
			console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
			let copy = [...selectedIndex];

			if (number < 6) {
				// console.log("State" + state)
				if (state) {
					copy[index] = number;
					number == 5 ? setSelectDisable(true) : setNumber(number + 1);
				} else if (!state) {
					let copy = [...selectedIndex];

					console.log('index', index);
					console.log('selected[index]', selectedIndex[index]);
					console.log('copy', copy);
					console.log(copy.length);
					selectDisable ? null : setNumber(number - 1);
					setSelectDisable(false);
				}
				photoArray_dummy.push(img);
				setPhotoArray(photoArray_dummy);
				//사진 누른 순서 관련 배열
				setselectedPhotos(img);
				setSelectedIndex(copy);
			} else if (number == 6) {
				console.log('5초과');
			}
		}
	};

	// const renderItem = React.useCallback(
	// 	(item, index) => {
	// 		console.log('item', item)
	// 		//Single로 PhotoSelect가 호출된 경우 LocalMedia는 단일 선택모드로 실행되며, Multiple로 호출된 경우 사진 다중 선택모드로 실행
	// 		return props.route.name == 'SinglePhotoSelect' ? (
	// 			<LocalMedia
	// 				isSingleSelection={true}
	// 				onSelect={(img_uri, state) => onSelect(img_uri, state, index)}
	// 				data={item}
	// 			/>
	// 		) : (
	// 			<LocalMedia
	// 				isSingleSelection={false}
	// 				disable={selectDisable}
	// 				number={number}
	// 				onSelect={e => onSelect(e, index)}
	// 				data={{ img_uri: item.node.image.uri }}
	// 				index={selectedIndex[index]}
	// 			/>
	// 		);
	// 	},
	// 	[selectedIndex],
	// );

	const renderItem = (item, index) => {
		//Single로 PhotoSelect가 호출된 경우 LocalMedia는 단일 선택모드로 실행되며, Multiple로 호출된 경우 사진 다중 선택모드로 실행
		return props.route.name == 'SinglePhotoSelect' ? (
			<LocalMedia
				isSingleSelection={true}
				onSelect={(img_uri, state) => onSelect(img_uri, state, index)}
				data={item}
			/>
		) : (
			<LocalMedia
				isSingleSelection={false}
				disable={selectDisable}
				number={number}
				onSelect={e => onSelect(e, index)}
				data={item}
				index={selectedIndex[index]}
			/>
		);
	}

	return (
		<View style={(login_style.wrp_main, photoSelect.container)}>
			{/* (A)Img_Squeare_750 */}
			<View style={[temp_style.img_square_750]}>
				<Image
					source={{
						uri: selectedPhotos,
					}}
					style={[temp_style.img_square_750]}
				/>
			</View>

			{/* {/* (O)mediaSelect */}

			<ScrollView>
				<View style={[photoSelect.recentPhotoTitle]}>
					<Text style={txt.noto36}>최근 항목 </Text>
					<Bracket48 />
					<TouchableOpacity onPress={checkOut}>
						{/* Test용 */}
						<Text style={{ fontSize: 25, marginLeft: 20, backgroundColor: 'yellow' }}>임시 확인 버튼</Text>
					</TouchableOpacity>
				</View>
				<View style={[temp_style.mediaSelect]}>
					{/* <MediaSelect mediaList={photo} /> */}
					<FlatList
						data={photo}
						numColumns={4}
						renderItem={({ item, index }) => renderItem(item, index)}
						scrollEnabled
						keyExtractor={item.key} />
				</View>
			</ScrollView>
		</View>
	);
};

PhotoSelect.defaultProps = {
	onCheckOut: e => console.log(e),
};

// LocalMedia.defaultProps = {
// 	data: {
// 		img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
// 		isVideo: false,
// 		duration: null,
// 	},
// 	index: 1,
// 	isSingleSelection: true,
// 	onSelect: e => console.log(e),
// };
