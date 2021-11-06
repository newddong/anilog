import React from 'react';
import {Text, View} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import {interestTagList, myPetList} from './style_organism';

export default InterestTagList = props => {
	return (
		<View style={[interestTagList.container]}>
			<View style={[interestTagList.titleContainer]}>
				<View style={[interestTagList.title]}>
					<Text>관심 지역</Text>
				</View>
				<View style={[interestTagList.btn_w226]}>
					<AniButton btnTitle={'추가하기'} btnLayout={btn_w226} btnTheme={'shadow'} btnStyle={'filled'} titleFontStyle={24} />
				</View>
			</View>
			<View style={[interestTagList.interestingTagList]}></View>
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
