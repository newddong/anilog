import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {getProtectRequestByProtectRequestId, setProtectActivityStatus, setProtectRequestStatus} from 'Root/api/protectapi';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import AnimalProtectDetail from '../organism_ksw/AnimalProtectDetail';
import {login_style, btn_style, protectApplyForm} from './style_templete';

export default ProtectApplyForm = ({route, navigation}) => {
	// console.log('ProtectApplyForm props', route.params);
	const [data, setData] = React.useState(route.params);
	const [loading, setLoading] = React.useState(true); // 화면 출력 여부 결정

	React.useEffect(() => {
		getProtectRequestByProtectRequestId(
			{
				protect_request_object_id: data.protect_act_request_article_id,
			},
			result => {
				console.log('result / getProtectRequestByProtectRequestId / ProtectApplyForm ', result.msg);
				const addedData = {...data};
				addedData.protect_animal_species = result.msg.protect_animal_species;
				addedData.protect_animal_species_detail = result.msg.protect_animal_species_detail;
				addedData.protect_animal_rescue_location = result.msg.protect_animal_rescue_location;
				addedData.protect_request_date = result.msg.protect_request_date;
				addedData.protect_request_photos_uri = result.msg.protect_request_photos_uri;
				// const merged = Object.assign(data, result.msg);
				setData(addedData);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			},
			err => {
				console.log('err / getProtectRequestByProtectRequestId / ProtectApplyForm  ', err);
			},
		);
	}, []);

	const onPressConfirm = () => {
		console.log('data', data.protect_act_request_article_id);
		//보호요청게시글의 상태뿐만 아니라 입양 및 보호신청 상태도 Accept로 바꾸어야한다
		setProtectActivityStatus({
			protect_act_object_id: data.protect_act_protect_animal_id,
		});
		setProtectRequestStatus(
			{
				protect_request_object_id: data.protect_act_request_article_id,
				protect_request_status: 'complete',
			},
			result => {
				console.log('result / setProtectRequestStatus / ProtectApplyForm  : ', result.msg);
				navigation.reset({
					index: 0,
					routes: [{name: 'ShelterMenu'}],
				});
			},
			err => {
				console.log('err / SetProtectRequestStatus / ProtectApplyForm  :', err);
			},
		);
	};

	if (loading) {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'}></ActivityIndicator>
			</View>
		);
	}
	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<View style={[protectApplyForm.detailContainerm, {flex: 1}]}>
				<AnimalProtectDetail data={data} />
			</View>
			<View style={[protectApplyForm.confirmButton]}>
				<AniButton onPress={onPressConfirm} btnTitle={'확정'} btnLayout={btn_w226} />
			</View>
		</View>
	);
};
// 61c34f5a17f59a595cc42211
// 61c1cc107be07611b00945f9
