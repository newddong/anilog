import React from 'react';
import {Text, View} from 'react-native';
import {login_style, temp_style, editShelterInfo, btn_style} from './style_templete';

export default EditShelterInfo = props => {
	return (
		<View style={login_style.wrp_main}>
			<View style={[editShelterInfo.editShelterInfo_container]}>
				{/* shelterForm */}
				<View style={[editShelterInfo.shelterInfoForm]}>
					{/* Input30 단위 */}
					<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
						<View style={[editShelterInfo.category]}>
							<View style={[editShelterInfo.text]}>
								<Text>Text</Text>
							</View>
						</View>
						<View style={[temp_style.input30, editShelterInfo.input30]}>
							<Text>Input30</Text>
						</View>
					</View>
					{/* addressInput */}
					<View style={[editShelterInfo.addressInput]}>
						<Text>AdressInput</Text>
					</View>
					{/* Input30 단위 */}
					<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
						<View style={[editShelterInfo.category]}>
							<View style={[editShelterInfo.text]}>
								<Text>Text</Text>
							</View>
						</View>
						<View style={[temp_style.input30, editShelterInfo.input30]}>
							<Text>Input30</Text>
						</View>
					</View>
					{/* Input30 단위 */}
					<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
						<View style={[editShelterInfo.category]}>
							<View style={[editShelterInfo.text]}>
								<Text>Text</Text>
							</View>
						</View>
						<View style={[temp_style.input30, editShelterInfo.input30]}>
							<Text>Input30</Text>
						</View>
					</View>
					<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
						<View style={[editShelterInfo.category]}>
							<View style={[editShelterInfo.text]}>
								<Text>Text</Text>
							</View>
						</View>
						<View style={[temp_style.input30, editShelterInfo.input30]}>
							<Text>Input30</Text>
						</View>
					</View>
					<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
						<View style={[editShelterInfo.category]}>
							<View style={[editShelterInfo.text]}>
								<Text>Text</Text>
							</View>
						</View>
						<View style={[temp_style.input30, editShelterInfo.input30]}>
							<Text>Input30</Text>
						</View>
					</View>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[btn_style.btn_w654, editShelterInfo.btn_w654]}>
					<Text>(A)Btn_w654</Text>
				</View>
			</View>
		</View>
	);
};
