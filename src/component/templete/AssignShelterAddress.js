import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {login_style, btn_style, temp_style, progressbar_style, assignShelterAddress_style} from './style_templete';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w654} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Stagebar from '../molecules/Stagebar';
import Input24 from '../molecules/Input24';
import AddressInput from '../organism_ksw/AddressInput';

export default AssignShelterAddress = props => {
	console.log(props.route.params);

	const [confirmed, setConfirmed] = React.useState(false); //주소란이 모두 작성되었다며 통과가능

	const [data, setData] = React.useState({
		...props.route.params,
		shelter_name: 'Default',
		shelter_address: {
			city: null, //
			district: null, //
			neighbor: null, //
		},
	});

	React.useEffect(() => {
		data.shelter_address.city != null && data.shelter_address.district != null && data.shelter_name != null
			? setConfirmed(true)
			: setConfirmed(false);
	}, [data]);

	//다음
	const goToNextStep = () => {
		props.navigation.push('AssignShelterInformation', data);
	};

	//주소
	const onChangeAddress = addr => {
		console.log(addr);
		const dummy_addr = {
			city: '서울시',
			district: '마포구',
		};
		setData({...data, shelter_address: {city: dummy_addr.city, district: dummy_addr.district}});
	};

	//세부주소
	const onChangeDeatilAddress = addr => {
		console.log(addr);
		setData({...data, shelter_address: {neighbor: addr}});
	};

	//주소찾기 클릭
	const goToAddressSearch = () => {
		console.log('onPressSearchAddr');
	};

	//보호소 이름
	const onChaneName = name => {
		console.log(name);
		setData({...data, shelter_name: name});
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					style={{}} //전체 container style, text와 bar를 감싸는 view의 style
					backgroundBarStyle={{
						width: 400 * DP,
						height: 20 * DP,
						backgroundColor: 'white',
						borderRadius: 10 * DP,
						borderWidth: 4 * DP,
						borderColor: APRI10,
					}} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={{height: 20 * DP, backgroundColor: APRI10, borderRadius: 5 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					current={2} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>

			{/* InputForm */}
			<View style={[temp_style.input24A_assignShelterAddress, assignShelterAddress_style.input24A]}>
				<Input24 title={'보호소 이름'} placeholder={'보호소 이름을 적어주세요'} descriptionType={'star'} onChange={name => onChaneName(name)} />
			</View>

			<View style={[temp_style.addressInput, assignShelterAddress_style.addressInput]}>
				<AddressInput
					title={'보호소 주소'}
					titleColor={APRI10}
					onChangeAddress={addr => onChangeAddress(addr)}
					onChangeDeatilAddress={addr => onChangeDeatilAddress(addr)}
					onPressSearchAddr={goToAddressSearch}
				/>
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignShelterAddress_style.btn_w654]}>
				<AniButton
					btnTitle={'다음'}
					btnTheme={'shadow'}
					disable={!confirmed && true}
					btnLayout={btn_w654}
					titleFontStyle={32}
					onPress={goToNextStep}
				/>
			</View>
		</View>
	);
};
