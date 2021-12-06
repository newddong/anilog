import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {btn_w280} from '../atom/btn/btn_style';
import {Bracket48} from '../atom/icon';
import ActionButton from '../molecules/ActionButton';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import SocialInfoA from '../organism_ksw/SocialInfoA';
import {NORMAL, PET, SHELTER} from 'Root/i18n/msg';
import Dropdown from '../molecules/Dropdown';
import ProfileDropdown from 'Molecules/ProfileDropdown';
import {organism_style, profileInfo_style} from './style_organism';
import Modal from 'Root/component/modal/Modal';

/**
 *
 *@param {{
 * data: 'profile userObject',
 * onPressVolunteer: void,
 * onShowOwnerBtnClick : void,
 * onHideOwnerBtnClick : void,
 * adoptionBtnClick: void
 * }} props
 */
export default ProfileInfo = props => {
	const profile_data = props.data;

	const [showMore, setShowMore] = React.useState(false); // 프로필 Description 우측 더보기 클릭 State
	const [followState, setFollowState] = React.useState(false); // 팔로우 T/F
	const [ownerListState, setOwnerListState] = React.useState(true); // userType이 Pet일 경우 반려인계정 State T/F

	//더보기 클릭
	const onPressShowMore = () => {
		setShowMore(!showMore);
	};

	//반려인 계정 보이기
	const showOwner = () => {
		setOwnerListState(true);
		props.onShowOwnerBtnClick();
	};
	//반려인 계정 숨기기
	const hideOwner = () => {
		setOwnerListState(false);
		props.onHideOwnerBtnClick();
	};

	//보호소 계정의 봉사활동 버튼 클릭
	const onPressVolunteer = () => {
		props.onPressVolunteer();
	};

	// 펫 계정 => 입양하기 버튼 클릭
	const onPressAdoption = () => {
		props.adoptionBtnClick();
	};

	// props.data의 유저타입에 따라 다른 버튼이 출력
	// NORMAL - [팔로우, 반려동물] / PET - [팔로우, 반려인계정 OR 입양하기] / SHELTER - [팔로우, 봉사활동 ]
	const getButton = () => {
		if (profile_data.userType == PET) {
			if (profile_data.petStatus == 'protected') {
				return <AniButton btnTitle={'입양 하기'} btnStyle={'border'} titleFontStyle={30} btnLayout={btn_w280} onPress={onPressAdoption} />;
			} else
				return (
					<ActionButton
						btnTitle={'반려인 계정'}
						btnStyle={ownerListState ? 'border' : 'filled'}
						titleFontStyle={30}
						btnLayout={btn_w280}
						onOpen={showOwner}
						onClose={hideOwner}
					/>
				);
		} else if (profile_data.userType == NORMAL) {
			return (
				<ActionButton
					btnTitle={'반려동물'}
					btnStyle={'border'}
					titleFontStyle={30}
					btnLayout={btn_w280}
					onOpen={() => console.log('반려동물 Open')}
					onClose={() => console.log('반려동물 CLose')}
				/>
			);
		}
		return <AniButton btnTitle={'봉사 활동'} btnStyle={'border'} titleFontStyle={30} btnLayout={btn_w280} onPress={onPressVolunteer} />;
	};
	return (
		<View style={organism_style.profileInfo_main}>
			<View style={[organism_style.profileImageLarge_view_profileInfo]}>
				<View style={[organism_style.profileImageLarge_profileInfo, profileInfo_style.profileImageLarge]}>
					<ProfileImageLarge160 data={props.data} />
				</View>
				<View style={[organism_style.socialInfo_profileInfo, profileInfo_style.socialInfo]}>
					<SocialInfoA
						upload_count={profile_data.user_upload_count}
						follow_count={profile_data.user_follow_count}
						follower_count={profile_data.user_follower_count}
					/>
				</View>
			</View>

			{/* Profile Introduction */}
			<View style={[organism_style.content_view_profileInfo, profileInfo_style.content_view]}>
				<Text
					ellipsizeMode={'tail'}
					numberOfLines={showMore ? null : 2}
					style={[txt.noto24, showMore ? profileInfo_style.content_expanded : profileInfo_style.content]}>
					{profile_data.user_introduction}
				</Text>
				<TouchableOpacity onPress={onPressShowMore} style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
					<Text style={[txt.noto24, {color: GRAY10}]}>더보기 </Text>
					<View style={showMore ? {transform: [{rotate: '180deg'}]} : null}>
						<Bracket48 />
					</View>
				</TouchableOpacity>
			</View>

			{/* 프로필 관련 버튼 */}
			<View style={[organism_style.btn_w280_view_profileInfo, profileInfo_style.btn_w280_view]}>
				<View style={[organism_style.btn_w280_profileInfo, profileInfo_style.btn_w280]}>
					{followState || true ? (
						<ProfileDropdown
							btnTitle={'팔로우 중'}
							titleFontStyle={30}
							btnLayout={btn_w280}
							menu={['메뉴1', '메뉴2', '메뉴3', '메뉴4']}
							onSelect={(v, i) => console.log(v + ':' + i)}
							// onOpen={()=>{alert('open')}}
							// onClose={()=>{alert('close')}}
						/>
					) : (
						<AniButton
							btnTitle={'팔로우'}
							btnStyle={'border'}
							titleFontStyle={30}
							btnLayout={btn_w280}
							onPress={() => {
								setFollowState(!followState);
								Modal.popOneBtn('nobtasdsafn', '확인', () => {
									Modal.close();
								});
							}}
						/>
					)}
				</View>
				<View style={[organism_style.ActionButton_profileInfo, profileInfo_style.btn_w280]}>{getButton()}</View>
			</View>
		</View>
	);
};
ProfileInfo.defaultProps = {
	volunteerBtnClick: e => console.log(e),
	adoptionBtnClick: e => console.log(e),
	onShowOwnerBtnClick: e => console.log(e),
	onHideOwnerBtnClick: e => console.log(e),
};
