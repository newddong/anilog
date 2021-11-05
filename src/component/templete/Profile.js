import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, Text, View} from 'react-native';
import {NORMAL, PET, SHELTER} from 'Root/i18n/msg';
import {WHITE} from 'Root/screens/color';
import {login_style, profile, temp_style} from './style_templete';

export default Profile = props => {
	const [showPetList, setShowPetList] = React.useState(true);
	const [showProtectedPetList, setShowProtectedPetList] = React.useState(false);
	const [showOwnerList, setShowOwnerList] = React.useState(false);
	const [userType, setUserType] = React.useState(NORMAL);
	const showList = () => {
		//유저타입 - 사람
		if (userType == NORMAL) {
			// 반려동물 보이기 true
			if (showPetList) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<Text>(O)PetList</Text>
						</View>
						<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
							<Text>(M)TabSelectFilled_type2</Text>
						</View>
					</View>
				);
				// 보호활동 보이기 true
			} else if (showProtectedPetList) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
							<Text>(M)TabSelectFilled_type2</Text>
						</View>
						<View style={[profile.protectedPetList]}>
							<Text>(O)ProtectedPetList</Text>
						</View>
					</View>
				);
			} else {
				<View style={[profile.feedListContainer]}>
					<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
						<Text>(M)TabSelectFilled_type2</Text>
					</View>
				</View>;
			}
		}
		// 유저타입 PET
		else if (userType == PET) {
			// 반려동물 주인 보이기 true
			if (showOwnerList) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<Text>(O)OwnerList</Text>
						</View>
						<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
							<Text>(M)TabSelectFilled_type2</Text>
						</View>
					</View>
				);
			}
		}
		// 유저타입 보호소
		else if (userType == SHELTER) {
			return (
				<View style={[profile.feedListContainer]}>
					<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
						<Text>(M)TabSelectFilled_type2</Text>
					</View>
				</View>
			);
		}
	};
	return (
		<View style={[login_style.wrp_main, profile.container]}>
			<View style={[profile.profileInfo]}>
				<Text>(O)ProfileInfo</Text>
				<Text>USERTYPE : {userType}</Text>

				{/* 테스트용 View */}
				<View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
					<TouchableOpacity
						style={{width: 100, height: 50, backgroundColor: 'pink', alignSelf: 'center'}}
						onPress={() => {
							setUserType(NORMAL);
						}}>
						<Text>userType normal 바꾸기 버튼</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{width: 100, height: 50, backgroundColor: 'red', alignSelf: 'center'}}
						onPress={() => {
							setUserType(PET);
						}}>
						<Text>userType Pet으로 바꾸기 버튼</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{width: 100, height: 50, backgroundColor: 'yellow', alignSelf: 'center'}}
						onPress={() => {
							setUserType(SHELTER);
						}}>
						<Text>userType shelter 바꾸기 버튼</Text>
					</TouchableOpacity>
				</View>
				<View style={{flexDirection: 'row', marginLeft: 30}}>
					<TouchableOpacity
						style={{width: 100, height: 50, backgroundColor: 'yellow', alignSelf: 'center'}}
						onPress={() => {
							setShowPetList(!showPetList);
						}}>
						<Text>Pet List 확인용 버튼</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{width: 100, height: 50, backgroundColor: 'blue', alignSelf: 'center'}}
						onPress={() => {
							setShowPetList(false);
							setShowProtectedPetList(false);
							setShowOwnerList(true);
						}}>
						<Text style={{color: WHITE}}>OwnerList 확인용 버튼</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{width: 100, height: 50, backgroundColor: 'black', marginLeft: 30}}
					onPress={() => {
						setShowProtectedPetList(!showProtectedPetList);
					}}>
					<Text style={{color: WHITE}}>Pet protectedPetList 확인용 버튼</Text>
				</TouchableOpacity>
				{/* 테스트용 View 종료 */}
			</View>
			{showList()}
			<ScrollView>
				{userType == NORMAL || userType == PET ? (
					//  FeedThumbnailList
					<View style={[temp_style.feedThumbnailList, profile.feedThumbNailList]}>
						<Text>(O)FeedThumbnailList</Text>
					</View>
				) : (
					//  AnimalNeedHelpList
					<View style={[temp_style.animalNeedHelpList, profile.animalNeedHelpList]}>
						<Text>(O)animalNeedHelpList</Text>
					</View>
				)}
			</ScrollView>
			<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
				<Text>FloatBtn</Text>
			</View>
		</View>
	);
};
