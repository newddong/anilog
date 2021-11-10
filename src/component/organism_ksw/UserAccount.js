import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {btn_w108} from '../atom/btn/btn_style';
import {Check50} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import HashLabel from '../molecules/HashLabel';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {userAccount} from './style_organism';

export default UserAccount = props => {
	const [checkBox, setCheckBox] = React.useState(false);

	const getLabel = () => {
		if (props.data.type == 'user') {
			return <UserDescriptionLabel data={props.data} onLabelClick={() => props.onLabelClick()} />;
		} else if (props.data.type == 'hash') {
			return (
				<TouchableOpacity onPress={() => props.onHashClick()}>
					<HashLabel keyword={props.data.keyword} keywordBold={props.data.keywordBold} count={props.data.count} />
				</TouchableOpacity>
			);
		}
	};

	return (
		<View style={[userAccount.container]}>
			{checkBox ? (
				<View style={[userAccount.checkBox]}>
					<Check50 />
				</View>
			) : null}

			<View style={[userAccount.userProfileContainer]}>{getLabel()}</View>
			<View style={[checkBox ? userAccount.followingBtnContainer : userAccount.followingBtnContainer_noneCheckBox]}>
				<AniButton btnTitle={'팔로잉'} btnTheme={'shadow'} btnStyle={'filled'} btnLayout={btn_w108} titleFontStyle={24} />
			</View>
		</View>
	);
};

UserAccount.defaultProps = {
	onLabelClick: e => console.log(e),
};
// UserDescriptionLabel.defaultProps = {
// 	data: {
// 		user_id: 'Default id',
// 		user_nickname: 'user_nickname',
// 		user_image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
// 		text_intro: 'Description',
// 	},
// 	onLabelClick: e => console.log(e),
// };

// HashLabel.defaultProps = {
// 	keyword: '#KEYWORD',
// 	keywordBold: true,
// 	count: 'Count한 게시물',
// };
