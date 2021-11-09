import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';
import {btn_style, feedWrite, login_style, temp_style} from './style_templete';

export default FeedWrite = props => {
	const [showPetAccountList, setShowPetAccountList] = React.useState(false);
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showLostAnimalForm, setShowLostAnimalForm] = React.useState(false); //실종버툰
	const [showReportForm, setShowRepotForm] = React.useState(false); //제보버튼

	React.useEffect(() => {
		// 실종버튼, 제보버튼, pet목록 출력 기능이 작동 중이지 않을 때는 긴급버튼목록이 출력
		showLostAnimalForm || showReportForm || showPetAccountList ? setShowUrgentBtns(false) : setShowUrgentBtns(true);
	}, [showLostAnimalForm, showReportForm]);

	const moveToFeedReportWrite = () => {
		props.navigation.push('FeedReportWrite', {title: '제보 게시물'});
	};
	const moveToFeedMissingWrite = () => {
		props.navigation.push('FeedMissingWrite', {title: '실종 게시물'});
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
								<Text>제보날짜</Text>
							</View>
							<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
								<Text>(M)DatePicker</Text>
							</View>
							<View style={[feedWrite.reportLocation_form]}>
								<View style={[feedWrite.reportLocation_form_left]}>
									<View style={[feedWrite.reportLocation_form_left_title]}>
										<Text>제보 장소</Text>
									</View>
									<View style={[temp_style.inputNoTitle, feedWrite.reportLocation_form_left_inputNoTitle]}>
										<Text>(M)InputNoTitle</Text>
									</View>
								</View>
								<View style={[feedWrite.reportLocation_form_right]}>
									<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
										<Text> (A)btn_w176</Text>
									</View>
									<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
										<Text> (A)btn_w176</Text>
									</View>
								</View>
							</View>
							<View style={[temp_style.inputNoTitle, feedWrite.locationDetail]}>
								<Text>(M)InputNotitle</Text>
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
							<Text>Text</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<Text>(M)DropdownSelect</Text>
							</View>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<Text>(M)DropdownSelect</Text>
							</View>
						</View>
					</View>
					{/* DatePicker */}
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text>Text</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
								<Text>(M)DatePicker</Text>
							</View>
						</View>
					</View>
					{/* tabSelectFilled_Type1 */}
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text>Text</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.tabSelectFilled_Type1, feedWrite.tabSelectFilled_Type1]}>
								<Text>tabSelectFilled_Type1</Text>
							</View>
						</View>
					</View>
					{/* Input24 */}
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Text>(M)Input24</Text>
					</View>
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Text>(M)Input24</Text>
					</View>
					<View style={[temp_style.input24, feedWrite.input24]}>
						<Text>(M)Input24</Text>
					</View>
					<View style={[temp_style.inputBalloon, feedWrite.inputBalloon]}>
						<Text>(M)InputBalloon </Text>
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
					<Text>(O)PetAccountList</Text>
				</View>
			);
		}
		//일반 FeedWrite 분기
		else {
			return (
				<ScrollView>
					<View style={[feedWrite.container]}>
						{/* 사진추가 / 위치추가 / 태그하기 */}
						<View style={[feedWrite.buttonContainer]}>
							<TouchableWithoutFeedback onPress={moveToMultiPhotoSelect}>
								<Text>사진추가(클릭)</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={moveToLocationPicker}>
								<Text>위치추가(클릭)</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={moveToFeedMediaTagEdit}>
								<Text>태그하기(클릭)</Text>
							</TouchableWithoutFeedback>
						</View>
						<View style={[feedWrite.btn_w194_container]}>
							{/* 임보일기 */}
							<View style={[btn_style.btn_w194, feedWrite.btn_w194]}>
								<Text>btn_w194</Text>
							</View>
							{/* 전체공개 */}
							<View style={[btn_style.btn_w194]}>
								<Text>btn_w194</Text>
							</View>
						</View>
						{/* SelectMediaList */}
						<View style={[temp_style.selectedMediaList, feedWrite.selectedMediaList]}>
							<Text>(O)selectedMediaList</Text>
						</View>
						{/* 긴급 게시 관련 버튼 클릭 시 출력되는 View */}
						{setUrgBtnsClickedView()}
					</View>
				</ScrollView>
			);
		}
	};
	return (
		<View style={[login_style.wrp_main, feedWrite.container]}>
			<View style={[temp_style.feedTextEdit, feedWrite.feedTextEdit]}>
				<Text>FeedTextEdit</Text>
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity
						onPress={() => setShowLostAnimalForm(!showLostAnimalForm)}
						style={{width: 70, height: 40, backgroundColor: 'black', marginLeft: 7}}>
						<Text style={{color: 'white'}}>ShowLostAnimal</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setShowPetAccountList(!showPetAccountList)}
						style={{width: 70, height: 40, backgroundColor: 'purple', marginLeft: 7}}>
						<Text style={{color: 'white'}}>setShowPetAccountList</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowRepotForm(!showReportForm)} style={{width: 70, height: 40, backgroundColor: 'blue', marginLeft: 7}}>
						<Text style={{color: 'white'}}>setShowRepotForm</Text>
					</TouchableOpacity>
				</View>
				<Text>{showLostAnimalForm ? 'showLostAnimalForm' : false}</Text>
				<Text>{showPetAccountList ? 'showPetAccountList' : false}</Text>
				<Text>{showReportForm ? 'showReportForm' : false}</Text>
			</View>
			{setWriteModeState()}
			{/* 긴급 게시물 관련 버튼 컨테이너 */}
			{showUrgentBtns ? (
				<View style={[temp_style.floatingBtn, feedWrite.urgentBtnContainer]}>
					<TouchableWithoutFeedback onPress={moveToFeedMissingWrite}>
						<Text>실종(클릭)</Text>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={moveToFeedReportWrite}>
						<Text>제보(클릭)</Text>
					</TouchableWithoutFeedback>
				</View>
			) : (
				false
			)}
		</View>
	);
};
