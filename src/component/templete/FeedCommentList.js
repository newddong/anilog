import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, Text, View} from 'react-native';
import {WHITE} from 'Root/config/color';
import {testArray} from 'Root/i18n/msg';
import {feedCommentList, login_style} from './style_templete';

export default FeedCommentList = props => {
	const [editComment, setEditComment] = React.useState(false);
	//DummyData
	const getFlat = item => {
		return (
			<View>
				<Text>{item}</Text>
				<Text>{item}</Text>
			</View>
		);
	};

	const getEditCommentContainer = () => {
		return editComment ? (
			<View style={[feedCommentList.editComment_expanded]}>
				<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
			</View>
		) : (
			<View style={[]}>
				<Text>(O)EidComment</Text>
			</View>
		);
	};

	return (
		<View style={[login_style.wrp_main, feedCommentList.container]}>
			<View style={[feedCommentList.feedContent]}>
				<Text>(O)feedContent</Text>
				<TouchableOpacity onPress={() => setEditComment(!editComment)} style={{width: 100, height: 50, backgroundColor: 'black'}}>
					<Text style={{color: WHITE}}>EditComment 테스트용 버튼</Text>
				</TouchableOpacity>
			</View>
			<View style={[feedCommentList.commentList]}>
				<Text>(O)commentList</Text>
				<View style={[feedCommentList.editComment]}>
					<TouchableOpacity onPress={() => setEditComment(true)} style={{flex: 1}}>
						{getEditCommentContainer()}
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
