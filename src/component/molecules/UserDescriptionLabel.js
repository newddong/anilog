import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, BLACK, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';

/**
 * 유저의 프로필 사진, 닉네임, 소개글, 팔로우 상태를 출력하는 라벨
 * @param {object} props - Props Object
 * @param {object} props.data - UserObejct
 * @param {(data:object)=>void} props.onClickLabel - 버튼을 눌렸을때 동작하는 콜백, 제목 반환환
 */
const UserDescriptionLabel = props => {
	// console.log('props.data', props.data);
	const data = props.data;

	const [isLoginUser, setIsLoginUser] = React.useState(false); //현재 접속 중인 아이디와 같다면 닉네임 색깔이 메인색깔

	//현재 접속한 토큰과 출력된 유저라벨의 유저가 같은지 확인
	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			res == props.data._id ? setIsLoginUser(true) : setIsLoginUser(false);
		});
	}, [props.data]);

	const onClickLabel = () => {
		console.log(`UserDescriptionLabel:onClickLabel()-props.data:${JSON.stringify(props.data)}`);
		props.onClickLabel(props.data);
	};

	return (
		// <View style={{flexDirection: 'row', alignItems: 'center', width: props.width != null ? props.width : null}}>
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: data.user_profile_uri || DEFAULT_PROFILE}} style={[styles.img_round_94, {backgroundColor: 'yellow'}]} />
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP}}>
				<View style={{flexDirection: 'row'}}>
					<Text style={(txt.roboto28b, {color: isLoginUser ? APRI10 : BLACK})} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname || ''}
					</Text>
					{props.data.showStatus ? <Text style={[txt.noto22, {color: APRI10, alignSelf: 'center', paddingLeft: 10 * DP}]}> STATUS</Text> : null}
				</View>
				<Text style={[txt.noto24, {lineHeight: 44 * DP, color: GRAY10, maxWidth: 400 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_introduction || ''}
				</Text>
			</View>
		</View>
	);
};

UserDescriptionLabel.defaultProps = {
	onClickLabel: e => console.log(e),
};

export default UserDescriptionLabel;
