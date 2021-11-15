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
	const [photo, setPhotos] = React.useState([]);
	let indexArray = [];
	indexArray.length = photo.length;
	const [photoArray, setPhotoArray] = React.useState([]);
	const [selectedPhoto, setSelectedPhoto] = React.useState();
	const [selectedIndex, setSelectedIndex] = React.useState(indexArray);
	const [number, setNumber] = React.useState(1);



	React.useEffect(() => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'Photos',
		})
			.then(r => setPhotos(r.edges))
			.catch(err => {
				console.log(err);
			});
		return () => { };
	});

	const onSelect = (e, index) => {
		setSelectedPhoto(e);
		let photoArray_dummy = [...photoArray];
		photoArray_dummy.push(e);
		setPhotoArray(photoArray_dummy);
		//사진 누른 순서 관련 배열
		let copy = [...selectedIndex];
		copy[index] = number;
		setSelectedIndex(copy);
		setNumber(number + 1);
		//이  존나 오래걸리게하네
	};

	const renderItem = React.useCallback(
		(item, index) => {
			return (
				<LocalMedia isSingleSelection={false} onSelect={e => onSelect(e, index)} data={{ img_uri: item.node.image.uri }} index={selectedIndex[index]} />
			);
		},
		[selectedIndex],
	);

	const checkOut = () => {
		props.onCheckOut(photoArray);
		console.log(props.route.params);
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
						<TouchableOpacity onPress={() => checkOut()}>
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
