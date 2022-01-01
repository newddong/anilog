import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {APRI10, WHITE, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Camera54, Location54_APRI10, Paw54_Border} from 'Root/component/atom/icon/index';
import {Urgent_Write1, Urgent_Write2} from '../atom/icon';
import {btn_style, feedWrite, login_style, temp_style} from './style_templete';
import AniButton from '../molecules/AniButton';
import {btn_w176, btn_w194} from '../atom/btn/btn_style';
import ActionButton from '../molecules/ActionButton';
import SelectedMediaList from '../organism_ksw/SelectedMediaList';
import {DOG_KIND, pet_kind} from 'Root/i18n/msg';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {getPettypes} from 'Root/api/userapi';
import ImagePicker from 'react-native-image-crop-picker';
import HashInput from 'Molecules/HashInput';
import {getUserListByNickname} from 'Root/api/userapi';
import AccountHashList from '../organism_ksw/AccountHashList';
import {getAddressList} from 'Root/api/address';

export default FeedWrite = props => {
	const [showPetAccountList, setShowPetAccountList] = React.useState(false); //PetAccount 계정
	const [showUrgentBtns, setShowUrgentBtns] = React.useState(true); //긴급버튼목록
	const [showLostAnimalForm, setShowLostAnimalForm] = React.useState(false); //실종버튼
	const [showReportForm, setShowRepotForm] = React.useState(false); //제보버튼
	const [showActionButton, setShowActionButton] = React.useState(false); // 긴급게시(하얀버전) 클릭 시 - 실종/제보 버튼 출력 Boolean
	const [isDiary, setDiary] = React.useState(false); //임보일기여부
	const [feedText, setFeedText] = React.useState(''); //피드 TextInput Value
	const [selectedImg, setSelectedImg] = React.useState([]); //사진 uri리스트

	React.useEffect(() => {
		props.navigation.setParams({
			...props.route.params,
			media_uri: selectedImg,
			feed_medias: selectedImg.map(v => ({is_video: false, duration: 0, tags: [{position_x: 0, position_y: 0}]})),
		});
	}, [selectedImg]); //네비게이션 파라메터에 이미지 리스트를 넣음(헤더에서 처리하도록)

	React.useEffect(() => {
		if (props.route.params?.feedType == 'Feed') {
			props.navigation.setOptions({title: userGlobalObj.userInfo?.user_nickname});
			props.navigation.setParams({...props.route.params, feedType: 'Feed'});
		}
		if (props.route.params?.feedType == 'Missing') {
			onPressMissingWrite();
		}
		if (props.route.params?.feedType == 'Report') {
			onPressReportWrite();
		}
	}, []); //처음 로딩시 유저 닉네임 표시

	//긴급 게시 버튼 관련 분기 처리
	React.useEffect(() => {
		// 실종버튼, 제보버튼, pet목록이 작동 중이지 않을 때는 긴급버튼목록이 출력
		showLostAnimalForm || showReportForm || showPetAccountList ? setShowUrgentBtns(false) : setShowUrgentBtns(true);
	}, [showLostAnimalForm, showReportForm]);

	React.useEffect(() => {
		props.navigation.setParams({...props.route.params, feed_content: feedText});
		console.log(feedText);
	}, [feedText]);

	//긴급버튼 중 - 실종 클릭
	const onPressMissingWrite = () => {
		setShowLostAnimalForm(true);
		props.navigation.setParams({...props.route.params, feedType: 'Missing'});
		props.navigation.setOptions({title: '실종 게시물'});
	};

	//긴급버튼 중 - 제보 클릭
	const onPressReportWrite = () => {
		setShowRepotForm(true);
		props.navigation.setParams({...props.route.params, feedType: 'Report'});
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
		if (selectedImg.length > 4) {
			Modal.alert('첨부파일은 5개까지만 가능합니다');
			return;
		}
		Modal.popTwoBtn(
			'사진 선택 모드를 선택하세요',
			'하나씩선택',
			'여러개선택',
			() => {
				ImagePicker.openPicker({
					// multiple: true,
					compressImageQuality: 0.8,
					cropping: true,
				})
					.then(images => {
						console.log('images', images);
						setSelectedImg(selectedImg.concat(images.path));
						Modal.close();
					})
					.catch(err => console.log(err + ''));
				Modal.close();
			},
			() => {
				launchImageLibrary(
					{
						mediaType: 'photo',
						selectionLimit: 5 - selectedImg.length, //다중선택 모드일 경우 상시 5개면 4개 상태에서 최대 5개를 더해 9개가 가능해짐
						maxHeight: 1500,
						maxWidth: 1500,
						quality: 0.8,
					},
					responseObject => {
						console.log('선택됨', responseObject);

						if (!responseObject.didCancel) {
							let tempContainer = [...selectedImg];
							responseObject.assets.map(v => tempContainer.push(v.uri));
							setSelectedImg(tempContainer);
							Modal.close();
						}
					},
				);
			},
		);
	};

	//사진 삭제
	const deletePhoto = index => {
		setSelectedImg(selectedImg.filter((v, i) => i != index));
	};

	const onMissingForm = missing => {
		props.navigation.setParams({...props.route.params, ...missing});
	};

	const onReportForm = report => {
		props.navigation.setParams({...props.route.params, ...report});
	};

	const onSetDiary = () => {
		let diary = false;
		if (isDiary) {
			setDiary(false);
			diary = false;
		} else {
			setDiary(true);
			diary = true;
		}
		props.navigation.setParams({...props.route.params, feed_is_protect_diary: diary});
	};
	//위치추가
	const moveToLocationPicker = () => {
		// props.navigation.push('LocationPicker');
	};

	//태그 추가
	const moveToFeedMediaTagEdit = () => {
		// props.navigation.push('FeedMediaTagEdit');
	};
	const [lis, setLis] = React.useState([]);
	const inputFeedTxt = feedInput => {
		console.log('해쉬 인풋', feedInput);
		// if(feedInput.length>0&&feedInput.test()){}
		// if(feedInput[feedInput.length-1]=='@'){
		// 	setShowPetAccountList(true);
		// }
		// getUserListByNickname({user_nickname:feedInput},
		// 	(result)=>{
		// 		setLis(result.msg);
		// 	console.log(result);
		// },
		// (err)=>{
		// 	console.log(err);
		// });
		setFeedText(feedInput);
	};

	//긴급 버튼 - '제보' '실종' 중 하나 클릭 시 변동되는 View 분기 처리
	const setUrgBtnsClickedView = () => {
		//긴급 버튼 중 '제보' 클릭한 경우
		if (showReportForm) {
			return <ReportForm onDataChange={onReportForm} />;
		} // 긴급 게시 버튼 중 '실종' 클릭한 경우
		else return showLostAnimalForm ? <MissingForm onDataChange={onMissingForm} /> : false;
	};

	const setWriteModeState = () => {
		//userType - 반려동물 계정 리스트 출력 분기
		if (showPetAccountList) {
			return (
				<View style={[temp_style.petAccountList, feedWrite.petAccountList]}>
					<AccountHashList data={lis} />
				</View>
			);
		}
		//일반 FeedWrite 분기
		else {
			return (
				<>
					{/* 사진추가 / 위치추가 / 태그하기 */}
					<View style={[feedWrite.buttonContainer]}>
						<TouchableWithoutFeedback onPress={moveToMultiPhotoSelect}>
							<View style={[feedWrite.btnItemContainer, {marginBottom: 5 * DP}]}>
								<Camera54 />
								<Text style={[txt.noto24, {color: APRI10, marginLeft: 10 * DP}]}>사진추가</Text>
							</View>
						</TouchableWithoutFeedback>
						{/* <TouchableWithoutFeedback onPress={moveToLocationPicker}>
							<View style={[feedWrite.btnItemContainer]}>
								<Location54_APRI10 />
								<Text style={[txt.noto24, {color: APRI10, alignSelf: 'center', marginLeft: 10 * DP}]}>위치추가</Text>
							</View>
						</TouchableWithoutFeedback> */}
						<TouchableWithoutFeedback onPress={moveToFeedMediaTagEdit}>
							<View style={[feedWrite.btnItemContainer]}>
								<Paw54_Border />
								<Text style={[txt.noto24, {color: APRI10, alignSelf: 'center', marginLeft: 10 * DP}]}>태그하기</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					{!showReportForm && !showLostAnimalForm && (
						<View style={[feedWrite.btn_w194_container]}>
							<View style={[btn_style.btn_w194, feedWrite.btn_w194]}>
								<AniButton
									btnTitle={'임보일기'}
									btnStyle={isDiary ? 'filled' : 'border'}
									titleFontStyle={24}
									btnLayout={btn_w194}
									onPress={onSetDiary}
								/>
							</View>
							<View style={[btn_style.btn_w194]}>
								<ActionButton btnTitle={'전체 공개'} btnStyle={'border'} titleFontStyle={24} btnLayout={btn_w194} />
							</View>
						</View>
					)}
					{selectedImg.length > 0 && (
						<View style={[temp_style.selectedMediaList, feedWrite.selectedMediaList]}>
							<SelectedMediaList items={selectedImg} onDelete={deletePhoto} />
						</View>
					)}
					{/* 긴급 게시 관련 버튼 클릭 시 출력되는 View */}
					{setUrgBtnsClickedView()}
				</>
			);
		}
	};

	return (
		<View style={[login_style.wrp_main, feedWrite.container]}>
			{/* <ScrollView contentContainerStyle={{width: 750 * DP, alignItems: 'center'}}> */}
			<HashInput
				containerStyle={[temp_style.feedTextEdit, {borderBottomWidth: 2 * DP, borderBottomColor: APRI10}]}
				textAlignVertical={'top'}
				multiline={true}
				placeholder="게시물을 작성하세요"
				placeholderTextColor={GRAY20}
				onChangeText={inputFeedTxt}></HashInput>

			{setWriteModeState()}
			{/* 긴급 게시물 관련 버튼 컨테이너 */}

			{/* </ScrollView> */}
			{showUrgentBtns ? (
				<View style={[temp_style.floatingBtn, feedWrite.urgentBtnContainer]}>
					{showActionButton ? (
						<View>
							<TouchableWithoutFeedback onPress={onPressMissingWrite}>
								<View style={[feedWrite.urgentBtnItemContainer]}>
									<Text style={[txt.noto32, {color: WHITE}]}>실종</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={onPressReportWrite}>
								<View style={[feedWrite.urgentBtnItemContainer]}>
									<Text style={[txt.noto32, {color: WHITE}]}>제보</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					) : null}
					<TouchableWithoutFeedback onPress={() => setShowActionButton(!showActionButton)}>
						<View style={[feedWrite.urgentActionButton]}>{showActionButton ? <Urgent_Write2 /> : <Urgent_Write1 />}</View>
					</TouchableWithoutFeedback>
				</View>
			) : (
				false
			)}
			{/* </ScrollView> */}
		</View>
	);
};

//실종 컴포넌트
const MissingForm = props => {
	const [types, setTypes] = React.useState([
		{
			pet_species: '개',
			pet_species_detail: ['믹스견', '치와와', '말티즈', '미니어처 핀셔', '파피용', '포메라니안', '푸들', '시추'],
		},
	]);
	const [isSpeciesChanged, setIsSpeciesChanged] = React.useState(false);

	const [data, setData] = React.useState({
		missing_animal_species: types[0].pet_species,
		missing_animal_species_detail: types[0].pet_species_detail[0],
		missing_animal_sex: 'male',
		missing_animal_age: '0',
		missing_animal_lost_location: '',
		missing_animal_features: '',
		missing_animal_date: '',
		missing_animal_contact: '',
		type: types[0],
	});

	React.useEffect(() => {
		props.onDataChange && props.onDataChange(data);
	}, [data]);

	React.useEffect(() => {
		getPettypes(
			{},
			types => {
				setTypes(types.msg);
			},
			err => Modal.alert(err),
		);
	}, []);

	const onDateChange = date => {
		setData({...data, missing_animal_date: date});
	};

	const onSelectSpecies = (v, i) => {
		setData({...data, missing_animal_species: types[i].pet_species, type: types[i]});
		setIsSpeciesChanged(!isSpeciesChanged);
	};

	const onSelectSpeciesDetail = (v, i) => {
		setData({...data, missing_animal_species_detail: data.type.pet_species_detail[i]});
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
		<ScrollView style={[feedWrite.lostAnimalForm]} showsVerticalScrollIndicator={false}>
			{/* DropDownSelect */}
			<View style={[feedWrite.lostAnimalForm_Form]}>
				<View style={[feedWrite.formTitle]}>
					<Text style={[txt.noto24, {color: APRI10}]}>분류</Text>
				</View>
				<View style={[feedWrite.formContentContainer]}>
					<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
						<NormalDropDown items={pet_kind} menu={types.map(v => v.pet_species)} width={292} onSelect={onSelectSpecies} defaultIndex={0} />
					</View>
					<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
						<NormalDropDown
							items={pet_kind}
							menu={data.type.pet_species_detail}
							width={292}
							height={500}
							isLargeCategoryChanged={isSpeciesChanged}
							onSelect={onSelectSpeciesDetail}
						/>
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
		</ScrollView>
	);
};

//제보 컴포넌트
const ReportForm = props => {
	const navigation = useNavigation();
	const route = useRoute();
	const [addr, setAddr] = React.useState('');
	const [detailAddr, setDetailAddr] = React.useState('');

	const [types, setTypes] = React.useState([
		{
			pet_species: '개',
			pet_species_detail: DOG_KIND,
		},
	]);

	const [data, setData] = React.useState({
		report_witness_date: '',
		report_witness_location: '',
		report_animal_features: '',
		report_animal_species: types[0].pet_species,
		report_animal_species_detail: types[0].pet_species_detail[0],
		type: types[0],
	});

	const [isSpeciesChanged, setIsSpeciesChanged] = React.useState(false);

	React.useEffect(() => {
		props.onDataChange && props.onDataChange(data);
	}, [data]);

	React.useEffect(() => {
		if (route.params.addr) {
			setAddr(route.params.addr.jibunAddr);
			setDetailAddr(route.params.addr.detailAddr);
		}
	}, [route.params?.addr]);

	React.useEffect(() => {
		setData({...data, report_witness_location: addr + ' ' + detailAddr});
	}, [addr, detailAddr]);

	React.useEffect(() => {
		getPettypes(
			{},
			types => {
				setTypes(types.msg);
			},
			err => Modal.alert(err),
		);
	}, []);

	const onChangeAddr = addr => {
		setAddr(addr);
	};

	const onClearAddr = () => {
		setAddr('');
	};
	const onClearDetailAddr = () => {
		setDetailAddr('');
	};

	const onChangeDetailAddr = addr => {
		console.log('addr', addr);
		setDetailAddr(addr);
	};
	const onDateChange = date => {
		setData({...data, report_witness_date: date});
	};
	const inputFeature = feature => {
		setData({...data, report_animal_features: feature});
	};

	const onSelectSpecies = (v, i) => {
		setData({...data, report_animal_species: types[i].pet_species, type: types[i]});
		setIsSpeciesChanged(!isSpeciesChanged);
	};

	const onSelectSpeciesDetail = (v, i) => {
		setData({...data, report_animal_species_detail: data.type.pet_species_detail[i]});
	};
	const searchAddress = () => {
		navigation.navigate('AddressSearch', {from: route.name, fromkey: route.key});
	};
	return (
		<ScrollView style={[feedWrite.reportForm_container]} showsVerticalScrollIndicator={false}>
			<View style={[feedWrite.reportForm]}>
				<View style={[feedWrite.reportForm_form]}>
					<View style={[feedWrite.lostAnimalForm_Form]}>
						<View style={[feedWrite.formTitle]}>
							<Text style={[txt.noto24, {color: APRI10}]}>분류</Text>
						</View>
						<View style={[feedWrite.formContentContainer]}>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<NormalDropDown items={pet_kind} menu={types.map(v => v.pet_species)} width={292} onSelect={onSelectSpecies} defaultIndex={0} />
							</View>
							<View style={[temp_style.dropdownSelect, feedWrite.dropdownSelect]}>
								<NormalDropDown
									items={pet_kind}
									isLargeCategoryChanged={isSpeciesChanged}
									menu={data.type.pet_species_detail}
									width={292}
									height={500}
									onSelect={onSelectSpeciesDetail}
								/>
							</View>
						</View>
					</View>
					<View style={[feedWrite.formTitle]}>
						<Text style={[txt.noto24, {color: APRI10}]}>제보 날짜</Text>
					</View>
					<View style={[temp_style.datePicker_assignShelterInformation, feedWrite.datePicker]}>
						<DatePicker width={654} onDateChange={onDateChange} defaultDate={''} />
					</View>
					<View style={[feedWrite.reportLocation_form]}>
						<View style={[feedWrite.reportLocation_form_left]}>
							<View style={[feedWrite.reportLocation_form_left_title]}>
								<Text style={[txt.noto24, {color: APRI10}]}>제보 장소</Text>
							</View>
							<View style={[temp_style.inputNoTitle, feedWrite.reportLocation_form_left_inputNoTitle]}>
								<Input24 onChange={onChangeAddr} value={addr} width={438} placeholder={'동주소 까지 적어주세요'} onClear={onClearAddr} />
							</View>
						</View>
						<View style={[feedWrite.reportLocation_form_right]}>
							<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
								<LocationButton btnTitle={'현위치'} />
							</View>
							<View style={[btn_style.btn_w176, feedWrite.btn_w176]}>
								<AniButton btnTitle={'주소 검색'} btnLayout={btn_w176} btnStyle={'border'} titleFontStyle={24} onPress={searchAddress} />
							</View>
						</View>
					</View>
					<View style={[temp_style.inputNoTitle, feedWrite.locationDetail]}>
						<Input24
							onChange={onChangeDetailAddr}
							onClear={onClearDetailAddr}
							width={654}
							placeholder={'장소의 세부적인 정보를 적어주세요'}
							value={detailAddr}
						/>
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
		</ScrollView>
	);
};
