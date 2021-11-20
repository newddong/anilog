import React from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback, Text} from 'react-native';
import AniButton from 'Molecules/AniButton';
import ActionButton from 'Molecules/ActionButton';
import Dropdown from 'Molecules/Dropdown';
import {btn_w280, btn_w226} from 'Atom/btn/btn_style';
import {APRI10} from 'Root/config/color';

/**
 *
 * @param {{btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * onOpen : Function,
 * onClose : Function
 * }} props
 */
export default ProfileDropdown = props => {
	return (
		<Dropdown
			buttonComponent={<ActionButton {...props} />}
			dropdownList={
				<View>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={{width: props.btnLayout.width, height: 80, backgroundColor: APRI10}}></View>
					</TouchableWithoutFeedback>
				</View>
			}
		/>
	);
};

ProfileDropdown.defaultProps = {
	btnTitle: 'BTN_W654', //버튼의 제목
	disable: false, // 버튼탭 사용불가 상태 boolean
	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
	titleFontStyle: 24, // 버튼 title의 폰트 크기
	btnStyle: 'border', // 버튼스타일 filled border noBorder
	onOpen: e => console.log(e),
	onClose: e => console.log(e),
};
