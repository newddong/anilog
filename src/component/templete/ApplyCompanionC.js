import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w176} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import AssignCheckList from '../organism_ksw/AssignCheckList';
import {applyCompanionC, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	const navigation = useNavigation();

	//각 항목에 대한 체크함수
	const getCheckList = (item, index, state) => {
		alert(index + '번 째 항목  : ' + item + '의 state : ' + !state);
	};

	return (
		<View style={[login_style.wrp_main, applyCompanionC.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionC.stageBar]}>
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
					current={3} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionC.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>현재의 생활에 대해 체크해주세요.</Text>
				{/* <Text style={[txt.noto24, {color: GRAY10}]}>{temp_inputLongText()}</Text> */}
			</View>
			{/* (O)AssignCheckList */}
			<View style={[temp_style.assignCheckList, applyCompanionC.assignCheckList]}>
				<AssignCheckList onCheck={(item, index, state) => getCheckList(item, index, state)} />
			</View>
			{/* (A)btn_w176 */}
			<View style={[applyCompanionC.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'뒤로'} titleFontStyle={24} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'임시저장'} titleFontStyle={24} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
					<AniButton
						btnStyle={'filled'}
						btnLayout={btn_w176}
						btnTitle={'다음'}
						titleFontStyle={24}
						onPress={() =>
							props.route.name == 'ApplyProtectActivityC' ? navigation.push('ApplyProtectActivityD') : navigation.push('ApplyAnimalAdoptionD')
						}
					/>
				</View>
			</View>
		</View>
	);
};
