import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image, ScrollView, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { txt } from 'Root/config/textstyle';
import { Bracket48 } from '../atom/icon';
import LocalMedia from '../molecules/LocalMedia';
import { login_style, temp_style, photoSelect } from './style_templete';
import CameraRoll from '@react-native-community/cameraroll';
import { item } from 'Root/screens/common/style_address';
export default PhotoSelect = props => {

	const moveToSingPhotoSelect = () => {
		props.navigation.push('AssignPetInfoB');
	};

	const isSingle = props.route.name === 'SinglePhotoSelect';

	const [photo, setPhotos] = React.useState([]);
	let indexArray = [];
	indexArray.length = 5;
	const [photoArray, setPhotoArray] = React.useState([]);
	const [selectedPhoto, setSelectedPhoto] = React.useState();
	const [selectedIndex, setSelectedIndex] = React.useState([1, 2, 3, 4, 5]);
	const [ind, setInd] = React.useState([])
	const [number, setNumber] = React.useState(1);
	const [selectDisable, setSelectDisable] = React.useState(false)
	const [delectedIndex, setDeletedIndex] = React.useState()


	const loadPhotosMilsec = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'Photos',
		})
			.then(r => setPhotos(r.edges))
			.catch(err => {
				console.log(err);
			});
		return () => { };
	}

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
			// loadPhotos();
			loadPhotosMilsec();
		});
	});


	const onSelect = (img, state, index) => {
		let photoArray_dummy = [...photoArray];
		console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@')
		let copy = [...selectedIndex];

		if (number < 6) {
			// console.log("State" + state)
			if (state) {
				copy[index] = number;
				number == 5 ? setSelectDisable(true) : setNumber(number + 1)
			} else if (!state) {
				let copy = [...selectedIndex]

				console.log("index", index)
				console.log("selected[index]", selectedIndex[index])
				console.log('copy', copy)
				console.log(copy.length)
				selectDisable ? null : setNumber(number - 1)
				setSelectDisable(false)

			}
			photoArray_dummy.push(img);
			setPhotoArray(photoArray_dummy);
			//사진 누른 순서 관련 배열
			setSelectedPhoto(img);
			setSelectedIndex(copy);
		}
		else if (number == 6) {
			console.log('5초과')
		}

	};

	const renderItem = React.useCallback(
		(item, index) => {

			//Single로 PhotoSelect가 호출된 경우 LocalMedia는 단일 선택모드로 실행되며, Multiple로 호출된 경우 사진 다중 선택모드로 실행
			return props.route.name == 'SinglePhotoSelect'
				?
				<LocalMedia isSingleSelection={true} onSelect={(img_uri, state) => onSelect(img_uri, state, index)} data={{ img_uri: item.node.image.uri }} />
				:
				<LocalMedia
					isSingleSelection={false}
					disable={selectDisable}
					number={number}
					onSelect={e => onSelect(e, index)}
					data={{ img_uri: item.node.image.uri }}
					index={selectedIndex[index]} />
		},
		[selectedIndex],
	);

	const checkOut = () => {
		props.onCheckOut(photoArray);
		console.log('params', props.route.params)

		props.navigation.navigate(props.route.params, photoArray);
		// props.navigation.goBack()
	};

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

			<TouchableWithoutFeedback>
				{/* {/* (O)mediaSelect */}
				<View>
					<View style={[photoSelect.recentPhotoTitle]}>
						<Text style={txt.noto36}>최근 항목 </Text>
						<Bracket48 />
						<TouchableOpacity onPress={checkOut}>
							<Text style={{ fontSize: 25, marginLeft: 20, backgroundColor: 'yellow' }}>임시 확인 버튼</Text>
						</TouchableOpacity>
					</View>
					<View style={[temp_style.mediaSelect]}>
						{/* <Text>(O)mediaSelect(사진등록완료)</Text> */}
						{/* <MediaSelect mediaList={photo} /> */}
						<FlatList data={photo} numColumns={4} renderItem={({ item, index }) => renderItem(item, index)} scrollEnabled keyExtractor={item.key} />
					</View>
				</View>
			</TouchableWithoutFeedback>
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
