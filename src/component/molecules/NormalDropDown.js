import React from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet} from 'react-native';
import AniButton from 'Molecules/AniButton';
import ActionButton from 'Molecules/ActionButton';
import Dropdown from 'Molecules/Dropdown';
import {btn_w280, btn_w226} from 'Atom/btn/btn_style';
import {APRI10, BLACK, BLUE10, GRAY10, GRAY40, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import Modal from 'Component/modal/Modal';
import {txt} from 'Root/config/textstyle';
import DropdownSelect from './DropdownSelect';

/**
 *
 * @param {{
 * btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * defaultIndex : '미선택 상태에서 보여지는 item의 index',
 * width :'number / DropDown 길이'
 * onOpen : Function,
 * menu : 'items',
 * onClose : Function,
 * onSelect : Function,
 * }} props
 */
const NormalDropDown = props => {
	//Default로 선택되어 있어야 하는 경우 ex)프로필 수정 혹은 임시저장된 데이터 호출 시에는 기존 데이터와 일치하는 Default값을 보여주어야 함
	const [value, setValue] = React.useState(props.menu[props.defaultIndex ? props.defaultIndex : 0]);
	const onSelect = (v, i) => {
		setValue(v);
		props.onSelect(v, i);
		dropdown.current.button.current.press();
	};
	const dropdown = React.useRef();

	return (
		<Dropdown
			alignBottom
			ref={dropdown}
			buttonComponent={<DropdownSelect width={props.width} value={value} />}
			dropdownList={
				<View style={{backgroundColor: WHITE, borderRadius: 10 * DP, alignItems: 'center', borderWidth: 2 * DP}}>
					<TouchableWithoutFeedback>
						<View>
							{props.menu.map((v, i) => (
								<View key={i}>
									<TouchableWithoutFeedback onPress={() => onSelect(v, i)}>
										<View style={[styles.itemContainer, {width: props.width != null ? props.width * DP : props.btnLayout.width}]}>
											<Text
												style={[
													txt.noto28b,
													{
														fontSize: props.titleFontStyle * DP,
														textAlign: 'center',
													},
												]}>
												{v}
											</Text>
										</View>
									</TouchableWithoutFeedback>
									<View style={[styles.separator, {width: props.width != null ? props.width * DP : props.btnLayout.width}]} />
								</View>
							))}
						</View>
					</TouchableWithoutFeedback>
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
	},
});

NormalDropDown.defaultProps = {
	btnTitle: 'BTN_W654', //버튼의 제목
	disable: false, // 버튼탭 사용불가 상태 boolean
	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
	titleFontStyle: 24, // 버튼 title의 폰트 크기
	btnStyle: 'border', // 버튼스타일 filled border noBorder,
	defaultIndex: null,
	onOpen: e => console.log('NormalDropDown Default onOpen  ', e),
	onClose: e => console.log('NormalDropDown Default onClose  ', e),
	onSelect: (v, i) => console.log('NormalDropDown Default onSelect  ', i + ':' + v),
	menu: [],
};

export default NormalDropDown;