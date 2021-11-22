import React from 'react';
import { Text, View } from 'react-native';
import { btn_w226 } from '../atom/btn/btn_style';
import { login_style, btn_style, temp_style, progressbar_style, assignProtectAnimal_style } from './style_templete';
import { APRI10, GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import Stagebar from '../molecules/Stagebar';
import DropdownSelect from '../molecules/DropdownSelect';
import Input24 from '../molecules/Input30';
import AniButton from '../molecules/AniButton';
import { useNavigation } from '@react-navigation/core';
import Dropdown from '../molecules/Dropdown';
import { Modal } from '../modal/Modal';

export default AssignProtectAnimalInfo = props => {
	const navigation = useNavigation();


	const [data, setData] = React.useState({
		...props.route.params.data,
		protect_animal_estimate_age: null,
		protect_animal_weight: null
	})


	React.useEffect(() => {
		console.log('data', data)
	}, [data])

	//체중 Value 변동 시 실행
	const onChangeKg = kg => {
		setData({ ...data, protect_animal_weight: kg })
	}

	//등록 버튼 => 모달에서 '새 글 작성' 클릭
	const goToWriteAidRequest = () => {
		Modal.close()
		props.navigation.reset({ index: 1, routes: [{ name: 'ShelterMenu' }, { name: 'WriteAidRequest' }] })
	}

	//등록 버튼 => 모달에서 '취소' 클릭
	const goToShelterMenu = () => {
		Modal.close()
		navigation.push('ShelterMenu');
	}

	//다음 버튼 클릭
	const gotoNextStep = () => {
		Modal.popTwoBtn('보호 동물이 등록되었습니다. 바로 보호요청 글을 작성하시겠습니까?', '아니오', '새 글 작성', goToShelterMenu, goToWriteAidRequest)
	};

	const goBack = () => {
		navigation.goBack()
	}

	return (
		<View style={[login_style.wrp_main, { flex: 1 }]}>
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
					insideBarStyle={{ width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP }} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={4} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, { marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10 }]} //text의 스타일
				/>
			</View>

			{/* Text Msg */}
			<View style={[temp_style.textMsg_assignProtectAnimal, assignProtectAnimal_style.textMsg]}>
				<Text style={[txt.noto24, { color: GRAY10 }]}>해당 동물의 예상 연령과 체중, 중성화 여부를 적어주세요.</Text>
			</View>

			{/* InputForm */}
			<View style={[temp_style.inputForm_assignProtectAnimal, assignProtectAnimal_style.selectedMediaList]}>
				{/* InputForm line1 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line1]}>
					<View style={assignProtectAnimal_style.width118}>
						<Text style={[txt.noto28]}>예상 연령</Text>
					</View>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<DropdownSelect items={[1, 2, 3, 4, 5, 6, 7]} width={160} />
						{/* <Dropdown dropdownList={<View style={{ position: 'absolute', width: 100, height: 100, backgroundColor: 'blue' }} />} /> */}
					</View>
					<Text style={[txt.noto24, assignProtectAnimal_style.text118]}>년</Text>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<DropdownSelect items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} width={160} />
					</View>
					<Text style={[txt.noto24, assignProtectAnimal_style.text118]}>개월</Text>
				</View>

				{/* InputForm line2 */}
				<View style={[temp_style.inputForm_assignProtectAnimal_line2, assignProtectAnimal_style.inputform]}>
					<View style={assignProtectAnimal_style.width118}>
						<Text style={[txt.noto28]}>체중</Text>
					</View>
					<View style={[assignProtectAnimal_style.dropdownSelect_year]}>
						<Input24 showTitle={false} onChange={kg => onChangeKg(kg)} width={160} placeholder={'몸무게 입력'} clearMark={false} />
					</View>
					<Text style={[assignProtectAnimal_style.text118]}>kg</Text>
				</View>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[temp_style.btn_w226_assignProtectAnimal, assignProtectAnimal_style.btn_w226_view_image]}>
				<View style={[btn_style.btn_w226]}>
					<AniButton
						btnTitle={'뒤로'}
						btnTheme={'shadow'}
						btnStyle={'border'}
						btnLayout={btn_w226}
						titleFontStyle={24}
						onPress={goBack}
					/>
				</View>
				<View style={[btn_style.btn_w226]}>
					<AniButton btnTitle={'다음'} btnTheme={'shadow'} btnStyle={'filled'} btnLayout={btn_w226} titleFontStyle={24} onPress={gotoNextStep} />
				</View>
			</View>
		</View>
	);
};
