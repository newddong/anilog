import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Hash50} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
export default HashLabel = props => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<View
				style={{ //90 img_round가 없음
					width: 90 * DP,
					height: 90 * DP,
					borderRadius: 100,
					borderColor: '#FFB6A5',
					borderWidth: 4,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<View style={{padding: 20 * DP}}>
					{/* 해쉬마크와 바깥원과의 거리 20 */}
					<Hash50 />
				</View>
			</View>
			<View style={{marginLeft: 30 * DP, }}>
				{/* profile Image와 총 height가 4차이가 난다 => paddingVertical 2 */}
				{/* 해쉬마크가 담긴 원과 KEYWORD간 30의 차이 */}
				{props.count == null ? ( //부모가 보내는 count값이 없을 경우
					//키워드만 출력
					<View>
						<Text style={txt.noto30} numberOfLines={1} ellipsizeMode="tail">
							{props.keyword}
						</Text>
					</View>
				) : (
					//count값이 있을 경우 'count한 게시물' 출력
					<View>
						<View>
							<Text style={[txt.noto30, {lineHeight: 42 * DP,}]} numberOfLines={1} ellipsizeMode="tail">
								{props.keyword}
							</Text>
						</View>
						<View>
							{/* 부모 props의 keywordBold값이 True라면 noto24b를 스타일로 준다 */}
							<Text 
								style={props.keywordBold ? [txt.noto24b, {lineHeight: 42 * DP, width: 300 * DP}] : [txt.noto24, {lineHeight: 42 * DP, width: 300 * DP}]}
								numberOfLines={1}
								ellipsizeMode="tail">
								{props.count}
							</Text>
						</View>
					</View>
				)}
			</View>
		</View>
	);
};
