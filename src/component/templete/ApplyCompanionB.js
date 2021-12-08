import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {COMPANION_DURATION, COMPANION_STATUS, PET_AGE, PET_KIND} from 'Root/i18n/msg';
import {btn_w176} from '../atom/btn/btn_style';
import {AddItem64} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import CompanionFormList from '../organism_ksw/CompanionFormList';
import {stagebar_style} from '../organism_ksw/style_organism';
import {applyCompanionB, login_style, temp_style, applyCompanionC, btn_style} from './style_templete';

export default ApplyCompanionC = props => {
	const navigation = useNavigation();

	const [data, setData] = React.useState({
		...props.route.params,
		protect_act_companion_history: [],
	});
	const [isTempDataAdded, setIsTempDataAdded] = React.useState(false);
	const [companionList, setCompanionList] = React.useState([]);
	const [tempData, setTempData] = React.useState([]); //임시저장 정보가 들어갈 컨테이너

	React.useEffect(() => {
		setData({...data, protect_act_companion_history: companionList});
	}, [companionList]);

	//임시저장 버튼 클릭
	const tempSave = () => {
		AsyncStorage.setItem('tempData_applyCompanionB', JSON.stringify(data.protect_act_companion_history));
	};

	// //임시저장한 값을 AsyncStorage에서 호출
	// const _retrieveData = async () => {
	// 	try {
	// 		await AsyncStorage.getItem('tempData_applyCompanionB', (err, res) => {
	// 			res != null ? setTempData(res) : null
	// 		})
	// 	} catch (error) {
	// 		console.log('error', JSON.stringify(error))
	// 	}
	// };

	//반려 생활 추가
	const onPressAddCompanion = () => {
		let copy = [...companionList];
		if (tempData.length > 0 && !isTempDataAdded) {
			tempData.map((v, i) => {
				copy.push(tempData[i]);
			});
			setIsTempDataAdded(true);
		}
		//반려 생활 추가를 누를 시 모두 첫번째 드롭다운 선택 상태인 CompanionForm이 추가됨
		copy.push({
			companion_pet_species: PET_KIND[0],
			companion_pet_age: PET_AGE[0],
			companion_pet_period: COMPANION_DURATION[0],
			companion_pet_current_status: COMPANION_STATUS[0],
		});
		setCompanionList(copy);
	};

	//itemIndex번째 반려동물의 '종' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectSpecies = (value, selectedIndex, itemIndex) => {
		let copy = [...companionList];
		copy[itemIndex] = {
			...copy[itemIndex],
			companion_pet_species: value,
		};
		setCompanionList(copy);
	};

	//itemIndex번째 반려동물의 '나이' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectAge = (value, selectedIndex, itemIndex) => {
		let copy = [...companionList];
		copy[itemIndex] = {
			...copy[itemIndex],
			companion_pet_age: value,
		};
		setCompanionList(copy);
	};

	//itemIndex번째 반려동물의 '반려생활 기간' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectPeriod = (value, selectedIndex, itemIndex) => {
		let copy = [...companionList];
		copy[itemIndex] = {
			...copy[itemIndex],
			companion_pet_period: value,
		};
		setCompanionList(copy);
	};

	//itemIndex번째 반려동물의 '반려생활 상태' 선택 콜백, value에는 선택한 item의 String , selectedIndex에는 선택한 Item의 Index가 담겨있음
	const onSelectStatus = (value, selectedIndex, itemIndex) => {
		let copy = [...companionList];
		let status = () => {
			if (selectedIndex == 0) {
				return 'living';
			} else if (selectedIndex == 1) {
				return 'adopted';
			} else if (selectedIndex == 2) {
				return 'died';
			}
		};
		copy[itemIndex] = {
			...copy[itemIndex],
			companion_pet_current_status: status(),
		};
		setCompanionList(copy);
	};
	const COMPANION_STATUS3 = ['함께 생활하고 있어요.', '입양이 되었어요.', '무지개 다리를 건넜어요.'];

	//다음버튼 클릭
	const goToNextStep = () => {
		props.route.name == 'ApplyProtectActivityB' ? navigation.push('ApplyProtectActivityC', data) : navigation.push('ApplyAnimalAdoptionC', data);
	};

	const onDelteCompanion = index => {
		let copy = [...companionList];
		copy.splice(index, 1);
		setCompanionList(copy);
	};

	// const deleteAs = () => {
	// 	AsyncStorage.removeItem('tempData_applyCompanionB')
	// }

	return (
		<View style={[login_style.wrp_main]}>
			<ScrollView contentContainerStyle={[applyCompanionB.container]}>
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
					<Text style={[txt.noto24, {color: GRAY10}]}>지금까지 함께 한 반려동물에 대해 알려주세요.</Text>
				</View>
				{/* 반려동물 정보 박스 */}
				<View style={[temp_style.companionFormList, applyCompanionB.inputForm]}>
					<CompanionFormList
						items={companionList}
						onSelectSpecies={(v, i, index) => onSelectSpecies(v, i, index)}
						onSelectAge={(v, i, index) => onSelectAge(v, i, index)}
						onSelectDuration={(v, i, index) => onSelectPeriod(v, i, index)}
						onSelectStatus={(v, i, index) => onSelectStatus(v, i, index)}
						onDelete={index => onDelteCompanion(index)}
						// tempData={tempData}
					/>
				</View>

				{/* 반려생활 추가 */}
				<View style={[applyCompanionB.addPetBtnView]}>
					<AddItem64 />
					<View style={[applyCompanionB.addPetTextView]}>
						<TouchableOpacity onPress={onPressAddCompanion}>
							<Text style={[txt.noto30, {color: APRI10}]}>반려 생활 추가</Text>
						</TouchableOpacity>
						{/* <TouchableOpacity onPress={deleteAs}>
							<Text style={[txt.noto30, { color: APRI10 }]}>어싱크 체크</Text>
						</TouchableOpacity> */}
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
						<AniButton btnLayout={btn_w176} btnTitle={'다음'} onPress={goToNextStep} />
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
