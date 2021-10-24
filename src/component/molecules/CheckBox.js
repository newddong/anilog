import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import DP from 'Root/config/dp';
import {Check48, Check50, Rect48Border, Rect48_APRI10, Rect48_GRAY30, Rect50Border} from '../atom/icon';
import { GRAY10, GRAY20 } from 'Root/config/color';
export default CheckBox = props => {
	const [checked, setChecked] = React.useState(false);
	const getCheckBox = () => {
        if(checked){
            return(
                <TouchableWithoutFeedback onPress={()=> setChecked(!checked)}>
                    <Check50/>
                </TouchableWithoutFeedback>
            )
        } else if(!checked){
            return(
                <TouchableWithoutFeedback onPress={()=> setChecked(!checked)}>
                    <Rect50Border/>
                </TouchableWithoutFeedback>
            )
        }
	};
    const getFontColor = () => {
        return props.disable ? GRAY20 : GRAY10 
    }
	return (
		<View style={{flexDirection:'row'}}>
			{props.disable ? <Rect48_GRAY30 /> : getCheckBox()}
			<Text style={[txt.noto24,{color:getFontColor(), includeFontPadding:false, lineHeight:38*DP, paddingLeft:12*DP}]}>{props.value}</Text>
		</View>
	);
};

CheckBox.defaultProps = {
	value: null,
	disable: false,
};
