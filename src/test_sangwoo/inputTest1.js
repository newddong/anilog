import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import DP from 'Root/config/dp';
import InputBalloon from 'Root/component/molecules/InputBalloon';
import InputLongText from 'Root/component/molecules/InputLongText';
import Input30 from 'Root/component/molecules/Input30';
import Input24A from 'Root/component/molecules/Input24A';
import Input24B from 'Root/component/molecules/Input24B';
import InputNoTitle from 'Root/component/molecules/InputNoTitle';
import InputWithSearchIcon from 'Root/component/molecules/InputWithSearchIcon';
import { useNavigation } from '@react-navigation/core';
export default InputTest1 = props => {
	const navigation=useNavigation()
	return (
		<ScrollView>
			
			<TouchableOpacity onPress={() => navigation.navigate('InputTest2')}>
				<View style={{width: '100%', height: 50, backgroundColor: 'powderblue', }}>
					<Text style={{fontSize: 30,}}>{'<<<<<<<InputTest2<<<<<<<<<<'}</Text>
				</View>
			</TouchableOpacity>
			<Text style={{backgroundColor: 'blue', color: 'white'}}> inputBalloon </Text>
			<InputBalloon placeholder={'PlaceHolder'} value={'title'} onChange={e => console.log(e)} />
			<Text style={{backgroundColor: 'blue', color: 'white'}}> InputLongText</Text>
			<InputLongText placeholder={'PlaceHolder'} value={'title'} onChange={e => console.log(e)} maxLength={500} />

			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> InputWithSearchIcon </Text>
			<InputWithSearchIcon
				title={'Title'}
				placeholder={'placeholder'}
				info={'information'}
				value={'InputWithSearchICon'}
				alert_msg={'alert_msg'}
				confirm_msg={'confirm_msg'}
				onChange={e => console.log(e)}
				// onClear={}
			/>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> InputNoTitle </Text>
			<View style={{flexDirection: 'row'}}>
				<InputNoTitle
					title={'Title'}
					placeholder={'placeholder'}
					info={'information'}
					value={'value'}
					alert_msg={'alert_msg'}
					confirm_msg={'confirm_msg'}
					onChange={e => console.log(e)}
					// onClear={}
				/>
				<InputNoTitle
					title={'Title'}
					placeholder={'placeholder'}
					info={'information'}
					value={'value for confirm msg'}
					alert_msg={'alert_msg'}
					confirm_msg={'confirm_msg'}
					onChange={e => console.log(e)}
					// onClear={}
				/>
			</View>

			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> Input24B </Text>
			<Input24B
				title={'Title'}
				placeholder={'placeholder'}
				info={'information'}
				value={'value'}
				alert_msg={'alert_msg'}
				confirm_msg={'confirm_msg'}
				onChange={e => console.log(e)}
				// onClear={}
			/>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> Input 24A /</Text>
			<Input24A
				title={'LLLLong Title'}
				placeholder={'placeholder'}
				value={'value'}
				alert_msg={'alert_msg'}
				confirm_msg={'confirm_msg'}
				onChange={e => console.log(e)}
				// onClear={}
			/>
			<Text style={{backgroundColor: 'blue', color: 'white', marginVertical: 10}}> Input30 / msg출력 확인을 위해선 10자이상 써주세요</Text>

			<Input30
				title={'title'}
				placeholder={'placeholder'}
				description={'description'}
				value={'value'}
				alert_msg={'alert_msg'}
				confirm_msg={'confirm_msg'}
				onChange={e => console.log(e)}
				// onClear={}
			/>
		</ScrollView>
	);
};
