import React from 'react';
import {Text, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {userAssign_agreementCheckList} from 'Root/config/dummyDate_json';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import AssignCheckList from '../organism_ksw/AssignCheckList';
import AssignCheckListItem from '../organism_ksw/AssignCheckListItem';
import {login_style, btn_style, temp_style, progressbar_style, agreementCheck_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AgreementCheck = props => {
	const user_agreement = React.useRef({
		is_over_fourteen: false, //14살 이상
		is_service: false, //서비스 동의
		is_personal_Info: false, //개인정보 제공 동의
		is_location_service_info: false, //위치정보 제공 동의
		is_donation_info: false, //기부정보 제공 동의
		is_marketting_Info: false, //마케팅정보 제공 동의
	}).current;
	
	const [permissionToNext, setPermissionToNext] = React.useState(false);
	const [acceptAllState, setAcceptAllState] = React.useState(false);

	const goToNextStep = () => {
		props.navigation.push('UserVerification', user_agreement);
	};

	const onPressAceeptAllBtn = state => {
		Object.keys(user_agreement).forEach(key=>{user_agreement[key]=state});
		setAcceptAllState(state);
	};

	const permissionCheck = ()=>{
		if (
			user_agreement.is_donation_info &&
			user_agreement.is_location_service_info &&
			user_agreement.is_over_fourteen &&
			user_agreement.is_personal_Info &&
			user_agreement.is_service
		) {
			setPermissionToNext(true);
		} else {
			setPermissionToNext(false);
		}
	}

	const onPressAcceptItem = (text, index, isCheck) => {
		// text - 동의 내역, index - 리스트 인덱스 , isCheck - T/F 상태
		switch (index) {
			case 0:
				user_agreement.is_over_fourteen = isCheck;
				break;
			case 1:
				user_agreement.is_service = isCheck;
				break;
			case 2:
				user_agreement.is_personal_Info = isCheck;
				break;
			case 3:
				user_agreement.is_location_service_info = isCheck;
				break;
			case 4:
				user_agreement.is_donation_info = isCheck;
				break;
			case 5:
				user_agreement.is_marketting_Info = isCheck;
				break;
		}
		permissionCheck();
	};

	const onPressDetail = index => {
		console.log(index + 'index 항목 더보기 클릭');
	};
	
	return (
		<ScrollView contentContainerStyle={{flex:1,backgroundColor:'red'}}>
			
			<View style={[login_style.wrp_main, {flex: 1}]}>
			<TouchableWithoutFeedback onPress={()=>console.log(user_agreement)}>
				<View style={{backgroundColor:'red',height:30,width:30,position:'absolute',top:0,left:0}}></View>
				</TouchableWithoutFeedback>
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
						maxstage={4} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
					/>
				</View>

				{/* AgreementCheckList */}
				<View style={[temp_style.agreementCheckList, agreementCheck_style.agreementCheckList]}>
					<AssignCheckListItem data={{text: '아래 항목에 전체 동의합니다', detail: false}} onCheck={onPressAceeptAllBtn} />
					<View style={[agreementCheck_style.horizontalSepartor]} />
					<AssignCheckList
						items={userAssign_agreementCheckList}
						onCheck={onPressAcceptItem}
						isCheckAll={acceptAllState}
						onPressDetail={onPressDetail}
					/>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, agreementCheck_style.btn_w654]}>
					{permissionToNext ? (
						<AniButton btnTitle={'다음'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w654} onPress={goToNextStep} />
					) : (
						<AniButton btnTitle={'다음'} titleFontStyle={'32'} disable={true} btnLayout={btn_w654} onPress={goToNextStep} />
					)}
				</View>
			</View>
		</ScrollView>
	);
};
