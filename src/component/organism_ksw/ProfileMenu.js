import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { FavoriteTag46_Filled, NextMark, Paw46 } from '../atom/icon';
import { profileMenu } from './style_organism';

/**
 *
 * @param {{btnTitle : string,
 * menuItems : " ex) [ [ 'menu1', 'menu2'], ['menu3,''menu4']]  - 바깥 배열의 length는 메뉴의 층수, 안쪽 배열의 2가지 메뉴는 각 층별 왼쪽 오른쪽에 담겨질 메뉴 이름", 
 * menuTitle : string,
 * onPress : void
 * }} props
 */
export default ProfileMenu = props => {
	const navigation = useNavigation();
	const renderItem = (item, index) => {
		return (
			<View>

				<View style={[profileMenu.itemContainer]}>
					<View style={[profileMenu.item_step1]}>
						<View style={[profileMenu.item]}>
							<View style={[profileMenu.item_text]}>
								<Text style={[txt.noto24, { color: GRAY10 }]}>{item[0]}</Text>
							</View>
							<View style={[profileMenu.item_bracket]}>
								<NextMark onPress={() => props.onClick(item[1])} />
							</View>
						</View>
						<View style={[profileMenu.vertical_separator]} />
						<View style={[profileMenu.item]}>
							<View style={[profileMenu.item_text]}>
								<Text style={[txt.noto24, { color: GRAY10 }]}>{item[1]}</Text>
							</View>
							<View style={[profileMenu.item_bracket]}>
								<NextMark onPress={() => props.onClick(item[1])} />
							</View>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={[profileMenu.horizon_separator]} />
					<View style={[profileMenu.horizon_separator]} />
				</View>
			</View>
		)
	}
	return (
		<View style={[profileMenu.container]}>
			{/* 즐겨찾기 */}
			<View style={[profileMenu.upperMenu]}>
				<View style={[profileMenu.titleContainer]}>
					<FavoriteTag46_Filled />
					<View style={[profileMenu.title]}>
						<Text style={[txt.noto24b, { color: GRAY10 }]}>{props.menuTitle}</Text>
					</View>
				</View>
				<FlatList data={props.menuItems} renderItem={({ item, index }) => renderItem(item, index)} />

			</View>

		</View>
	);
};

ProfileMenu.defaultProps = {
	menuTitle: '즐겨찾기',
	onClick: e => console.log(e),
	menuItems: [
		['메뉴1', '메뉴2'],
		['메뉴3', '메뉴4']
	]



}