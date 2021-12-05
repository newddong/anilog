import React from 'react';
import {ScrollView, View} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputWithSearchIcon from '../molecules/InputWithSearchIcon';
import AccountList from '../organism_ksw/AccountList';
import {login_style, btn_style, temp_style, addFamilyAccount_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AddFamilyAccount = props => {
	const navigation = useNavigation();

	const onSearch = e => {
		//검색어로 api 연결 후 결과 리스트로 ~
		console.log(`keyword=>${e}`);
	};

	const onCheckFamilyMembers = () => {
		console.log('리스트 인원 수 체크 후 3인이 넘어갈때 초대하면 3인까지만 가능하다는 메세지 필요 ~  3인이 안되면 API로 추가 후 goback');
		navigation.goBack();
	};

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, {flex: 1}]}>
				{/* (M)InputWithSearchIcon */}
				<View style={[temp_style.inputWithSearchIcon, addFamilyAccount_style.inputWithSearchIcon]}>
					<InputWithSearchIcon width={654} placeholder={'가족 계정을 검색해주세요.'} onSearch={e => onSearch(e)} />
				</View>

				{/* (O)AccountList */}
				<View style={[temp_style.accountList, addFamilyAccount_style.accountList]} onPress={() => props.onAccountClick()}>
					<AccountList onAccountClick={item => alert(item)} />
				</View>

				{/* (M)Btn_w654 */}
				<View style={[btn_style.btn_w654, addFamilyAccount_style.btn_w654]}>
					<AniButton
						btnTitle={'초대하기'}
						btnLayout={btn_w654}
						btnStyle={'filled'}
						btnTheme={'shadow'}
						titleFontStyle={32}
						onPress={onCheckFamilyMembers}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

//InputWithSearchIcon.defaultProps = {
//	value: 'Value',
//	placeholder: 'placeholder',
//width: 654, //전체View Width/
//	onChange: e => console.log(e),
//	onSearch:  e => console.log(e),
//	onClear:  e => console.log(e),
//};
