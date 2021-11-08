import React from 'react';
import {View} from 'react-native';
import {btn_w108} from '../atom/btn/btn_style';
import {Check50, Cross46} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {controllableAccount, organism_style} from './style_organism';

export default ControllableAccount = props => {
	const [checkBox, setCheckBox] = React.useState(true);
	const [following, setFollowing] = React.useState(false);
	return (
		<View style={controllableAccount.container}>
			{checkBox ? (
				<View style={[controllableAccount.check50]}>
					<Check50 />
				</View>
			) : (
				false
			)}
			<View
				style={[
					organism_style.userDescriptionLabel,
					checkBox ? controllableAccount.userDescriptionLabel_checked : controllableAccount.userDescriptionLabel,
				]}>
				<UserDescriptionLabel data={props.data} />
			</View>
			<View style={[controllableAccount.btn_w108_controllableAccount]}>
				{following ? (
					<AniButton btnTitle={'팔로우'} btnTheme={'noShadow'} btnStyle={'filled'} titleFontStyle={24} btnLayout={btn_w108} />
				) : (
					<AniButton btnTitle={'팔로잉'} btnTheme={'gray'} titleFontStyle={24} btnLayout={btn_w108} />
				)}
			</View>
			{checkBox ? (
				false
			) : (
				<View style={[organism_style.cross46, controllableAccount.cross46]}>
					<Cross46 />
				</View>
			)}
		</View>
	);
};

// AniButton.defaultProps = {
// 	btnTitle: 'title', //버튼의 제목
// 	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
// 	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
// 	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
// 	titleFontStyle: 24 * DP, // titleFontStyle - title의 폰트 크기
// 	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
// 	onPress: {}, // 버튼을 탭했을때 발생하는 콜백
// };
