import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, GRAY20, BLACK} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';

export default UserLocationTimeLabel = props => {

	const [validation, setValidation] = React.useState(false);
	const [imgUri, setImgUri] = React.useState(props.data.user_image);

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

	const onClickLabel = e => {
		props.onLabelClick(props.data.user_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			{/* Text Box 2 Height 68 - profileImage height 60 하지만 profileImage가 위로 치우쳐져있음 => bottom Padding으로 8 처리   */}
			<TouchableOpacity onPress={onClickLabel} style={{paddingBottom: 8 * DP}}>
				<Image source={{uri: imgUri}} style={styles.img_round_60} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP, width: 300 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 30 */}
				{/* width 300은 비정상적인 길이에 대한 처리 */}
				{/* img_round_94의 height94이며 Text Box 2개의 height 총합은 86이었으므로 paddingVertical을 4씩 준다*/}
				<Text style={[txt.roboto24, {color: validation ? APRI10 : BLACK}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 36 * DP, color: GRAY20}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.location} · {props.data.time}일 전
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};

UserLocationTimeLabel.defaultProps = {
	data : {
		user_id : 'user_id',
		user_nickname : 'user_nickname',
		user_image : 'user_image',
		location : 'location',
		time : '1일'
	},
	onClickLabel : e => console.log(e)
}