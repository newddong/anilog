import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY10, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Cross46, Cross52} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import {interestTagList, myPetList} from './style_organism';

/**
 *
 *@param {{
 * title: string,
 * items : 'List item ',
 * onDelete : void,
 * }} props
 */
export default InterestTagList = props => {
	const onDelete = index => {
		props.onDelete(index);
	};

	const renderItem = (item, index) => {
		return (
			<View style={[interestTagList.tagContainer]}>
				<Text style={[txt.noto28, {color: GRAY20, textAlign: 'center'}]}>{item}</Text>
				<View style={[interestTagList.cross52]}>
					<Cross46 onPress={() => onDelete(index)} />
				</View>
			</View>
		);
	};

	return (
		<View style={[interestTagList.container]}>
			<View style={[interestTagList.titleContainer]}>
				<View style={[interestTagList.title]}>
					<Text style={[txt.noto28, {color: GRAY10}]}>{props.title}</Text>
				</View>
				<View style={[interestTagList.btn_w226]}>
					<AniButton btnTitle={'추가하기'} btnLayout={btn_w226} btnTheme={'shadow'} />
				</View>
			</View>
			<View style={[interestTagList.interestingTagList]}>
				<FlatList data={props.items} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} />
			</View>
		</View>
	);
};

InterestTagList.defaultProps = {
	items: null,
	title: null,
	onDelete: e => console.log(e),
};
