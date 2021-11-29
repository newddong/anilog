import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20, BLACK, APRI10} from 'Root/config/color';
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
export default UserTimeLabel = props => {
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

	const getCommentedTime = () => {
		const commented_date = props.data.comment_date;
		let split = commented_date.split('-');
		let commented_date_time = new Date(split[0], split[1] - 1, split[2]);
		let date = new Date().getDate() - commented_date_time.getDate();
		return date;
	};

	const onClickLabel = e => {
		props.onLabelClick(props.data.comment_writer_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: props.data.user_profile_uri}} style={styles.img_round_46} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP, flexDirection: 'row', paddingBottom: 10 * DP, height: 36 * DP}}>
				{/* profile Image와 총 height가 10차이가 난다 => paddingBottom 10 */}
				<Text style={[txt.roboto24, {lineHeight: 30 * DP, color: validation ? APRI10 : BLACK}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 30 * DP, color: GRAY20, paddingLeft: 16 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					· {getCommentedTime()}일 전
				</Text>
			</View>
		</View>
	);
};
UserTimeLabel.defaultProps = {
	onClickLabel: e => console.log(e),
};
