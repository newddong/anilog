import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { GRAY20 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { DEFAULT_PROFILE } from 'Root/i18n/msg';
import { AddItem64, Female48, Male48 } from '../atom/icon';
import { styles } from '../atom/image/imageStyle';
import { aidRequest } from './style_organism';
import { useNavigation } from '@react-navigation/core';

export default AidRequest = props => {
	const [male, setMale] = React.useState(false);
	const [selected, setSelected] = React.useState(false);

	React.useEffect(() => {
		props.data.male ? setMale(true) : setMale(false);
		return () => { };
	}, [props.data.male]);

	const navigation = useNavigation();
	const moveToProtectApplicant = () => {
		navigation.push('ProtectApplicant');
	};

	const onSelect = () => {
		setSelected(!selected);
	};

	return (
		<View style={[aidRequest.container]}>
			{/* 선택되면 APRI10로 외곽선 변경, 미세 조정 필요 */}
			<View style={[aidRequest.insideContainer, selected ? aidRequest.borderColor_APRI10 : aidRequest.borderColor_GRAY10, { backgroundColor: 'yellow' }]}>
				<View style={[aidRequest.img_irregular_174]}>
					<View style={[aidRequest.gender]}>{male ? <Male48 /> : <Female48 />}</View>
					<Image style={[styles.img_irregular_174, { backgroundColor: 'red' }]} source={{ uri: 'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/jt/2021/02/03/202102032107572240_LC.jpg.wm.jpg' }} />
				</View>
				<View style={[aidRequest.rightContainer]}>
					<TouchableOpacity onPress={onSelect}>
						<View style={[aidRequest.right_insideContainer]}>
							<View style={[aidRequest.right_upperMenu]}>
								<Text style={txt.noto28b}>
									{props.data.kind}/{props.data.breed}
								</Text>
							</View>
							<View style={[aidRequest.right_middleMenu]}>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, { color: GRAY20 }]}>예상연령</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.expected_age}개월</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, { color: GRAY20 }]}>체중</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.weight}kg</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, { color: GRAY20 }]}>중성화</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text style={[txt.noto24]}>{props.data.neutralization ? 'O' : 'X'}</Text>
								</View>
							</View>
							<View style={[aidRequest.right_lowerMenu]}>
								<View style={[aidRequest.right_middleMenu_title]}>
									<Text style={[txt.noto24, { color: GRAY20 }]}>구조장소</Text>
								</View>
								<View style={[aidRequest.right_middleMenu_content]}>
									<Text ellipsizeMode="tail" numberOfLines={1} style={[txt.noto24]}>
										{props.data.saved_point}
									</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<View style={[aidRequest.numberContainer]}>
				<Text style={{ color: 'white' }}>2</Text>
			</View>
		</View>
	);
};

AidRequest.defaultProps = {
	data: {
		kind: '개',
		breed: '시고르자브종',
		expected_age: 3,
		weight: 1.2,
		neutralization: false, // 중성화
		saved_point: '경상남도 진주시 가좌동 맨발로 ',
		male: true,
		img_uri:
			'http://image.kmib.co.kr/online_image/2020/0729/611718110014851798_1.jpg',
	},
};
