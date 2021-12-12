import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {APRI10, GRAY10, GRAY30} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Stagebar from '../molecules/Stagebar';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style} from './style_templete';
import RadioBox from '../molecules/RadioBox';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import {FEMALE, MALE, NO, UNAWARENESS, YES} from 'Root/i18n/msg';
import {stagebar_style} from '../organism_ksw/style_organism';
import NormalDropDown from 'Molecules/NormalDropDown';

export default AssignPetInfoA = props => {
	const navigation = useNavigation();
	const isProtectAnimalRoute = props.route.name == 'AssignProtectAnimalType';
	// console.log(isProtectAnimalRoute)

	const pet_speciesArray = ['개', '고양이', '기타'];
	const pet_speciesDog = ['말티즈', '치와와', '요크'];
	const pet_speciesCat = ['페르시안', '벵골고양이', '메인쿤'];
	const pet_speciesOthers = ['새', '햄스터', '토끼'];

	const [speciesDetail, setSpeciesDetail] = React.useState(pet_speciesDog);

	const [data, setData] = React.useState({
		...props.route.params.data,
		pet_species: pet_speciesArray[0],
		pet_species_detail: pet_speciesDog[0],
		pet_sex: 'male',
		pet_neutralization: 'unknown',
	});

	React.useEffect(() => {
		console.log('data', data);
	}, [data]);

	//성별 선택
	const onSelectGender = item => {
		const gender = item == 0 ? 'male' : 'female';
		setData({...data, pet_sex: gender});
	};

	//중성화 RadioBox 선택
	const onSelectNeutralization = item => {
		let neutralization = 0;
		if (item == 0) neutralization = 'yes';
		else if (item == 1) neutralization = 'no';
		else neutralization = 'unknown';
		setData({...data, pet_neutralization: neutralization});
	};

	const gotoNextStep = () => {
		props.route.name == 'AssignProtectAnimalType'
			? props.navigation.push('AssignProtectAnimalAge', data)
			: props.navigation.push('AssignPetInfoB', data);
	};

	const onSelectSpecies = (v, i) => {
		console.log('v=>' + v + ' i=>' + i);
		setData({...data, pet_species: v});
		switch (i) {
			//개
			case 0:
				setSpeciesDetail(pet_speciesDog);
				break;
			//개
			case 1:
				setSpeciesDetail(pet_speciesCat);
				break;
			//개
			case 2:
				setSpeciesDetail(pet_speciesOthers);
				break;
		}
	};

	const onSelectSpeciesDetail = (v, i) => {
		console.log('v=>' + v + ' i=>' + i);
		setData({...data, pet_species_detail: v});
	};

	React.useEffect(() => {
		console.log('data=>>>', speciesDetail);
	}, [speciesDetail]);

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<TouchableWithoutFeedback onPress={() => console.log(data)}>
				<View
					style={{
						backgroundColor: 'red',
						height: 30,
						width: 30,
						position: 'absolute',
						borderWidth: 1,
						borderColor: 'blue',
						top: 0,
						left: 0,
					}}></View>
			</TouchableWithoutFeedback>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={isProtectAnimalRoute ? 3 : 2} //현재 단계를 정의
					maxstage={isProtectAnimalRoute ? 4 : 3} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
				/>
			</View>

			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>반려 동물의 종과 성별, 중성화 여부를 알려주세요.</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoA, assignPetInfo_style.inputForm]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>분류</Text>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth1, assignPetInfo_style.dropdownSelect_depth1]}>
						<NormalDropDown menu={pet_speciesArray} width={204} onSelect={onSelectSpecies} defaultIndex={0} />
					</View>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth2, assignPetInfo_style.dropdownSelect_depth2]}>
						<NormalDropDown menu={speciesDetail} width={292} onSelect={onSelectSpeciesDetail} />
					</View>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>성별</Text>
					<View style={[temp_style.tabSelectFilled_Type1, assignPetInfo_style.tabSelectFilled_Type1]}>
						<TabSelectFilled_Type1 items={[MALE, FEMALE]} width={450} onSelect={onSelectGender} />
					</View>
				</View>

				{/* InputForm line3 */}
				<View style={[temp_style.inputForm_assignPetInfo_line3, assignPetInfo_style.line3]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>중성화</Text>
					<View style={[temp_style.radioBox_assignPetInfo, assignPetInfo_style.tabSelectFilled_Type1]}>
						<RadioBox items={[YES, NO, UNAWARENESS]} onSelect={onSelectNeutralization} />
					</View>
				</View>
			</View>
			{/* 버튼 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewA]}>
				<View style={[btn_style.btn_w226]}>
					<AniButton btnTitle={'뒤로'} btnTheme={'shadow'} btnStyle={'border'} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
					<AniButton btnTitle={'다음'} btnTheme={'shadow'} onPress={gotoNextStep} />
				</View>
			</View>
		</View>
	);
};
