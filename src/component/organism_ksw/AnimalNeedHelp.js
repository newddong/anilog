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
	// console.log('props / Animal', props.data.protect_request_date);

	const [selected, setSelected] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);
	const [thumbnailData, setThumbnailData] = React.useState({
		img_uri: props.data.protect_animal_photos[0],
		gender: props.data.protect_animal_sex,
		status: props.data.protect_animal_status,
	});
	const navigation = useNavigation();

	const checkSelected = () => {
		setSelected(!selected);
	};

	React.useEffect(() => {
		setThumbnailData({
			img_uri: props.data.protect_animal_photos[0],
			gender: props.data.protect_animal_sex,
			status: props.data.protect_animal_status,
		});
	}, [props.data]);

	//우상단 즐겨찾기 깃발 아이콘 클릭 콜백
	const onPressFavoriteTag = () => {
		setFavorite(!favorite);
		props.onFavoriteTag(favorite);
	};

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
					{props.data.feed_type == 'feed' && (
						// {/* // 임보요청 출력 true, false */}
						<View style={[animalNeedHelp.detail_upper_petStateContainer]}>
							{props.data.protect_animal_protect_request ? (
								<View style={[animalNeedHelp.detail_upper_petState]}>
									<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>임보요청</Text>
								</View>
							) : null}
							{/* 입양가능날짜 출력 T/F */}
							{props.data.protect_animal_adoption_days_remain != null ? (
								<View style={[animalNeedHelp.detail_upper_petState]}>
									<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>
										{props.data.protect_animal_adoption_days_remain}일 후 입양가능
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
					{props.data.feed_type == 'feed' && (
						<>
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed, animalNeedHelp.lowerMenu_kindAndBreed_marginTop]}>
								<Text style={[txt.noto30b]}>{props.data.protect_animal_species}</Text>
								<Text style={[txt.noto28, animalNeedHelp.breedText]}>{props.data.protect_animal_species_detail}</Text>
							</View>
							{/* 보호요청 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								<Text style={[txt.noto24]}>등록일 : {props.data.protect_request_date}</Text>
								<Text style={[txt.noto24]}>보호장소 : {props.data.shelter_name}</Text>
								<Text style={[txt.noto24]}>구조지역 : {props.data.protect_animal_rescue_location}</Text>
							</View>
						</>
					)}
					{(props.data.feed_type == 'missing' || props.data.feed_type == 'report') && (
						<>
							{/* 동물 종류 및 품종 */}
							<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
								<Text style={[txt.noto30b, {color: RED10}]}>{props.data.missing_animal_species}</Text>
								<Text style={[txt.noto28, {color: RED10}, animalNeedHelp.breedText]}>{props.data.missing_animal_species_detail}</Text>
							</View>
							{/* 실종/제보 관련 Details */}
							<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
								<Text style={[txt.noto24, {color: RED10}]}>실종일: {props.data.missing_animal_date}</Text>
								<Text style={[txt.noto24, {color: RED10}]}>나이:{props.data.missing_animal_age} / 성별:</Text>
								<Text style={[txt.noto24]}>실종위치: {props.data.missing_animal_lost_location}</Text>
								<Text style={[txt.noto24]}>특징: {props.data.missing_animal_features}</Text>
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
								state={props.data.checkBoxState}
								onCheck={() => props.onCheckBox(props.data.type == 'hash' ? props.data.keyword : props.data.user_nickname)}
							/>
						</View>
					) : null}
					<View style={[animalNeedHelp.protectedThumbnail_container]}>
						{/* Pet Thumbnail */}
						<ProtectedThumbnail data={thumbnailData} onLabelClick={(status, id) => props.onLabelClick(status, id)} />
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
	onLabelClick: e => console.log(e),
	onFavoriteTag: e => console.log(e),
	onPressAdoptorInfo: e => console.log('e'),
};
