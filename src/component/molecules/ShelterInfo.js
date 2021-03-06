import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, BLUE20, GRAY10} from 'Root/config/color';
import {Private48, Public48} from '../atom/icon';
export default ShelterInfo = props => {
	console.log(props.data);
	const [imgUri, setImgUri] = React.useState(props.data.img_uri);

	//data정보는 있지만 data.user_image가 비어있는 경우 Default propfile Image 설정
	React.useEffect(() => {
		if (imgUri == false) {
			setImgUri('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
		}
	});

	const getStatusMark = () => {
		switch (props.data.shelter_type) {
			case 'public':
				return <Public48 />;
			case 'private':
				return <Private48 />;
			default:
				return <></>;
		}
	};

	return (
		<View style={{width: 702 * DP, height: 246 * DP, borderRadius: 30 * DP, borderWidth: 2 * DP, borderColor: APRI10}}>
			<View style={{width: 654 * DP, height: 94 * DP, marginTop: 30 * DP, marginHorizontal: 24 * DP, flexDirection: 'row'}}>
				<TouchableOpacity>
					{/*<Image source={{uri: imgUri}} style={styles.img_round_94} />*/}
					<ProfileImageSmall size={94} shelterType={props.data.shelterType} userType={'shelter'} img_uri={imgUri} />
				</TouchableOpacity>
				<View style={{position: 'absolute', left: 66 * DP, top: 46 * DP}}>{getStatusMark()}</View>
				<Text style={[txt.noto28b, {marginLeft: 50 * DP, paddingVertical: 26 * DP, justifyContent: 'center'}]}>{props.data.name}</Text>
			</View>
			<View style={{width: 654 * DP, height: 72 * DP, marginTop: 10 * DP}}>
				<Text style={[txt.noto24, {alignSelf: 'flex-end', color: GRAY10}]}>{props.data.address}</Text>
				<Text style={[txt.noto24, {alignSelf: 'flex-end', color: BLUE20, textDecorationLine: 'underline'}]}>{props.data.phone_number}</Text>
			</View>
		</View>
	);
};

ShelterInfo.defaultProps = {
	data: {
		img_uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
		shelter_name: '아이조아 보호소',
		phone_number: '010-5533-2910',
		address: '서울시 마포구 마포대로 25 창강빌딩 1106호',
	},
};

//img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
//	userType: 'user', //required - 유저타입 pet user shelter hash
//	shelterType: 'none', // public private
//	petStatus: 'none', // normal protected adopted none
//	size: 94, // icon size
