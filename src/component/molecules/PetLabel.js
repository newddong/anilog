import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Paw30_APRI10, Paw30_Mixed, Paw30_YELL20} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default PetLabel = props => {

	const [imgUri, setImgUri] = React.useState(props.data.user_image);
	React.useEffect(() => {
		if (imgUri == false) {
			setImgUri('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
		}
	});

	const getStatusMark = () => {
		switch (props.data.status) {
			case 'protected': return <Paw30_YELL20 />;
			case 'adopted':	return <Paw30_Mixed />;
			default: return <Paw30_APRI10 />;
		}
	};
	
	const onClickLabel = e => {
		props.onLabelClick(props.data.user_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: imgUri}} style={styles.img_round_94} />
				<View style={{position: 'absolute'}}>
					{/* 팻의 상태 여부에 따른 분기 - protected, adopted, normal  */}
					{getStatusMark()}
				</View>
			</TouchableOpacity>
			<View style={{marginLeft: 30 * DP, width: 300 * DP, paddingVertical: 4 * DP}}>
				{/* Text Box 2개의 Height 총합 86 - profileImage height는 94 = -8 이므로 textBox쪽에 PaddingVertical 4를 줍니다 */}
				{/* Text부분과 프로필이미지 사이의 거리 30 */}

				<Text style={txt.roboto28b} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.owner}
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
};
 
PetLabel.defaultProps = {
	data : {
		user_id : 'user_id',
		user_nickname : 'user_nickname',
		user_image : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
		status : 'normal'
	},
	onClickLabel : e => console.log(e),
}