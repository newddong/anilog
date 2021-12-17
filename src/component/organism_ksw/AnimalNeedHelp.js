import React from 'react';
import {View, Text} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w276} from '../atom/btn/btn_style';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AniButton from '../molecules/AniButton';
import {FavoriteTag48_Border, FavoriteTag48_Filled} from '../atom/icon';
import {color} from 'react-native-reanimated';
import {RED10} from 'Root/config/color';

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
		resultJSON.img_uri = data.protect_request_photos[0];
		resultJSON._id = data._id;
		// 보호 동물의 데이터 일 경우 (두 필드 중에 하나라도 존재 하지 않는다면 API를 불러오는 함수 확인)
		if (data.hasOwnProperty('protect_animal_sex') && data.hasOwnProperty('protect_animal_status')) {
			resultJSON.gender = data.protect_animal_sex;
			resultJSON.status = data.protect_animal_status;
		}
		//실종/제보 데이터 일 경우 (두 필드 중에 하나라도 존재 하지 않는다면 API를 불러오는 함수 확인)
		else if (data.hasOwnProperty('missing_animal_sex') && data.hasOwnProperty('feed_type')) {
			resultJSON.gender = data.missing_animal_sex;
			resultJSON.status = data.feed_type;
		} else {
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
		return (
			<View style={[animalNeedHelp.detailContainer]}>
				<View style={[animalNeedHelp.detail_upperMenu]}>
					{data.feed_type == 'feed' && (
						// {/* // 임보요청 출력 true, false */}
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
					)}
					{/* 좋아요 State Tag */}
					<View style={[animalNeedHelp.detail_upper_tag]}>
						{favorite ? <FavoriteTag48_Filled onPress={onPressFavoriteTag} /> : <FavoriteTag48_Border onPress={onPressFavoriteTag} />}
					</View>
				</View>
				<View style={[animalNeedHelp.detail_lowerMenu]}>
					{data.feed_type == 'feed' && (
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

const suc = [
	{
		__v: 0,
		_id: '61b8bb76bd39aff1f156d4eb',
		protect_animal_id: '61b852bcc02491f75d05851f',
		protect_request_comment_count: 0,
		protect_request_content: '성스러운 동물입니다.',
		protect_request_date: '2021-12-14T15:42:46.237Z',
		protect_request_favorite_count: 0,
		protect_request_hit: 0,
		protect_request_photos: [
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639496566052_5Os47PJIncQ.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639496566058_ZqmyLg58kgA.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469755996_GQduCe7EI_0.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756009_P5v-dOEsmdw.jpg',
			'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1639469756038_Uhky0oIkFCE.jpg',
		],
		protect_request_status: 'rescue',
		protect_request_title: '어디선가 용이 집앞에 왓어요',
		protect_request_update_date: '2021-12-14T15:42:46.237Z',
		protect_request_writer_id: '61b585861d58f109766f5f0f',
	},
];
