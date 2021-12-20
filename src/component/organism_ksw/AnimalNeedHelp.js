import React from 'react';
import {View, Text} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w276} from '../atom/btn/btn_style';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AniButton from '../molecules/AniButton';
import {FavoriteTag48_Border, FavoriteTag48_Filled} from '../atom/icon';
import {color} from 'react-native-reanimated';
import {RED10} from 'Root/config/color';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';

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
	// console.log('AnimalNeedHelp', data);
	// console.log(`AnimalNeedHelp:data=>${JSON.stringify(data)}`);
	const [selected, setSelected] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);

	// 불러오는 db 필드명이 다르기에 일치시키기 위한 함수
	const checkthumbnailData = () => {
		resultJSON = {};
		resultJSON._id = data._id;

		// 사진 필드는 변경 가능성 있음. 일단 썸네일 필드로 지정
		if (data.hasOwnProperty('protect_request_photo_thumbnail')) {
			//보호 요청 썸네일
			resultJSON.img_uri = data.protect_request_photo_thumbnail;
		} else if (data.hasOwnProperty('feed_thumbnail')) {
			// 실종/제보 썸네일
			resultJSON.img_uri = data.feed_thumbnail;
		} else {
			//기본 썸네일 적용
			resultJSON.img_uri = DEFAULT_PROFILE;
		}

		// 보호 동물의 데이터 일 경우 (세 필드 중에 하나라도 존재 하지 않는다면 API를 불러오는 함수 확인)
		if (data.hasOwnProperty('protect_animal_sex') && data.hasOwnProperty('protect_animal_status')) {
			resultJSON.gender = data.protect_animal_sex;
			resultJSON.status = data.protect_animal_status;
		}
		//실종/제보 데이터 일 경우 (세 필드 중에 하나라도 존재 하지 않는다면 API를 불러오는 함수 확인)
		else if (data.hasOwnProperty('missing_animal_sex') && data.hasOwnProperty('feed_type')) {
			resultJSON.gender = data.missing_animal_sex;
			resultJSON.status = data.feed_type;
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

	const contents = () => {
		const e = {
			__v: 0,
			_id: '61bc7bc5c946746900218905',
			pet_birthday: '2021-12-07T00:00:00.000Z',
			pet_family: ['61b84ddb4a1b66f74b699b1e'],
			pet_is_temp_protection: true,
			pet_neutralization: 'no',
			pet_sex: 'female',
			pet_species: '기타',
			pet_species_detail: '새',
			pet_status: 'protect',
			pet_weight: '11',
			user_agreement: {
				is_donation_info: false,
				is_location_service_info: false,
				is_marketting_info: false,
				is_over_fourteen: false,
				is_personal_info: false,
				is_service: false,
			},
			user_denied: false,
			user_follow_count: 0,
			user_follower_count: 0,
			user_interests: [],
			user_introduction: '',
			user_is_verified_email: false,
			user_is_verified_phone_number: false,
			user_my_pets: [],
			user_nickname: '토라',
			user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639742405433_6040B5AC-48AF-44FA-A3D0-81FF80F8C09A.jpg',
			user_register_date: '2021-12-17T12:00:05.624Z',
			user_type: 'pet',
			user_upload_count: 0,
		};
		return (
			<View style={[animalNeedHelp.detailContainer]}>
				<View style={[animalNeedHelp.detail_upperMenu]}>
					{/* {data.feed_type == 'feed' && ( */}
					{/* // 임보요청 출력 true, false */}
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
					{/* )} */}
					{/* 좋아요 State Tag */}
					<View style={[animalNeedHelp.detail_upper_tag]}>
						{favorite ? <FavoriteTag48_Filled onPress={onPressFavoriteTag} /> : <FavoriteTag48_Border onPress={onPressFavoriteTag} />}
					</View>
				</View>
				<View style={[animalNeedHelp.detail_lowerMenu]}>
					{/* {data.feed_type == 'feed' && ( */}
					<>
						{/* 동물 종류 및 품종 */}
						<View style={[animalNeedHelp.lowerMenu_kindAndBreed, animalNeedHelp.lowerMenu_kindAndBreed_marginTop]}>
							<Text style={[txt.noto30b]}>{data.protect_animal_species || ''}</Text>
							<Text style={[txt.noto28, animalNeedHelp.breedText]}>{data.protect_animal_species_detail || ''}</Text>
						</View>
						{/* 보호요청 관련 Details */}
						<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
							<Text style={[txt.noto24]}>등록일 : {data.protect_request_date || ''}</Text>
							<Text style={[txt.noto24]}>보호장소 : {data.shelter_name || ''}</Text>
							<Text style={[txt.noto24]}>구조지역 : {data.protect_animal_rescue_location || ''}</Text>
						</View>
					</>
					{/* )} */}
					{(data.feed_type == 'missing' || data.feed_type == 'report') && (
						<>
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
								<Text style={[txt.noto30b, {color: RED10}]}>{data.missing_animal_species || ''}</Text>
								<Text style={[txt.noto28, {color: RED10}, animalNeedHelp.breedText]}>{data.missing_animal_species_detail || ''}</Text>
							</View>
							{/* 실종/제보 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								<Text style={[txt.noto24, {color: RED10}]}>실종일: {data.missing_animal_date || ''}</Text>
								<Text style={[txt.noto24, {color: RED10}]}>나이:{data.missing_animal_age || ''} / 성별:</Text>
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
