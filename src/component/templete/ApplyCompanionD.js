import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w176} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import InputLongText from '../molecules/InputLongText';
import Stagebar from '../molecules/Stagebar';
import SelectStat from '../organism_ksw/SelectStat';
import {applyCompanionD, btn_style, login_style, temp_style} from './style_templete';

export default ApplyCompanionD = props => {
	const navigation = useNavigation();
	const [text, setText] = React.useState('');
	const [temp, setTemp] = React.useState('');

	React.useEffect(() => {
		_loadData = async () => {
			try {
				const data = await AsyncStorage.getItem('temp_save_step4');
				console.log(JSON.stringify(data));
				setTemp(data);
			} catch (error) {
				alert(error);
			}
		};
		_loadData();
	});

	//임시저장
	const temp_save = () => {
		AsyncStorage.setItem('temp_save_step4', JSON.stringify(text));
	};
	return (
		<View style={[login_style.wrp_main, applyCompanionD.container]}>
			{/* StageBar */}
			<SelectStat onSelectMode={e => console.log('EEE' + e)} />
			<View style={[temp_style.stageBar, applyCompanionD.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 20 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={4} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>
			{/* TextMsg */}
			<View style={[temp_style.stageBar, applyCompanionD.textMsg]}>
				<Text style={[txt.noto24, {color: GRAY10}]}>임시보호의 이유나 동기를 500자 이내로 작성해주세요.</Text>
			</View>
			{/* (M)InputLongText */}
			<View style={[temp_style.inputLongText, applyCompanionD.InputLongText]}>
				<InputLongText placeholder={'내용 입력...'} onChange={text => setText(text)} value={temp == '' ? null : temp} />
			</View>
			{/* BtnsContainer */}
			<View style={[applyCompanionD.btnContainer]}>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'뒤로'} titleFontStyle={24} onPress={() => navigation.goBack()} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton btnStyle={'border'} btnLayout={btn_w176} btnTitle={'임시저장'} titleFontStyle={24} onPress={temp_save} />
				</View>
				<View style={[btn_style.btn_w176, applyCompanionD.btn_w176]}>
					<AniButton
						btnStyle={'filled'}
						btnLayout={btn_w176}
						btnTitle={'다음'}
						titleFontStyle={24}
						onPress={() =>
							props.route.name == 'ApplyProtectActivityD' ? navigation.push('ApplyProtectActivityE') : navigation.push('ApplyAnimalAdoptionE')
						}
					/>
				</View>
			</View>
		</View>
	);
};
