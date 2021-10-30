import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20, BLACK, APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';

export default UserTimeLabel = props => {

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
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: imgUri}} style={styles.img_round_46} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP, flexDirection: 'row', paddingBottom: 10 * DP, height: 36 * DP}}>
				{/* profile Image와 총 height가 10차이가 난다 => paddingBottom 10 */}
				<Text style={[txt.roboto24, {lineHeight: 30 * DP, color: validation ? APRI10 : BLACK}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 30 * DP, color: GRAY20, paddingLeft: 16 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					· {props.data.time}일 전
				</Text>
			</View>
		</View>
	);
};
UserTimeLabel.defaultProps = {
	data: {
		user_id: 'user_id',
		user_nickname: 'user_nickname',
		user_image: 'user_image',
		time: '1일',
	},
	onClickLabel : e => console.log(e),
};
