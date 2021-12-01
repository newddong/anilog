import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20, WHITE} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {AddItem64, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {aidRequest} from './style_organism';
import {useNavigation} from '@react-navigation/core';

/**
 *
 *@param {{
 * onSelect : void,
 * selected : 'Boolean / true일 경우 메인색의 테두리 형성 or 회색의 얇은 테두리 형성',
 * }} props
 */
export default AidRequest = props => {
	// const [male, setMale] = React.useState('male');
	const [selected, setSelected] = React.useState(false);

	// React.useEffect(() => {
	// 	props.data.protect_animal_sex ? setMale(true) : setMale(false);
	// 	return () => {};
	// }, [props.data.male]);

	const navigation = useNavigation();

	const [data, setData] = React.useState(props.data);

	//해당 AidRequest박스 선택 시 부모컴포넌트 OnSelect 실행
	const onSelect = () => {
		props.onSelect();
		// 이벤트 정의가 되어 있지 않아 주석처리
		// setSelected(!selected);
		moveToProtectApplicant();
	};

	return (
		<View style={[aidRequest.container]}>
			{console.log('props.data=>' + JSON.stringify(props.data))}
			{/* 선택되면 APRI10로 외곽선 변경, 미세 조정 필요 */}
			<View style={[aidRequest.insideContainer, props.selected ? aidRequest.borderColor_APRI10 : aidRequest.borderColor_GRAY10]}>
				<View style={[aidRequest.img_irregular_174]}>
					<View style={[aidRequest.gender]}>{data.protect_animal_sex == 'male' ? <Male48 /> : <Female48 />}</View>
					<Image
						style={[props.selected ? aidRequest.img_irregular_174_border : styles.img_irregular_174]}
						source={{uri: data.protect_animal_photos ? data.protect_animal_photos[0] : DEFAULT_PROFILE}}
					/>
					<View style={[aidRequest.insideContainer, selected ? aidRequest.borderColor_APRI10 : aidRequest.borderColor_GRAY10]}>
						<View style={[aidRequest.img_irregular_174]}>
							<View style={[aidRequest.gender]}>{props.data.protect_animal_sex == 'male' ? <Male48 /> : <Female48 />}</View>
							<Image style={[styles.img_irregular_174, {backgroundColor: 'red'}]} source={{uri: props.data.protect_request_photo_thumbnail}} />
						</View>
						<View style={[aidRequest.rightContainer]}>
							<TouchableOpacity onPress={onSelect}>
								<View style={[aidRequest.right_insideContainer]}>
									<View style={[aidRequest.right_upperMenu]}>
										<Text style={txt.noto28b}>
											{data.protect_animal_species ? data.protect_animal_species : ''}/
											{data.protect_animal_species_detail ? data.protect_animal_species_detail : ''}
										</Text>
									</View>
									<View style={[aidRequest.right_middleMenu]}>
										<View style={[aidRequest.right_middleMenu_title]}>
											<Text style={[txt.noto24, {color: GRAY20}]}>예상연령</Text>
										</View>
										<View style={[aidRequest.right_middleMenu_content]}>
											<Text style={[txt.noto24]}>{data.protect_animal_estimate_age ? data.protect_animal_estimate_age : ''}</Text>
										</View>
										<View style={[aidRequest.right_middleMenu_title]}>
											<Text style={[txt.noto24, {color: GRAY20}]}>체중</Text>
										</View>
										<View style={[aidRequest.right_middleMenu_content]}>
											<Text style={[txt.noto24]}>{data.protect_animal_weight ? data.protect_animal_weight + 'kg' : '모름'}</Text>
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
											<Text ellipsizeMode="tail" numberOfLines={1} style={[txt.noto24]}>
												{data.protect_animal_rescue_location ? data.protect_animal_rescue_location : ''}
											</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					{data.protect_act_applicant_id ? (
						<View style={[aidRequest.numberContainer]}>
							<Text style={{color: WHITE}}>{data.protect_act_applicant_id.length} </Text>
						</View>
					) : (
						<></>
					)}
					// {/* 앞 화면이 신청서 조회일 경우에만 표기 되도록 변경, 추후에 분기 타도록 ~ */}
					// {/* {console.log('props.nvName=>' + props.nvName)} */}
					{props.nvName == 'ProtectApplyList' && (
						<View style={[aidRequest.numberContainer]}>
							<Text style={[txt.noto24, {color: 'white'}]}>{props.data.protect_act_request_article_id_cnt}</Text>
						</View>
					)}
				</View>
			</View>
		</View>
	);
};

AidRequest.defaultProps = {
	onSelect: e => console.log('AidRequest', e),
};
