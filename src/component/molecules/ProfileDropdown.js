import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import AniButton from 'Molecules/AniButton';
import ActionButton from 'Molecules/ActionButton';
import Dropdown from 'Molecules/Dropdown';
import { btn_w280, btn_w226 } from 'Atom/btn/btn_style';
import { APRI10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import { Modal } from 'Component/modal/Modal';
import {txt} from 'Root/config/textstyle';

/**
 *
 * @param {{btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * onOpen : Function,
 * onClose : Function,
 * onSelect : Function,
 * }} props
 */
export default ProfileDropdown = props => {
	const onClose = () => {
		props.onClose();
		Modal.close();
	}
	return (
		<Dropdown
			buttonComponent={<ActionButton {...props} initState={false} noStateChange/>}
			dropdownList={
				<View style={{backgroundColor:APRI10,borderRadius:40*DP,alignItems:'center' }}>
					<ActionButton {...props} initState noStateChange onClose={onClose}/>
					{props.menu.map((v, i) =>
						<TouchableWithoutFeedback onPress={()=>props.onSelect(v,i)} key={i}>
							<View style={{ width: props.btnLayout.width,marginVertical:15*DP}}>
								<Text style={[
									txt.noto24b,
									{
										fontSize: props.titleFontStyle * DP,
										textAlign:'center',
										color  : WHITE,
									}
								]}>
									{v}
								</Text>
							</View>
						</TouchableWithoutFeedback>
					)
					}
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
	onOpen: e => console.log('profileDropdownOpen'),
	onClose: e => console.log('profileDropdownClose'),
	onSelect:(v,i)=> console.log(i+':'+v),
	menu:[]
};
