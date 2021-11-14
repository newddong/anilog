import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';
import {APRI10, WHITE} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Camera54, Location54_APRI10, Paw54_Border} from 'Root/component/atom/icon/index';
import {Urgent_Write1, Urgent_Write2} from '../atom/icon';
import {btn_style, feedWrite, login_style, temp_style} from './style_templete';
import AniButton from '../molecules/AniButton';
import {btn_w176, btn_w194} from '../atom/btn/btn_style';
import ActionButton from '../molecules/ActionButton';
import SelectedMediaList from '../organism_ksw/SelectedMediaList';
import DropdownSelect from '../molecules/DropdownSelect';
import {pet_kind} from 'Root/i18n/msg';
import DatePicker from '../molecules/DatePicker';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import Input24 from '../molecules/Input24';
import InputBalloon from '../molecules/InputBalloon';
import LocationButton from '../molecules/LocationButton';
import PetAccountList from '../organism_ksw/PetAccountList';

export default FeedWrite = props => {
	const [showPetAccountList, setShowPetAccountList] = React.useState(false);
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showLostAnimalForm, setShowLostAnimalForm] = React.useState(false); //실종버툰
	const [showReportForm, setShowRepotForm] = React.useState(false); //제보버튼
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean

	React.useEffect(() => {
		// 실종버튼, 제보버튼, pet목록 출력 기능이 작동 중이지 않을 때는 긴급버튼목록이 출력
		showLostAnimalForm || showReportForm || showPetAccountList ? setShowUrgentBtns(false) : setShowUrgentBtns(true);
	}, [showLostAnimalForm, showReportForm]);

	const moveToFeedReportWrite = () => {
		// props.navigation.push('FeedReportWrite', {title: '제보 게시물'});
		// ㄴ 템플릿 간의 이동이 아닌 FeedWrite내에서의 Write모드 이동이므로 Navigate는 사용안함
		setShowRepotForm(true);
	};
	const moveToFeedMissingWrite = () => {
		setShowLostAnimalForm(true);
		// props.navigation.push('FeedMissingWrite', {title: '실종 게시물'});
		// ㄴ 템플릿 간의 이동이 아닌 FeedWrite내에서의 Write모드 이동이므로 Navigate는 사용안함
	};
	const moveToMultiPhotoSelect = () => {
		props.navigation.push('MultiPhotoSelect');
	};
	const moveToLocationPicker = () => {
		props.navigation.push('LocationPicker');
	};
	const moveToFeedMediaTagEdit = () => {
		props.navigation.push('FeedMediaTagEdit');
	};

	const setUrgBtnsClickedView = () => {
		//긴급 버튼 중 '제보' 클릭한 경우
		if (showReportForm) {
			return (
				<View style={[feedWrite.reportForm_container]}>
					<View style={[feedWrite.reportForm]}>
						<View style={[feedWrite.reportForm_form]}>
							<View style={[feedWrite.formTitle]}>
								<Text style={[txt.noto24, {color: APRI10}]}>제보 날짜</Text>
							</View>
							<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
								<DatePicker width={654} />
							</View>
							<View style={[feedWrite.reportLocation_form]}>
								<View style={[feedWrite.reportLocation_form_left]}>
									<View style={[feedWrite.reportLocation_form_left_title]}>
										<Text style={[txt.noto24, {color: APRI10}]}>제보 장소</Text>
									</View>
									<View style={[temp_style.inputNoTitle, feedWrite.reportLocation_form_left_inputNoTitle]}>
										<Input24 width={438} placeholder={'동주소 까지 적어주세요'} />
									</View>
								</View>
								<View style={[feedWrite.reportLocation_form_right]}>
									<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
										<LocationButton btnTitle={'현위치'} />
									</View>
									<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
										<AniButton btnTitle={'주소 검색'} btnLayout={btn_w176} btnStyle={'border'} titleFontStyle={24} />
									</View>
								</View>
							</View>
							<View style={[temp_style.inputNoTitle, feedWrite.locationDetail]}>
								<Input24 width={654} placeholder={'장소의 세부적인 정보를 적어주세요'} />
							</View>
						</View>
					</View>
				</View>
			);
		} // 긴급 게시 버튼 중 '실종' 클릭한 경우
		else
			return showLostAnimalForm ? (
				<View style={[feedWrite.lostAnimalForm]}>
					{/* DropDownSelect */}
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text style={[txt.noto24, {color: APRI10}]}>분류</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<DropdownSelect items={pet_kind} width={292} />
							</View>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<DropdownSelect items={pet_kind} width={292} />
							</View>
						</View>
					</View>
					{/* DatePicker */}
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text style={[txt.noto24, {color: APRI10}]}>실종된 날짜</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
								<DatePicker width={654} />
							</View>
						</View>
					</View>
					{/* tabSelectFilled_Type1 */}
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text style={[txt.noto24, {color: APRI10}]}>실종 동물의 성별</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.tabSelectFilled_Type1, feedWrite.tabSelectFilled_Type1]}>
								<TabSelectFilled_Type1 items={['남아', '여아', '모름']} />
							</View>
						</View>
					</View>
					{/* Input24 */}
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Input24 title={'실종 동물의 나이'} width={654} descriptionType={'none'} />
					</View>
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Input24 title={'실종 위치'} width={654} descriptionType={'none'} />
					</View>
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Input24 title={'연락처'} width={654} descriptionType={'none'} />
					</View>
					<View style={[temp_style.inputBalloon, feedWrite.inputBalloon]}>
						<InputBalloon title={'실종 동물의 특징'} />
					</View>
				</View>
			) : (
				false
			);
	};

	const setWriteModeState = () => {
		//반려동물 계정 리스트 출력 분기
		if (showPetAccountList) {
			return (
				<View style={[temp_style.petAccountList, feedWrite.petAccountList]}>
					<PetAccountList />
				</View>
			);
		}
		//일반 FeedWrite 분기
		else {
			return (
				<View style={[feedWrite.container]}>
					{/* 사진추가 / 위치추가 / 태그하기 */}
					<View style={[feedWrite.buttonContainer]}>
						<TouchableWithoutFeedback onPress={moveToMultiPhotoSelect}>
							<View style={[feedWrite.btnItemContainer, {marginBottom: 5 * DP}]}>
								<Camera54 />
								<Text style={[txt.noto24, {color: APRI10, marginLeft: 10 * DP}]}>사진추가</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={moveToLocationPicker}>
							<View style={[feedWrite.btnItemContainer]}>
								<Location54_APRI10 />
								<Text style={[txt.noto24, {color: APRI10, alignSelf: 'center', marginLeft: 10 * DP}]}>위치추가</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={moveToFeedMediaTagEdit}>
							<View style={[feedWrite.btnItemContainer]}>
								<Paw54_Border />
								<Text style={[txt.noto24, {color: APRI10, alignSelf: 'center', marginLeft: 10 * DP}]}>태그하기</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={[feedWrite.btn_w194_container]}>
						{/* 임보일기 */}
						<View style={[btn_style.btn_w194, feedWrite.btn_w194]}>
							<AniButton btnTitle={'임보일기'} btnStyle={'filled'} titleFontStyle={24} btnLayout={btn_w194} />
						</View>
						{/* 전체공개 */}
						<View style={[btn_style.btn_w194]}>
							<ActionButton btnTitle={'전체 공개'} btnStyle={'border'} titleFontStyle={24} btnLayout={btn_w194} />
						</View>
					</View>
					{/* SelectMediaList */}
					<View style={[temp_style.selectedMediaList, feedWrite.selectedMediaList]}>
						<SelectedMediaList />
					</View>
					{/* 긴급 게시 관련 버튼 클릭 시 출력되는 View */}
					{setUrgBtnsClickedView()}
				</View>
			);
		}
	};
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, feedWrite.container]}>
				{/* 테스트용 */}
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity
						onPress={() => setShowLostAnimalForm(!showLostAnimalForm)}
						style={{width: 100, height: 20, backgroundColor: 'black', marginLeft: 7}}>
						<Text style={{color: 'white'}}>LostAnimal {showLostAnimalForm ? 'On' : 'off'}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setShowPetAccountList(!showPetAccountList)}
						style={{width: 100, height: 20, backgroundColor: 'purple', marginLeft: 7}}>
						<Text style={{color: 'white'}}>PetAccount {showPetAccountList ? 'On' : 'off'}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setShowRepotForm(!showReportForm)}
						style={{width: 100, height: 20, backgroundColor: 'blue', marginLeft: 7}}>
						<Text style={{color: 'white'}}>RepotForm {showReportForm ? 'On' : 'off'}</Text>
					</TouchableOpacity>
				</View>
				{/* 테스트용 종료 */}
				<View style={[temp_style.feedTextEdit, feedWrite.feedTextEdit, {backgroundColor: 'yellow'}]}>
					<Text style={[txt.noto28]}>도와주세요!!</Text>
				</View>

				{/* Input Text 하단 언더라인 */}
				<View style={{width: 654 * DP, height: 2 * DP, marginVertical: 40 * DP, backgroundColor: APRI10}} />

				{setWriteModeState()}
				{/* 긴급 게시물 관련 버튼 컨테이너 */}
				{showUrgentBtns ? (
					<View style={[temp_style.floatingBtn, feedWrite.urgentBtnContainer]}>
						{showActionButton ? (
							<View>
								<View style={[feedWrite.urgentBtnItemContainer]}>
									<TouchableWithoutFeedback onPress={moveToFeedMissingWrite}>
										<Text style={[txt.noto32, {color: WHITE}]}>실종</Text>
									</TouchableWithoutFeedback>
								</View>
								<View style={[feedWrite.urgentBtnItemContainer]}>
									<TouchableWithoutFeedback onPress={moveToFeedReportWrite}>
										<Text style={[txt.noto32, {color: WHITE}]}>제보</Text>
									</TouchableWithoutFeedback>
								</View>
							</View>
						) : null}
						<TouchableWithoutFeedback onPress={() => setShowActionButton(!showActionButton)}>
							<View style={[feedWrite.urgentActionButton]}>{showActionButton ? <Urgent_Write2 /> : <Urgent_Write1 />}</View>
						</TouchableWithoutFeedback>
					</View>
				) : (
					false
				)}
			</View>
		</ScrollView>
	);
};
