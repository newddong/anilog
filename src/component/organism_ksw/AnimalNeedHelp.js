import React from 'react';
import {View, Text} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w276} from '../atom/btn/btn_style';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AniButton from '../molecules/AniButton';
import {FavoriteTag48_Border, FavoriteTag48_Filled} from '../atom/icon';
import {BLUE10, BLUE20, RED10} from 'Root/config/color';
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
 *onPressProtectRequest : 'void / 테두리 모드 게시글보기 클릭',
 *onPressReporter : 'void / 제보 게시글의 제보자 닉네임 클릭',
 * }} props
 */
export default AnimalNeedHelp = props => {
	const data = props.data;
	// console.log('AnimalNeedHelp: -------------- ', JSON.stringify(data.protect_request_photo_thumbnail));
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
			resultJSON.img_uri = data.protect_request_photos_uri?.[0] || DEFAULT_ANIMAL_PROFILE;
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

	const onPressReporter = () => {
		props.onPressReporter();
	};

	const getParsedDate = () => {
		let date = '';
		if (data.feed_type == 'missing') {
			date = data.missing_animal_date;
		} else if (data.feed_type == 'report') {
			date = data.report_witness_date;
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
									{/* 보호장소 : {data.protect_request_writer_id != null ? data.protect_request_writer_id.shelter_name : data.shelter_name} */}
									보호장소 : {data.shelter_name ? data.shelter_name : data.protect_request_writer_id.shelter_name}
									{/* 보호장소 : {data.shelter_name} */}
								</Text>
								<Text style={[txt.noto24]}>
									구조지역 :
									{data.protect_animal_rescue_location
										? data.protect_animal_rescue_location
										: data.protect_animal_id
										? data.protect_animal_id.protect_animal_rescue_location
										: '작성되지 않았습니다.'}
								</Text>
							</View>
						</>
					)}
					{data.feed_type == 'missing' && (
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
					{data.feed_type == 'report' && (
						<>
							{/* 제보 / 제보위치 / 특징 */}
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
								<Text style={[txt.noto30b, {color: RED10}]}>{data.missing_animal_species || ''}</Text>
							</View>
							{/* 실종/제보 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								<Text style={[txt.noto24, {color: RED10}]}>제보일: {getParsedDate()}</Text>

								<Text style={[txt.noto24]}>제보위치: {data.report_witness_location || ''}</Text>
								<Text style={[txt.noto24]} numberOfLines={1}>
									특징: {data.missing_animal_features || ''}
								</Text>
								<Text style={[txt.noto24]} numberOfLines={1}>
									제보자: {'  '}
									<Text onPress={onPressReporter} style={{textDecorationLine: 'underline', color: BLUE20}}>
										{data.feed_writer_id.user_nickname || ''}{' '}
									</Text>
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

const q = {
	protect_act_address: {brief: '강원도 평창군 용평면 평창대로 1844', detail: '빨간지붕'},
	protect_act_checklist: {
		is_adult: true,
		is_near_veterinary: true,
		is_agreed_housemate: true,
		is_experience_defecate: true,
		is_knowledge_sanitation: true,
	},
	_id: '61c5820238c5f6dee5a8bbdd',
	protect_act_type: 'adopt',
	protect_act_phone_number: '01096450422',
	protect_act_companion_history: [
		{
			companion_pet_species: '고양이',
			companion_pet_age: '10세 이하',
			companion_pet_period: '10년 이하',
			companion_pet_current_status: 'died',
			_id: '61c5820238c5f6dee5a8bbde',
		},
	],
	protect_act_motivation: '집이 많이 넓습니다. 사슴키우는데 크게 문제 없을 것 같아요!',
	protect_act_applicant_id: '61c56c7538c5f6dee5a8b835',
	protect_act_request_article_id: {
		_id: '61c575b538c5f6dee5a8b9d1',
		protect_request_photos_uri: ['https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330052596_797A0127-E891-4286-8F6D-856C0F09003D.jpg'],
		protect_animal_species: '기타',
		protect_animal_species_detail: '사자',
		protect_request_title: '망아지 고양이 대상의 보호수입니다. 따라서 사슴까지 보호하시기 쉽지가 않네요. ',
		protect_request_content: '사슴은 생각보다 키우기가 어렵지 않습니다. ',
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
			__v: 0,
		},
		protect_request_status: 'complete',
		protect_request_date: '2021-12-24T07:24:37.461Z',
		protect_request_update_date: '2021-12-24T07:24:37.461Z',
		protect_animal_id: {
			_id: '61c5734438c5f6dee5a8b96e',
			protect_animal_photo_uri_list: [
				'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1640330052596_797A0127-E891-4286-8F6D-856C0F09003D.jpg',
			],
			protect_animal_rescue_date: '2020-12-03T00:00:00.000Z',
			protect_animal_rescue_location: '강원도 평창군 장흥이 인근',
			protect_animal_species: '기타',
			protect_animal_species_detail: '사자',
			protect_animal_sex: 'female',
			protect_animal_neutralization: 'no',
			protect_animal_estimate_age: '2년 2개월',
			protect_animal_weight: 14,
			protect_animal_status: 'rescue',
			protect_animal_belonged_shelter_id: '61c5724c38c5f6dee5a8b95c',
			protect_animal_protector_discussion_id: [],
			protect_act_applicants: [],
			__v: 0,
			protect_animal_protect_request_id: '61c575b538c5f6dee5a8b9d1',
		},
		__v: 0,
	},
	protect_act_status: 'accept',
	protect_act_request_shelter_id: '61c5724c38c5f6dee5a8b95c',
	protect_act_protect_animal_id: '61c5734438c5f6dee5a8b96e',
	__v: 0,
};
