import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { btn_w226 } from '../atom/btn/btn_style';
import { styles } from '../atom/image/imageStyle';
import { Modal } from '../modal/Modal';
import AniButton from '../molecules/AniButton';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import { applyDetails, btn_style, login_style, temp_style } from './style_templete';

export default ApplyDetails = props => {

	const navigation = useNavigation();
	const [data, setData] = React.useState({ ...props.route.params })

	//임보 및 입양 신청 관련 Data, 대상 동물 Data(protect_request_pet_data),  
	// React.useEffect(() => {
	// 	props.route.params != null ? setData(props.route.params) : null
	// }, [props.route.params])

	React.useEffect(() => {
		// console.log('data details', data)
	}, [data])

	const isProtectRoute = props.route.name == 'ApplyProtectActivityE'
	console.log(isProtectRoute)

	const goToProfile = () => {
		Modal.close()
		navigation.navigate('UserProfile')
	}

	const onRegister = () => {
		Modal.popTwoBtn(isProtectRoute ? '이 내용으로 보호 활동 신청을 하시겠습니까?' : '위 내용으로 입양 신청을 하시겠습니까?', '취소', '확인', () => Modal.close(), goToProfile)
	}

	return (
		<View style={[login_style.wrp_main, applyDetails.container]}>
			<ScrollView>

				<View style={[temp_style.animalProtectDetails, applyDetails.animalProtectDetails]}>
					<AnimalProtectDetail data={data} />
				</View>

				<View style={[applyDetails.btnContainer,]}>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						<AniButton btnStyle={'border'} btnLayout={btn_w226} btnTitle={'뒤로'} onPress={() => navigation.goBack()} />
					</View>
					<View style={[btn_style.btn_w226, applyDetails.btn_w226]}>
						{/* ApplyProtectActivityE 혹은 ApplyAnimalAdoptionE ==> 입양이나 임시보호 신청의 마지막 단계이므로 '신청'버튼이 필요 */}
						{/* ApplyAdoptionDetails 혹은 ApplyTempProtectDetails ==> 유저가 신청한 입양이나 임시보호의 Detail을 보기만하는 것이므로 '신청'버튼 불필요 */}
						{props.route.name == 'ApplyAdoptionDetails' || props.route.name == 'ApplyTempProtectDetails' ? null : (
							<AniButton
								btnLayout={btn_w226}
								btnTitle={'신청'}
								onPress={onRegister}
							/>
						)}
					</View>
				</View>
			</ScrollView>

		</View>
	);
};
