import React from 'react';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import Input30 from '../molecules/Input30';
import {btn_style, temp_style} from '../templete/style_templete';
import {addressInput} from './style_organism';

export default AddressInput = props => {
	return (
		<View style={[addressInput.container]}>
			<View style={[addressInput.upperContainer]}>
				<View>
					<View style={[addressInput.titleContainer]}>
						<Text style={[txt.noto28, {color: GRAY10}]}> 나의 지역 </Text>
					</View>
					<View style={[addressInput.input24A]}>
						<Input24 />
					</View>
				</View>
				<View style={[btn_style.btn_w226, addressInput.btn_w226]}>
					<AniButton btnTitle={'주소 찾기'} btnLayout={btn_w226} btnTheme={'shadow'} btnStyle={'filled'} titleFontStyle={24} />
				</View>
			</View>
			<View style={[temp_style.inputNoTitle, addressInput.inputNoTitle]}>
				<Input30 showTitle={false} placeholder={'세부 주소를 입력해 주세요.'} />
			</View>
		</View>
	);
};
