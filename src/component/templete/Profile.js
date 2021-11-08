import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {NORMAL, PET, SHELTER} from 'Root/i18n/msg';
import TabSelectFilled_Type2 from '../molecules/TabSelectFilled_Type2';
import ProfileInfo from '../organism/ProfileInfo';
import FeedThumbnailList from '../organism_ksw/FeedThumbnailList';
import OwnerList from '../organism_ksw/OwnerList';
import PetList from '../organism_ksw/PetList';
import ProtectedPetList from '../organism_ksw/ProtectedPetList';
import {login_style, profile, temp_style} from './style_templete';

export default Profile = props => {
	const navigation = useNavigation();
	const [userType, setUserType] = React.useState(NORMAL);
	const [tabMenuSelected, setTabMenuSelected] = React.useState(0);
	const moveToFeedWrite = () => {
		props.navigation.push('FeedWrite');
	};
	const showList = () => {
		//유저타입 - 사람
		if (userType == NORMAL) {
			// 반려동물 보이기 true
			if (tabMenuSelected == 0) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<PetList />
						</View>
					</View>
				);
				// 보호활동 보이기 true
			} else if (tabMenuSelected == 2) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.protectedPetList]}>
							<ProtectedPetList onClickLabel={item => navigation.push('UserProfile', item)} />
						</View>
					</View>
				);
			} else {
				<View style={[profile.feedListContainer]}></View>;
			}
		}
		// 유저타입 PET
		else if (userType == PET) {
			// 반려동물 주인 보이기 true
			if (showOwnerList) {
				return (
					<View style={[profile.feedListContainer]}>
						<View style={[profile.petList]}>
							<OwnerList />
						</View>
					</View>
				);
			}
		}
		// 유저타입 보호소
		else if (userType == SHELTER) {
			return <View style={[profile.feedListContainer]}></View>;
		}
	};
	const getThumbnailList = () => {
		if (tabMenuSelected == 0) {
			//피드
			return <FeedThumbnailList onClickThumnail={() => navigation.push('UserFeedList')} />;
		} else if (tabMenuSelected == 1) {
			//태그
			return <FeedThumbnailList onClickThumnail={() => navigation.push('UserTagFeedList')} />;
		} else if (tabMenuSelected == 2) {
			//보호활동
			return userType == SHELTER ? (
				<FeedThumbnailList onClickThumnail={() => navigation.push('AnimalProtectRequestDetail')} />
			) : (
				<FeedThumbnailList onClickThumnail={() => navigation.push('ProtectAnimalFeedList')} />
			);
		}
	};

	return (
		<View style={[login_style.wrp_main, profile.container]}>
			<View style={[profile.profileInfo]}>
				<ProfileInfo data={props.route.params} showMyPet={e => alert(e)} />
			</View>
			<View style={[temp_style.tabSelectFilled_Type2, profile.tabSelectFilled_Type2]}>
				<TabSelectFilled_Type2 items={['피드', '태그', '보호활동']} onSelect={e => setTabMenuSelected(e)} />
			</View>
			{showList()}
			<View>
				<View style={[temp_style.feedThumbnailList, profile.feedThumbNailList]}>{getThumbnailList()}</View>
			</View>
			<TouchableWithoutFeedback onPress={moveToFeedWrite}>
				<View style={[temp_style.floatingBtn, profile.floatingBtn]}>
					<Text>FloatBtn</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
