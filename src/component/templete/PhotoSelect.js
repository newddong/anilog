import React from 'react';
import {Text, View, TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
import {txt} from 'Root/config/textstyle';
import addphoto from 'Root/screens/camera/addphoto';
import {Bracket48} from '../atom/icon';
import LocalMedia from '../molecules/LocalMedia';
import {login_style, temp_style, photoSelect} from './style_templete';
import AddPhotoInner from 'Screens/camera/addphoto';

export default PhotoSelect = props => {
	const moveToSingPhotoSelect = () => {
		props.navigation.push('AssignPetInfoB');
	};
	return (
		<ScrollView>
			<View style={(login_style.wrp_main, photoSelect.container)}>
				{/* (A)Img_Squeare_750 */}
				<View style={[temp_style.img_square_750]}>
					<Image
						source={{
							uri: 'https://lh3.googleusercontent.com/proxy/D0iKWvF62OL_gEUkgYLPswpa9oFkkQWZRIIu_3-jLVW0gH7jXrhVd5AcxvTctQgWbwlC-g12NH6KnNdKpMP7UbPNYsXMU7bP7L7hkA1KxxLXVAwRHFu0wfeGL7cx7vygdcij9MrIZ-WtHdB-OojeWu088c-yD4PZ',
						}}
						style={[temp_style.img_square_750]}
					/>
				</View>

				<TouchableWithoutFeedback onPress={props.navigation.goBack}>
					{/* {/* (O)mediaSelect */}
					<View>
						<View style={[photoSelect.recentPhotoTitle]}>
							<Text style={txt.noto36}>최근 항목 </Text>
							<Bracket48 />
						</View>
						<View style={[temp_style.mediaSelect]}>
							{/* <Text>(O)mediaSelect(사진등록완료)</Text> */}
							<LocalMedia />
							<LocalMedia />
							<LocalMedia />
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</ScrollView>
	);
};
