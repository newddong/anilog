import React from 'react';
import {View, Text} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w276} from '../atom/btn/btn_style';
import {FavoriteTag48_Border, FavoriteTag48_Filled, Male48, Rect48_Border} from '../atom/icon';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AniButton from '../molecules/AniButton';

export default AnimalNeedHelp = props => {
	const [checkBox, setCheckBox] = React.useState(false); //각 동물 item 옆 체크박스 View 생성여부
	// const [selected, setSelected] = React.useState(true); //각 동물 item 옆 체크박스 View 생성여부
	const data = props.data.thumbnailData; //ProtectedThumbnail 컴포넌트에 필요한 data fields
	const navigation = useNavigation();
	const [selected, setSelected] = React.useState(false); //클릭한 상태에 따라 입양처 보기, 게시글 보기

	const changeSelete = () => {
		setSelected(!selected);
		console.log('selected=>' + selected);
	};

	return (
		<>
			<TouchableOpacity onPress={changeSelete}>
				<View style={[selected ? animalNeedHelp.container_seleted : animalNeedHelp.container]}>
					<View style={[animalNeedHelp.container_basicInfo]}>
						{/* CheckBox */}
						{checkBox ? (
							<View style={[animalNeedHelp.checkBoxContainer]}>
								<Rect48_Border />
							</View>
						) : null}
						<View style={[animalNeedHelp.protectedThumbnail_container]}>
							{/* Pet Thumbnail */}
							<ProtectedThumbnail data={data} />
						</View>
						{/* Pet Info */}
						<View style={[animalNeedHelp.detailContainer]}>
							<View style={[animalNeedHelp.detail_upperMenu]}>
								{/* 임보요청 출력 true, false */}
								<View style={[animalNeedHelp.detail_upper_petStateContainer]}>
									{props.data.temp_protection_request ? (
										<View style={[animalNeedHelp.detail_upper_petState]}>
											<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>임보요청</Text>
										</View>
									) : null}
									{/* 입양가능날짜 출력 T/F */}
									{props.data.adoption_days_remain != null ? (
										<View style={[animalNeedHelp.detail_upper_petState]}>
											<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>{props.data.adoption_days_remain}일 후 입양가능</Text>
										</View>
									) : null}
								</View>
								{/* 좋아요 State Tag */}
								<View style={[animalNeedHelp.detail_upper_tag]}>{props.data.like ? <FavoriteTag48_Filled /> : <FavoriteTag48_Border />}</View>
							</View>
							<View style={[animalNeedHelp.detail_lowerMenu]}>
								{/* 동물 종류 및 품종 */}
								<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
									<Text style={[txt.noto30b]}>{props.data.kind}</Text>
									<Text style={[txt.noto28, animalNeedHelp.breedText]}>{props.data.breed}</Text>
								</View>
								{/* 보호요청 관련 Details */}
								<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
									<Text style={[txt.noto24]}>등록일 : {props.data.registered_date}</Text>
									<Text style={[txt.noto24]}>보호장소 : {props.data.location}</Text>
									<Text style={[txt.noto24]}>구조지역 : {props.data.saved_location}</Text>
								</View>
							</View>
						</View>
					</View>
					{selected && (
						<View style={[animalNeedHelp.sideBtn_view]}>
							<AniButton
								btnLayout={[btn_w276]}
								btnTitle={'게시글 보기'}
								btnTheme={'shadow'}
								btnStyle={'filled'}
								titleFontStyle={24}
								onPress={() => navigation.push('ProtectRequestManage')}
							/>
							<AniButton
								btnLayout={[btn_w276]}
								btnTitle={'입양처 보기'}
								btnTheme={'shadow'}
								btnStyle={'filled'}
								titleFontStyle={24}
								onPress={() => navigation.push('AdoptorInformation')}
							/>
						</View>
					)}
				</View>
			</TouchableOpacity>
		</>
	);
};

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
};

// ProtectedThumbnail.defaultProps = {
// 	data: {
// 		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
// 		gender: 'female',
// 		status: 'protected',
// 	},
// };
