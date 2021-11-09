import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {GRAY10, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import {Cross46, Cross52} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import {interestTagList, myPetList} from './style_organism';

export default InterestTagList = props => {
	const testData = ['서울', '이집트', '욘두라스', '욜둔'];

	const renderItem = item => {
		return (
			<View style={[interestTagList.tagContainer]}>
				<Text style={[txt.noto28, {color: GRAY20, textAlign: 'center'}]}>{item}</Text>
				<View style={[interestTagList.cross52]}>
					<Cross46 />
				</View>
			</View>
		);
	};

	return (
		<View style={[interestTagList.container]}>
			<View style={[interestTagList.titleContainer]}>
				<View style={[interestTagList.title]}>
					<Text style={[txt.noto28, {color: GRAY10}]}>관심 지역</Text>
				</View>
				<View style={[interestTagList.btn_w226]}>
					<AniButton btnTitle={'추가하기'} btnLayout={btn_w226} btnTheme={'shadow'} btnStyle={'filled'} titleFontStyle={24} />
				</View>
			</View>
			<View style={[interestTagList.interestingTagList]}>
				<FlatList data={testData} renderItem={({item}) => renderItem(item)} horizontal={true} />
			</View>
		</View>
	);
};
// // btnTitle: 'title', //버튼의 제목
// 	btnTheme: 'shadow', // btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
// 	btnStyle: 'filled', // btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
// 	disable: false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
// 	titleFontStyle: 24 * DP, // titleFontStyle - title의 폰트 크기
// 	btnLayout: btn_w226, // btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
// 	onPress: {}, // 버튼을 탭했을때 발생하는 콜백
