import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
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
		<ScrollView>
			<View style={[login_style.wrp_main, applyCompanionB.container]}>
				{/* StageBar */}
				<View style={[temp_style.stageBar, applyCompanionB.stageBar]}>
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
				{/* TextMsg */}
				<View style={[temp_style.stageBar, applyCompanionB.textMsg]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>지금까지 함께 한 반려동물에 대해 알려주세요.</Text>
				</View>
				{/* (O)CompanionFormList */}
				<View style={[temp_style.companionFormList, applyCompanionB.inputForm]}>
					{/* <Text>(O)CompanionFormList</Text> */}
					<CompanionFormList />
				</View>

				{/* 반려생활 추가 */}
				<View style={[applyCompanionB.addPetBtnView]}>
					<AddItem64 />
					<View style={[applyCompanionB.addPetTextView]}>
						<TouchableOpacity
							onPress={() =>
								props.route.name == 'ApplyProtectActivityB' ? navigation.push('ApplyProtectActivityC') : navigation.push('ApplyAnimalAdoptionC')
							}>
							<Text style={[txt.noto30, {color: APRI10}]}>반려 생활 추가</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* 3개 버튼 */}
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
		</ScrollView>
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
