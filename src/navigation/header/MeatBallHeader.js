import React from 'react';
import {Text, View, Image, ScrollView, Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
// import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {BackArrow32, Meatball50_GRAY20_Horizontal} from 'Atom/icon';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import MeatBallDropdown from 'Molecules/MeatBallDropdown';
import { btn_w280 } from 'Root/component/atom/btn/btn_style';

export default MeatBallHeader = ({navigation, route, options, back}) => {
	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableOpacity onPress={navigation.goBack}>
				<View style={style.backButtonContainer}>
					<BackArrow32 onPress={navigation.goBack} />
				</View>
			</TouchableOpacity>
			<Text style={txt.roboto40b}>{options.title}</Text>
			<MeatBallDropdown 
				menu={['메뉴1','메뉴2','메뉴3','메뉴4']}
				onSelect={(v,i)=>console.log(v+':'+i)}
				horizontal
				// onOpen={()=>{alert('open')}}
				// onClose={()=>{alert('close')}}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		height: 135 * DP,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	backButtonContainer: {
		width: 80 * DP,
		height: 80 * DP,
		justifyContent: 'center',
        padding: 10*DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
});
