import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {btn_w522} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import DropdownSelect from '../molecules/DropdownSelect';
import Stagebar from '../molecules/Stagebar';
import {login_style, btn_style, temp_style, progressbar_style, assignUserHabitation_style} from './style_templete';
import Modal from 'Component/modal/Modal';
import {stagebar_style} from '../organism_ksw/style_organism';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

/**
 * 유저의 지역정보를 등록하는 템플릿
 *
 * @param {navigation} navigation - 네비게이션을 이용하기 위한 객체
 */
const AssignUserHabitation = props => {
	const [data, setData] = React.useState({
		...props.route.params,
		user_address: {
			city: '시를 선택해 주세요', //시,도
			district: '구를 선택해 주세요', //군,구
			neighbor: '동을 선택해 주세요', //동,읍,면
		},
	});

	const goToNextStep = () => {
		props.navigation.push('AssignUserProfileImage', data);
	};

	const onSelectCity = () => {
		Modal.rollingSelect(
			'시를 선택해 주세요',
			['서울시', '부산시', '광주광역시'],
			e => {
				setData({...data, user_address: {...data.user_address, city: e}});
				cityDrop.current.press();
			},
			() => {
				cityDrop.current.press();
			},
		);
	};
	const onSelectDistrict = selectedItem => {
		Modal.rollingSelect(
			'구를 선택해 주세요',
			['북구', '서구', '중구'],
			e => {
				setData({...data, user_address: {...data.user_address, district: e}});
				districDrop.current.press();
			},
			() => {
				districDrop.current.press();
			},
		);
	};
	const onSelectNeighbor = selectedItem => {
		Modal.rollingSelect(
			'동을 선택해 주세요',
			['신당동', '사당동', '신림동', '행신동'],
			e => {
				setData({...data, user_address: {...data.user_address, neighbor: e}});
				neighborDrop.current.press();
			},
			() => {
				neighborDrop.current.press();
			},
		);
	};

	const cityDrop = React.useRef();
	const districDrop = React.useRef();
	const neighborDrop = React.useRef();

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* (M)StageBar	 */}
			<TouchableWithoutFeedback onPress={() => console.log(data)}>
				<View
					style={{backgroundColor: 'red', height: 30, width: 30, position: 'absolute', borderWidth: 1, borderColor: 'blue', top: 0, left: 0}}></View>
			</TouchableWithoutFeedback>
			<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
				<Stagebar
					backgroundBarStyle={stagebar_style.backgroundBar} //배경이 되는 bar의 style, width props으로 너비결정됨
					insideBarStyle={stagebar_style.insideBar} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
					textStyle={[txt.roboto24, stagebar_style.text]} //text의 스타일
					current={4} //현재 단계를 정의
					maxstage={4} //전체 단계를 정의
					width={600 * DP} //bar의 너비
				/>
			</View>

			{/* Text Msg */}
			<View style={[assignUserHabitation_style.textContainer]}>
				<Text style={[txt.noto24, assignUserHabitation_style.info_text]}>사는 지역을 대략적으로 알려주세요.</Text>
			</View>
			{/* HabitationForm */}
			<View style={[assignUserHabitation_style.habitationForm]}>
				<DropdownSelect width={522} value={data.user_address.city} onOpen={onSelectCity} ref={cityDrop} />
				<DropdownSelect width={522} value={data.user_address.district} onOpen={onSelectDistrict} ref={districDrop} />
				<DropdownSelect width={522} value={data.user_address.neighbor} onOpen={onSelectNeighbor} ref={neighborDrop} />
			</View>

			{/* (A)Btn_w654 */}
			<View style={[btn_style.btn_w654, assignUserHabitation_style.btn_w654]}>
				<AniButton btnTitle={'확인'} titleFontStyle={'32'} btnTheme={'shadow'} btnLayout={btn_w522} onPress={goToNextStep} />
			</View>
		</View>
	);
};

export default AssignUserHabitation;
