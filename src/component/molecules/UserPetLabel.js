import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import { styles } from '../atom/image/imageStyle';
export default UserPetLabel = props => {
	
	const [imgUri, setImgUri] = React.useState(props.data.user_image)
	React.useEffect( ()=>{
		if(imgUri == null){
			setImgUri('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')
		}
	})

	const onClickLabel = e => {
		props.onLabelClick(props.data.user_id);
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>			
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: imgUri}} style={styles.img_round_76} />
				{/* image_round_76이 없으므로 style 작성 */}
			</TouchableOpacity>
			<View style={{marginLeft: 20 * DP}}>
				{/* Text부분과 프로필이미지 사이의 거리 20 */}
				<Text style={[txt.roboto28b]} numberOfLines={1} ellipsizeMode="tail">
					{props.data.user_nickname}
				</Text>
				<Text style={[txt.noto24, {lineHeight: 44 * DP}]} numberOfLines={1} ellipsizeMode="tail">
					pet_nickname
				</Text>
				{/* linheight가 망가지는경우 molecules레벨에서 lignHeight 설정을 맞춰서 지정*/}
			</View>
		</View>
	);
}
UserPetLabel.defaultProps = {
	data : {
		user_id : 'user_id',
		user_nickname : 'user_nickname',
		user_image : 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
	}
}