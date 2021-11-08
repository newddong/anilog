import React from 'react';
import {Text, View} from 'react-native';
import {btn_w280} from '../atom/btn/btn_style';
import ActionButton from '../molecules/ActionButton';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import SocialInfoA from '../organism_ksw/SocialInfoA';
import {organism_style, profileInfo_style} from './style_organism';

export default ProfileInfo = props => {
	console.log('ProfileInfo ' + JSON.stringify(props.data));
	const data = props;
	console.log(data);
	return (
		<View style={organism_style.profileInfo_main}>
			{/* profileImageLarge_view */}
			<View style={[organism_style.profileImageLarge_view_profileInfo]}>
				<View style={[organism_style.profileImageLarge_profileInfo, profileInfo_style.profileImageLarge]}>
					<ProfileImageLarge160 check={props} />
				</View>
				<View style={[organism_style.socialInfo_profileInfo, profileInfo_style.socialInfo]}>
					<SocialInfoA />
				</View>
			</View>

			{/* Content */}
			<View style={[organism_style.content_view_profileInfo, profileInfo_style.content_view]}>
				<View style={[organism_style.content_profileInfo, profileInfo_style.content]}>
					<Text>Content</Text>
				</View>
				<View style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
					<Text>더보기 ▼</Text>
				</View>
			</View>

			{/* btn_w280 */}
			<View style={[organism_style.btn_w280_view_profileInfo, profileInfo_style.btn_w280_view]}>
				<View style={[organism_style.btn_w280_profileInfo, profileInfo_style.btn_w280]}>
					<ActionButton btnTitle={'팔로우 중'} btnStyle={'filled'} titleFontStyle={30} btnLayout={btn_w280} />
				</View>
				<View style={[organism_style.ActionButton_profileInfo, profileInfo_style.btn_w280]}>
					<ActionButton btnTitle={'발려 동물'} btnStyle={'border'} titleFontStyle={30} btnLayout={btn_w280} onOpen={e => props.showMyPet(e)} />
				</View>
			</View>
		</View>
	);
};

// ActionButton.defaultProps = {
// 	btnTitle: 'BTN_W654', //버튼의 제목
// 	disable: false, // 버튼탭 사용불가 상태 boolean
// 	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
// 	titleFontStyle: 24, // 버튼 title의 폰트 크기
// 	btnStyle: 'border', // 버튼스타일 filled border noBorder
// 	onOpen: e => console.log(e),
// 	onClose: e => console.log(e),
// };
