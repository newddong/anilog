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


// DB 참조할 테이블 : ProtectionActivityApplicantObject


export default ApplyCompanionA = props => {
	const navigation = useNavigation();
	const isProtect = props.route.name == 'ApplyProtectActivityA' //임시보호 신청여부 , false일 경우 자동으로 입양모드 전환
	const [confirmed, setConfirmed] = React.useState(false)
	console.log('Apply Companion A / Route Name ' + props.route.name);

	const [data, setData] = React.useState({
		protect_act_type: isProtect ? 'protect' : 'adopt',
		protect_act_address: {
			city: null,
			district: null,
			neighbor: null
		},
		protect_act_phone_number: null
	})

	React.useEffect(() => {
		data.protect_act_address != null && data.protect_act_phone_number != null ? setConfirmed(true) : setConfirmed(false)
	}, [data])

	//주소찾기 버튼 클릭
	const goToAddressSearch = () => {

	}

	//연락처 Value 콜백
	const onChangePhoneNum = num => {
		setData({ ...data, protect_act_phone_number: num })
	}

	//주소 입력
	const onChangeAddress = addr => {
		setData({
			...data, protect_act_address: {
				city: addr.city,
				district: addr.district
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
