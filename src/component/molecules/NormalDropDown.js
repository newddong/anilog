import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import AniButton from 'Molecules/AniButton';
import ActionButton from 'Molecules/ActionButton';
import Dropdown from 'Molecules/Dropdown';
import { btn_w280, btn_w226 } from 'Atom/btn/btn_style';
import { APRI10, BLACK, BLUE10, GRAY10, GRAY40, WHITE } from 'Root/config/color';
import DP from 'Root/config/dp';
import { Modal } from 'Component/modal/Modal';
import { txt } from 'Root/config/textstyle';
import DropdownSelect from './DropdownSelect';

/**
 *
 * @param {{btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * defaultIndex : '미선택 상태에서 보여지는 item의 index',
 * width :'number / DropDown 길이'
 * onOpen : Function,
 * onClose : Function,
 * onSelect : Function,
 * }} props
 */
export default NormalDropDown = props => {

	const [selectedIndex, setSelectedIndex] = React.useState(0)

	const onSelect = (v, i) => {
		setSelectedIndex(i)
		Modal.close()
		props.onClose();
		props.onSelect(v, i)
	}


	return (
		<Dropdown
			buttonComponent={<DropdownSelect items={props.menu} selectedIndex={selectedIndex} defaultIndex={props.defaultIndex} width={props.width} />}
			dropdownList={
				<View style={{ backgroundColor: WHITE, borderRadius: 10 * DP, alignItems: 'center', borderWidth: 4 * DP }}>
					{props.menu.map((v, i) =>
						<View key={i}>
							<TouchableWithoutFeedback onPress={() => onSelect(v, i)} >
								<View style={[styles.itemContainer, { width: props.width != null ? props.width * DP : props.btnLayout.width, },]}>
									<Text style={[
										txt.noto28b,
										{
											fontSize: props.titleFontStyle * DP,
											textAlign: 'center',
										}
									]}>
										{v}
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<View style={[styles.separator, { width: props.width != null ? props.width * DP : props.btnLayout.width, }]} />
						</View>
					)
					}
				</View>
			}
		/>
	);
};

export const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: 'center',
		height: 60 * DP,
		borderRadius: 10 * DP,
	},
	separator: {
		backgroundColor: GRAY40,
		height: 4 * DP,


	}
})

NormalDropDown.defaultProps = {
	btnTitle: 'BTN_W654', //버튼의 제목
	disable: false, // 버튼탭 사용불가 상태 boolean
	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
	titleFontStyle: 24, // 버튼 title의 폰트 크기
	btnStyle: 'border', // 버튼스타일 filled border noBorder,
	defaultIndex: null,
	onOpen: e => console.log(e),
	onClose: e => console.log(e),
	onSelect: (v, i) => console.log(i + ':' + v),
	menu: []
};
