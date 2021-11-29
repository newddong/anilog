import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Private30, Public30} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {APRI10, BLACK, GRAY10, GRAY20} from 'Root/config/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 *
 *@param {{
 * data: ' user_id, shelter_name, shelter_image, location, shelter_type'
 * onClickLabel: 'Label Click Callback',
 * }} props
 */
export default ShelterSmallLabel = props => {
	const [validation, setValidation] = React.useState(false);
	const [imgUri, setImgUri] = React.useState(props.data.user_profile_uri);
	const [data, setData] = React.useState({
		user_type: 'shelter',
		shelter_type: 'private', //보호소 유형, 공립(public), 사립(private)로 나뉨
		shelter_name: '아름보호소', //보호소 이름
		shelter_address: {
			city: '서울시', //시,도
			district: '마포구', //군,구
			neighbor: '용강동 89-77', //동,읍,면
		}, //보호소 주소
		shelter_homepage: 'http://google.com', //보호소 홈페이지 uri
		shelter_delegate_contact_number: '010-9645-0422', //보호소 대표 전화번호, 휴대폰 번호
		shelter_foundation_date: '2021-11-07', //보호소 설립일
	});

	React.useEffect(() => {
		setData(props.data);
	}, [props.data]);

	//data정보는 있지만 data.user_image가 비어있는 경우 Default propfile Image 설정
	React.useEffect(() => {
		if (imgUri == null) {
			setImgUri('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
		}
	});

	//user_nickname Text 색깔 조건부적용을 위한 세션아이디 비교
	React.useEffect(() => {
		const getItem = async () => {
			let token = await AsyncStorage.getItem('token');
			if (props.data.user_id == token) {
				setValidation(true); //일치한다면 Validation True로 nickname text color를 바꿈
			}
			return token;
		};
		getItem();
		return () => {};
	});

	const getStatusMark = () => {
		switch (props.data.shelter_type) {
			case 'public':
				return <Public30 />;
			case 'private':
				return <Private30 />;
			default:
				return <></>;
		}
	};

	const onClickLabel = e => {
		props.onLabelClick(props.data.user_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: imgUri}} style={styles.img_round_72} />
				{/* image_round_76이 없으므로 style 작성 */}
				<View style={{position: 'absolute', right: 0, bottom: 0}}>{getStatusMark()}</View>
			</TouchableOpacity>
			<View style={{marginLeft: 10 * DP}}>
				{/* Text Box 2 Height 86 - profileImage height 94 = -8  ==> PaddingVertical 4씩 textBox View에 준다 */}
				{/* Text부분과 프로필이미지 사이의 거리 50 */}
				<Text style={[txt.noto24b, {color: validation ? APRI10 : GRAY10}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.shelter_name} /{props.data.shelter_address.city} {props.data.shelter_address.district}
				</Text>
				<Text style={[txt.noto24, {color: GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.shelter_foundation_date}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
ShelterSmallLabel.defaultProps = {
	data: {
		user_type: 'shelter',
		shelter_type: 'private', //보호소 유형, 공립(public), 사립(private)로 나뉨
		shelter_name: '아름보호소', //보호소 이름
		shelter_address: {
			city: '서울시', //시,도
			district: '마포구', //군,구
			neighbor: '용강동 89-77', //동,읍,면
		}, //보호소 주소
		shelter_homepage: 'http://google.com', //보호소 홈페이지 uri
		shelter_delegate_contact_number: '010-9645-0422', //보호소 대표 전화번호, 휴대폰 번호
		shelter_foundation_date: '2021-11-07', //보호소 설립일
	},
	onClickLabel: e => console.log(e),
};
