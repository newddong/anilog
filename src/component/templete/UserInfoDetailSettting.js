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

export default UserInfoDetailSettting = ({route, navigation}) => {
	// console.log(route.params);

	const [data, setData] = React.useState(route.params);

	React.useEffect(() => {
		console.log('phone num', data.user_phone_number);
		navigation.setParams(data);
	}, [data]);

	//생일 값 변경 콜백
	const onDateChange = date => {
		setData({...data, user_birthday: date});
	};

	//통신사 드롭다운 선택 콜백
	const onSelectMobileCompany = (v, i) => {
		setData({...data, user_mobile_company: v});
	};

	// 시, 구 단위 주소 값 변경 콜백
	const onChangeAddress = addr => {
		let copy = {...data}; //Json 부분 변경 방법
		copy.user_address.city = addr;
		copy.user_address.district = addr;
		setData(copy);
	};

	// 세부 주소 값 변경 콜백
	const onChangeDeatilAddress = addr => {
		let copy = {...data};
		copy.user_address.neighbor = addr;
		setData(copy);
	};

	const onChangePhoneNum = num => {
		setData({...data, user_phone_number: num});
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

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				<View style={[temp_style.inputForm_userInfoDetailSettting, userInfoDetailSettting_style.inputForm]}>
					{/* 성별 */}
					<View style={[userInfoDetailSettting_style.inputForm_detail]}>
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>성별</Text>
						</View>
						<View style={[temp_style.tabSelectFilled_Type1]}>
							<TabSelectFilled_Type1 items={GENDER_TAB_SELECT} width={500} defaultIndex={data.user_gender == 'male' ? 0 : 1} />
						</View>
					</View>
					{/* 생일 */}
					<View style={[userInfoDetailSettting_style.inputForm_detail]}>
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>생일</Text>
						</View>
						<View style={[temp_style.tabSelectFilled_Type1]}>
							<DatePicker onDateChange={date => onDateChange(date)} defaultDate={data.user_birthday} />
						</View>
					</View>
					{/* 전화번호 */}
					<View style={[userInfoDetailSettting_style.inputWithSelect]}>
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>전화번호</Text>
						</View>
						<View style={[userInfoDetailSettting_style.phone_num_input]}>
							<InputWithSelect
								onChange={num => onChangePhoneNum(num)}
								onSelectDropDown={(v, i) => onSelectMobileCompany(v, i)}
								items={mobile_carrier}
								placeholder={INPUT_PHONE_NUM}
								width={300}
								defaultValue={data.user_phone_number || ''}
								defaultIndex={getDefault()}
								defaultInput={data.user_phone_number || ''}
							/>
						</View>
					</View>
					{/* 나의 지역 */}
					<View style={[temp_style.addressInput]}>
						<AddressInput
							title={'나의 지역'}
							onChangeAddress={addr => onChangeAddress(addr)}
							onChangeDeatilAddress={addr => onChangeDeatilAddress(addr)}
							addressDefault={data ? data.user_address.city + '  ' + data.user_address.district : ''}
							detailAddressDefault={data ? data.user_address.neighbor : ''}
						/>
					</View>
					{/* 관심지역 및 활동 */}
					<View style={[userInfoDetailSettting_style.tagListContainer]}>
						<View style={[userInfoDetailSettting_style.interestTagList]}>
							<InterestTagList
								title={INTEREST_REGION}
								items={data ? data.user_interests.location : null}
								onDelete={index => onDeleteInterestRegion(index)}
							/>
						</View>
						<View style={[userInfoDetailSettting_style.interestTagList]}>
							<InterestTagList
								title={INTEREST_ACT}
								items={data ? data.user_interests.activity : null}
								onDelete={index => onDeleteInterestAct(index)}
							/>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
