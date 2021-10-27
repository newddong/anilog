import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, BLACK} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
export default UserDescriptionLabel = props => {
	const [validation, setValidation] = React.useState(false);
	const [imgUri, setImgUri] = React.useState(props.data.user_image)

	//data정보는 있지만 data.user_image가 비어있는 경우 Default propfile Image 설정
	React.useEffect( ()=>{
		if(imgUri == null){
			setImgUri('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')
		}
	})
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
				<Image source={{uri: props.data.user_image}} style={styles.img_round_94} />
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 30 */}
				{/* img_round_94의 height94이며 Text Box 2개의 height 총합은 86이었으므로 paddingVertical을 4씩 준다*/}

				<View style={{flexDirection: 'row'}}>
					<Text style={(txt.roboto28b, {color: validation ? APRI10 : BLACK})} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname}
					</Text>
					<Text style={[txt.noto22, {color: APRI10, lineHeight: 34 * DP, paddingTop: 4 * DP}]}> STATUS</Text>
					{/* user_nickname Text박스에 비해 y축이 4가 크다 => paddingTop : 4 *  DP  */}
				</View>

				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.text_intro}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
UserDescriptionLabel.defaultProps = {
	data: {
		user_id: 'user_id',
		user_nickname: 'user_nickname',
		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		text_intro: 'Description',
	},
};
