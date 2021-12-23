import React from 'react';
import {ScrollView, View} from 'react-native';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputWithSearchIcon from '../molecules/InputWithSearchIcon';
import AccountList from '../organism_ksw/AccountList';
import {login_style, btn_style, temp_style, addFamilyAccount_style} from './style_templete';
import {CommonActions} from '@react-navigation/native';
import Modal from '../modal/Modal';
import {addUserToFamily, getUserListByNickname} from 'Root/api/userapi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default AddFamilyAccount = ({route, navigation}) => {
	console.log('route', route.params);
	const [searched_accountList, setSearched_accountList] = React.useState([]);
	const [selectedAccount, setSelectedAccount] = React.useState(null);

	//돋보기 버튼 클릭 콜백
	const onSearch = input => {
		//검색어로 api 연결 후 결과 리스트로 ~
		console.log(`keyword=>${input}`);
		setSearched_accountList([]);
		Modal.popNoBtn('검색 중... 잠시만 기다려주세요');
		getUserListByNickname(
			{
				user_nickname: input,
				request_number: 10,
				userobject_id: null,
				user_type: 'user',
			},
			result => {
				console.log('result / getUserListByNick / AddFamilyccount', result.msg);
				result.msg.map((v, i) => {
					// console.log('v', i, v.user_intro);
				});
				setSearched_accountList(result.msg);
				Modal.close();
			},
			err => {
				console.log('err / getUserListByNick / AddFamilyAccount', err);
				Modal.close();
				if (err == '검색 결과가 없습니다.') {
					Modal.popNoBtn('검색 결과가 없습니다.');

					setTimeout(() => {
						Modal.close();
					}, 1500);
				}
			},
		);
	};

	//검색어 Input값 변경 콜백
	const onChangeKeyword = input => {
		console.log('input', input);
	};

	const onAccountClick = item => {
		setSelectedAccount(item);
	};

	//초대하기 클릭
	const onCheckFamilyMembers = async () => {
		// console.log('리스트 인원 수 체크 후 3인이 넘어갈때 초대하면 3인까지만 가능하다는 메세지 필요 ~  3인이 안되면 API로 추가 후 goback');
		const finalize = () => {
			addUserToFamily(
				{
					userobject_id: route.params.pet_id,
					family_userobject_id: selectedAccount,
				},
				result => {
					console.log('result / addUserToFamily / AddFamilyAccount    :  ', result);
				},
				err => {
					console.log('err / addUserToFamily / AddFamilyAccount   :  ', err);
				},
			);
			Modal.close();
			navigation.goBack();
		};
		if (selectedAccount) {
			Modal.popTwoBtn('이 계정을 가족으로 추가하시겠습니까?', '취소', '추가', () => Modal.close(), finalize);
		} else {
			Modal.popOneBtn('초대하실 계정을 선택해주세요.', '확인', () => Modal.close());
		}
	};

	return (
		<View style={[login_style.wrp_main, addFamilyAccount_style.container]}>
			<ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
				<View style={[temp_style.inputWithSearchIcon, addFamilyAccount_style.inputWithSearchIcon]}>
					<InputWithSearchIcon onSearch={onSearch} onChange={onChangeKeyword} width={654} placeholder={'가족 계정을 검색해주세요.'} />
				</View>

				<View style={[temp_style.accountList, addFamilyAccount_style.accountList]}>
					<AccountList items={searched_accountList} onSelect={onAccountClick} />
					<View style={[btn_style.btn_w654, addFamilyAccount_style.btn_w654, {alignSelf: 'center'}]}>
						<AniButton onPress={onCheckFamilyMembers} btnTitle={'초대하기'} btnLayout={btn_w654} btnTheme={'shadow'} titleFontStyle={32} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
