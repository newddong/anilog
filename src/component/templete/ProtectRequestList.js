import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {GRAY10} from 'Root/config/color';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';
import {dummy_ProtectRequestList} from 'Root/config/dummy_data_hjs';
import {ONLY_CONTENT_FOR_ADOPTION, PET_KIND, PET_PROTECT_LOCATION} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import {getProtectRequestList, getProtectRequestListByShelterId} from 'Root/api/shelterapi.js';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState([]);

	//보호 요청 데이터 불러오기 (아직 API 미작업 )
	React.useEffect(() => {
		// console.log(`ProtectRequestList:seding data -${data}`);
		getProtectRequestList(
			{
				//필터 - 보호지역 (user_address.city 데이터)
				city: '',
				//필터 - 동물종류
				protect_animal_species: '',
				//입양 가능한 게시글만 보기
				adoptable_posts: false,
				//커서 역할을 할 보호요청 오브잭트(페이징 처리)
				protect_request_object_id: '',
				//보호요청게시글 요청 숫자
				request_number: 1,
			},
			data => {
				// console.log('data' + JSON.stringify(`data${data}`));
				// console.log('보호요청 ', data.msg[0]);
				setData(data.msg);
			},
			errcallback => {
				console.log(`errcallback:${JSON.stringify(errcallback)}`);
			},
		);
	}, [route.params]);

	const onClickLabel = (status, id, item) => {
		//data에는 getProtectRequestList(어떠한 필터도 없이 모든 보호요청게시글을 출력)의 결과값이 담겨있음
		//따라서 출력할 것을 해당 게시글의 작성자(보호소)가 작성한 보호요청게시글로 좁혀야함
		console.log('item', item.protect_request_writer_id._id);
		getProtectRequestListByShelterId(
			{
				shelter_userobject_id: item.protect_request_writer_id._id,
				protect_request_status: 'rescue',
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getPRotectRequestListByShelterId / ProtectRequestList  : ', result.msg);
				navigation.navigate('ProtectRequestManage', {item: item, list: result.msg});
			},
			err => {
				console.log('err / getProtectRequestListByShelterId / ProtectRequestList   : ', err);
			},
		);
	};

	const filterOn = () => {
		// alert('입양 가능한 게시글만 보기');
		console.log('입양 가능한 게시글만 보기');
		setData({...data, adoptable_posts: true});
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 보기');
		setData({...data, adoptable_posts: false});
	};
	//별도의 API 사용 예정.
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};
	const onSelectLocation = location => {
		setData({...data, city: location});
	};

	const onSelectKind = kind => {
		setData({...data, protect_animal_species: kind});
	};
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_PROTECT_LOCATION} onSelect={onSelectLocation} width={306} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} onSelect={onSelectKind} width={306} />
							</View>
						</View>
						<View style={[searchProtectRequest.filterView.onOffBtnView]}>
							<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
								<Text style={[txt.noto20, {color: GRAY10}]}>{ONLY_CONTENT_FOR_ADOPTION}</Text>
							</View>
							<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
								<OnOffSwitch onSwtichOn={filterOn} onSwtichOff={filterOff} />
							</View>
						</View>
					</View>
				</View>
				<View style={[searchProtectRequest.animalNeedHelpList]}>
					<AnimalNeedHelpList data={data} onClickLabel={onClickLabel} onFavoriteTag={onOff_FavoriteTag} />
				</View>
			</ScrollView>
		</View>
	);
};

ProtectRequestList.defaultProps = {};

const t = [
	{
		__v: 0,
		_id: '61c086baa9dce34eff2813bc',
		protect_animal_id: '61b852bcc02491f75d05851f',
		protect_animal_species: '드래곤',
		protect_animal_species_detail: '레드',
		protect_request_comment_count: 0,
		protect_request_content: '테스트입니다...',
		protect_request_date: '2021-12-20T13:35:54.338Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640007354097_wVyP7Qtnkko.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640007354107_YQkT1zNMSWw.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469755996_GQduCe7EI_0.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756009_P5v-dOEsmdw.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756038_Uhky0oIkFCE.jpg',
		],
		protect_request_status: 'rescue',
		protect_request_title: 'wpxhasㅆ테스트',
		protect_request_update_date: '2021-12-20T13:35:54.338Z',
		protect_request_writer_id: {
			__v: 1,
			_id: '61b585861d58f109766f5f0f',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '',
			shelter_foundation_date: null,
			shelter_homepage: '',
			shelter_name: '백설기 보호소',
			user_agreement: [Object],
			user_denied: false,
			user_email: '',
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [Array],
			user_introduction: '',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: '백설 보호소',
			user_nickname: '백설 보호소',
			user_password: '1234',
			user_phone_number: '12345',
			user_register_date: '2021-12-12T05:15:50.515Z',
			user_type: 'shelter',
			user_upload_count: 0,
		},
	},
	{
		__v: 0,
		_id: '61c175d0b83cbeb3c893db71',
		protect_animal_id: {
			__v: 0,
			_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '4년 1개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c175d0b83cbeb3c893db71',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
			protect_animal_rescue_location: '고르고스 언덕',
			protect_animal_sex: 'male',
			protect_animal_species: '기타',
			protect_animal_species_detail: '치와와',
			protect_animal_status: 'protect',
			protect_animal_weight: 12,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: '나이는 많아 보이지만 아주 정이 많아보입니다. 데려가기를 연락하세요.',
		protect_request_date: '2021-12-21T06:36:00.739Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [],
		protect_request_status: 'complete',
		protect_request_title: '새로운 엄마를 구해요',
		protect_request_update_date: '2021-12-21T06:36:00.739Z',
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
	{
		__v: 0,
		_id: '61c188ba2aaa7e1134cef1e2',
		protect_animal_id: {
			__v: 0,
			_id: '61c07f0c0b3fb5a4acae2c26',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61c023d9679aa5ae46128102',
			protect_animal_estimate_age: '4년 1개월',
			protect_animal_neutralization: 'unknown',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
			protect_animal_rescue_location: '고르고스 언덕',
			protect_animal_sex: 'female',
			protect_animal_species: '기타',
			protect_animal_species_detail: '치와와',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '기타',
		protect_animal_species_detail: '치와와',
		protect_request_comment_count: 0,
		protect_request_content: '함께 상처를 치료할 동반자를 구합니다. ',
		protect_request_date: '2021-12-21T07:56:42.286Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640073402165_8.jpg'],
		protect_request_status: 'rescue',
		protect_request_title: '아직 사람을 그리워하는 것 같습니다.',
		protect_request_update_date: '2021-12-21T07:56:42.286Z',
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
	{
		__v: 0,
		_id: '61c18f052aaa7e1134cef32e',
		protect_animal_id: {
			__v: 0,
			_id: '61c18dd02aaa7e1134cef2e1',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61ba9dbc4772b1e1d3f2ed60',
			protect_animal_estimate_age: '2',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c18f052aaa7e1134cef32e',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2021-10-13T00:00:00.000Z',
			protect_animal_rescue_location: '한강뷰 아파트',
			protect_animal_sex: 'male',
			protect_animal_species: '개',
			protect_animal_species_detail: '웰시코기',
			protect_animal_status: 'rescue',
			protect_animal_weight: 9,
		},
		protect_animal_species: '개',
		protect_animal_species_detail: '웰시코기',
		protect_request_comment_count: 0,
		protect_request_content:
			'점프력이 굉장히 높아서 자녀들과 공놀이 하기 좋은 녀석입니다.  음식도 가리지 않고 먹어서 사료 걱정도 크게 하지 않으셔도 됩니다. 암컷이라서 나중에  분양하기도 편하고 오리지널 종이라서 우대 받으실 수 있습니다. 보호소에서 종은 보장해 드립니다. 당연히 무료로 입양 가능합니다.',
		protect_request_date: '2021-12-21T08:23:33.092Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640075012536_KakaoTalk_Photo_2021-12-07-21-05-56.jpeg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640074702974_KakaoTalk_Photo_2021-12-07-21-05-56.jpeg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '웰시코기 몰고 가세요 ~',
		protect_request_update_date: '2021-12-21T08:23:33.092Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61ba9dbc4772b1e1d3f2ed60',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '0310000000',
			shelter_foundation_date: '2021-10-01T00:00:00.000Z',
			shelter_homepage: 'http://naver.com',
			shelter_name: 'js보호소',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'asd@asdf.com',
			user_follow_count: 5,
			user_follower_count: 30,
			user_interests: [Array],
			user_introduction: '서울 종로구에 있는 유기동물 보호소입니다.웰시코기와 퍼그가 많습니다.',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: 'js보호소',
			user_nickname: 'js보호소',
			user_password: '1234',
			user_phone_number: '0310000000',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639620027946_2020122516351670590_m.png',
			user_register_date: '2021-12-16T02:00:28.201Z',
			user_type: 'shelter',
			user_upload_count: 10,
		},
	},
	{
		__v: 0,
		_id: '61c1a48c0d5d4eede496b687',
		protect_animal_id: {
			__v: 0,
			_id: '61c1a41e0d5d4eede496b684',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61ba9dbc4772b1e1d3f2ed60',
			protect_animal_estimate_age: '2',
			protect_animal_neutralization: 'yes',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c1a48c0d5d4eede496b687',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2021-09-15T00:00:00.000Z',
			protect_animal_rescue_location: '성수대교',
			protect_animal_sex: 'female',
			protect_animal_species: '개',
			protect_animal_species_detail: '몽벨',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '개',
		protect_animal_species_detail: '몽벨',
		protect_request_comment_count: 0,
		protect_request_content:
			'대소변을 알아서 잘 커버하는 아주 똑똑한 아이에요. 워낙 목욕도 좋아해서 매일 하지 않으면 투정을 부릴 정도에요. 보호 요청 하실분 계시나요??',
		protect_request_date: '2021-12-21T09:55:24.546Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640080524428_6cd48ed7156b799d13a263e3e189ef1f.jpeg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640080413913_6cd48ed7156b799d13a263e3e189ef1f.jpeg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '몽벨 보호요청 합니다.',
		protect_request_update_date: '2021-12-21T09:55:24.546Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61ba9dbc4772b1e1d3f2ed60',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '0310000000',
			shelter_foundation_date: '2021-10-01T00:00:00.000Z',
			shelter_homepage: 'http://naver.com',
			shelter_name: 'js보호소',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'asd@asdf.com',
			user_follow_count: 5,
			user_follower_count: 30,
			user_interests: [Array],
			user_introduction: '서울 종로구에 있는 유기동물 보호소입니다.웰시코기와 퍼그가 많습니다.',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: 'js보호소',
			user_nickname: 'js보호소',
			user_password: '1234',
			user_phone_number: '0310000000',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639620027946_2020122516351670590_m.png',
			user_register_date: '2021-12-16T02:00:28.201Z',
			user_type: 'shelter',
			user_upload_count: 10,
		},
	},
	{
		__v: 0,
		_id: '61c1acb20d5d4eede496b6be',
		protect_animal_id: {
			__v: 0,
			_id: '61c1ac240d5d4eede496b6bb',
			protect_act_applicants: [Array],
			protect_animal_belonged_shelter_id: '61ba9dbc4772b1e1d3f2ed60',
			protect_animal_estimate_age: '8',
			protect_animal_neutralization: 'no',
			protect_animal_photo_uri_list: [Array],
			protect_animal_protect_request_id: '61c1acb20d5d4eede496b6be',
			protect_animal_protector_discussion_id: [Array],
			protect_animal_rescue_date: '2020-12-12T00:00:00.000Z',
			protect_animal_rescue_location: '주차장',
			protect_animal_sex: 'male',
			protect_animal_species: '개',
			protect_animal_species_detail: '푸들리스트',
			protect_animal_status: 'rescue',
			protect_animal_weight: 12,
		},
		protect_animal_species: '개',
		protect_animal_species_detail: '푸들리스트',
		protect_request_comment_count: 0,
		protect_request_content: '텐션 높은 아이이며, 유쾌한 성격입니다.',
		protect_request_date: '2021-12-21T10:30:10.607Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos_uri: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640082610275_KakaoTalk_Photo_2021-12-07-21-04-33.jpeg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640082467588_KakaoTalk_Photo_2021-12-07-21-04-33.jpeg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '매력적인 까망이',
		protect_request_update_date: '2021-12-21T10:30:10.607Z',
		protect_request_writer_id: {
			__v: 0,
			_id: '61ba9dbc4772b1e1d3f2ed60',
			pet_family: [Array],
			shelter_address: [Object],
			shelter_delegate_contact_number: '0310000000',
			shelter_foundation_date: '2021-10-01T00:00:00.000Z',
			shelter_homepage: 'http://naver.com',
			shelter_name: 'js보호소',
			user_agreement: [Object],
			user_denied: false,
			user_email: 'asd@asdf.com',
			user_follow_count: 5,
			user_follower_count: 30,
			user_interests: [Array],
			user_introduction: '서울 종로구에 있는 유기동물 보호소입니다.웰시코기와 퍼그가 많습니다.',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [Array],
			user_name: 'js보호소',
			user_nickname: 'js보호소',
			user_password: '1234',
			user_phone_number: '0310000000',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639620027946_2020122516351670590_m.png',
			user_register_date: '2021-12-16T02:00:28.201Z',
			user_type: 'shelter',
			user_upload_count: 10,
		},
	},
	{
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
];
