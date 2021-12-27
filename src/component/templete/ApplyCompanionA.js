import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {mobile_carrier} from 'Root/i18n/msg';
import {btn_w226, btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputWithSelect from '../molecules/InputWithSelect';
import Stagebar from '../molecules/Stagebar';
import AddressInput from '../organism_ksw/AddressInput';
import {addressInput, stagebar_style} from '../organism_ksw/style_organism';
import {applyCompanionA, btn_style, login_style, temp_style} from './style_templete';

// 참조 DB테이블 :
// ProtectionActivityApplicantObject - [ ApplyCompanion A,B,C,D,E 에 걸쳐 Write 해나갈 Data]
// UserObject - 해당 임시보호 및 입양 요청글을 올린 보호소의 정보
// ShelterProtectAnimalObject - 유저가 클릭한 동물의 정보가 들어있는 테이블 [ 입양 및 임시보호 Data Write가 완료된 뒤 ApplyDetail에서 보여질 대상 동물 관련 Data]

export default ApplyCompanionA = ({route}) => {
	const navigation = useNavigation();
	const isProtect = route.name == 'ApplyProtectActivityA'; //임시보호 신청여부 , false일 경우 자동으로 입양모드 전환
	console.log('isProtect 값', isProtect);
	const [confirmed, setConfirmed] = React.useState(false);
	const [addrSearched, setAddrSearched] = React.useState(false);

	const [data, setData] = React.useState({
		protect_act_type: isProtect ? 'protect' : 'adopt',
		protect_act_address: {
			city: '',
			district: '',
			neighbor: '',
			brief: '',
			detail: '',
		},

		protect_act_phone_number: null,
		protect_request_pet_data: null,
	});
	React.useEffect(() => {
		isProtect ? navigation.setOptions({title: '임시보호 신청'}) : navigation.setOptions({title: '입양 신청'});
	}, []);

	//동물보호 및 입양 요청 스크린에서 보내준 [임시보호 및 입양 신청을 한 동물에 대한 정보] 가 담겨 있는 'protect_request_pet_data'
	React.useEffect(() => {
		// console.log('params', route.params.protect_request_pet_data);
		Object.assign(data, route.params.protect_request_pet_data);
	}, [route.params.protect_request_pet_data]);

	//보호장소 및 연락처가 공란이면 다음 단계로 넘어갈 수 없는 로직
	React.useEffect(() => {
		// console.log('data', data);
		data.protect_act_address != null && data.protect_act_phone_number != null ? setConfirmed(true) : setConfirmed(false);
	}, [data]);

	React.useEffect(() => {
		const addr = route.params.addr;

		if (route.params != null) {
			//한번 주소 검색이 된적이 있는가?
			if (addr && !addrSearched) {
				console.log('route.params.Address Changed?   ', addr);
				// setData({...data, user_address: {city: addr.siNm, district: addr.sggNm, neighbor: addr.rn + ' ' + addr.buldMnnm}});
				setData({...data, protect_act_address: {brief: addr.roadAddr, detail: addr.detailAddr}});
				setAddrSearched(true); // 다시 검색할 수 있도록 state 원상복귀
			}
		}
	}, [route.params.addr]);

	React.useEffect(() => {
		console.log('data Address ', data.protect_act_address);
	}, [data]);

	//주소찾기 버튼 클릭
	const goToAddressSearch = () => {
		navigation.push('AddressSearch', {addr: '', from: route.name});
	};

	//연락처 Value 콜백
	const onChangePhoneNum = num => {
		let testString = num; // 원래 문자열
		let regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
		let result = testString.replace(regex, ''); // InputWithSelect에서 보내주는 num값에 통신사도 포함되어 있음. 통신사 문자열 제거 후 번호만 받기
		setData({...data, protect_act_phone_number: result});
	};

	const phoneValidate = num => {
		console.log('num', num);
		var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		if (regPhone.test(num) === true) {
			console.log('입력된 값은 휴대전화번호입니다.');
		}
		return regPhone.test(num);
	};

	//세부주소 입력
	const onChangeDeatilAddress = addr => {
		let addrData = {...data.protect_act_address};
		addrData.detail = addr;
		// setData({
		// 	...data,
		// 	protect_act_address: addrData,
		// });
	};

	//확인 버튼 클릭
	const goToNextStep = () => {
		// console.log('data', data);
		route.name == 'ApplyProtectActivityA' ? navigation.push('ApplyProtectActivityB', data) : navigation.push('ApplyAnimalAdoptionB', data);
	};

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
				<Text style={[txt.noto24, {color: GRAY10}]}>개인정보의 내용이 맞는지 확인해 주세요.</Text>
			</View>
			{/* InputForm */}
			<View style={[temp_style.inputForm_ApplyCompanionA, applyCompanionA.inputForm]}>
				{/* addressInput */}
				<View style={[temp_style.addressInput]}>
					<AddressInput
						title={'보호장소'}
						titleMode={'star'}
						address={data.protect_act_address.brief}
						detailAddressDefault={data.protect_act_address.detail}
						addressDefault={data.protect_act_address.brief}
						onPressSearchAddr={goToAddressSearch}
						detailAddress={data.protect_act_address.detail}
					/>
				</View>
				<View style={[temp_style.input24A_applyCompanionA, applyCompanionA.input24A]}>
					<InputWithSelect
						onChange={onChangePhoneNum}
						validator={phoneValidate}
						keyboardType={'number-pad'}
						title={'연락처'}
						title_star={true}
						items={mobile_carrier}
						width={360}
						placeholder={'연락처를 입력해주세요.'}
					/>
				</View>
			</View>
			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, applyCompanionA.btn_w654]}>
				<AniButton btnTitle={'확인'} disable={confirmed ? false : true} titleFontStyle={40} btnLayout={btn_w654} onPress={goToNextStep} />
			</View>
		</View>
	);
};

const e = {
	protect_request_pet_data: {
		__v: 0,
		_id: '61c2b82b7be07611b0094ed2',
		protect_animal_id: {
			__v: 0,
			_id: '61c2b6007be07611b0094ec4',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '2개월',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c2b82b7be07611b0094ed2',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2021-12-08T00:00:00.000Z',
			protect_animal_rescue_location: 'AK풀라자 포하',
			protect_animal_sex: 'female',
			protect_animal_species: '기타',
			protect_animal_species_detail: '토끼',
			protect_animal_status: 'rescue',
			protect_animal_weight: 2,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '토끼',
		protect_request_comment_count: 0,
		protect_request_content:
			'토끼 키우는 것은 생각보다 많은 각오가 필요한 일입니다.경력까지는 요구하지 않겠지만 어느정도 소양을 갖춘 분이 데려가주시면 좋겠습니다.',
		protect_request_date: '2021-12-22T05:31:23.186Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528231_E3043E03-4A96-4270-958B-CF38B89588C5.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640150528246_D9B16F08-812E-4BF1-B5DF-9DAB2E3E0BF2.jpg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '아이스크림 같이 녹을 것만 같은 아이입니다.',
		protect_request_update_date: '2021-12-22T05:31:23.187Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61c023d9679aa5ae46128102',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '01096450001',
			shelter_foundation_date: '2011-12-04T00:00:00.000Z',
			shelter_homepage: '',
			shelter_name: '상우 보호소6',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'lanad01@naver.com',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction:
				'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: '상우 보호소5',
			user_nickname: '가하즈보호소',
			user_password: '121212',
			user_phone_number: '01096450001',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
			user_register_date: '2021-12-20T06:34:01.773Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	},
};
