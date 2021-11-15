import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableOpacity, ScrollView} from 'react-native';
import {APRI10, GRAY10, GRAY20} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import {Check50, Rect50_Border} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import Input30 from '../molecules/Input30';
import ProfileImageSelect from '../molecules/ProfileImageSelect';
import Stagebar from '../molecules/Stagebar';
import {login_style, btn_style, temp_style, progressbar_style, assignPetProfileImage_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignPetProfileImage = props => {
	const navigation = useNavigation();
	const [protect, setProtect] = React.useState(false);
	const moveToAssignPetProfileImage = () => {
		props.navigation.push('AssignPetInfoA');
	};
	const moveToSinglePhotoSelect = () => {
		props.navigation.push('SinglePhotoSelect');
	};
	return (
		<ScrollView>
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
						current={1} //현재 단계를 정의
						maxstage={3} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
					/>
				</View>

				{/* Text Msg */}
				<View style={[temp_style.textMsg_assignPetProfileImage, assignPetProfileImage_style.textMsg]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>
						반려동물 프로필의 대표 이미지가 될 사진과 이름을 알려주세요. 반려동물의 이름은 수정이 불가합니다.
					</Text>
				</View>

				{/* (M)ProfileImageSelect */}
				<TouchableWithoutFeedback onPress={moveToSinglePhotoSelect}>
					<View style={[temp_style.profileImageSelect, assignPetProfileImage_style.profileImageSelect]}>
						<ProfileImageSelect
							selectedImageUri={'https://img.animalplanet.co.kr/news/2019/08/10/700/v4q0b0ff4hcpew1g6t39.jpg'}
							onClick={() => navigation.push('SinglePhotoSelect')}
						/>
					</View>
				</TouchableWithoutFeedback>

				{/* InputForm */}
				<View style={[temp_style.inputForm_assignPetProfileImage, assignPetProfileImage_style.inputForm]}>
					<View style={[temp_style.input30_assignPetProfileImage]}>
						<Input30 showTitle={false} width={654} />
					</View>
					<View style={[temp_style.checkBox_assignPetProfileImage, assignPetProfileImage_style.checkBox]}>
						<TouchableOpacity onPress={() => setProtect(!protect)}>{protect ? <Check50 /> : <Rect50_Border />}</TouchableOpacity>
						<Text style={[txt.noto28, {marginLeft: 10 * DP, textAlignVertical: 'center'}]}>해당 동물은 임시보호 중인 동물입니다.</Text>
					</View>
				</View>

				{/* (A)Btn_w654 */}
				<TouchableWithoutFeedback onPress={moveToAssignPetProfileImage}>
					<View style={[btn_style.btn_w654, assignPetProfileImage_style.btn_w654]}>
						{/* <Text>(A)Btn_w654(반려동물 닉네임등록 완료)</Text> */}
						<AniButton
							btnTitle={'확인'}
							btnTheme={'shadow'}
							btnStyle={'filled'}
							btnLayout={btn_w654}
							titleFontStyle={24}
							onPress={() => navigation.push('AssignPetInfoA')}
						/>
					</View>
				</TouchableWithoutFeedback>
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
