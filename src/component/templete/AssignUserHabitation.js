import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w522} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import DropdownSelect from '../molecules/DropdownSelect';
import Stagebar from '../molecules/Stagebar';
import {login_style, btn_style, temp_style, progressbar_style, assignUserHabitation_style} from './style_templete';
import { Modal } from 'Component/modal/Modal';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AssignUserHabitation = props => {
	const [data, setData] = React.useState({
		...props.route.params,
		city: '원주시', //시,도
		district: '단구', //군,구
		neighbor: '백옥포리', //동,읍,면
	});

	const goToNextStep = () => {
		props.navigation.push('AssignUserProfileImage');
	};

	const onSelectCity = selectedItem => {
		console.log(selectedItem);
		setData({...data, city: selectedItem});
	};
	const onSelectDistrict = selectedItem => {
		console.log(selectedItem);
		setData({...data, district: selectedItem});
	};
	const onSelectNeighbor = selectedItem => {
		console.log(selectedItem);
		setData({...data, neighbor: selectedItem});
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<TouchableWithoutFeedback onPress={() => console.log(data)}>
				<View style={{ backgroundColor: 'red', height: 30, width: 30, position: 'absolute', top: 0, left: 0 }}></View>
			</TouchableWithoutFeedback>
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
					current={4} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
					textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
				/>
			</View>

			{/* Text Msg */}
			<View style={[assignUserHabitation_style.textContainer]}>
				<Text style={[txt.noto24, assignUserHabitation_style.info_text]}>사는 지역을 대략적으로 알려주세요.</Text>
			</View>
			{/* HabitationForm */}
			<View style={[assignUserHabitation_style.habitationForm]}>
				<DropdownSelect width={522} items={['시를 선택해 주세요', '서울시']} onChange={onSelectCity} />
				<DropdownSelect width={522} items={['구를 선택해 주세요', '동작구']} onChange={onSelectDistrict} />
				<DropdownSelect width={522} items={['동을 선택해 주세요', '가운동']} onChange={onSelectNeighbor} />
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignUserHabitation_style.btn_w654]}>
				<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w522} onPress={goToNextStep} />
			</View>
		</View>
	);
};
