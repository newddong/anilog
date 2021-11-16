import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import {login_style, btn_style, temp_style, progressbar_style, assignProtectAnimal_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import Stagebar from '../molecules/Stagebar';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {PLEASE_GIVE_ME_DATE_AND_PLACE, BTN_BACK, BTN_NEXT} from 'Root/i18n/msg';
import DatePicker from '../molecules/DatePicker';
import Input24 from '../molecules/Input24';
import AniButton from '../molecules/AniButton';

export default AssignProtectAnimalDate = props => {
	const navigation = useNavigation();
	const gotoNextStep = () => {
		navigation.push('AssignProtectAnimalType');
	};

	return (
		<View style={login_style.wrp_main}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 20 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={2} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>

			{/* Text Msg */}
			<View style={[assignProtectAnimal_style.textMsg]}>
				<Text style={txt.noto24}>{PLEASE_GIVE_ME_DATE_AND_PLACE}</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.inputForm_assignProtectAnimal, assignProtectAnimal_style.selectedMediaList]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line1]}>
					<Text style={txt.noto28}>구조날짜</Text>
					<View style={assignProtectAnimal_style.marginLeft16}>
						<DatePicker width={520}></DatePicker>
					</View>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line1, assignProtectAnimal_style.inputform]}>
					<Text style={txt.noto28}>구조장소</Text>
					<View style={assignProtectAnimal_style.marginLeft16}>
						<Input24 width={520} descriptionType={'none'} />
					</View>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignProtectAnimal, assignProtectAnimal_style.btn_w226_view_image]}>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={BTN_BACK}
					btnTheme={'shadow'}
					btnStyle={'border'}
					titleFontStyle={24}
					onPress={() => navigation.goBack()}
				/>
				<AniButton btnLayout={btn_w226} btnTitle={BTN_NEXT} btnTheme={'shadow'} btnStyle={'filled'} titleFontStyle={24} onPress={gotoNextStep} />
			</View>
		</View>
	);
};
