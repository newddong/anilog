import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20, WHITE} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_ANIMAL_PROFILE} from 'Root/i18n/msg';
import {AddItem64, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {aidRequest} from './style_organism';

/**
 *
 *@param {{
 * onSelect : void,
 * selected : 'Boolean / true일 경우 메인색의 테두리 형성 or 회색의 얇은 테두리 형성',
 * selectBorderMode : 'Boolean / 테두리 형성 모드 적용 여부 default true'
 * }} props
 */
export default AidRequest = props => {
	const data = props.data;
	// console.log('data', data.protect_animal_species);

	//해당 AidRequest박스 선택 시 부모컴포넌트 OnSelect 실행
	const onSelect = () => {
		props.onSelect();
	};

	return (
		<TouchableOpacity onPress={onSelect} style={[aidRequest.container]}>
			<View
				style={[
					aidRequest.insideContainer,
					props.selected && props.selectBorderMode ? aidRequest.borderColor_APRI10 : aidRequest.borderColor_GRAY10,
				]}>
				{/* 보호동물 프로필 이미지 및 성별 */}
				<View style={[aidRequest.img_irregular_174]}>
					<View style={[aidRequest.gender]}>{data.protect_animal_sex == 'male' ? <Male48 /> : <Female48 />}</View>
					<Image
						style={[props.selected ? aidRequest.img_irregular_174_border : styles.img_irregular_174]}
						source={{
							uri: data.protect_animal_photo_uri_list[0] != undefined ? data.protect_animal_photo_uri_list[0] : DEFAULT_ANIMAL_PROFILE,
						}}
					/>
				</View>
				{/* 오른쪽 보호동물 상세 정보 */}
				<View style={[aidRequest.rightContainer]}>
					<View style={[aidRequest.right_insideContainer]}>
						<View style={[aidRequest.right_upperMenu]}>
							<Text style={txt.noto28b}>
								{data.protect_animal_species ? data.protect_animal_species : ''} /
								{data.protect_animal_species_detail != 'undefined' ? data.protect_animal_species_detail : ''}
							</Text>
						</View>
						<View style={[aidRequest.right_middleMenu]}>
							<View style={[aidRequest.right_middleMenu_title]}>
								<Text style={[txt.noto24, {color: GRAY20}]}>예상연령</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_content]}>
								<Text style={[txt.noto24]}>{data.protect_animal_estimate_age || ''}</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_title]}>
								<Text style={[txt.noto24, {color: GRAY20}]}>체중</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_content]}>
								<Text style={[txt.noto24]}>{data.protect_animal_weight ? parseFloat(data.protect_animal_weight).toFixed(1) + 'kg' : '모름'}</Text>
							</View>
						</View>
						<View style={[aidRequest.right_lowerMenu]}>
							<View style={[aidRequest.right_middleMenu_title]}>
								<Text style={[txt.noto24, {color: GRAY20}]}>중성화</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_content]}>
								<Text style={[txt.noto24]}>
									{data.protect_animal_neutralization ? (data.protect_animal_neutralization == 'yes' ? 'O' : 'X') : '모름'}
								</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_title]}>
								<Text style={[txt.noto24, {color: GRAY20}]}>구조장소</Text>
							</View>
							<View style={[aidRequest.right_middleMenu_content]}>
								<Text numberOfLines={1} style={[txt.noto24]} ellipsizeMode={'tail'} style={[aidRequest.saved_location_text]}>
									{data.protect_animal_rescue_location ? data.protect_animal_rescue_location : ''}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			{/* 해당 동물의 보호요청 및 입양 신청한 유저의 숫자, 현재는 억지로 배열형태로 더미데이터로 만들어서 하는 중  */}
			{data.protect_act_applicants && data.protect_act_applicants.length > 0 ? (
				<View style={[aidRequest.numberContainer]}>
					<Text style={{color: WHITE}}>{data.protect_act_applicants.length} </Text>
				</View>
			) : (
				<></>
			)}
			{/* 앞 화면이 신청서 조회일 경우에만 표기 되도록 변경, 추후에 분기 타도록 ~ */}
			{/* {console.log('props.nvName=>' + props.nvName)} */}
			{props.nvName == 'ProtectApplyList' && (
				<View style={[aidRequest.numberContainer]}>
					<Text style={[txt.noto24, {color: WHITE}]}>{data.protect_act_request_article_id_cnt ? data.protect_act_request_article_id_cnt : ''}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

AidRequest.defaultProps = {
	onSelect: e => console.log('AidRequest', e),
	selectBorderMode: true,
};
