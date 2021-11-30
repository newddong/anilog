import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {AddItem64, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {aidRequest} from './style_organism';
import {useNavigation} from '@react-navigation/core';

export default AidRequest = props => {
	// const [male, setMale] = React.useState('male');
	const [selected, setSelected] = React.useState(false);

	// React.useEffect(() => {
	// 	props.data.protect_animal_sex ? setMale(true) : setMale(false);
	// 	return () => {};
	// }, [props.data.male]);

	const navigation = useNavigation();
	const moveToProtectApplicant = () => {
		navigation.push('ProtectApplicant');
	};

	const onSelect = () => {
		// 이벤트 정의가 되어 있지 않아 주석처리
		// setSelected(!selected);
	};

	return (
		<View style={[aidRequest.container]}>
			{console.log('props.data=>' + JSON.stringify(props.data))}
			{/* 선택되면 APRI10로 외곽선 변경, 미세 조정 필요 */}
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
									{props.data.protect_animal_species}/{props.data.breed}
								</Text>
							</View>
							<View style={[aidRequest.right_middleMenu]}>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, {color: GRAY20}]}>예상연령</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.protect_animal_estimate_age}개월</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, {color: GRAY20}]}>체중</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.protect_animal_weight}kg</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, {color: GRAY20}]}>중성화</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.protect_animal_neutralization == 'no' ? 'X' : 'O'}</Text>
								</View>
							</View>
							<View style={[aidRequest.right_lowerMenu]}>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, {color: GRAY20}]}>구조장소</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text ellipsizeMode="tail" numberOfLines={1} style={[txt.noto24]}>
										{props.data.protect_animal_rescue_location}
									</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			{/* 앞 화면이 신청서 조회일 경우에만 표기 되도록 변경, 추후에 분기 타도록 ~ */}
			{/* {console.log('props.nvName=>' + props.nvName)} */}
			{props.nvName == 'ProtectApplyList' && (
				<View style={[aidRequest.numberContainer]}>
					<Text style={{color: 'white'}}>2</Text>
				</View>
			)}
		</View>
	);
};

AidRequest.defaultProps = {
	// data: {
	// 	kind: '개',
	// 	breed: '시고르자브종',
	// 	expected_age: 3,
	// 	weight: 1.2,
	// 	neutralization: false, // 중성화
	// 	saved_point: '경상남도 진주시 가좌동 맨발로 ',
	// 	male: true,
	// 	img_uri: 'http://image.kmib.co.kr/online_image/2020/0729/611718110014851798_1.jpg',
	// },
};
