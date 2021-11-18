import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { btn_w280 } from '../atom/btn/btn_style';
import { Bracket48 } from '../atom/icon';
import ActionButton from '../molecules/ActionButton';
import AniButton from '../molecules/AniButton';
import ProfileImageLarge160 from '../molecules/ProfileImageLarge160';
import SocialInfoA from '../organism_ksw/SocialInfoA';
import { NORMAL, PET, SHELTER } from 'Root/i18n/msg';
import Dropdown from '../molecules/Dropdown';
import { organism_style, profileInfo_style } from './style_organism';
import {Modal} from 'Root/component/modal/Modal';

export default ProfileInfo = props => {
	// console.log('ProfileInfo / Props Data ' + JSON.stringify(props.data));

	const [showMore, setShowMore] = React.useState(false); // 프로필 Description 우측 더보기 클릭 State
	const [followState, setFollowState] = React.useState(false); // 팔로우 T/F
	const [ownerListState, setOwnerListState] = React.useState(true); // userType이 Pet일 경우 반려인계정 State T/F

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

	// props.data의 유저타입에 따라  NORMAL - [팔로우, 반려동물] PET - [팔로우, 반려인계정 OR 입양하기] , SHELTER - [팔로우, 봉사활동 ]
	const getButton = () => {
		if (props.dummyData.userType == PET) {
			if (props.dummyData.petStatus == 'protected') {
				return (
					<AniButton btnTitle={'입양 하기'} btnStyle={'border'} titleFontStyle={30} btnLayout={btn_w280} onPress={() => props.adoptionBtnClick()} />
				);
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
		} else if (props.dummyData.userType == NORMAL) {
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
		return (
			<AniButton btnTitle={'봉사 활동'} btnStyle={'border'} titleFontStyle={30} btnLayout={btn_w280} onPress={() => props.volunteerBtnClick()} />
		);
	};
	return (
		<View style={organism_style.profileInfo_main}>
			{/* profileImageLarge_view */}
			<View style={[organism_style.profileImageLarge_view_profileInfo]}>
				<View style={[organism_style.profileImageLarge_profileInfo, profileInfo_style.profileImageLarge]}>
					<ProfileImageLarge160 data={props.data} />
				</View>
				<View style={[organism_style.socialInfo_profileInfo, profileInfo_style.socialInfo]}>
					<SocialInfoA uploadCount={101} followingCount={120} followerCount={202} />
				</View>
			</View>

			{/* Content */}
			<View style={[organism_style.content_view_profileInfo, profileInfo_style.content_view]}>
				<Text ellipsizeMode={'tail'} numberOfLines={showMore ? null : 2} style={[txt.noto24, showMore ? profileInfo_style.content_expanded : profileInfo_style.content, { backgroundColor: 'yellow' }]}>
					안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있어요! 안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있어요!안녕하세요 5살 구름이와 3살
					하늘이랑 함께 살고 있어요!안녕하세요 5살 구름이와 3살 하늘이랑 함께 살고 있어요!
				</Text>
				<View style={[organism_style.addMore_profileInfo, profileInfo_style.addMore]}>
					<Text style={[txt.noto24, { color: GRAY10, backgroundColor: 'yellow' }]}>더보기 </Text>
					<View style={showMore ? { transform: [{ rotate: '180deg' }] } : null}>
						<Bracket48 onPress={() => setShowMore(!showMore)} />
					</View>
				</View>
			</View>

			{/* btn_w280 */}
			<View style={[organism_style.btn_w280_view_profileInfo, profileInfo_style.btn_w280_view]}>
				<View style={[organism_style.btn_w280_profileInfo, profileInfo_style.btn_w280]}>
					{followState ? (
						<Dropdown buttonComponent={
						<AniButton
							btnTitle={'팔로우 중'}
							btnStyle={'filled'}
							titleFontStyle={30}
							btnLayout={btn_w280}
							// onPress={() => {setFollowState(!followState);Modal.popTwoBtn('팝업 테스트중입니다.\ndsdfsf','취소','확인',()=>{alert('노노')},()=>{alert('예스')})}}
							onPress={() => {setFollowState(!followState);Modal.popOneBtn('팝업 테스트중입니다.\ndsdfsf','확인',()=>{console.log('ddd');Modal.popOneBtn('ddd','az',()=>{console.log('ddddt');Modal.close()})})}}
						/>}/>
					) : (
						<AniButton
							btnTitle={'팔로우'}
							btnStyle={'border'}
							titleFontStyle={30}
							btnLayout={btn_w280}
							onPress={() => setFollowState(!followState)}
						/>
					)}
				</View>
				<View style={[organism_style.ActionButton_profileInfo, profileInfo_style.btn_w280]}>{getButton()}</View>
			</View>
		</View>
	);
};
ProfileInfo.defaultProps = {
	data: {
		img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
	},
	dummyData: {
		userType: 'user',
		petStatus: 'protected',
	},
	volunteerBtnClick: e => console.log(e),
	adoptionBtnClick: e => console.log(e),
	onShowOwnerBtnClick: e => console.log(e),
	onHideOwnerBtnClick: e => console.log(e),
};
// ActionButton.defaultProps = {
// 	btnTitle: 'BTN_W654', //버튼의 제목
// 	disable: false, // 버튼탭 사용불가 상태 boolean
// 	btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
// 	titleFontStyle: 24, // 버튼 title의 폰트 크기
// 	btnStyle: 'border', // 버튼스타일 filled border noBorder
// 	onOpen: e => console.log(e),
// 	onClose: e => console.log(e),
// };
