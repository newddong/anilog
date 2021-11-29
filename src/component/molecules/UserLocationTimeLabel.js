import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, GRAY20, BLACK} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * data: 'user_id, user_nickname(string), img_uri(string), location(string), time(number)',
 * onLabelClick: void,
 * }} props
 */
export default UserLocationTimeLabel = props => {
	// console.log('userLocationTimeLabel', props.data);
	const [validation, setValidation] = React.useState(false);

	//user_nickname Text 색깔 조건부적용을 위한 세션아이디 비교
	React.useEffect(() => {
		const getItem = async () => {
			let token = await AsyncStorage.getItem('token');
			if (props.data.comment_writer_id == token) {
				setValidation(true); //일치한다면 Validation True로 nickname text color를 바꿈
			}
			return token;
		};
		getItem();
		return () => {};
	});

	const onClickLabel = e => {
		props.onLabelClick(props.data.comment_writer_id);
	};

	const getCommentedTime = () => {
		const commented_date = props.data.comment_date;
		let split = commented_date.split('-');
		let commented_date_time = new Date(split[0], split[1] - 1, split[2]);
		let date = new Date().getDate() - commented_date_time.getDate();
		return date;
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={onClickLabel} style={{paddingBottom: 8 * DP}}>
				<Image source={{uri: props.data.user_profile_uri}} style={styles.img_round_60} />
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP}}>
				<Text style={[txt.roboto24, {color: validation ? APRI10 : BLACK}]} numberOfLines={1}>
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 36 * DP, color: GRAY20}]} numberOfLines={1}>
					{props.data.user_address.city} {props.data.user_address.district} · {getCommentedTime()}일 전
				</Text>
			</View>
		</View>
	);
};

UserLocationTimeLabel.defaultProps = {
	data: {
		user_id: 'user_id',
		user_nickname: 'user_nickname',
		img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		location: 'location',
		time: '1',
	},
	onClickLabel: e => console.log(e),
};
