import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import { APRI10, GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { mobile_carrier } from 'Root/i18n/msg';
import { btn_w226, btn_w654 } from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputWithSelect from '../molecules/InputWithSelect';
import Stagebar from '../molecules/Stagebar';
import AddressInput from '../organism_ksw/AddressInput';
import { addressInput, stagebar_style } from '../organism_ksw/style_organism';
import { applyCompanionA, btn_style, login_style, temp_style } from './style_templete';

// 참조 DB테이블 : 
// ProtectionActivityApplicantObject - [ ApplyCompanion A,B,C,D,E 에 걸쳐 Write 해나갈 Data]
// UserObject - 해당 임시보호 및 입양 요청글을 올린 보호소의 정보
// ShelterProtectAnimalObject - 유저가 클릭한 동물의 정보가 들어있는 테이블 [ 입양 및 임시보호 Data Write가 완료된 뒤 ApplyDetail에서 보여질 대상 동물 관련 Data]

export default ApplyCompanionA = props => {
	const navigation = useNavigation();
	const isProtect = props.route.name == 'ApplyProtectActivityA' //임시보호 신청여부 , false일 경우 자동으로 입양모드 전환
	const [confirmed, setConfirmed] = React.useState(false)

	const [data, setData] = React.useState({
		protect_act_type: isProtect ? 'protect' : 'adopt',
		protect_act_address: {
			city: null,
			district: null,
			neighbor: null
		},
		protect_act_phone_number: null,
		protect_request_pet_data: null
	})

	//동물보호 및 입양 요청 스크린에서 보내준 [임시보호 및 입양 신청을 한 동물에 대한 정보] 가 담겨 있는 'protect_request_pet_data'
	React.useEffect(() => {
		console.log('params', props.route.params.protect_request_pet_data)
		props.route.params.protect_request_pet_data != null ? setData({ ...data, protect_request_pet_data: props.route.params.protect_request_pet_data }) : null
	}, [props.route.params.protect_request_pet_data])

	//보호장소 및 연락처가 공란이면 다음 단계로 넘어갈 수 없는 로직
	React.useEffect(() => {
		console.log('data', data)
		data.protect_act_address != null && data.protect_act_phone_number != null ? setConfirmed(true) : setConfirmed(false)
	}, [data])

	//주소찾기 버튼 클릭
	const goToAddressSearch = () => { }

	//연락처 Value 콜백
	const onChangePhoneNum = num => {
		setData({ ...data, protect_act_phone_number: num })
	}

	//주소 입력
	const onChangeAddress = addr => {
		setData({
			...data, protect_act_address: {
				city: addr,
				district: addr
			}
		})
	}

	//세부주소 입력
	const onChangeDeatilAddress = addr => {
		setData({
			...data, protect_act_address: {
				neighbor: addr
			}
		})
	}

	//확인 버튼 클릭
	const goToNextStep = () => {
		props.route.name == 'ApplyProtectActivityA' ? navigation.push('ApplyProtectActivityB', data) : navigation.push('ApplyAnimalAdoptionB', data)
	}

	return (
		<View style={[login_style.wrp_main, applyCompanionA.container]}>
			{/* stageBar */}
			<View style={[temp_style.stageBar, applyCompanionA.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={1} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
				/>
			</View>
			{/* textMSg */}
			<View style={[temp_style.stageBar, applyCompanionA.textMsg]}>
				<Text style={[txt.noto24, { color: GRAY10 }]}>개인정보의 내용이 맞는지 확인해 주세요.</Text>
			</View>
			{/* InputForm */}
			<View style={[temp_style.inputForm_ApplyCompanionA, applyCompanionA.inputForm]}>
				{/* addressInput */}
				<View style={[temp_style.addressInput]}>
					<AddressInput title={'보호장소'} onChangeAddress={addr => onChangeAddress(addr)} onChangeDeatilAddress={addr => onChangeDeatilAddress(addr)} onPressSearchAddr={goToAddressSearch} />
				</View>
				<View style={[temp_style.input24A_applyCompanionA, applyCompanionA.input24A]}>
					<View style={[addressInput.titleContainer]}>
						<Text style={[txt.noto24, { color: APRI10 }]}>연락처 </Text>
					</View>
					<InputWithSelect onChange={num => onChangePhoneNum(num)} keyboardType={'number-pad'} items={mobile_carrier} width={360} placeholder={'연락처를 입력해주세요.'} />
				</View>
			</View>
			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, applyCompanionA.btn_w654]}>
				{confirmed
					? <AniButton
						btnTitle={'확인'}
						titleFontStyle={40}
						btnLayout={btn_w654}
						onPress={goToNextStep}
					/>
					: <AniButton
						btnTitle={'확인'}
						disable={true}
						titleFontStyle={40}
						btnLayout={btn_w654}
						onPress={goToNextStep}
					/>
				}
			</View>
		</View>
	);
};
