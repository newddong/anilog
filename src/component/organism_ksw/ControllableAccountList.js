import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ControllableAccount from './ControllableAccount';
import {dummy_UserDescriptionLabel} from '../../config/dummyDate_json';
import {controllableAccountList} from './style_organism';

/**
 *
 * @param {{
 * data : 'Object / UserDescriptionLabel Data 필요',
 * onFollowBtnClick: void,
 * }} props
 */
export default ControllableAccountList = props => {
	const renderItem = (item, index) => {
		return <ControllableAccount data={item} />;
	};

	return (
		<View style={controllableAccountList.container}>
			{props.title == null ? null : (
				<View style={[controllableAccountList.title]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>{props.title}</Text>
				</View>
			)}
			<FlatList data={dummy_UserDescriptionLabel} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};

ControllableAccountList.defaultProps = {
	title: null,
};
