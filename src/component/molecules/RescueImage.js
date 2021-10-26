import React from 'react';
import {Text, View, Image} from 'react-native';
import { APRI10 } from 'Root/config/color';
import DP from 'Root/config/dp';
import { txt } from 'Root/config/textstyle';
import { styles } from '../atom/image/imageStyle';
export default RescueImage = props => {
	return (
		<View style={styles.img_rect_654x542}>
			<Image source={{uri:props.img_uri}} style={styles.img_rect_654x542} />
            <View style={{width:480*DP, height:64*DP, borderBottomLeftRadius:30*DP, backgroundColor:APRI10, position:'absolute', right:0}}>
                <Text style={[txt.noto32 , {includeFontPadding:false, textAlign:'center', color:'white'}]}>{props.rescueText}</Text>
            </View>
		</View>
	);
};
