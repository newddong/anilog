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

export default AnimalNeedHelp = props => {
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
	};

	const contents = () => {
		return (
			<View style={[animalNeedHelp.detailContainer]}>
				<View style={[animalNeedHelp.detail_upperMenu]}>
					{/* 임보요청 출력 true, false */}
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
					{/* 좋아요 State Tag */}
					<View style={[animalNeedHelp.detail_upper_tag]}>
						{favorite ? <FavoriteTag48_Filled onPress={onPressFavoriteTag} /> : <FavoriteTag48_Border onPress={onPressFavoriteTag} />}
					</View>
				</View>
				<View style={[animalNeedHelp.detail_lowerMenu]}>
					{/* 동물 종류 및 품종 */}
					<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
						<Text style={[txt.noto30b]}>{props.data.protect_animal_species}</Text>
						<Text style={[txt.noto28, animalNeedHelp.breedText]}>{props.data.protect_animal_species_detail}</Text>
					</View>
					{/* 보호요청 관련 Details */}
					<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
						<Text style={[txt.noto24]}>등록일 : {props.data.protect_request_date}</Text>
						<Text style={[txt.noto24]}>보호장소 : {props.data.shelter_name}</Text>
						<Text style={[txt.noto24]}>구조지역 : {props.data.protect_animal_rescue_location}</Text>
					</View>
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
								<AniButton
									btnLayout={[btn_w276]}
									btnTitle={'게시글 보기'}
									btnTheme={'shadow'}
									onPress={() => navigation.push('ProtectRequestManage')}
								/>
								<AniButton
									btnLayout={[btn_w276]}
									btnTitle={'입양처 보기'}
									btnTheme={'shadow'}
									onPress={() => navigation.push('AdoptorInformation')}
								/>
							</View>
					  )
					: null}
			</View>
		</>
	);
};

const dummy_AnimalNeedHelpList = [
	{
		protect_animal_photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU'], //보호중인 동물 사진
		protect_animal_rescue_date: '2021-11-24', //보호중인 동물의 구조일자(보호소가 동물을 맡은 일자)
		protect_animal_rescue_location: '자운동', //보호중인 동물의 구조장소
		protect_animal_species: '고양이', //보호중인 동물의 종류(ex 개, 고양이, 토끼)
		protect_animal_species_detail: '러브숏', //보호중인 동물의 종류(ex 리트리버, 푸들, 진돗개)
		protect_animal_sex: 'male', //보호중인 동물의 성별
		protect_animal_neutralization: 'yes', //중성화 여부
		protect_animal_estimate_age: '6개월', //보호중인 동물의 추정 연령
		protect_animal_weight: '1.2', //몸무게
		protect_animal_status: 'rescue', // Enum(‘rescue’,’adopt’,’protect’,’rainbowbridge’,’discuss’), //보호중인 동물의 상태,
		protect_animal_adoption_days_remain: 10,
		protect_animal_protect_request: true,
		//기본상태는 rescue임 (동물이 구조되어 보호소로 들어온 최초 상태)
		//임시보호가 되면 protect로 변경
		//입양을 가게 되면 상태가 adopt로 변경
		//임시보호, 입양 협의중이면 discuss로 변경
		//안락사, 혹은 폐사상태가 되면 rainbowbridge로 변경
		protect_animal_writer_id: null, // Mongodb_ID(ref:UserObject), //보호요청을 작성한 작성자(보호소)
		protect_animal_protect_request_id: null, //Mongodb_ID(ref:ProtectRequestObject), //보호요청 게시물
		protect_animal_adoptor_id: null, //Mongodb_ID(ref:UserObject), //입양자
		protect_animal_protector_id: null, //Mongodb_ID(ref:UserObject), //임시보호자
		protect_animal_protector_discussion_id: null, // Mongodb_ID(ref:UserObject), //입양, 임시보호 협의중인 유저
	},
];

AnimalNeedHelp.defaultProps = {
	data: {
		kind: '개', // 종류
		breed: '시고르자브종', //품종
		temp_protection_request: true, // 임보 요청 Text On/off
		adoption_days_remain: 10, // Detail 상단메뉴 '10일 후 입양 가능'
		like: false, // 좋아요 Tag State
		registered_date: '2021-06-17', //등록일
		location: '자운', // 보호 장소
		saved_location: '경기도 강정동', // 구조 장소
		// ProtectedThumbnail Component 호출용 Data
		thumbnailData: {
			img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
			gender: 'female',
			status: 'adoption_available',
		},
	},
	selected: false,
	onLabelClick: e => console.log(e),
};
