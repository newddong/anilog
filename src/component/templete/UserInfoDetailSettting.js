import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import DatePicker from 'Root/component/molecules/DatePicker';
import {login_style, btn_style, temp_style, userInfoDetailSettting_style} from './style_templete';
import InputWithSelect from '../molecules/InputWithSelect';
import AddressInput from '../organism_ksw/AddressInput';
import InterestTagList from '../organism_ksw/InterestTagList';
import {GENDER_TAB_SELECT, INPUT_PHONE_NUM, INTEREST_ACT, INTEREST_REGION, mobile_carrier} from 'Root/i18n/msg';
import {dummy_userObject} from 'Root/config/dummyDate_json';
import {getUserInfoById} from 'Root/api/userapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from '../modal/Modal';
import Input24 from '../molecules/Input24';
export default UserInfoDetailSettting = ({route, navigation}) => {
	// console.log('UserInfoDetailSetting route.params : ', route.params);
	// console.log('UserInfoDetailSetting route.params : ', route.params.data.user_interests);
	const [data, setData] = React.useState(route.params); //기존 유저의 데이터가 담겨있음
	const [loaded, setLoaded] = React.useState(false);
	const [addrSearched, setAddrSearched] = React.useState(false);

	// 갱신되는 데이터는 Header에도 Json형태로 전해짐
	React.useEffect(() => {
		navigation.setParams({data: data, route_name: route.name});
		// console.log('user_mobile_company', data.user_mobile_company);
	}, [data]);

	React.useEffect(() => {
		navigation.setParams({data: route.params, route_name: route.name});
		setLoaded(true);
	}, []);

	React.useEffect(() => {
		if (route.params != null) {
			if (route.params.addr && !addrSearched) {
				console.log('route.params.Address Changed?   ', route.params.addr);
				const addr = route.params.addr;
				setData({
					...data,
					user_address: {city: addr.siNm, district: addr.sggNm, neighbor: addr.emdNm, brief: addr.roadAddr, detail: addr.detailAddr},
				});
				setAddrSearched(true);
			}
		}
	}, [route.params]);

	const onPressSearchAddress = () => {
		setAddrSearched(false);

		navigation.push('AddressSearch', {addr: data.user_address.brief, from: route.name});
	};

	//생일 값 변경 콜백
	const onDateChange = date => {
		setData({...data, user_birthday: date});
	};

	//통신사 드롭다운 선택 콜백
	const onSelectMobileCompany = (v, i) => {
		console.log('이동통신사ㅏㅏ', v);
		setData({...data, user_mobile_company: v});
	};

	// 시, 구 단위 주소 값 변경 콜백
	const onChangeAddress = addr => {
		console.log('change Address', addr);
		let copy = {...data}; //Json 부분 변경 방법
		copy.user_address.city = addr;
		copy.user_address.district = addr;
		setData(copy);
	};

	// 세부 주소 값 변경 콜백
	const onChangeDeatilAddress = addr => {
		// console.log('change Detail addr', addr);
		let copy = {...data};
		// copy.user_address.neighbor = addr;
		copy.user_address.detail = addr;
		setData(copy);
	};

	const onSelectGender = index => {
		console.log('OnSelectGender', index);
		index == 0 ? setData({...data, user_sex: 'male'}) : setData({...data, user_sex: 'female'});
	};

	const onChangePhoneNum = num => {
		// console.log('splited', num.split(' '));
		// let phone_number = num.slice(-11); //num의 인자값이 통신사와 같이 넘어와서 처리
		// let phone_company = num.slice(0, -11); //통신사 처리
		// console.log('전화 번호값', num.slice(-11, num.length));
		setData({...data, user_phone_number: num});
		// setData({...data, user_mobile_company: phone_company});
	};

	const phoneValidate = num => {
		console.log('num', num);
		let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		if (regPhone.test(num) === true) {
			console.log('입력된 값은 휴대전화번호입니다.');
		}
		return regPhone.test(num);
	};

	//관심지역 태그 X마크 삭제클릭
	const onDeleteInterestRegion = index => {
		let copy = data.user_interests.location;
		copy.splice(index, 1);
		setData({
			...data,
			user_interests: {
				location: copy,
				activity: data.user_interests.activity,
			},
		});
	};

	//관심활동 태그 X마크 삭제 클릭
	const onDeleteInterestAct = index => {
		let copy = data.user_interests.activity;
		copy.splice(index, 1);
		setData({
			...data,
			user_interests: {
				location: data.user_interests.location,
				activity: copy,
			},
		});
	};

	//유저의 통신사 정보와 일치하도록 DropDown의 디폴트 값을 적용
	const getDefault = () => {
		const found = mobile_carrier.findIndex(e => e == data.user_mobile_company);
		return found;
	};
	if (loaded) {
		return (
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<ScrollView contentContainerStyle={{flex: 1}}>
					<View style={[temp_style.inputForm_userInfoDetailSettting, userInfoDetailSettting_style.inputForm]}>
						{/* 성별 */}
						<View style={[userInfoDetailSettting_style.inputForm_detail]}>
							<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
								<Text style={[txt.noto28, {color: GRAY10}]}>성별</Text>
							</View>
							<View style={[temp_style.tabSelectFilled_Type1]}>
								<TabSelectFilled_Type1
									items={GENDER_TAB_SELECT}
									width={500}
									onSelect={onSelectGender}
									defaultIndex={data.user_sex == 'male' ? 0 : 1}
								/>
							</View>
						</View>
						{/* 생일 */}
						<View style={[userInfoDetailSettting_style.inputForm_detail]}>
							<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
								<Text style={[txt.noto28, {color: GRAY10}]}>생일</Text>
							</View>
							<View style={[temp_style.tabSelectFilled_Type1]}>
								<DatePicker onDateChange={date => onDateChange(date)} defaultDate={data.user_birthday} future={false} />
							</View>
						</View>
						{/* 전화번호 */}
						<View style={[userInfoDetailSettting_style.inputWithSelect]}>
							<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
								<Text style={[txt.noto28, {color: GRAY10}]}>전화번호</Text>
							</View>
							<View style={[userInfoDetailSettting_style.phone_num_input, {}]}>
								<Input24
									value={data.user_phone_number}
									width={654}
									onChange={onChangePhoneNum}
									descriptionType={'none'}
									validator={phoneValidate}
									placeholder={'연락처를 입력해주세요.'}
									showCrossMark={false}
									keyboardType={'number-pad'}
								/>
								{/* <InputWithSelect
									onChange={onChangePhoneNum}
									onSelectDropDown={onSelectMobileCompany}
									items={mobile_carrier}
									placeholder={INPUT_PHONE_NUM}
									width={300}
									defaultValue={data.user_phone_number || ''}
									defaultIndex={getDefault()}
									defaultInput={data.user_phone_number || ''}
								/> */}
							</View>
						</View>
						{/* 나의 지역 */}
						<View style={[temp_style.addressInput]}>
							<AddressInput
								title={'나의 지역'}
								address={data.user_address.brief}
								// address={data.user_address.city + ' ' + data.user_address.district + ' ' + data.user_address.neighbor}
								onChangeAddress={onChangeAddress}
								onChangeDeatilAddress={onChangeDeatilAddress}
								onPressSearchAddr={onPressSearchAddress}
								// addressDefault={data ? data.user_address.city + '  ' + data.user_address.district : ''}
								addressDefault={data.user_address.brief}
								// detailAddressDefault={data ? data.user_address.neighbor : ''}
								detailAddressDefault={data.user_address.detail}
								detailAddress={data.user_address.detailAddr}
							/>
						</View>
						{/* 관심지역 및 활동 */}
						<View style={[userInfoDetailSettting_style.tagListContainer]}>
							<View style={[userInfoDetailSettting_style.interestTagList]}>
								<InterestTagList title={INTEREST_REGION} items={data.user_interests.location || []} onDelete={onDeleteInterestRegion} />
							</View>
							<View style={[userInfoDetailSettting_style.interestTagList]}>
								<InterestTagList title={INTEREST_ACT} items={data.user_interests.activity || []} onDelete={onDeleteInterestAct} />
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	} else {
		return <View></View>;
	}
};

const add = {
	__v: 6,
	_id: '61b84ddb4a1b66f74b699b1e',
	pet_family: [],
	user_address: {city: '마포구', district: '신수동g', neighbor: '8977'},
	user_agreement: {
		is_donation_info: true,
		is_location_service_info: true,
		is_marketting_info: true,
		is_over_fourteen: true,
		is_personal_info: true,
		is_service: true,
	},
	user_birthday: '2021-01-01',
	user_denied: false,
	user_follow_count: 0,
	user_follower_count: 0,
	user_interests: {activity: [], location: []},
	user_introduction: '',
	user_is_verified_email: false,
	user_is_verified_phone_number: true,
	user_mobile_company: 'LG U+',
	user_my_pets: [
		{
			__v: 0,
			_id: '61bc7bc5c946746900218905',
			pet_birthday: '2021-12-07T00:00:00.000Z',
			pet_family: [Array],
			pet_is_temp_protection: true,
			pet_neutralization: 'no',
			pet_sex: 'female',
			pet_species: '기타',
			pet_species_detail: '새',
			pet_status: 'protect',
			pet_weight: '11',
			user_agreement: [Object],
			user_denied: false,
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction: '',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_nickname: '토라',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639742405433_6040B5AC-48AF-44FA-A3D0-81FF80F8C09A.jpg',
			user_register_date: '2021-12-17T12:00:05.624Z',
			user_type: 'pet',
			user_upload_count: 0,
		},
	],
	user_name: '권상우',
	user_nickname: 'Di1',
	user_password: 'tkddn123',
	user_phone_number: '01096450422',
	user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639666144077_B70FDBD2-53F4-4FAA-A6F1-13345B04FEE3.jpg',
	user_register_date: '2021-12-14T07:55:07.933Z',
	user_sex: 'female',
	user_type: 'user',
	user_upload_count: 0,
};
