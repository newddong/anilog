import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import DP from 'Root/config/dp';
import TabSelectFilled_Type1 from 'Root/component/molecules/TabSelectFilled_Type1';
import TabSelectFilled_Type2 from 'Root/component/molecules/TabSelectFilled_Type2';
import TabSelectBorder from 'Root/component/molecules/TabSelectBorder';
import {useNavigation} from '@react-navigation/core';
import PasswordInput from 'Root/component/molecules/PasswordInput';
import InputWithSelect from 'Root/component/molecules/InputWithSelect';
import InputWithEmail from 'Root/component/molecules/InputWithEmail';
import { GRAY10 } from 'Root/config/color';
export default InputTest2 = props => {
	const navigation = useNavigation();
	const items = ['Feed', 'Feed2', 'Feed3'];
	const items2 = ['TAB_ACT', 'TAB_INACT'];
	// title - 입력의 제목
	// placeholder - textinput의 입력 힌트
	// information - textinput의 입력에 대한 설명
	// value - textinput의 입력값
	// alert_msg - validator가 false일때 출력되는 메시지
	// confirm_msg - validator가 true일때 출력되는 메시지
	const itemList = ['ITEM1', 'ITEM2', 'ITEM3', 'ITEM4'];
	const emailList = ['naver.com', 'nate.com', 'daum.net'];
	return (
		<View>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => navigation.navigate('InputTest1')}>
					<View style={{width: 130, height: 50, backgroundColor: 'yellow'}}>
						<Text style={{fontSize: 18}}>InputTest1</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('InputTest2')}>
					<View style={{width: 130, height: 50, backgroundColor: 'powderblue'}}>
						<Text style={{fontSize: 18}}>InputTest2</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('InputTest3')}>
					<View style={{width: 130, height: 50, backgroundColor: GRAY10}}>
						<Text style={{fontSize: 18}}>InputTest3</Text>
					</View>
				</TouchableOpacity>
			</View>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> InputWithEmail / 이메일란 한글자 이상- Border 바뀜</Text>
			<InputWithEmail itemList={emailList} placeholder={'placeholder'} value={null} defaultIndex={0} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> InputWithSelect </Text>
			<InputWithSelect itemList={itemList} placeholder={'placeholder'} value={null} defaultIndex={0} />
			<View style={{marginTop: 20}} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> PasswordInput </Text>
			<PasswordInput
				title={'title'}
				placeholder={'placeholder'}
				information={'information'}
				value={'value'}
				alert_msg={'alert_msg'}
				confirm_msg={'confirm_msg'}
			/>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> TabSelectFilled_Type1 </Text>

			<TabSelectFilled_Type1 items={items} onSelect={e => console.log(e)} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> TabSelectFilled_Type2 </Text>
			<TabSelectFilled_Type2 items={items} onSelect={e => console.log(e)} />
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> TabSelectBorder </Text>
			<TabSelectBorder items={items2} onSelect={e => console.log(e)} />

			{/* Password Input */}
		</View>
	);
};
