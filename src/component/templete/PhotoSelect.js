import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {login_style, temp_style, photoSelect} from './style_templete';

export default PhotoSelect = props => {
	const moveToSingPhotoSelect = () => {
		props.navigation.push('AssignPetInfoB');
	};
	return (
		<View style={(login_style.wrp_main, photoSelect.container)}>
			{/* (A)Img_Squeare_750 */}
			<View style={[temp_style.img_square_750]}>
				<Text>(A)Img_Squeare_750</Text>
			</View>

			<TouchableWithoutFeedback onPress={props.navigation.goBack}>
				{/* (O)mediaSelect */}
				<View style={[temp_style.mediaSelect]}>
					<Text>(O)mediaSelect(사진등록완료)</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
