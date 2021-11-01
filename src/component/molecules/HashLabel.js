import React from 'react';
import {Text, View} from 'react-native';
import {APRI10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Hash50} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default HashLabel = props => {
	
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<View
				style={[
					styles.img_round_90,
					{
						borderColor: APRI10,
						borderWidth: 4 * DP,
						alignItems: 'center',
						justifyContent: 'center',
					},
				]}>
				<Hash50 />
			</View>
			<View style={{marginLeft: 30 * DP}}>
				{/* 해쉬마크가 담긴 원과 KEYWORD간 30의 차이 */}
				{props.count == null 
					? //부모가 보내는 count값이 없을 경우 키워드만 출력
					<Text style={txt.noto30}>{props.keyword}</Text>
				 	: //count값이 있을 경우 'count한 게시물' 출력
					<View>
						<Text style={[txt.noto30, {lineHeight: 42 * DP}]}>{props.keyword}</Text>
						{/* 부모 props의 keywordBold값이 True라면 noto24b를 스타일로 준다 */}
						<Text style={props.keywordBold 
							? [txt.noto24b, {lineHeight: 42 * DP}] 
							: [txt.noto24, {lineHeight: 42 * DP}]}
						>
						{props.count}
						</Text>
					</View>
				}
			</View>
		</View>
	);
};
HashLabel.defaultProps = {
	keyword: '#KEYWORD',
	keywordBold: true,
	count: 'Count한 게시물',
};
