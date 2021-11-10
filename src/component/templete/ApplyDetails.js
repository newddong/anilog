import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {applyDetails, btn_style, login_style, temp_style} from './style_templete';

export default ApplyDetails = props => {
	const navigation = useNavigation();
	console.log(JSON.stringify(props.route.name));

	return (
		<ScrollView>
			<View style={[login_style.wrp_main, applyDetails.container]}>
				{/* (M)animalProtectDetails */}
				<View style={[temp_style.animalProtectDetails, applyDetails.animalProtectDetails]}>
					{/* <Text>(M)animalProtectDetails</Text> */}
					<AnimalProtectDetail />
				</View>
				{/* BtnsContainer */}
				<View style={[applyDetails.btnContainer]}>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						<AniButton btnStyle={'border'} btnLayout={btn_w226} btnTitle={'뒤로'} titleFontStyle={24} onPress={() => navigation.goBack()} />
					</View>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						{/* ApplyProtectActivityE 혹은 ApplyAnimalAdoptionE ==> 입양이나 임시보호 신청의 마지막 단계이므로 '신청'버튼이 필요 */}
						{/* ApplyAdoptionDetails 혹은 ApplyTempProtectDetails ==> 유저가 신청한 입양이나 임시보호의 Detail을 보기만하는 것이므로 '신청'버튼 불필요 */}
						{props.route.name == 'ApplyAdoptionDetails' || props.route.name == 'ApplyTempProtectDetails' ? null : (
							<AniButton
								btnStyle={'filled'}
								btnLayout={btn_w226}
								btnTitle={'신청'}
								titleFontStyle={24}
								onPress={() => navigation.navigate('UserProfile')}
							/>
						)}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
