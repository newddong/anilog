import React from 'react';
import {View} from 'react-native';
import {btn_w108} from '../atom/btn/btn_style';
import {Cross46} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import CheckBox from '../molecules/CheckBox';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {controllableAccount, organism_style} from './style_organism';

/**
 *
 * @param {{
 * data : 'Object / UserDescriptionLabel Data 필요',
 * onFollowBtnClick: void,
 * }} props
 */
export default ControllableAccount = props => {
	const [showCheckBox, setShowCheckBox] = React.useState(true); // Label 좌측 CheckBox 출력 Boolean
	const [showCrossMark, setShowCrossMark] = React.useState(true); // 팔로잉 버튼 우측 Cross 출력 Boolean
	const [following, setFollowing] = React.useState(false);

	const onFollowBtnClick = () => {
		setFollowing(!following);
		props.onFollowBtnClick();
	};
	const onCrossMarkPress = () => {
		props.onCrossMarkPress(props.data);
	};

	React.useEffect(() => {
		props.showCrossMark ? setShowCrossMark(true) : setShowCrossMark(false);
		props.showCheckBox ? setShowCheckBox(true) : setShowCheckBox(false);
	}, [props]);
	return (
		<View style={[controllableAccount.container]}>
			{showCheckBox ? (
				<View style={[controllableAccount.check50]}>
					<CheckBox />
				</View>
			) : (
				false
			)}
			<View
				style={[
					organism_style.userDescriptionLabel,
					showCheckBox || showCrossMark ? controllableAccount.userDescriptionLabel_checked : controllableAccount.userDescriptionLabel,
				]}>
				<UserDescriptionLabel data={props.data} />
			</View>
			<View style={[controllableAccount.rightContainer]}>
				<View style={[controllableAccount.btn_w108_controllableAccount]}>
					{following ? (
						<AniButton
							btnTitle={'팔로우'}
							btnTheme={'gray'}
							btnStyle={'border'}
							titleFontStyle={24}
							btnLayout={btn_w108}
							onPress={onFollowBtnClick}
						/>
					) : (
						<AniButton
							btnTitle={'팔로잉'}
							btnTheme={'shadow'}
							btnStyle={'filled'}
							titleFontStyle={24}
							btnLayout={btn_w108}
							onPress={onFollowBtnClick}
						/>
					)}
				</View>
				{showCrossMark ? (
					<View style={[organism_style.cross46, controllableAccount.cross46]}>
						<Cross46 onPress={onCrossMarkPress} />
					</View>
				) : null}
			</View>
		</View>
	);
};
ControllableAccount.defaultProps = {
	onFollowBtnClick: e => console.log(e),
	showCrossMark: false,
	showCheckBox: false,
};
