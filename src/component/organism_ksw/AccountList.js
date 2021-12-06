import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {APRI10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {dummy_accountList} from 'Root/config/dummyDate_json';
import {Cross46, Star50_Border, Star50_Filled} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {organism_style} from './style_organism';

/**
 *
 *@param {{
 * item : 'Array / 계정 목록',
 * onAccountClick : 'void / 계정 클릭  Callback'
 * makeBorderMode: 'boolean / 클릭 시 테두리 생기는 모드 on/off , default = true',
 * onDelete: '계정 지우기 마크 클릭 Callback',
 * onClickLabel : void,
 * showCrossMark : 'boolean / X마크 출력 여부 ',
 * showStarMark : 'boolean / 별 마크(즐겨찾기 여부) 출력 여부 / '
 * }} props
 */
export default AccountList = props => {
	const [selectedIndex, setSelectedIndex] = React.useState();
	const [isFollowing, setIsFollowing] = React.useState(false);

	//계정 클릭 시 해당 박스 테두리 생성 함수
	const makeBorder = (item, index) => {
		index == selectedIndex ? setSelectedIndex(99) : setSelectedIndex(index);
		props.onSelect(item, index);
	};

	const onPressFavorite = index => {
		setIsFollowing(!isFollowing);
		props.onPressFavorite(index);
	};

	//계정의 이미지 라벨 클릭 콜백 함수
	const onclickLabel = user_data => {
		// console.log('clicked User Data', user_data);
		props.onClickLabel(user_data);
	};

	const renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style={[organism_style.accountListItem, {borderColor: selectedIndex == index && props.makeBorderMode ? APRI10 : WHITE}]}
				onPress={() => makeBorder(index)}>
				<View style={[organism_style.userDescriptionLabelContainer]}>
					<UserDescriptionLabel data={item} width={250} onClickLabel={onclickLabel} />
				</View>
				{props.showCrossMark ? (
					<View style={{position: 'absolute', right: 15 * DP}}>
						<Cross46 onPress={() => props.onDelete(index, item)} />
					</View>
				) : (
					<></>
				)}
				{props.showStarMark ? (
					<View style={{position: 'absolute', right: 15 * DP}}>
						{isFollowing ? <Star50_Filled onPress={() => onPressFavorite(index)} /> : <Star50_Border onPress={() => onPressFavorite(index)} />}
					</View>
				) : (
					<></>
				)}
			</TouchableOpacity>
		);
	};
	return (
		<View style={organism_style.accountList}>
			<FlatList data={props.items == null ? dummy_accountList : props.items} renderItem={({item, index}) => renderItem(item, index)} />
		</View>
	);
};
AccountList.defaultProps = {
	onAccountClick: e => console.log(e),
	onPressFavorite: e => console.log('onPressFavorite', e),
	onDelete: e => console.log(e),
	onSelect: e => console.log(e),
	onClickLabel: e => console.log('OnCLickLabel / AccountList', e),
	makeBorderMode: true,
	showCrossMark: true,
	showStarMark: false,
};
