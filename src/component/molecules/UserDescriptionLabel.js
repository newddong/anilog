import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, BLACK, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from '../atom/image/imageStyle';
import {useNavigation} from '@react-navigation/core';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';

/**
 *
 *@param {{
 * data: 'user_id, user_nickname(string), img_uri(string), text_intro(string)',
 * onLabelClick: void,
 * }} props
 */
export default UserDescriptionLabel = props => {
	// console.log('props.data', props.data);
	const data = props.data;

	const [logined_user, setLogined_user] = React.useState(false); //현재 접속 중인 아이디와 같다면 닉네임 색깔이 메인색깔

	React.useEffect(() => {
		AsyncStorage.getItem('token', (err, res) => {
			setLogined_user(res);
		});
	}, [props.data]);

	const navigation = useNavigation();

	const onClickLabel = () => {
		props.onLabelClick(props.data.user_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center', width: props.width != null ? props.width : null}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: data ? data.user_profile_uri : DEFAULT_PROFILE}} style={[styles.img_round_94, {backgroundColor: 'yellow'}]} />
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP}}>
				<View style={{flexDirection: 'row'}}>
					<Text style={(txt.roboto28b, {color: logined_user == data._id ? APRI10 : BLACK})} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname}
					</Text>
					{props.data.showStatus ? <Text style={[txt.noto22, {color: APRI10, alignSelf: 'center', paddingLeft: 10 * DP}]}> STATUS</Text> : null}
				</View>
				<Text style={[txt.noto24, {lineHeight: 44 * DP, color: GRAY10}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_Introduction}
				</Text>
			</View>
		</View>
	);
};

UserDescriptionLabel.defaultProps = {
	data: {
		user_id: 'Default id',
		user_nickname: 'user_nickname',
		img_uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		text_intro: 'Description',
		showStatus: false,
	},
	// onLabelClick: e => console.log(e),
	onLabelClick: e => console.log(e),
};
