import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
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
	const [filterData, setFilterData] = React.useState({
		city: '',
		protect_animal_species: '',
		adoptable_posts: false,
		protect_request_object_id: '',
		request_number: 10,
	});
	React.useEffect(() => {
		console.log('Filter State', filterData);
		// console.log(`ProtectRequestList:seding data -${data}`);
		getProtectRequestList(
			filterData,
			data => {
				// console.log('data' + JSON.stringify(`data${data.msg[7]}`));
				console.log('length', data.msg[5]);
				let filtered = [...data.msg];
				// data.msg.map( (v,i)=>{
				// 	if(v.protect_request_status =='')
				// })
				// console.log('보호요청 ', data.msg[0]);
				// data.msg.forEach(e => console.log('forEach', e.protect_animal_id.protect_animal_sex, e.protect_animal_id.protect_animal_status));
				data.msg.forEach(each => {
					each.protect_animal_sex = each.protect_animal_id.protect_animal_sex;
					each.protect_animal_status = each.protect_animal_id.protect_animal_status;
				});
				//아직 입양 완료된 목록을 제외하고 조회하는 API가 없음. 수동 처리
				if (filterData.adoptable_posts) {
					filtered = data.msg.filter(e => e.protect_request_status != 'complete');
					setData(filtered);
				} else {
					setData(data.msg);
				}
			},
			err => {
				console.log(`errcallback:${JSON.stringify(err)}`);
				if (err == '검색 결과가 없습니다.') {
					setData([]);
				}
			},
		);
	}, [filterData]);

	const onClickLabel = (status, id, item) => {
		//data에는 getProtectRequestList(어떠한 필터도 없이 모든 보호요청게시글을 출력)의 결과값이 담겨있음
		//따라서 출력할 것을 해당 게시글의 작성자(보호소)가 작성한 보호요청게시글로 좁혀야함
		console.log('item', item.protect_request_writer_id._id);
		getProtectRequestListByShelterId(
			{
				shelter_userobject_id: item.protect_request_writer_id._id,
				protect_request_status: 'all',
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getPRotectRequestListByShelterId / ProtectRequestList  : ', result.msg);
				navigation.navigate('AnimalProtectRequestDetail', {item: item, list: result.msg});
			},
			err => {
				console.log('err / getProtectRequestListByShelterId / ProtectRequestList   : ', err);
			},
		);
	};

	const filterOn = () => {
		// alert('입양 가능한 게시글만 보기');
		console.log('입양 가능한 게시글만 보기');
		setFilterData({...filterData, adoptable_posts: true});
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 OFF');
		setFilterData({...filterData, adoptable_posts: false});
	};
	//별도의 API 사용 예정.
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};
	//지역 필터
	const onSelectLocation = location => {
		location == '지역' ? setFilterData({...filterData, city: ''}) : setFilterData({...filterData, city: location});
	};

	//동물종류 필터
	const onSelectKind = kind => {
		kind == '동물종류' ? setFilterData({...filterData, protect_animal_species: ''}) : setFilterData({...filterData, protect_animal_species: kind});
	};
	//검색결과가 없을 경우
	const whenEmpty = () => {
		return (
			<View style={[{height: 100 * DP, marginVertical: 30 * DP, alignItems: 'center', justifyContent: 'center'}]}>
				<Text style={[txt.roboto30b, {color: GRAY10}]}> 검색결과가 없습니다.</Text>
			</View>
		);
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
						{/* 입양 가능한 게시물만 보기 */}
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
					{/* <ActivityIndicator  */}
					<AnimalNeedHelpList data={data} onClickLabel={onClickLabel} onFavoriteTag={onOff_FavoriteTag} whenEmpty={whenEmpty()} />
				</View>
			</ScrollView>
		</View>
	);
};

ProtectRequestList.defaultProps = {};

const q = {
	_id: '61c576f538c5f6dee5a8ba06',
	protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg'],
	protect_animal_species: '기타',
	protect_animal_species_detail: '호랑이',
	protect_request_title: '호랑이가 보호소 동물들 다 잡아먹게 생겼습니다.',
	protect_request_content: '지금이야 애기때라 괜찮죠 슬슬 타임아웃을 것 같습니다.\n이왕이면 사람이 ',
	protect_request_hit: 0,
	protect_request_favorite_count: 0,
	protect_request_comment_count: 0,
	protect_request_writer_id: {
		user_agreement: {
			is_over_fourteen: false,
			is_service: false,
			is_personal_info: false,
			is_location_service_info: false,
			is_donation_info: false,
			is_marketting_info: false,
		},
		shelter_address: {brief: '강원도 평창군 신리', detail: '농협 평창점 인근'},
		_id: '61c5724c38c5f6dee5a8b95c',
		user_type: 'shelter',
		user_name: '상우보호소',
		user_nickname: '상우보호소',
		user_phone_number: '01096450000',
		user_is_verified_phone_number: false,
		user_email: 'lanad01@naver.com',
		user_is_verified_email: false,
		user_password: '121212',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640329804382_4dee254dc01680d6f4aa9dc3f03242fc.png',
		user_introduction: '강원도 평창군 신리 소재의 보호소',
		shelter_name: '상우보호소',
		shelter_homepage: 'http://aniglog.com',
		shelter_delegate_contact_number: '01096450000',
		shelter_foundation_date: '2011-11-21T00:00:00.000Z',
		user_upload_count: 0,
		user_follow_count: 0,
		user_follower_count: 0,
		user_denied: false,
		user_my_pets: [],
		pet_family: [],
		user_interests: [],
		user_register_date: '2021-12-24T07:10:04.466Z',
		__v: 2,
	},
	protect_request_status: 'complete',
	protect_request_date: '2021-12-24T07:29:57.236Z',
	protect_request_update_date: '2021-12-24T07:29:57.236Z',
	protect_animal_id: {
		_id: '61c576c638c5f6dee5a8b9fd',
		protect_animal_photo_uri_list: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330950796_A5781A26-0592-422C-BB9C-21A269B4B578.jpg',
		],
		protect_animal_rescue_date: '2021-12-01T00:00:00.000Z',
		protect_animal_rescue_location: '강원도 강릉시 주문진 인근',
		protect_animal_species: '기타',
		protect_animal_species_detail: '호랑이',
		protect_animal_sex: 'female',
		protect_animal_neutralization: 'unknown',
		protect_animal_estimate_age: '2개월',
		protect_animal_weight: 8,
		protect_animal_status: 'rescue',
		protect_animal_belonged_shelter_id: '61c5724c38c5f6dee5a8b95c',
		protect_animal_protector_discussion_id: [],
		protect_act_applicants: [],
		__v: 0,
		protect_animal_protect_request_id: '61c576f538c5f6dee5a8ba06',
	},
	__v: 0,
	protect_animal_sex: 'female',
	protect_animal_status: 'rescue',
};
