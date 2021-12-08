import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {btn_w654} from '../atom/btn/btn_style';
import {Check50, Rect50_Border} from '../atom/icon';
import Modal from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import Stagebar from '../molecules/Stagebar';
import {stagebar_style} from '../organism_ksw/style_organism';
import {login_style, btn_style, temp_style, progressbar_style, assignPetProfileImage_style} from './style_templete';
import {launchImageLibrary} from 'react-native-image-picker';
import {checkProtectPet} from 'Root/api/userapi';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetProfileImage = ({navigation, route}) => {
	const [data, setData] = React.useState({
		user_profile_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
		user_nickname: '',
		pet_status: 'companion', //입양, 임시보호중인 동물일때는 초기값을 다르게 표기하도록(여기서는 임시보호, 반려동물 상태밖에 없음,입양된 동물은 더이상 정보수정 불가)
		pet_is_temp_protection: false,
	});

	const [confirmed, setConfirmed] = React.useState(false); // 닉네임 폼 Validator 통과 ?
	const [protect, setProtect] = React.useState(false); // 임시보호 동물 T/F

	React.useEffect(() => {
		setData({...data, user_profile_uri: route.params});
	}, [route.params]);

	React.useEffect(() => {
		checkProtectPet(
			{user_id: '서버에서 세션처리 할것임'},
			cbObj => {
				Modal.popTwoBtn(
					'새로 임시보호, 입양을 하는 동물이 있습니다.\n 해당 동물을 등록하시겠습니까?',
					'아니오',
					'네',
					() => Modal.close(),
					() => Modal.close(),
				);
			},
			e => Modal.popOneBtn(e, '확인', () => Modal.close()),
		);
	}, []);

	//중복 처리 - 미구현 상태
	const checkDuplicateNickname = nick => {
		if (true) {
			return true;
		} else return false;
	};

	//닉네임 Validation
	const nickName_validator = text => {
		// ('* 2자 이상 15자 이내의 영문,숫자, _ 의 입력만 가능합니다.');
		var regExp = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
		return regExp.test(text) && checkDuplicateNickname(text);
	};

	//임시보호 동물 체크박스 클릭(코드 보완 필요, 가독성이 좋지 않음)
	const onPressCheckBox = () => {
		setProtect(!protect);
		const petStatus = !protect ? 'protect' : 'companion';

		setData({...data, pet_status: petStatus, pet_is_temp_protection: !protect});
	};

	//확인클릭
	const goToNextStep = () => {
		console.log('data', data);
		navigation.push('AssignPetInfoA', {data: data});
	};

	//프로필이미지 클릭 시 PhotoSelect로 이동
	const selectPhoto = () => {
		// navigation.push('SinglePhotoSelect', route.name);
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 1,
			},
			responseObject => {
				console.log('선택됨', responseObject);
				setData({...data, user_profile_uri: responseObject.assets[responseObject.assets.length - 1].uri});
			},
		);
	};

	const onNicknameChange = text => {
		console.log('닉네임', text);
		setData({...data, user_nickname: text});
	};

	const onNicknameValid = isValid => {
		console.log('바', isValid);
		setConfirmed(isValid);
	};

	return (
		<ScrollView contentContainerStyle={{flex: 1}}>
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
						current={1} //현재 단계를 정의
						maxstage={3} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
					/>
				</View>

				{/* Text Msg */}
				<View style={[temp_style.textMsg_assignPetProfileImage, assignPetProfileImage_style.textMsg]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>반려동물 프로필의 대표 이미지가 될 사진과 이름을 알려주세요.</Text>
					<Text style={[txt.noto24, {color: GRAY10}]}>반려동물의 이름은 수정이 불가합니다.</Text>
				</View>

				{/* (M)ProfileImageSelect */}
				<View style={[temp_style.profileImageSelect, assignPetProfileImage_style.profileImageSelect]}>
					<ProfileImageSelect onClick={selectPhoto} selectedImageUri={data.user_profile_uri} />
				</View>

				{/* InputForm */}
				<View style={[temp_style.inputForm_assignPetProfileImage, assignPetProfileImage_style.inputForm]}>
					<View style={[temp_style.input30_assignPetProfileImage]}>
						<Input30
							value={data.user_nickname}
							showTitle={false}
							width={654}
							confirm_msg={'사용 가능한 닉네임입니다.'}
							alert_msg={'사용 불가능한 닉네임입니다.'}
							placeholder={'반려동물의 닉네임을 입력해주세요.'}
							validator={nickName_validator}
							onChange={onNicknameChange}
							onValid={onNicknameValid}
						/>
					</View>
					<View style={[temp_style.checkBox_assignPetProfileImage, assignPetProfileImage_style.checkBox]}>
						<TouchableOpacity onPress={onPressCheckBox}>{protect ? <Check50 /> : <Rect50_Border />}</TouchableOpacity>
						<Text style={[txt.noto28, {marginLeft: 10 * DP, textAlignVertical: 'center'}]}>해당 동물은 임시보호 중인 동물입니다.</Text>
					</View>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, assignPetProfileImage_style.btn_w654]}>
					{/* 닉네임 Validator를 통과하여야만 버튼이 활성화된다 */}
					{confirmed ? (
						<AniButton btnTitle={'확인'} btnTheme={'shadow'} btnLayout={btn_w654} titleFontStyle={32} onPress={goToNextStep} />
					) : (
						<AniButton btnTitle={'확인'} disable={true} btnLayout={btn_w654} titleFontStyle={32} />
					)}
				</View>
			</View>
		</ScrollView>
	);
};

//	showTitle: true, // true - title과 description 출력 , false - 미출력
//	title: 'title',
//	description: 'description',
//	placeholder: 'placeholder',
//	value: 'value',
//	alert_msg: 'alert_msg',
//	confirm_msg: 'confirm_msg',
//	clearMark: false,
//	onClear: e => console.log(e),
//	onChange: e => console.log(e),
//	width: 300, // TextInput 너비
//};
