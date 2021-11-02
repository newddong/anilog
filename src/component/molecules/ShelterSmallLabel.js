import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Private30, Public30} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {APRI10, BLACK, GRAY10, GRAY20} from 'Root/config/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ShelterSmallLabel = props => {
	const [validation, setValidation] = React.useState(false);
	const [imgUri, setImgUri] = React.useState(props.data.shelter_image);

	//data정보는 있지만 data.user_image가 비어있는 경우 Default propfile Image 설정
	React.useEffect(() => {
		if (imgUri == false) {
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
		<View style={{flexDirection: 'row', alignItems: 'center',}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: imgUri}} style={styles.img_round_72} />
				{/* image_round_76이 없으므로 style 작성 */}
				<View style={{position: 'absolute', right: 0, bottom: 0}}>{getStatusMark()}</View>
			</TouchableOpacity>
			<View style={{marginLeft: 10 * DP}}>
				{/* Text Box 2 Height 86 - profileImage height 94 = -8  ==> PaddingVertical 4씩 textBox View에 준다 */}
				{/* Text부분과 프로필이미지 사이의 거리 50 */}
				<Text style={[txt.noto24b, {color: validation ? APRI10 : GRAY10,  }]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.shelter_name} / {props.data.location}
				</Text>
				<Text style={[txt.noto24, { color: GRAY20, }]} numberOfLines={1} ellipsizeMode="tail">
					yyyy.mm.dd
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
ShelterLabel.defaultProps = {
	data: {
		user_id: 'user_id1',
		shelter_name: 'shelter_name',
		shelter_image: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
		location: 'location',
		shelter_type: null,
	},
	onClickLabel: e => console.log(e),
};
