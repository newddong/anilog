import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {login_style, temp_style, editShelterInfo, btn_style, assignPetInfo_style} from './style_templete';
import AddressInput from '../organism_ksw/AddressInput';
import Input30 from '../molecules/Input30';
import InputWithEmail from '../molecules/InputWithEmail';
import DatePicker from '../molecules/DatePicker';
import {COMPLETE_MODIFY} from 'Root/i18n/msg';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';

export default EditShelterInfo = props => {
	const emailList = ['naver.com', 'nate.com', 'daum.net'];
	const [selectedBirthDate, setSelectedBirthDate] = React.useState('2021.03.01');

	const goto = () => {
		navigation.push('ShelterInfoSetting');
	};

	return (
		<View style={[login_style.wrp_main, editShelterInfo.container]}>
			<ScrollView>
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
							<InputWithEmail itemList={emailList} placeholder={'placeholder'} value={null} defaultIndex={0} />
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
							{/* <View style={[temp_style.datePicker_assignPetInfo_depth1, assignPetInfo_style.datePicker_depth1]}> */}
							<DatePicker width={530} onDateChange={e => setSelectedBirthDate(e)} defaultDate={selectedBirthDate} />
							{/* </View> */}
						</View>
					</View>
				</View>

				{/* (A)Btn_w654 */}
				<View style={[editShelterInfo.btn_w654]}>
					<AniButton
						btnLayout={[btn_w654]}
						btnTitle={COMPLETE_MODIFY}
						btnTheme={'’shadow’'}
						btnStyle={'filled'}
						titleFontStyle={32}
						onPress={gotoNextStep}
					/>
				</View>
			</ScrollView>
		</View>
	);
};
