import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {temp_style} from '../templete/style_templete';
import {selectStat} from './style_organism';

export default SelectStat = props => {
	return (
		<View style={[selectStat.container]}>
			{/* 취소, 전체선택, 선택삭제 */}
			<View style={[temp_style.selectstat, selectStat.selectstat]}>
				<View style={[temp_style.textBtn]}>
					<Text style={[txt.noto24, {alignSelf: 'flex-start'}]}>취소</Text>
				</View>
				<View style={[selectStat.rightContainer]}>
					<View style={[temp_style.textBtn]}>
						<Text style={[txt.noto24]}>전체 선택</Text>
					</View>
					<View style={[selectStat.vertical_stick]} />
					<View style={[temp_style.textBtn]}>
						<Text style={[txt.noto24]}>선택 삭제</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

// media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
