import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import DatePicker from 'Root/component/molecules/DatePicker';
import {login_style, btn_style, temp_style, userInfoDetailSettting_style} from './style_templete';
import InputWithSelect from '../molecules/InputWithSelect';
import AddressInput from '../organism_ksw/AddressInput';
import InterestTagList from '../organism_ksw/InterestTagList';

export default UserInfoDetailSettting = props => {
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* InputForm */}
			<ScrollView>
				<View style={[temp_style.inputForm_userInfoDetailSettting, userInfoDetailSettting_style.inputForm]}>
					{/* inputForm_detail list */}
					<View style={[userInfoDetailSettting_style.inputForm_detail]}>
						{/* Text */}
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>성별</Text>
						</View>
						{/* (M)TabSelectFilled_Type1 */}
						<View style={[temp_style.tabSelectFilled_Type1]}>
							<TabSelectFilled_Type1 items={['남자', '여자']} />
						</View>
					</View>

					<View style={[userInfoDetailSettting_style.inputForm_detail]}>
						{/* Text */}
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>생일</Text>
						</View>
						{/* (M)TabSelectFilled_Type1 */}
						<View style={[temp_style.tabSelectFilled_Type1]}>
							<DatePicker />
						</View>
					</View>

					<View style={[userInfoDetailSettting_style.inputWithSelect]}>
						{/* Text */}
						<View style={[temp_style.text_userInfoDetailSettting, userInfoDetailSettting_style.text]}>
							<Text style={[txt.noto28, {color: GRAY10}]}>전화번호</Text>
						</View>
						{/* (M)TabSelectFilled_Type1 */}
						<View style={[temp_style.tabSelectFilled_Type1]}>
							{/* <Text>(M)InputWithSelect</Text> */}
							<InputWithSelect items={['LGU+', 'SKT', 'KT', '알뜰']} placeholder={'휴대전화번호 입력'} width={340} />
						</View>
					</View>

					{/* (O)AddressInput */}
					<View style={[temp_style.addressInput]}>
						<AddressInput />
					</View>

					<View style={[userInfoDetailSettting_style.tagListContainer]}>
						<View style={[userInfoDetailSettting_style.interestTagList]}>
							<InterestTagList />
						</View>
						<View style={[userInfoDetailSettting_style.interestTagList]}>
							<InterestTagList />
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
