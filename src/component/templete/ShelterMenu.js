import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {login_style, shelterMenu, temp_txt, temp_style, btn_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ShelterMenu = props => {
	const navigation = useNavigation();

	const moveToShelterInfoSetting = () => {
		navigation.push('ShelterInfoSetting');
	};
	const moveToAssignProtectAnimalImage = () => {
		navigation.push('AssignProtectAnimalImage');
	};
	const moveToAidRequestList = () => {
		navigation.push('AidRequestList');
	};
	const moveToShelterProtectAnimalList = () => {
		navigation.push('ShelterProtectAnimalList');
	};
	const moveToProtectApplyList = () => {
		navigation.push('ProtectApplyList');
	};
	const moveToAnimalFromShelter = () => {
		navigation.push('AnimalFromShelter');
	};
	const moveToManageShelterVolunteer = () => {
		navigation.push('ManageShelterVolunteer');
	};
	const moveToSaveFavorite = () => {
		navigation.push('SaveFavorite');
	};
	const moveFavoriteFeeds = () => {
		navigation.push('FavoriteFeeds');
	};
	const moveToSaveAnimalRequest = () => {
		navigation.push('SaveAnimalRequest');
	};
	const moveToUserFeeds = () => {
		navigation.push('UserFeeds');
	};
	const moveToTagMeFeeds = () => {
		navigation.push('TagMeFeeds');
	};
	const moveToShelterProtectRequests = () => {
		navigation.push('ShelterProtectRequests');
	};

	return (
		<View style={(login_style.wrp_main, shelterMenu.container)}>
			<ScrollView>
				<View style={[shelterMenu.shelterMenuStep1]}>
					{/* Shelter Info*/}
					<View style={[shelterMenu.shelterInfo]}>
						<View style={[shelterMenu.shelterInfo_container]}>
							<View style={[shelterMenu.shelterInfo_container_left]}>
								{/* ProfileImageLarge */}
								<View style={[temp_style.profileImageLarge]}>
									<Text>(M)ProfileImageLarge</Text>
								</View>
							</View>
							<View style={[shelterMenu.shelterInfo_container_right]}>
								{/* userId */}
								<View style={[shelterMenu.shelterInfo_user_id]}>
									<Text>User_id</Text>
								</View>
								{/* contents */}
								<View style={[shelterMenu.shelterInfo_contents]}>
									<Text>Contents</Text>
								</View>
							</View>
						</View>
					</View>

					{/* (O)SocialInfoB-4Items */}
					<View style={[temp_style.socialInfoB, shelterMenu.socialInfoB_4Items]}>
						<Text>(o)SocialInfoB-4Items</Text>
					</View>

					{/* (btn_w280, Float) */}
					<View style={[shelterMenu.btnView]}>
						<TouchableOpacity onPress={moveToShelterInfoSetting}>
							<View style={[btn_style.btn_w280]}>
								<Text>(A)btn_w280</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={moveToAssignProtectAnimalImage}>
							<View style={[shelterMenu.btnView_floadAddPet_126x92]}>
								<Text style={temp_txt.small}>(A)FloatAddPet_126x92</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={moveToAidRequestList}>
							<View style={[shelterMenu.btnView_floadArticle_126x92]}>
								<Text style={temp_txt.small}>(A)FloatArticle_126x92</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				{/* (O)ProfileMenul */}
				<View style={[shelterMenu.profileMenu1]}>
					<TouchableOpacity onPress={moveToShelterProtectAnimalList}>
						<Text>보호중인 동물</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToProtectApplyList}>
						<Text>신청서 조회</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToAnimalFromShelter}>
						<Text>나의 보호소 출신 동물</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToManageShelterVolunteer}>
						<Text>봉사활동 신청 관리</Text>
					</TouchableOpacity>
				</View>
				<View style={[shelterMenu.profileMenu2]}>
					<TouchableOpacity onPress={moveToSaveFavorite}>
						<Text>친구</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveFavoriteFeeds}>
						<Text>피드 게시글</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToSaveAnimalRequest}>
						<Text>보호요청(저장)</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>커뮤니티</Text>
					</TouchableOpacity>
				</View>
				<View style={[shelterMenu.profileMenu3]}>
					<TouchableOpacity onPress={moveToUserFeeds}>
						<Text>내 게시글</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToTagMeFeeds}>
						<Text>나를 태그한 글</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>신청 내역</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={moveToShelterProtectRequests}>
						<Text>보호요청 올린 게시글</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>커뮤니티</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>쪽지함</Text>
					</TouchableOpacity>
				</View>
				<View style={[shelterMenu.profileMenu4]}>
					<TouchableOpacity onPress={''}>
						<Text>정보/문의</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>계정</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={''}>
						<Text>알림</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};
