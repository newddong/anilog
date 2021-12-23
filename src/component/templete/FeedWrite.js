import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableWithoutFeedback, TextInput} from 'react-native';
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
import {pet_kind} from 'Root/i18n/msg';
import DatePicker from '../molecules/DatePicker';
import TabSelectFilled_Type1 from '../molecules/TabSelectFilled_Type1';
import Input24 from '../molecules/Input24';
import InputBalloon from '../molecules/InputBalloon';
import LocationButton from '../molecules/LocationButton';
import PetAccountList from '../organism_ksw/PetAccountList';
import {dummy_UserObject_pet, dummy_UserObject_pet_with_owner} from 'Root/config/dummyDate_json';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'Component/modal/Modal';
import userGlobalObj from 'Root/config/userGlobalObject';
import NormalDropDown from 'Molecules/NormalDropDown';
import { useNavigation,useRoute } from '@react-navigation/native';

export default FeedWrite = props => {
	const [showPetAccountList, setShowPetAccountList] = React.useState(false); //PetAccount 계정
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showLostAnimalForm, setShowLostAnimalForm] = React.useState(false); //실종버튼
	const [showReportForm, setShowRepotForm] = React.useState(false); //제보버튼
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean
	// const [selected]
	const [feedText, setFeedText] = React.useState(''); //피드 TextInput Value
	const [selectedImg, setSelectedImg] = React.useState([]); //사진 uri리스트

	React.useEffect(() => {
		props.navigation.setParams({...props.route.params, 
			media_uri: selectedImg, 
			feed_medias:selectedImg.map(v=>({is_video:false,duration:0,tags:[{position_x:0,position_y:0}]}))
		});
	}, [selectedImg]); //네비게이션 파라메터에 이미지 리스트를 넣음(헤더에서 처리하도록)

	React.useEffect(() => {
		props.navigation.setOptions({title: userGlobalObj.userInfo?.user_nickname});
		props.navigation.setParams({...props.route.params, type: 'Feed'});
	}, []); //처음 로딩시 유저 닉네임 표시

	//긴급 게시 버튼 관련 분기 처리
	React.useEffect(() => {
		// 실종버튼, 제보버튼, pet목록이 작동 중이지 않을 때는 긴급버튼목록이 출력
		showLostAnimalForm || showReportForm || showPetAccountList ? setShowUrgentBtns(false) : setShowUrgentBtns(true);
	}, [showLostAnimalForm, showReportForm]);

	React.useEffect(() => {
		props.navigation.setParams({...props.route.params, feed_content: feedText});
	}, [feedText]);

	//긴급버튼 중 - 실종 클릭
	const onPressMissingWrite = () => {
		setShowLostAnimalForm(true);
		props.navigation.setParams({...props.route.params, type: 'Missing'});
		props.navigation.setOptions({title: '실종 게시물'});
	};

	//긴급버튼 중 - 제보 클릭
	const onPressReportWrite = () => {
		setShowRepotForm(true);
		props.navigation.setParams({...props.route.params, type: 'Report'});
		props.navigation.setOptions({title: '제보 게시물'});
	};

	//Text 안에 있는 HashTag된 텍스트 클릭 시 FeedListForHashTag 로 이동
	const moveToFeedListForHashTag = tagText => {
		console.log('TagText' + tagText);
		const hashInfo = {
			keyword: tagText,
			keywordBold: true,
			count: 10,
		};
		props.navigation.push('FeedListForHashTag', hashInfo);
	};

	//사진 추가
	const moveToMultiPhotoSelect = () => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				selectionLimit: 5,
			},
			responseObject => {
				console.log('선택됨', responseObject);
				if (responseObject.assets.length > 5) {
					Modal.popOneBtn('사진은 5개까지 선택가능합니다.', '확인', () => Modal.close());
				}
				responseObject.didCancel ? console.log('선택취소') : setSelectedImg(responseObject.assets.map(v => v.uri).slice(0, 5));
			},
		);
	};
	//사진 삭제
	const deletePhoto = index => {
		setSelectedImg(selectedImg.filter((v, i) => i != index));
	};

	const onMissingForm = missing => {
		props.navigation.setParams({...props.route.params, ...missing});
	}

	const onReportForm = report => {
		props.navigation.setParams({...props.route.params, ...report});
	}

	//위치추가
	const moveToLocationPicker = () => {
		// props.navigation.push('LocationPicker');
	};

	//태그 추가
	const moveToFeedMediaTagEdit = () => {
		// props.navigation.push('FeedMediaTagEdit');
	};

	const inputFeedTxt = feedInput => {
		setFeedText(feedInput);
	};


	//긴급 버튼 - '제보' '실종' 중 하나 클릭 시 변동되는 View 분기 처리
	const setUrgBtnsClickedView = () => {
		//긴급 버튼 중 '제보' 클릭한 경우
		if (showReportForm) {
			return <ReportForm  onDataChange={onReportForm}/>;
		} // 긴급 게시 버튼 중 '실종' 클릭한 경우
		else return showLostAnimalForm ? <MissingForm onDataChange={onMissingForm} /> : false;
	};

	const setWriteModeState = () => {
		//userType - 반려동물 계정 리스트 출력 분기
		if (showPetAccountList) {
			return (
				<View style={[temp_style.petAccountList, feedWrite.petAccountList]}>
					<PetAccountList items={dummy_UserObject_pet_with_owner} />
				</View>
			);
		}
		//일반 FeedWrite 분기
		else {
			return (
				<View>
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
					{!showReportForm&&!showLostAnimalForm&&<View style={[feedWrite.btn_w194_container]}>
						{/* 임보일기 */}
						{<View style={[btn_style.btn_w194, feedWrite.btn_w194]}>
							<AniButton btnTitle={'임보일기'} btnStyle={'filled'} titleFontStyle={24} btnLayout={btn_w194} />
						</View>}
						{/* 전체공개 */}
						<View style={[btn_style.btn_w194]}>
							<ActionButton btnTitle={'전체 공개'} btnStyle={'border'} titleFontStyle={24} btnLayout={btn_w194} />
						</View>
					</View>}
					{/* SelectMediaList */}
					{selectedImg.length > 0 && (
						<View style={[temp_style.selectedMediaList, feedWrite.selectedMediaList]}>
							<SelectedMediaList items={selectedImg} onDelete={deletePhoto} />
						</View>
					)}
					{/* 긴급 게시 관련 버튼 클릭 시 출력되는 View */}
					{setUrgBtnsClickedView()}
				</View>
			);
		}
	};

	return (
		<View style={[login_style.wrp_main, feedWrite.container]}>
			<ScrollView contentContainerStyle={{width: 750 * DP, alignItems: 'center'}}>
				<View style={[temp_style.feedTextEdit, feedWrite.feedTextEdit]}>
					{/* 피드 글 작성 */}
					<TextInput
						textAlignVertical={'top'}
						multiline={true}
						style={{flex: 1}}
						placeholder="게시물을 작성하세요"
						onChangeText={inputFeedTxt}></TextInput>
				</View>

				{/* Input Text 하단 언더라인 */}
				<View style={{width: 654 * DP, height: 2 * DP, marginVertical: 40 * DP, backgroundColor: APRI10}} />

				{/* <View style={{width: 654 * DP, height: 300 * DP, backgroundColor: 'lightblue', flexDirection: 'row'}}>
					{completed ? getFeedContent(draft) : null}
				</View> */}

				{setWriteModeState()}
				{/* 긴급 게시물 관련 버튼 컨테이너 */}
			</ScrollView>
			{showUrgentBtns ? (
				<View style={[temp_style.floatingBtn, feedWrite.urgentBtnContainer]}>
					{showActionButton ? (
						<View>
							<View style={[feedWrite.urgentBtnItemContainer]}>
								<TouchableWithoutFeedback onPress={onPressMissingWrite}>
									<Text style={[txt.noto32, {color: WHITE}]}>실종</Text>
								</TouchableWithoutFeedback>
							</View>
							<View style={[feedWrite.urgentBtnItemContainer]}>
								<TouchableWithoutFeedback onPress={onPressReportWrite}>
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
	);
};

const MissingForm = props => {
	const pet_speciesArray = ['개', '고양이', '기타'];
	const pet = new Map();
	pet.set(pet_speciesArray[0], ['말티즈', '치와와', '요크']);
	pet.set(pet_speciesArray[1], ['페르시안', '벵골고양이', '메인쿤']);
	pet.set(pet_speciesArray[2], ['새', '햄스터', '토끼', '펭귄', '호랑이', '사자', '도마뱀', '원숭이']);

	const [data, setData] = React.useState({
		missing_animal_species: pet_speciesArray[0],
		missing_animal_species_detail: pet.get(pet_speciesArray[0])[0],
		missing_animal_sex: 'male',
		missing_animal_age: '0',
		missing_animal_lost_location: '',
		missing_animal_features: '',
		missing_animal_date: '',
		missing_animal_contact: '',
	});

	React.useEffect(() => {
		props.onDataChange && props.onDataChange(data);
	}, [data]);

	const onDateChange = date => {
		setData({...data, missing_animal_date: date});
	};

	const onSelectSpecies = (v, i) => {
		setData({...data, missing_animal_species: pet_speciesArray[i]});
	};

	const onSelectSpeciesDetail = (v, i) => {
		setData({...data, missing_animal_species_detail: pet.get(data.missing_animal_species)[i]});
	};

	const selectSex = i => {
		console.log(i);
		switch (i) {
			//male
			case 0:
				setData({...data, missing_animal_sex: 'male'});
				break;
			//female
			case 1:
				setData({...data, missing_animal_sex: 'female'});
				break;
			//unknown
			case 2:
				setData({...data, missing_animal_sex: 'unknown'});
				break;
		}
	};

	const inputAge = age => {
		setData({...data, missing_animal_age: age});
	};
	const inputLocation = location => {
		setData({...data, missing_animal_lost_location: location});
	};
	const inputContact = contact => {
		setData({...data, missing_animal_contact: contact});
	};
	const inputFeature = feature => {
		setData({...data, missing_animal_features: feature});
	};
	return (
		<View style={[feedWrite.lostAnimalForm]}>
			{/* DropDownSelect */}
			<View style={[feedWrite.lostAnimalForm_Form]}>
				<View style={[feedWrite.formTitle]}>
					<Text style={[txt.noto24, {color: APRI10}]}>분류</Text>
				</View>
				<View style={[feedWrite.formContentContainer]}>
					<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
						<NormalDropDown items={pet_kind} menu={pet_speciesArray} width={292} onSelect={onSelectSpecies} defaultIndex={0} />
					</View>
					<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
						<NormalDropDown items={pet_kind} menu={pet.get(data.missing_animal_species)} width={292} onSelect={onSelectSpeciesDetail} />
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
						<DatePicker width={654} onDateChange={onDateChange} />
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
						<TabSelectFilled_Type1 items={['남아', '여아', '모름']} onSelect={selectSex} />
					</View>
				</View>
			</View>
			{/* Input24 */}
			<View style={[temp_style.input24, feedWrite.input24]}>
				<Input24
					title={'실종 동물의 나이'}
					placeholder="실종 동물의 나이를 입력하세요"
					width={654}
					descriptionType={'none'}
					onChange={inputAge}
					value={data.missing_animal_age}
				/>
			</View>
			<View style={[temp_style.input24, feedWrite.input24]}>
				<Input24
					title={'실종 위치'}
					placeholder="실종 동물의 위치를 입력하세요"
					width={654}
					descriptionType={'none'}
					onChange={inputLocation}
					value={data.missing_animal_lost_location}
				/>
			</View>
			<View style={[temp_style.input24, feedWrite.input24]}>
				<Input24
					title={'연락처'}
					placeholder="연락받으실 연락처를 입력하세요"
					width={654}
					descriptionType={'none'}
					onChange={inputContact}
					value={data.missing_animal_contact}
				/>
			</View>
			<View style={[temp_style.inputBalloon, feedWrite.inputBalloon]}>
				<InputBalloon
					title={'실종 동물의 특징'}
					placeholder="실종 동물의 특징을 상세하게 적어주세요"
					onChange={inputFeature}
					value={data.missing_animal_features}
				/>
			</View>
		</View>
	);
};

const ReportForm = props => {
	const navigation = useNavigation();
	const route = useRoute();
	const [addr,setAddr] = React.useState('');
	const [detailAddr,setDetailAddr] = React.useState('');
	const pet_speciesArray = ['개', '고양이', '기타'];
	const pet = new Map();
	pet.set(pet_speciesArray[0], ['말티즈', '치와와', '요크']);
	pet.set(pet_speciesArray[1], ['페르시안', '벵골고양이', '메인쿤']);
	pet.set(pet_speciesArray[2], ['새', '햄스터', '토끼', '펭귄', '호랑이', '사자', '도마뱀', '원숭이']);

	const [data, setData] = React.useState({
		report_witness_date: '2021.01.01',
		report_witness_location: '',
		report_animal_features: '',
		report_animal_species: pet_speciesArray[0],
		report_animal_species_detail:pet.get(pet_speciesArray[0])[0],
	});

	React.useEffect(() => {
		props.onDataChange && props.onDataChange(data);
	}, [data]);
	
	React.useEffect(()=>{
		if(route.params.addr){
			setAddr(route.params.addr.jibunAddr);
			setDetailAddr(route.params.addr.detailAddr);
		}
		
	},[route.params]);

	React.useEffect(()=>{
		setData({...data,report_witness_location:addr+' '+detailAddr});
	},[addr,detailAddr])

	
	const onChangeAddr = (addr)=>{
		setAddr(addr);
	}
	
	const onChangeDetailAddr = (addr)=>{
		setDetailAddr(addr);
	}
	const onDateChange = date => {
		setData({...data, report_witness_date: date});
	};
	const inputFeature = feature => {
		setData({...data, report_animal_features: feature});
	};

	const onSelectSpecies = (v, i) => {
		setData({...data, report_animal_species: pet_speciesArray[i]});
	};

	const onSelectSpeciesDetail = (v, i) => {
		setData({...data, report_animal_species_detail: pet.get(data.report_animal_species)[i]});
	};
	const searchAddress = ()=>{
		navigation.navigate('AddressSearch',{from:route.name,fromkey:route.key});
	}
	return (
		<View style={[feedWrite.reportForm_container]}>
			<View style={[feedWrite.reportForm]}>
				<View style={[feedWrite.reportForm_form]}>
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text style={[txt.noto24, {color: APRI10}]}>분류</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<NormalDropDown items={pet_kind} menu={pet_speciesArray} width={292} onSelect={onSelectSpecies} defaultIndex={0} />
							</View>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<NormalDropDown items={pet_kind} menu={pet.get(data.report_animal_species)} width={292} onSelect={onSelectSpeciesDetail} />
							</View>
						</View>
					</View>
					<View style={[feedWrite.formTitle]}>
						<Text style={[txt.noto24, {color: APRI10}]}>제보 날짜</Text>
					</View>
					<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
						<DatePicker width={654} onDateChange={onDateChange} />
					</View>
					<View style={[feedWrite.reportLocation_form]}>
						<View style={[feedWrite.reportLocation_form_left]}>
							<View style={[feedWrite.reportLocation_form_left_title]}>
								<Text style={[txt.noto24, {color: APRI10}]}>제보 장소</Text>
							</View>
							<View style={[temp_style.inputNoTitle, feedWrite.reportLocation_form_left_inputNoTitle]}>
								<Input24 width={438} placeholder={'동주소 까지 적어주세요'} onChange={onChangeAddr} value={addr}/>
							</View>
						</View>
						<View style={[feedWrite.reportLocation_form_right]}>
							<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
								<LocationButton btnTitle={'현위치'} />
							</View>
							<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
								<AniButton btnTitle={'주소 검색'} btnLayout={btn_w176} btnStyle={'border'} titleFontStyle={24} onPress={searchAddress}/>
							</View>
						</View>
					</View>
					<View style={[temp_style.inputNoTitle, feedWrite.locationDetail]}>
						<Input24 width={654} placeholder={'장소의 세부적인 정보를 적어주세요'} onChange={onChangeDetailAddr} value={detailAddr}/>
					</View>
					<View style={[temp_style.inputBalloon, feedWrite.inputBalloon]}>
						<InputBalloon
							title={'제보할 동물의 특징'}
							placeholder="제보할 동물의 특징을 상세하게 적어주세요"
							onChange={inputFeature}
							value={data.missing_animal_features}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};
