import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { APRI10, GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { btn_w176 } from '../atom/btn/btn_style';
import { AddItem64 } from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import CompanionFormList from '../organism_ksw/CompanionFormList';
import { stagebar_style } from '../organism_ksw/style_organism';

import { applyCompanionB, login_style, temp_style, applyCompanionC, btn_style } from './style_templete';

// protect_act_companion_history : Array<{
// 	companion_pet_species : String,
// 	companion_pet_age : String,
// 	companion_pet_period : String,
// 	companion_pet_current_status : Enum('living','died','adopted') //상태정보 카테고리 정해야함

export default ApplyCompanionC = props => {
	const navigation = useNavigation();

	const [data, setData] = React.useState({
		...props.route.params,
		protect_act_companion_history: []
	})

	const [companionList, setCompanionList] = React.useState([])

	React.useEffect(() => {
		console.log('companion', companionList)
	}, [companionList])

	React.useEffect(() => {
		// data.protect_act_address != null && data.protect_act_phone_number != null ? setConfirmed(true) : setConfirmed(false)
		console.log('data', data)
	}, [data])

	const onPressAddCompanion = () => {
		let copy = [...companionList]
		copy.length = copy.length + 1
		setCompanionList(copy)
	}

	//itemIndex번째 반려동물의 '종' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectSpecies = (value, selectedIndex, itemIndex) => {
		console.log('value', value)
		console.log('selectedIndex', selectedIndex)
		console.log('itemIndex', itemIndex)
		let copy = [...companionList]
		copy[itemIndex] = {
			...copy[itemIndex],
			companion_pet_species: value
		}
		setCompanionList(copy)
	}

	//itemIndex번째 반려동물의 '나이' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectAge = (value, selectedIndex, itemIndex) => {
		console.log('value', value)
		console.log('selectedIndex', selectedIndex)
		console.log('itemIndex', itemIndex)
	}

	//itemIndex번째 반려동물의 '반려생활 기간' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectDuration = (value, selectedIndex, itemIndex) => {
		console.log('value', value)
		console.log('selectedIndex', selectedIndex)
		console.log('itemIndex', itemIndex)
	}

	//itemIndex번째 반려동물의 '반려생활 상태' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectStatus = (value, selectedIndex, itemIndex) => {
		console.log('value', value)
		console.log('selectedIndex', selectedIndex)
		console.log('itemIndex', itemIndex)
	}

	//임시저장 버튼 클릭
	const tempSave = () => {

	}

	//다음버튼 클릭
	const goToNextStep = () => {
		props.route.name == 'ApplyProtectActivityB' ? navigation.push('ApplyProtectActivityC') : navigation.push('ApplyAnimalAdoptionC')
	}

	return (
		<View style={[login_style.wrp_main,]}>
			<ScrollView contentContainerStyle={[applyCompanionB.container,]} >

				{/* StageBar */}
				<View style={[temp_style.stageBar, applyCompanionB.stageBar]}>
					<Stagebar
						backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
						insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
						current={2} //현재 단계를 정의
						maxstage={4} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
					/>
				</View>
				<View style={[temp_style.stageBar, applyCompanionB.textMsg]}>
					<Text style={[txt.noto24, { color: GRAY10 }]}>지금까지 함께 한 반려동물에 대해 알려주세요.</Text>
				</View>
				{/* 반려동물 정보 박스 */}
				<View style={[temp_style.companionFormList, applyCompanionB.inputForm]}>
					<CompanionFormList
						items={companionList}
						onSelectSpecies={(v, i, index) => onSelectSpecies(v, i, index)}
						onSelectAge={(v, i, index) => onSelectAge(v, i, index)}
						onSelectDuration={(v, i, index) => onSelectDuration(v, i, index)}
						onSelectStatus={(v, i, index) => onSelectStatus(v, i, index)}
					/>
				</View>

				{/* 반려생활 추가 */}
				<View style={[applyCompanionB.addPetBtnView,]}>
					<AddItem64 />
					<View style={[applyCompanionB.addPetTextView]}>
						<TouchableOpacity onPress={onPressAddCompanion}>
							<Text style={[txt.noto30, { color: APRI10 }]}>반려 생활 추가</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* 3개 버튼 */}
				<View style={[applyCompanionC.btnContainer]}>
					<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
						<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'뒤로'} onPress={() => navigation.goBack()} />
					</View>
					<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
						<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'임시저장'} onPress={tempSave} />
					</View>
					<View style={[btn_style.btn_w176, applyCompanionC.btn_w176]}>
						<AniButton
							btnStyle={'filled'}
							btnLayout={btn_w176}
							btnTitle={'다음'}
							titleFontStyle={24}
							onPress={goToNextStep}
						/>
					</View>
				</View>
			</ScrollView>

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
