import React from 'react';
import {Text, View} from 'react-native';
import {login_style, btn_style, temp_style, userInfoDetailSettting_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default UserInfoDetailSettting = props => {	
	return (
		<View style={login_style.wrp_main}>           

		    {/* InputForm */}
			<View style={[temp_style.inputForm_userInfoDetailSettting , userInfoDetailSettting_style.inputForm]}>

				{/* inputForm_detail list */}
				<View style={[userInfoDetailSettting_style.inputForm_detail]}>
					{/* Text */}
					<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
						<Text>Text</Text>
					</View>	
					{/* (M)TabSelectFilled_Type1 */}
					<View style={[temp_style.tabSelectFilled_Type1]}>
						<Text>(M)TabSelectFilled_Type1</Text>
					</View>	
				</View>	

				<View style={[userInfoDetailSettting_style.inputForm_detail]}>
					{/* Text */}
					<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
						<Text>Text</Text>
					</View>	
					{/* (M)TabSelectFilled_Type1 */}
					<View style={[temp_style.tabSelectFilled_Type1]}>
						<Text>(M)DatePicker</Text>
					</View>	
				</View>	

				<View style={[userInfoDetailSettting_style.inputWithSelect]}>
					{/* Text */}
					<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
						<Text>Text</Text>
					</View>	
					{/* (M)TabSelectFilled_Type1 */}
					<View style={[temp_style.tabSelectFilled_Type1]}>
						<Text>(M)InputWithSelect</Text>
					</View>	
				</View>	

				{/* (O)AddressInput */}
				<View style={[temp_style.addressInput]}>
					<Text>(O)AddressInput</Text>
				</View>	
            </View>

		</View>
	);
};
