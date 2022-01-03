import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {styles} from 'Root/component/atom/image/imageStyle';
import {APRI10, BLACK} from 'Root/config/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEFAULT_PROFILE} from 'Root/i18n/msg';
import {getUserInfoById} from 'Root/api/userapi';
import Modal from 'Component/modal/Modal';
import {ProfileDefaultImg1, ProfileDefaultImg1_70, Paw30_APRI10, Paw30_Mixed, Paw30_YELL20, Private30, Public30} from '../atom/icon';
import {profiledefault2} from '../atom/icon/profiledefault2.svg';
import ProfileImageMedium120 from './ProfileImageMedium120';
import userGlobalObject from 'Root/config/userGlobalObject';

/**
 * 유저의 프로필 사진, 닉네임, 사는지역을 출력하는 라벨
 * @param {object} props - Props Object
 * @param {object} props.data - UserObejct
 * @param {(data:object)=>void} props.onClickLabel - 버튼을 눌렸을때 동작하는 콜백, 제목 반환환
 */
const UserLocationLabel = props => {
	// const [isLoginUser, setIsLoginUser] = React.useState(false); //현재 접속 중인 아이디와 같다면 닉네임 색깔이 메인색깔
	const isLoginUser = userGlobalObject.userInfo._id == props.data._id;
	console.log('UserLocationLabelUserLocationLabel', props.data);
	const t = {
		__v: 8,
		_id: '61c5677b38c5f6dee5a8b7a4',
		pet_family: [],
		type: 'UserObject',
		user_address: {
			brief: '서울특별시 서초구 잠원로 136(잠원동, 신반포25차아파트)',
			city: '서울특별시',
			detail: '1004동 1004호',
			district: '서초구',
			neighbor: '잠원동',
		},
		user_agreement: {
			is_donation_info: true,
			is_location_service_info: true,
			is_marketting_info: true,
			is_over_fourteen: true,
			is_personal_info: true,
			is_service: true,
		},
		user_denied: false,
		user_follow_count: 0,
		user_follower_count: 1,
		user_interests: [],
		user_introduction:
			'아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고아이고',
		user_is_verified_email: false,
		user_is_verified_phone_number: true,
		user_mobile_company: 'kt',
		user_my_pets: [
			'61cd2d0607a02d82987e0077',
			'61cd2ff107a02d82987e02e1',
			'61cd304007a02d82987e0331',
			'61cd30bb07a02d82987e03c5',
			'61cd30e607a02d82987e03d8',
			'61ce875607a02d82987f10ad',
			'61ce882e07a02d82987f11fc',
			'61ce8c9b07a02d82987f1db8',
		],
		user_name: '이재현',
		user_nickname: 'Jeff',
		user_password: '123456',
		user_phone_number: '01084227964',
		user_profile_uri: 'https://pinetreegy.s3.ap-northeast-2.amazonaws.com/upload/1641174065368_ad868384-0981-4cb4-b88f-bf297d52c7d8.jpg',
		user_register_date: '2021-12-24T06:23:55.553Z',
		user_type: 'user',
		user_upload_count: 1,
	};

	// console.log('UserLocationLabel', props.data.user_profile_uri);
	//현재 접속한 토큰과 출력된 유저라벨의 유저가 같은지 확인
	// React.useEffect(()=>{
	// 	getUserInfoById({userobject_id:userId},
	// 		({msg})=>{
	// 			console.log('ddsadsf',msg);
	// 			setData(msg);
	// 		},
	// 		(err)=>{
	// 			// Modal.popOneBtn(err,'확인',()=>Modal.close());
	// 		}

	// 	)
	// })

	// React.useEffect(() => {
	// 	AsyncStorage.getItem('token', (err, res) => {
	// 		res == userId ? setIsLoginUser(true) : setIsLoginUser(false);
	// 	});
	// }, [props.data]);

	// React.useEffect(() => {
	// 	if (props.data.user_profile_uri === undefined) {
	// 		props.data.user_profile_uri = ProfileDefaultImg1;
	// 		console.log('UserLocationLabel', props.data.user_profile_uri);
	// 	}
	// }, []);
	const onClickLabel = e => {
		props.onLabelClick(props.data);
	};
	const usertypeIcon = () => {
		switch (props.data.user_type) {
			case 'pet':
				return (
					<View style={{position: 'absolute', top: 0, left: 0}}>
						{props.data.pet_status=='companion'?<Paw30_APRI10 />:props.data.pet_status=='protect'?<Paw30_YELL20 />:<Paw30_Mixed />}
					</View>
				);
				break;
			case 'shelter':
				return (<View style={{position: 'absolute', bottom: 0, left: 40*DP}}>
					{props.data.shelter_type=='public'?<Public30 />:<Private30 />}
				</View>);
				break;
			default:
				return false;
				break;
		}
	};

	return (
		<TouchableOpacity onPress={onClickLabel}>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				{props.data.user_profile_uri === undefined ? (
					<ProfileDefaultImg1_70 data={props.data} style={styles.img_round_70} />
				) : (
					<Image source={{uri: props.data.user_profile_uri}} style={styles.img_round_70} />
				)}

				<View style={{marginLeft: 20 * DP}}>
					<Text style={[txt.roboto28b, {color: isLoginUser ? APRI10 : BLACK}]} numberOfLines={1} ellipsizeMode="tail">
						{props.data.user_nickname}
					</Text>
					{/* <Text style={[txt.noto24, {lineHeight: 36 * DP}]} numberOfLines={1} ellipsizeMode="tail">
						{props.location}
					</Text> */}
				</View>
				{usertypeIcon()}
			</View>
		</TouchableOpacity>
	);
};
UserLocationLabel.defaultProps = {
	onClickLabel: e => console.log(e),
	data: {
		user_nickname: '찾을수 없는 유저',
		user_profile_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	},
};
export default UserLocationLabel;
