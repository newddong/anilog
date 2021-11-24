import React from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { txt } from 'Root/config/textstyle';
import { Bracket48 } from '../atom/icon';
import LocalMedia from '../molecules/LocalMedia';
import { login_style, temp_style, photoSelect } from './style_templete';
import CameraRoll from '@react-native-community/cameraroll';
import { item } from 'Root/screens/common/style_address';
export default PhotoSelect = props => {
	const isSingle = props.route.name === 'SinglePhotoSelect';

	const [photo, setPhotos] = React.useState([]); // 페이지 하단에 출력되는 사진목록들
	const [photoArray, setPhotoArray] = React.useState([]); // 선택된 사진목록들 (다중선택 모드)
	const [selectedPhoto, setSelectedPhoto] = React.useState()
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
				copy.splice(0, 0, true) //목록 첫 인덱스는 Default Camera Icon (사진직접찍기 기능)
				console.log(copy)
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

	const takePicture = () => {
		props.navigation.push('Camera', props.route.name)
	}

	//확인
	const checkOut = () => {
		props.onCheckOut(photoArray);
		console.log('체크아웃 - 보낼 Photo의 img_uri', photoArray)
		console.log('Photoselect에서 체크아웃 - 돌아갈 navigation 네임 ', props.route.params);
		props.navigation.navigate(props.route.params, { photo: photoArray });
	};

	const onSelect = (img, state, index) => { //img - img_uri, state - 선택인지, 선택해제인지 여부 , index - 전체 사진 목록 중 선택한 사진의 index
		//단일선택모드
		if (isSingle) {
			//선택
			if (state) {
				let copy = [...photo]
				copy.map((v, i) => {
					i == index ? copy[i].state = true : copy[i].state = false
				})
				setSelectedPhoto(img)
				setPhotos(copy)
				setPhotoArray(img)
			}
			//선택취소
			else if (!state) {
				let copy = [...photo]
				copy[index].state = false
				setSelectedPhoto('https://us.123rf.com/450wm/azvector/azvector1803/azvector180300135/96983949-카메라-아이콘-플랫-카메라-기호-격리-아이콘-기호-벡터.jpg?ver=6')
				setPhotos(copy)
			}
		}
		//다중선택모드
		else {
			let copy = []; //인덱스정보를 담을 tempContainer
			let photo_container = [] //선택된 photo들의 uri리스트를 담은 container
			if (state) { //선택상태 true로 바꾸는 분기
				if (number == 5) { //5번째 선택일 경우 우선 다음부턴 선택이 불가능하도록 SelectDisable을 True로 만듦
					setSelectDisable(true)
				}
				setSelectedPhoto(img)
				copy = [...selectedIndex]
				copy[index] = number //선택한 사진의 selectIndex에는 number(1~5까지 진행된다) 부여
				if (photoArray.length < 5) { //photo uri리스트가 5개 이상일 경우 더이상 담지않는다
					photo_container = [...photoArray]
					photo_container.push(img)
					setPhotoArray(photo_container)
				}
				selectDisable ? null : setNumber(number + 1) // 선택불가 상황이 아닐 경우 number+1
				setSelectedIndex(copy) //최종적으로 인덱스 반영
			} else if (!state) { //선택상태 false로 바꾸는 분기
				setNumber(number - 1) //우선 number -1
				setSelectDisable(false) //우선 선택불가 상황도 해제
				const getIndex = element => element == img // 선택한 사진의 uri와 같은 uri를 가진 index를 photoArray에서 가져옴
				photo_container = [...photoArray]
				const findIndex = photo_container.findIndex(getIndex)
				photo_container.splice(findIndex, 1) // 그 사진은 선택해제하면서 photoList에서도 항목해제시킴
				setPhotoArray(photo_container) // 반영
				copy = [...selectedIndex] // 선택된 사진들의 index(1,2,3,4,5) 정보가 담긴 selectedIndex
				copy.map((v, i) => {
					// 현재 선택해제한 사진의 nummber 보다 클 경우 -1 그렇지않을 경우는 현상유지
					if (copy[i] > selectedIndex[index]) {
						copy[i] = copy[i] - 1
					}
				})
				setSelectedIndex(copy)

			}

			// if (number < 6) {
			// 	// console.log("State" + state)
			// 	if (state) {
			// 		copy[index] = number;
			// 		number == 5 ? setSelectDisable(true) : setNumber(number + 1);
			// 		setSelectedIndex(copy);

			// 	} else if (!state) {
			// 		let copy = [...selectedIndex];

			// 		console.log('index', index);
			// 		console.log('selected[index]', selectedIndex[index]);
			// 		console.log('copy', copy);
			// 		console.log(copy.length);
			// 		selectDisable ? null : setNumber(number - 1);
			// 		setSelectDisable(false);
			// 	}
			// 	photoArray_dummy.push(img);
			// 	setPhotoArray(photoArray_dummy);
			// 	//사진 누른 순서 관련 배열
			// 	setselectedPhotos(img);
			// } else if (number == 6) {
			// 	console.log('5초과');
			// }
		}
	};

	const renderItem = (item, index) => {
		if (index == 0) {
			return (
				<TouchableOpacity style={{ flex: 1 }} onPress={takePicture} >
					<Image source={{ uri: 'https://us.123rf.com/450wm/azvector/azvector1803/azvector180300135/96983949-카메라-아이콘-플랫-카메라-기호-격리-아이콘-기호-벡터.jpg?ver=6' }} style={{ flex: 1 }} />
				</TouchableOpacity>
			)
		}		//Single로 PhotoSelect가 호출된 경우 LocalMedia는 단일 선택모드로 실행되며, Multiple로 호출된 경우 사진 다중 선택모드로 실행
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
				// number={number}
				onSelect={(img_uri, state) => onSelect(img_uri, state, index)}
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
						uri: selectedPhoto,
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