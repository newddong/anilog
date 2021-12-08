import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {btn_w108} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import CheckBox from '../molecules/CheckBox';
import HashLabel from '../molecules/HashLabel';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {userAccount} from './style_organism';

export default UserAccount = props => {
	const [followState, setFollowState] = React.useState(true);

	const getLabel = () => {
		// console.log('props.data.type=>' + props.data.type);
		if (props.data.type == 'user') {
			return <UserDescriptionLabel data={props.data} onClickLabel={e => props.onLabelClick(e)} />;
		} else if (props.data.type == 'hash') {
			return (
				<TouchableOpacity onPress={() => props.onHashClick()}>
					<HashLabel keyword={props.data.keyword} keywordBold={props.data.keywordBold} count={props.data.count} />
				</TouchableOpacity>
			);
		}
	};

	//팔로우 버튼 클릭
	const onClickFollow = () => {
		setFollowState(!followState);
		props.onFollowBtnClick(followState);
	};

	return (
		<View style={[userAccount.container]}>
			{/* {console.log(`props.checkBoxMode=>${props.checkBoxMode}`)}
			{console.log(`props.data.checkBoxState=>${props.data.checkBoxState}`)} */}
			{/* CheckBox */}
			{props.checkBoxMode ? (
				<View style={[userAccount.checkBox]}>
					<CheckBox
						state={props.data.checkBoxState}
						onCheck={() => props.onCheckBox(props.data.type == 'hash' ? props.data.keyword : props.data.user_nickname)}
					/>
				</View>
			) : null}
			{/* UserLabel */}
			<View style={[userAccount.userProfileContainer]}>{getLabel()}</View>
			<View onPress={onClickFollow} style={[props.checkBoxMode ? userAccount.followingBtnContainer : userAccount.followingBtnContainer_noneCheckBox]}>
				{followState ? (
					<AniButton onPress={onClickFollow} btnTitle={'팔로잉'} btnTheme={'shadow'} btnStyle={'border'} btnLayout={btn_w108} />
				) : (
					<AniButton onPress={onClickFollow} btnTitle={'팔로우'} btnTheme={'shadow'} btnLayout={btn_w108} />
				)}
			</View>
		</View>
	);
};

UserAccount.defaultProps = {
	onLabelClick: e => console.log(e),
	onFollowBtnClick: e => console.log(e),
	onCheckBox: e => console.log(e),
	checkBoxMode: false,
	checkBoxState: false,
};

// HashLabel.defaultProps = {
// 	keyword: '#KEYWORD',
// 	keywordBold: true,
// 	count: 'Count한 게시물',
// };
