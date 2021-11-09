import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w176} from '../atom/btn/btn_style';
import {AddItem64} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import CompanionFormList from '../organism_ksw/CompanionFormList';
import {applyCompanionB, login_style, temp_style, applyCompanionC, btn_style} from './style_templete';

export default ApplyCompanionC = props => {
	const navigation = useNavigation();
	return (
		<View style={[login_style.wrp_main, applyCompanionB.container]}>
			{/* StageBar */}
			<View style={[temp_style.stageBar, applyCompanionB.stageBar]}>
				{/* <Text>(M)StageBar</Text> */}
				<Stagebar
					current={2}
					maxstage={5}
					insideBarStyle={{flex: 1, backgroundColor: APRI10, borderRadius: 5}}
					width={292}
					backgroundBarStyle={{borderRadius: 5}}
					textStyle={{}}
				/>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionB.textMsg]}>
				<Text>text Msg</Text>
			</View>
			{/* (O)CompanionFormList */}
			<View style={[temp_style.companionFormList, applyCompanionB.inputForm]}>
				{/* <Text>(O)CompanionFormList</Text> */}
				<CompanionFormList />
			</View>
			<View style={[applyCompanionB.addPetBtnView]}>
				<AddItem64 />
				<View style={[applyCompanionB.addPetTextView]}>
					<TouchableOpacity
						onPress={() =>
							props.route.name == 'ApplyProtectActivityB' ? navigation.push('ApplyProtectActivityC') : navigation.push('ApplyAnimalAdoptionC')
						}>
						<Text style={[txt.noto30, applyCompanionB.addPetText]}>반려 생활 추가</Text>
					</TouchableOpacity>
				</View>
			</View>
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
							props.route.name == 'ApplyProtectActivityB' ? navigation.push('ApplyProtectActivityC') : navigation.push('ApplyAnimalAdoptionC')
						}
					/>
				</View>
			</View>
		</View>
	);
};

// StageBar.defaultProps={
// 	style:{}, //전체 container style, text와 bar를 감싸는 view의 style
// 	backgroundBarStyle:{}, //배경이 되는 bar의 style, width props으로 너비결정됨
// 	insideBarStyle:{}, //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
// 	current:1, //현재 단계를 정의
// 	maxstage:1, //전체 단계를 정의
// 	width:0, //bar의 너비
// 	textStyle:{},//text의 스타일
//  }
