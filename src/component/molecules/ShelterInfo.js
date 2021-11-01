import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, BLUE20, GRAY10} from 'Root/config/color';
import {styles} from '../atom/image/imageStyle';
import { Private48, Public48 } from '../atom/icon';
export default ShelterInfo = props => {
	const [imgUri, setImgUri] = React.useState(props.data.user_image);

	//data정보는 있지만 data.user_image가 비어있는 경우 Default propfile Image 설정
	React.useEffect(() => {
		if (imgUri == null) {
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
			<View style={{width: 654 * DP, height: 94 * DP, marginTop:30*DP, marginHorizontal:24*DP, flexDirection:'row', backgroundColor:'yellow'}}>
				<TouchableOpacity>
					<Image source={{uri: imgUri}} style={styles.img_round_94} />
					{/* image_round_76이 없으므로 style 작성 */}
				</TouchableOpacity>
				<View style={{position: 'absolute', left: 66 * DP, top: 46 * DP}}>{getStatusMark()}</View>
                <Text style={[txt.noto28b, { marginLeft:50*DP, paddingVertical:26*DP, justifyContent: 'center',}]}>
                    {props.data.shelter_name}
                </Text>
			</View>
			<View style={{width: 654 * DP, height: 72 * DP, marginTop:10*DP}}>
                <Text style={[ txt.noto24,{alignSelf:'flex-end', color:GRAY10}]}>
                    {props.data.address} 
                </Text> 
                <Text style={[ txt.noto24,{alignSelf:'flex-end', color:BLUE20, textDecorationLine:'underline'  }]} >
                    {props.data.phone_number}
                </Text>

            </View>
		</View>
	);
};
