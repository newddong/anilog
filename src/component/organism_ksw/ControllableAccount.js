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
 * onClickLabel :void,
 * showCheckBox : boolean,
 * showCheckBox :boolean,
 * showButtons : boolean
 * }} props
 */
export default ControllableAccount = props => {
	// console.log('props.data', props.data);
	const [showCheckBox, setShowCheckBox] = React.useState(props.showCheckBox); // Label 좌측 CheckBox 출력 Boolean
	const [showCrossMark, setShowCrossMark] = React.useState(props.showCrossMark); // 팔로잉 버튼 우측 Cross 출력 Boolean
	const [following, setFollowing] = React.useState(false);

	//팔로우 버튼 클릭
	const onFollowBtnClick = () => {
		setFollowing(!following);
		props.onFollowBtnClick();
	};

	//지우기 버튼 클릭
	const onCrossMarkPress = () => {
		props.onCrossMarkPress(props.data);
	};

	const onClickLabel = data => {
		props.onClickLabel(data);
	};

	return (
		<View style={[controllableAccount.container]}>
			{showCheckBox ? (
				<View style={[controllableAccount.check50]}>
					<CheckBox />
				</View>
			) : (
				false
			)}
			<View style={[showCheckBox || showCrossMark ? controllableAccount.userDescriptionLabel_checked : controllableAccount.userDescriptionLabel]}>
				<UserDescriptionLabel data={props.data} onClickLabel={onClickLabel} />
			</View>
			{props.showButtons ? (
				<View style={[controllableAccount.rightContainer]}>
					<View style={[controllableAccount.btn_w108_controllableAccount]}>
						{following ? (
							<AniButton btnTitle={'팔로우'} btnTheme={'gray'} btnStyle={'border'} btnLayout={btn_w108} onPress={onFollowBtnClick} />
						) : (
							<AniButton btnTitle={'팔로잉'} btnTheme={'shadow'} btnLayout={btn_w108} onPress={onFollowBtnClick} />
						)}
					</View>
					{showCrossMark ? (
						<View style={[organism_style.cross46, controllableAccount.cross46]}>
							<Cross46 onPress={onCrossMarkPress} />
						</View>
					) : null}
				</View>
			) : null}
		</View>
	);
};
ControllableAccount.defaultProps = {
	onFollowBtnClick: e => console.log(e),
	onClickLabel: e => console.log(e),
	showCrossMark: false,
	showCheckBox: false,
	showButtons: true,
};
