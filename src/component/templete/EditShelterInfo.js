import React from 'react';
import {Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {login_style, temp_style, editShelterInfo, btn_style} from './style_templete';
import AddressInput from '../organism_ksw/AddressInput';
import Input30 from '../molecules/Input30';

export default EditShelterInfo = props => {
	return (
		<View style={[login_style.wrp_main, editShelterInfo.container]}>
			{/* shelterInfoForm */}
			<View style={[editShelterInfo.shelterInfoForm]}>
				{/* Input30 단위 */}
				<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
					<View style={[editShelterInfo.category]}>
						<View style={[editShelterInfo.text]}>
							<Text style={txt.noto28}>보호소</Text>
						</View>
					</View>
					<View style={[editShelterInfo.input30]}>
						<Input24 width={520} placeholder={'보호소 이름을 입력해 주세요.'} />
					</View>
				</View>
				{/* addressInput */}
				<View style={[editShelterInfo.addressInput]}>
					<AddressInput width={654}></AddressInput>
				</View>
				{/* Input30 단위 */}
				<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
					<View style={[editShelterInfo.category]}>
						<View style={[editShelterInfo.text]}>
							<Text>전화번호</Text>
						</View>
					</View>
					<View style={[editShelterInfo.input30]}>
						<Input30 showTitle={false} width={520} placeholder={'전화번호를 기재해주세요.'} />
					</View>
				</View>
				{/* Input30 단위 */}
				<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
					<View style={[editShelterInfo.category]}>
						<View style={[editShelterInfo.text]}>
							<Text>이메일</Text>
						</View>
					</View>
					<View style={[temp_style.input30, editShelterInfo.input30]}>
						<Text>Input30</Text>
					</View>
				</View>
				<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
					<View style={[editShelterInfo.category]}>
						<View style={[editShelterInfo.text]}>
							<Text>홈페이지</Text>
						</View>
					</View>
					<View style={[temp_style.input30, editShelterInfo.input30]}>
						<Input30 showTitle={false} width={520} placeholder={'http://'} />
					</View>
				</View>
				<View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
					<View style={[editShelterInfo.category]}>
						<View style={[editShelterInfo.text]}>
							<Text>설립일</Text>
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
	);
};
