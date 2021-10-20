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
			<TouchableOpacity onPress={props.onLabelClick}>
				<View
					style={{
						width: 90 * DP,
						height: 90 * DP,
						borderRadius: 100,
						borderColor: '#FFB6A5',
						borderWidth: 4,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<View style={{padding: 20 * DP}}>
						<Hash50 />
					</View>
				</View>
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP, paddingVertical: 2 * DP, }}>
				{/* profile Image와 총 height가 4차이가 난다 => paddingVertical 2 */}
				{props.count == null ? (
					<View>
						<Text style={[txt.noto30, { width:200*DP} ]} numberOfLines={1} ellipsizeMode="tail">
							{props.keyword}
						</Text>
					</View>
				) : (
					<View>
						<View>
							<Text style={[txt.noto30, {lineHeight: 42 * DP, width:500*DP}]} numberOfLines={1} ellipsizeMode="tail">
								{props.keyword}
							</Text>
						</View>
						<View>
							<Text
								style={props.keywordBold ? [txt.noto24b, {lineHeight: 42 * DP,}] : [txt.noto24, {lineHeight: 42 * DP}]}
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
