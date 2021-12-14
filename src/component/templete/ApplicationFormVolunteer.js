import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BLUE20, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {Calendar48_Filled, Person48, Phone48} from '../atom/icon';
import Modal from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import ShelterInfo from '../molecules/ShelterInfo';
import AccountList from '../organism_ksw/AccountList';
import {login_style, applicationFormVolunteer, btn_style} from './style_templete';
import {_dummy_ApplicationFormVolunteer_shelter} from 'Root/config/dummy_data_hjs';
import {acceptVolunteer, cancelVolunteer, getVolunteerItemDetail} from 'Root/api/volunteer_api_ksw';
import {Linking} from 'react-native';

//ApplicationFormVolunteer (봉사활동 신청서 폼) 호출 네비게이트
// ==> ManageVolunteer에서 더보기 클릭, 혹은 AppliesRecord(신청내역)에서 보호소 라벨 클릭 <==
export default ApplicationFormVolunteer = ({route, navigation}) => {
	// console.log('route / ApplicationFormVolunteer', route.params);
	const [data, setData] = React.useState(route.params);
	const isShelterOwner = route.name == 'ShelterVolunteerForm';
	// const isShelterOwner = false;

	//봉사활동 디테일 정보 얻어오기, 차후 Data에 담기
	React.useEffect(() => {
		async function getVolunteerList() {
			getVolunteerItemDetail(
				data._id,
				successed => {
					console.log('success / getVolunteerList', successed);
				},
				err => {
					console.log('err', err);
				},
			);
		}
		getVolunteerList();
	}, []);

	//일반 봉사활동 신청자 계정이 신청 취소 버튼을 눌렀을 때
	const onPressCancel = () => {
		Modal.popTwoBtn(
			'봉사활동 신청을 취소하시겠습니까? ',
			'아니오',
			'그래요',
			() => Modal.close(),
			() => {
				Modal.close();
				//봉사활동 신청 취소 - 대상 봉사활동의 고유 아이디를 보내고 해당 봉사활동의 봉사활동자 목록(volunteer_accompany)에서 현재 유저를 제외.
				//만약 현재 봉사활동자 목록이 단 한명이 남은 상태(로그인 유저)라면 봉사활동 자체가 취소 상태로 되는 로직 구현 필요
				cancelVolunteer(
					data._id,
					successed => {
						console.log('successed / cancelVolunteer', successed);
						Modal.popNoBtn('봉사활동이 취소되었습니다.');
						setTimeout(() => {
							Modal.close();
							navigation.goBack();
						}, 1500);
					},
					err => {
						console.log('err', err);
					},
				);
			},
		);
	};

	// 해당 보호소 계정이 봉사활동 신청서 활동승인 버튼을 눌렀을 때
	const onPressConfirm = () => {
		console.log('before press confirm', data);
		Modal.popTwoBtn(
			'활동 승인을 하시겠습니까? \n 추가 안내는 개별 연락이 필요합니다.',
			'취소',
			'승인',
			() => Modal.close(),
			() => {
				Modal.close();
				acceptVolunteer(
					data._id,
					successed => {
						console.log('successed / acceptVolunteer', successed);
						Modal.popNoBtn('활동 승인이 완료되었습니다!');
						setTimeout(() => {
							Modal.close();
							navigation.goBack();
						}, 1000);
					},
					err => {
						console.log('err / acceptVolunteer', err);
					},
				);
			},
		);
	};

	const onPressPhoneCall = () => {
		Linking.openURL(`tel:${data.volunteer_delegate_contact}`);
	};

	const onClickLabel = data => {
		console.log('data', data);
		navigation.push('UserProfile', data);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView contentContainerStyle={[applicationFormVolunteer.container]} showsVerticalScrollIndicator={false}>
				{/* 보호소 정보 박스 (보호소 계정 본인이면 안보여야한다) */}
				{isShelterOwner ? (
					<></>
				) : (
					<View style={[applicationFormVolunteer.shelterInfo]}>
						<ShelterInfo data={data} />
					</View>
				)}
				{/* 봉사활동 희망날짜 */}
				<View style={[applicationFormVolunteer.viewForm]}>
					<View style={[applicationFormVolunteer.viewForm_step1]}>
						<View style={[applicationFormVolunteer.icon48]}>
							<Calendar48_Filled />
						</View>
						<View style={[applicationFormVolunteer.title]}>
							<Text style={[txt.noto24b, {color: GRAY10}]}>봉사활동 희망 날짜</Text>
						</View>
					</View>
					{/* [hjs]API 선작업까지만 유효한 부분 추후에 변경 필요 */}
					{/* {console.log('_dummy_ApplicationFormVolunteer_shelter=>' + JSON.stringify(_dummy_ApplicationFormVolunteer_shelter[0]))} */}
					<View style={{}}>
						{Array(data.volunteer_wish_date.length / 3) //페이징 3개 단위로 나눔
							.fill(1) // undefined면 값이 호출되지 않으니 1로 일괄 추가
							.map((v, pagingNumber) => {
								return (
									<View key={pagingNumber} style={[applicationFormVolunteer.wish_date_separator]}>
										{data.volunteer_wish_date.map((v, i) => {
											if (Math.floor(i / 3) == pagingNumber)
												// 페이징 기준인 3으로 나눈 몫이 각 pagingNumber값과 일치하는 경우만 출력
												return (
													<Text key={i} style={[txt.roboto28]}>
														{'   '}
														{v} {'  /  '}
													</Text>
												);
										})}
									</View>
								);
							})}
					</View>
				</View>
				{/* 참여인원 */}
				<View style={[applicationFormVolunteer.participants]}>
					<View style={[applicationFormVolunteer.participants_step1]}>
						<View style={[applicationFormVolunteer.icon48]}>
							<Person48 />
						</View>
						<View style={[applicationFormVolunteer.title]}>
							<Text style={[txt.noto24b, {color: GRAY10}]}>참여 인원</Text>

							<Text style={[txt.roboto28, {marginLeft: 5, marginTop: 2}]}>{data.volunteer_accompany ? data.volunteer_accompany.length : '0'}</Text>
						</View>
					</View>
					{/* 참여 리스트 */}
					<View style={[applicationFormVolunteer.participants_step2]}>
						<AccountList items={data.volunteer_accompany || []} onClickLabel={onClickLabel} makeBorderMode={false} showCrossMark={false} />
					</View>
				</View>
				{/* 봉사활동자 연락처 */}
				<View style={[applicationFormVolunteer.participants_contact]}>
					<View style={[applicationFormVolunteer.viewForm_step1]}>
						<View style={[applicationFormVolunteer.icon48]}>
							<Phone48 />
						</View>
						<View style={[applicationFormVolunteer.title]}>
							<Text style={[txt.noto24b, {color: GRAY10}]}>봉사 활동자 연락처</Text>
						</View>
					</View>
					<View style={[applicationFormVolunteer.participants_contact_text]}>
						{isShelterOwner ? (
							<TouchableOpacity onPress={onPressPhoneCall}>
								<Text style={[txt.roboto28, {color: BLUE20, textDecorationLine: 'underline'}]}>{data.volunteer_delegate_contact || ''}</Text>
							</TouchableOpacity>
						) : (
							<Text style={[txt.roboto28]}>{data.volunteer_delegate_contact || ''}</Text>
						)}
					</View>
				</View>
				<View style={[btn_style.btn_w226, applicationFormVolunteer.btn_w226]}>
					{isShelterOwner ? (
						<AniButton onPress={onPressConfirm} btnTitle={'활동 승인'} />
					) : (
						<AniButton onPress={onPressCancel} btnTitle={'신청 취소'} btnStyle={'border'} />
					)}
				</View>
			</ScrollView>
		</View>
	);
};
