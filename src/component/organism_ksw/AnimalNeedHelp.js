import React from 'react';
import {View, Text} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w276} from '../atom/btn/btn_style';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AniButton from '../molecules/AniButton';
import {FavoriteTag48_Border, FavoriteTag48_Filled} from '../atom/icon';
import {RED10} from 'Root/config/color';
import {DEFAULT_ANIMAL_PROFILE, DEFAULT_PROFILE} from 'Root/i18n/msg';
import moment from 'moment';

/**
 *
 *@param {{
 *data: 'data object',
 *onLabelClick: 'void / Label클릭 콜백함수 '
 *onFavoriteTag : 'void / 즐겨찾기 태그 깃발 클릭 ',
 *borderMode : 'boolean / 테두리 및 입양처보기, 게시글보기 모드 ',
 *onCheckBox : 'boolean / CheckBox 보이기',
 *onPressAdoptorInfo : 'boolean / HashClick Callback',
 *onPressProtectRequest : 'void / 테두리 모드 게시글보기 클릭'
 * }} props
 */
export default AnimalNeedHelp = props => {
	const data = props.data;
	console.log('AnimalNeedHelp / ', data.protect_animal_photo_uri_list);
	const [selected, setSelected] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);

	// 불러오는 db 필드명이 다르기에 일치시키기 위한 함수
	const checkthumbnailData = () => {
		resultJSON = {};
		resultJSON._id = data._id;

		// 사진 필드는 변경 가능성 있음. 일단 썸네일 필드로 지정
		if (data.hasOwnProperty('protect_request_photo_thumbnail')) {
			resultJSON.img_uri = data.protect_request_photo_thumbnail;
		} else if (data.hasOwnProperty('protect_request_photos_uri')) {
			//보호 요청 썸네일
			resultJSON.img_uri = data.protect_request_photos_uri[0] || DEFAULT_ANIMAL_PROFILE;
		} else if (data.hasOwnProperty('feed_thumbnail')) {
			// 실종/제보 썸네일
			resultJSON.img_uri = data.feed_thumbnail;
		} else if (data.hasOwnProperty('protect_animal_photo_uri_list')) {
			resultJSON.img_uri = data.protect_animal_photo_uri_list[0] == undefined ? DEFAULT_ANIMAL_PROFILE : data.protect_animal_photo_uri_list[0];
		} else {
			//기본 썸네일 적용
			resultJSON.img_uri = DEFAULT_ANIMAL_PROFILE;
		}

		// 보호 동물의 데이터 일 경우 (세 필드 중에 하나라도 존재 하지 않는다면 API를 불러오는 함수 확인)
		if (data.hasOwnProperty('protect_animal_sex') && data.hasOwnProperty('protect_animal_status')) {
			resultJSON.gender = data.protect_animal_sex;
			resultJSON.status = data.protect_animal_status;
		} else if (data.hasOwnProperty('feed_type')) {
			// 실종/제보는 feed_type에서 동물 상태 얻어옴
			resultJSON.status = data.feed_type;
			if (data.hasOwnProperty('missing_animal_sex')) {
				resultJSON.gender = data.missing_animal_sex;
			} else if (data.hasOwnProperty('report_animal_sex')) {
				resultJSON.gender = data.report_animal_sex;
			}
		} else {
			resultJSON.gender = 'female';
			resultJSON.status = 'rescue';
			// 기타 다른 경우의 수가 있는지 추후 확인
		}
		return resultJSON;
	};

	const [thumbnailData, setThumbnailData] = React.useState(
		checkthumbnailData,
		// img_uri: data.protect_animal_photos[0],
		// gender: data.protect_animal_sex,
		// status: data.protect_animal_status,
	);

	React.useEffect(() => {
		// setThumbnailData({...thumbnailData, img_uri: data.protect_animal_photos[0]}); //이 부분이 있어야 사진 받아오는 곳에서 비동기처리가 가능해짐.
		setThumbnailData({...thumbnailData, checkthumbnailData}); //이 부분이 있어야 사진 받아오는 곳에서 비동기처리가 가능해짐.
	}, [props.data]);

	const checkSelected = () => {
		setSelected(!selected);
	};

	//우상단 즐겨찾기 깃발 아이콘 클릭 콜백
	const onPressFavoriteTag = () => {
		setFavorite(!favorite);
		props.onFavoriteTag(!favorite);
	};

	//입양자 정보 클릭
	const onPressAdoptorInfo = () => {
		props.onPressAdoptorInfo();
	};

	const onPressProtectRequest = () => {
		props.onPressProtectRequest();
	};

	const getParsedDate = () => {
		let date = '';
		if (data.feed_type == 'missing' || data.feed_type == 'report') {
			date = data.missing_animal_date;
		} else {
			date = data.protect_request_date;
		}
		if (date != undefined && date.length > 15) {
			date = moment(date).format('YYYY-MM-DD');
			return date;
		}
		return date;
	};

	const contents = () => {
		return (
			<View style={[animalNeedHelp.detailContainer]}>
				{data.feed_type != 'missing' && data.feed_type != 'report' && (
					<View style={[animalNeedHelp.detail_upperMenu]}>
						<View style={[animalNeedHelp.detail_upper_petStateContainer]}>
							{data.protect_animal_protect_request ? (
								<View style={[animalNeedHelp.detail_upper_petState]}>
									<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>임보요청</Text>
								</View>
							) : null}
							{/* 입양가능날짜 출력 T/F */}
							{data.protect_animal_adoption_days_remain != null ? (
								<View style={[animalNeedHelp.detail_upper_petState]}>
									<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>
										{data.protect_animal_adoption_days_remain || ''}일 후 입양가능
									</Text>
								</View>
							) : null}
						</View>
						{/* 좋아요 State Tag */}
						<View style={[animalNeedHelp.detail_upper_tag]}>
							{favorite ? <FavoriteTag48_Filled onPress={onPressFavoriteTag} /> : <FavoriteTag48_Border onPress={onPressFavoriteTag} />}
						</View>
					</View>
				)}

				<View style={[animalNeedHelp.detail_lowerMenu]}>
					{data.feed_type != 'missing' && data.feed_type != 'report' && (
						<>
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed, animalNeedHelp.lowerMenu_kindAndBreed_marginTop]}>
								<Text style={[txt.noto30b]}>{data.protect_animal_species || ''}</Text>
								<Text style={[txt.noto28, animalNeedHelp.breedText]}>{data.protect_animal_species_detail || ''}</Text>
							</View>
							{/* 보호요청 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								<Text style={[txt.noto24]}>등록일 : {getParsedDate()}</Text>
								<Text style={[txt.noto24]}>
									보호장소 : {data.protect_request_writer_id != null ? data.protect_request_writer_id.shelter_name : data.shelter_name}
								</Text>
								<Text style={[txt.noto24]}>
									구조지역 :
									{data.protect_animal_rescue_location ? data.protect_animal_rescue_location : data.protect_animal_id.protect_animal_rescue_location}
								</Text>
							</View>
						</>
					)}
					{(data.feed_type == 'missing' || data.feed_type == 'report') && (
						<>
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
								<Text style={[txt.noto30b, {color: RED10}]}>{data.missing_animal_species || ''}</Text>
								<Text style={[txt.noto28, {color: RED10}, animalNeedHelp.breedText]}>{data.missing_animal_species_detail || ''}</Text>
							</View>
							{/* 실종/제보 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								{/* <Text style={[txt.noto24, {color: RED10}]}>실종일: {data.missing_animal_date || ''}</Text> */}
								<Text style={[txt.noto24, {color: RED10}]}>실종일: {getParsedDate()}</Text>
								<Text style={[txt.noto24, {color: RED10}]}>
									나이:{data.missing_animal_age || ''} / 성별: {data.missing_animal_sex}
								</Text>
								<Text style={[txt.noto24]}>실종위치: {data.missing_animal_lost_location || ''}</Text>
								<Text style={[txt.noto24]} numberOfLines={1}>
									특징: {data.missing_animal_features || ''}
								</Text>
							</View>
						</>
					)}
				</View>
			</View>
		);
	};

	return (
		<>
			<View style={[selected ? animalNeedHelp.container_seleted : animalNeedHelp.container]}>
				<View style={[animalNeedHelp.container_basicInfo]}>
					{/* CheckBox */}
					{props.checkBoxMode ? (
						<View style={[animalNeedHelp.checkBoxContainer]}>
							<CheckBox
								state={props.isCheckAll}
								isDeleted={props.isDeleted}
								checkBoxState={data.checkBoxState}
								onCheck={() => props.onCheckBox(props.data.type == 'hash' ? props.data.keyword : props.data.user_nickname)}
							/>
						</View>
					) : null}
					<View style={[animalNeedHelp.protectedThumbnail_container]}>
						{/* Pet Thumbnail */}
						{/* {console.log(`AnimalNeedHelp:thumbnailData=>${JSON.stringify(thumbnailData)}`)} */}
						<ProtectedThumbnail data={thumbnailData} onLabelClick={(status, id) => props.onClickLabel(status, id)} />
					</View>
					{/* Pet Info */}
					{/* borderMode가 true일 경우에만 TouchableOpacity가 가능하도록 함. */}
					{props.borderMode ? (
						<TouchableOpacity onPress={checkSelected}>
							<View>{contents()}</View>
						</TouchableOpacity>
					) : (
						<View>{contents()}</View>
					)}
				</View>
				{props.borderMode == true
					? selected && (
							<View style={[animalNeedHelp.sideBtn_view]}>
								<AniButton btnLayout={[btn_w276]} btnTitle={'게시글 보기'} btnTheme={'shadow'} onPress={onPressProtectRequest} />
								<AniButton btnLayout={[btn_w276]} btnTitle={'입양처 보기'} btnTheme={'shadow'} onPress={onPressAdoptorInfo} />
							</View>
					  )
					: null}
			</View>
		</>
	);
};

AnimalNeedHelp.defaultProps = {
	selected: false,
	onClickLabel: e => console.log(e),
	onFavoriteTag: e => console.log(e),
	onPressAdoptorInfo: e => console.log('e'),
	isChecked: false,
};

const y = {
	__v: 0,
	_id: '61c023d9679aa5ae46128102',
	pet_family: [],
	protect_act_address: {brief: 'string', city: '서울특별시', detail: 'string', district: '마포구 신수동', neighbor: '89-77 203호'},
	protect_act_applicant_id: '61c023d9679aa5ae46128102',
	protect_act_checklist: {
		is_adult: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
		is_near_veterinary: true,
	},
	protect_act_companion_history: [
		{
			_id: '61c1e55a7be07611b009470b',
			companion_pet_age: '1개월',
			companion_pet_current_status: 'adopt',
			companion_pet_period: '1년',
			companion_pet_species: '개',
		},
	],
	protect_act_motivation: '우리 달리의 친구를 만들어주고 싶습니다.',
	protect_act_phone_number: '01096450422',
	protect_act_protect_animal_id: '61c07f0c0b3fb5a4acae2c26',
	protect_act_request_article_id: '61c188ba2aaa7e1134cef1e2',
	protect_act_request_shelter_id: '61c023d9679aa5ae46128102',
	protect_act_status: 'wait',
	protect_act_type: 'adopt',
	protect_animal_estimate_age: '4년 1개월',
	protect_animal_neutralization: 'unknown',
	protect_animal_photo_uri_list: [],
	protect_animal_protect_request_id: '61c188ba2aaa7e1134cef1e2',
	protect_animal_rescue_date: '2004-08-12T00:00:00.000Z',
	protect_animal_rescue_location: '고르고스 언덕',
	protect_animal_sex: 'female',
	protect_animal_species: '기타',
	protect_animal_status: 'rescue',
	protect_animal_weight: 12,
	shelter_address: {brief: '마포구 신수동 89-77', detail: '203호'},
	shelter_delegate_contact_number: '01096450001',
	shelter_foundation_date: '2011-12-04T00:00:00.000Z',
	shelter_homepage: '',
	shelter_name: '상우 보호소6',
	user_agreement: {
		is_donation_info: false,
		is_location_service_info: false,
		is_marketting_info: false,
		is_over_fourteen: false,
		is_personal_info: false,
		is_service: false,
	},
	user_denied: false,
	user_email: 'lanad01@naver.com',
	user_follow_count: 0,
	user_follower_count: 0,
	user_interests: [],
	user_introduction:
		'Sadjaskldlsadjklasdjklsadjklsajdklasjdlkasjdklajsdlsajdlkjsalkdjklsajdlkasjdklajdlkasjdklasjdlkasjdlkjasdlksajdlkasjdklajdslkasjdklja',
	user_is_verified_email: false,
	user_is_verified_phone_number: false,
	user_my_pets: [],
	user_name: '상우 보호소5',
	user_nickname: '가하즈보호소',
	user_password: '121212',
	user_phone_number: '01096450001',
	user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640002215862_5A703C7F-7163-47C5-B5D4-7FCE8F4B171D.jpg',
	user_register_date: '2021-12-20T06:34:01.773Z',
	user_type: 'shelter',
	user_upload_count: 0,
};
