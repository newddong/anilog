import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {AddItem64, Camera54} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import AidRequest from '../organism_ksw/AidRequest';
import {assignProtectAnimal_style, feedWrite, login_style, temp_style, writeAidRequest} from './style_templete';

export default WriteAidRequest = ({route, navigation}) => {
	// console.log('WriteAidRequest', route.params);
	//이제 여기까지 Write해온 ShelterProtectAnimalObject 토대로

	const [token, setToken] = React.useState();
	const [data, setData] = React.useState({...route.params}); //ShelterProtectAnimalObject(보호소의 보호동물) 정보가 담겨있음
	//ProtectRequestObject(보호소의 동물 보호 요청 게시글) 테이블에 맞춘 보호요청 작성글을 작성
	const [ProtectRequestData, setProtectRequestData] = React.useState({
		protect_request_photos: data.protect_animal_photos,
		protect_request_photo_thumbnail: data.protect_animal_photos ? data.protect_animal_photos[0] : DEFAULT_PROFILE,
		protect_animal_id: 231, // 이 부분 API에서 받아와야 함 보호요청을 하려고 하는 동물의 _id
		protect_request_title: null,
		protect_request_content: null,
		protect_request_writer_id: token,
		protect_request_hit: 0,
		protect_request_favorite_count: 0,
		protect_request_status: 'rescue',
		protect_request_date: new Date(),
		protect_request_update_date: null,
		protect_request_comment_count: 0,
	});
	const [imageList, setImageList] = React.useState([]); //PhotoSelect에서 선택된 사진List

	React.useEffect(() => {
		// console.log('ProtectRequestData at WriteAid', ProtectRequestData.protect_request_content);d1
	}, [ProtectRequestData]);

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res != null ? setToken(res) : null;
		});
	}, []);

	// React.useEffect(() => {
	// 	if (route.params == null) {
	// 		// setImgSelected('https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg')
	// 	} else if (route.params.photo) {
	// 		const photos = route.params.photo;
	// 		let copy = [...imageList];
	// 		photos.map((v, i) => {
	// 			copy.push(v);
	// 		});
	// 		setImageList(copy);
	// 	}
	// }, [route.params]);

	//사진 추가 클릭
	// const gotoSelectPicture = () => {
	// 	navigation.push('MultiPhotoSelect', route.name);
	// };

	const gotoSelectPicture = () => {
		// navigation.push('SinglePhotoSelect', route.name);
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 5,
			},
			responseObject => {
				console.log('선택됨', responseObject);
				if (!responseObject.didCancel) {
					let photoList = [];
					responseObject.assets.map((v, i) => {
						photoList.push(v.uri);
					});
					setImageList(photoList);
					setData({...data, protect_request_photos: photoList || data.protect_request_photos});
				}
			},
		);
	};

	//SelectedMedia 아이템의 X마크를 클릭
	const onDelete = index => {
		let copy = [...imageList];
		copy.splice(index, 1);
		setImageList(copy);
	};

	//보호게시글 내용 값 변경 콜백
	const onChangeContent = text => {
		setProtectRequestData({...ProtectRequestData, protect_request_content: text});
	};

	//보호게시글 제목 값 변경 콜백
	const onChangeTitle = text => {
		setProtectRequestData({...ProtectRequestData, protect_request_title: text});
	};

	return (
		<View style={[login_style.wrp_main, writeAidRequest.container]}>
			<ScrollView contentContainerStyle={{flex: 1}}>
				<View style={[temp_style.aidRequest, writeAidRequest.aidRequest]}>
					<AidRequest data={data} selected={true} />
					<View style={[temp_style.feedTextEdit, writeAidRequest.feedTextEdit]}>
						<View style={[writeAidRequest.titleContainer]}>
							<TextInput onChangeText={onChangeTitle} placeholder={'제목 입력'} style={[txt.noto30, writeAidRequest.titleInput]} />
						</View>
						<View style={[temp_style.feedTextEdit]}>
							{/* 피드 글 작성 */}
							<TextInput onChangeText={onChangeContent} textAlignVertical={'top'} multiline={true} style={{flex: 1}} placeholder="내용 입력" />
						</View>
					</View>
					<View style={writeAidRequest.requestContent_underline} />

					<View style={[assignProtectAnimal_style.pic, {}]}>
						<Camera54 onPress={gotoSelectPicture} />
						<TouchableOpacity onPress={gotoSelectPicture}>
							<Text style={[txt.noto24, assignProtectAnimal_style.addpic]}>사진추가</Text>
						</TouchableOpacity>
					</View>
					<View style={[writeAidRequest.selectedMediaList]}>
						{imageList.length == 0 ? (
							<></>
						) : (
							<SelectedMediaList items={imageList} layout={styles.img_square_round_190} onDelete={index => onDelete(index)} />
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
