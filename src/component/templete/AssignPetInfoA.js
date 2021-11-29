import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {APRI10, GRAY10, GRAY30} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Text, View} from 'react-native';
import Stagebar from '../molecules/Stagebar';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {login_style, btn_style, temp_style, progressbar_style, assignPetInfo_style} from './style_templete';
import DropdownSelect from '../molecules/DropdownSelect';
import RadioBox from '../molecules/RadioBox';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetInfoA = props => {
	const navigation = useNavigation();
	const isProtectAnimalRoute = props.route.params.route == 'AssignProtectAnimalType';
	// console.log(isProtectAnimalRoute)

	const pet_speciesArray = ['개', '고양이', '기타'];
	const pet_speciesDog = ['말티즈', '치와와', '요크'];
	const pet_speciesCat = ['페르시안', '벵골고양이', '메인쿤'];
	const pet_speciesOthers = ['새', '햄스터', '토끼'];

	const [speciesDetail, setSpeciesDetail] = React.useState(pet_speciesDog);

	const [data, setData] = React.useState({
		...props.route.params.data,
		pet_species: null,
		pet_species_detail: null,
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
					current={isProtectAnimalRoute ? 3 : 2} //현재 단계를 정의
					maxstage={isProtectAnimalRoute ? 4 : 3} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignPetInfo, assignPetInfo_style.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>반려 동물의 종과 성별, 중성화 여부를 알려주세요.</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.assignPetInfoA, assignPetInfo_style.inputForm]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignPetInfo_line1]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>분류</Text>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth1, assignPetInfo_style.dropdownSelect_depth1]}>
						{/* <DropdownSelect items={['개', '고양이', '두더지']} width={200} /> */}
						<NormalDropDown menu={pet_speciesArray} onSelect={(v, i) => onSelectSpecies(v, i)} defaultIndex={0} />
					</View>
					<View style={[temp_style.dropdownSelect_assignPetInfo_depth2, assignPetInfo_style.dropdownSelect_depth2]}>
						{/* 직접입력으로 적혀있음 */}
						{/* <DropdownSelect items={['직접 입력']} width={250} textStyle={{paddingRight: 30 * DP, color: GRAY30}} /> */}
						<NormalDropDown menu={speciesDetail} onSelect={(v, i) => onSelectSpeciesDetail(v, i)} />
					</View>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignPetInfo_line2, assignPetInfo_style.line2]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>성별</Text>
					<View style={[temp_style.tabSelectFilled_Type1, assignPetInfo_style.tabSelectFilled_Type1]}>
						<TabSelectFilled_Type1 items={['남아', '여아']} width={450} onSelect={item => onSelectGender(item)} />
					</View>
				</View>

				{/* InputForm line3 */}
				<View style={[temp_style.inputForm_assignPetInfo_line3, assignPetInfo_style.line3]}>
					<Text style={[temp_style.text_assignPetInfo, txt.noto28, {color: GRAY10}]}>중성화</Text>
					<View style={[temp_style.radioBox_assignPetInfo, assignPetInfo_style.tabSelectFilled_Type1]}>
						<RadioBox items={['예', '아니오', '모름']} onSelect={item => onSelectNeutralization(item)} />
					</View>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignPetInfo, assignPetInfo_style.btn_w226_viewA]}>
				<View style={[btn_style.btn_w226]}>
					{/* <Text>(A)Btn_w226(뒤로)</Text> */}
					<AniButton
						btnTitle={'뒤로'}
						btnTheme={'shadow'}
						btnStyle={'border'}
						btnLayout={btn_w226}
						titleFontStyle={24}
						onPress={() => navigation.goBack()}
					/>
				</View>
				<View style={[btn_style.btn_w226, assignPetInfo_style.btn_w226]}>
					<AniButton btnTitle={'다음'} btnTheme={'shadow'} btnStyle={'filled'} btnLayout={btn_w226} titleFontStyle={24} onPress={gotoNextStep} />
				</View>
			</View>
		</View>
	);
};

//DropdownSelect.defaultProps = {/
//	value: null,
//	itemList: [1, 2, 3, 4], //DropDown될 리스트 목록
//	defaultIndex: 0, // DropDown Default상태의 index
//	width: 180, //Select+Text 부분의 width Default=180(5글자)
//	onChange: e => console.log(e),
//};
