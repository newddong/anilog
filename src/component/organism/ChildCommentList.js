import React from 'react';
import {View, FlatList} from 'react-native';
import {organism_style} from './style_organism';
import ChildComment from 'Root/component/organism_ksw/ChildComment';
import {ChildCommentLinker} from '../atom/icon';

/**
 *
 * @param {{
 * items: 'Array',
 * onPressReplyBtn : void,
 * }} props
 */
export default ChildCommentList = props => {
	const renderItem = (item, index) => {
		return (
			<View style={[organism_style.childCommentList]}>
				<ChildCommentLinker />
				<ChildComment data={item} onPressReplyBtn={comment => props.onPressReplyBtn(comment)} />
			</View>
		);
	};
	return <FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} scrollEnabled={false} />;
};

ChildCommentList.defaultProps = {
	items: [],
	onPressReplyBtn: e => console.log(e),
};
