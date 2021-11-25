import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {btn_w654} from '../atom/btn/btn_style';
import {Check50, Rect50_Border} from '../atom/icon';
import {Modal} from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import Stagebar from '../molecules/Stagebar';
import {stagebar_style} from '../organism_ksw/style_organism';
import {login_style, btn_style, temp_style, progressbar_style, assignPetProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetProfileImage = ({navigation, route}) => {
	const [data, setData] = React.useState({
		user_profile_uri: null,
		user_nickname: null,
		pet_status: 'companion',
	});

	const [confirmed, setConfirmed] = React.useState(false); // 닉네임 폼 Validator 통과 ?
	const [imgSelected, setImgSelected] = React.useState(); // pet profile img uri
	const [protect, setProtect] = React.useState(false); // 임시보호 동물 T/F

	React.useEffect(() => {
		setData({...data, user_profile_uri: route.params});
	}, [route.params]);

	//중복 처리 - 미구현 상태
	const checkDuplicateNickname = nick => {
		if (true) {
			return true;
		} else return false;
	};

	//닉네임 Validation
	const nickName_validator = text => {
		// ('* 2자 이상 15자 이내의 영문,숫자, _ 의 입력만 가능합니다.');
		// var regExp = /^(?=.*\d)(?=.*[a-zA-Zㄱ-ㅎ가-힣])[0-9a-zA-Z]{1,15}$/;
		// var regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,15}$/;
		// var regExp = /^[a-z0-9_-]{2,10}$/ ;
		var regExp = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;

		if (regExp.test(text) && checkDuplicateNickname(text)) {
			setConfirmed(true);
			setData({...data, user_nickname: text});
		} else {
			setConfirmed(false);
		}
	};

	//임시보호 동물 체크박스 클릭
	const onPressCheckBox = () => {
		setProtect(!protect);

		const petStatus = protect ? 'protect' : 'companion';
		setData({...data, pet_status: petStatus});
	};

	//확인클릭
	const goToNextStep = () => {
		console.log('data', data);
		Modal.popTwoBtn(
			!protect
				? '새로 임시보호를 하는 동물이 있습니다. 해당 동물을 등록하시겠습니까?'
				: '새로 입양하시는 동물이 있습니다. 해당 동물을 등록하시겠습니까?',
			'아니오',
			'등록',
			() => Modal.close(),
			() => {
				Modal.close();
				navigation.push('AssignPetInfoA', data);
			},
		);
	};

	//프로필이미지 클릭 시 PhotoSelect로 이동
	const selectPhoto = () => {
		navigation.push('SinglePhotoSelect', route.name);
	};

	return (
		<ScrollView contentContainerStyle={{flex: 1}}>
			<View style={[login_style.wrp_main, {flex: 1}]}>
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
					<ProfileImageSelect onClick={selectPhoto} selectedImageUri={route.params ? route.params.photo : imgSelected} />
				</View>

				{/* InputForm */}
				<View style={[temp_style.inputForm_assignPetProfileImage, assignPetProfileImage_style.inputForm]}>
					<View style={[temp_style.input30_assignPetProfileImage]}>
						<Input30
							showTitle={false}
							width={654}
							confirm_msg={'사용 가능한 닉네임입니다.'}
							alert_msg={'사용 불가능한 닉네임입니다.'}
							placeholder={'반려동물의 닉네임을 입력해주세요.'}
							onChange={text => nickName_validator(text)}
							confirm={confirmed}
						/>
					</View>
					<View style={[temp_style.checkBox_assignPetProfileImage, assignPetProfileImage_style.checkBox]}>
						<TouchableOpacity onPress={onPressCheckBox}>{!protect ? <Check50 /> : <Rect50_Border />}</TouchableOpacity>
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
