import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, assignUserHabitation_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignUserHabitation = props => {
	const moveToAssignUserProfileImage = () => {
		props.navigation.push('AssignUserProfileImage');
	};
	return (
		<View style={login_style.wrp_main}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Text>(M)StageBar</Text>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_AssignUserHabitation]}>
				<Text>Text Msg</Text>
			</View>

			{/* HabitationForm */}
			<View style={[temp_style.habitationForm]}>
				<Text>HabitationForm</Text>
			</View>

			{/* (A)Btn_w654 */}
			<TouchableWithoutFeedback onPress={moveToAssignUserProfileImage}>
				<View style={[btn_style.btn_w654, assignUserHabitation_style.btn_w654]}>
					<Text>(A)Btn_w522(주소입력 완료)</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
