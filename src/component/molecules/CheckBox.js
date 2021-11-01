import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import DP from 'Root/config/dp';
import {Check50, Rect48_GRAY30, Rect50_Border} from '../atom/icon';
import {GRAY10, GRAY20} from 'Root/config/color';
export default CheckBox = props => {

	const [checked, setChecked] = React.useState(false); //체크상태 여부 boolean

    const onCheck = () => { //
        setChecked(!checked)
        props.onCheck(props.value)
    }

	return (
		<View style={{flexDirection: 'row'}}>
			{props.disable 
                ? <Rect48_GRAY30 /> 
                : 
                <TouchableWithoutFeedback onPress={onCheck}>
                    {checked ? <Check50 /> : <Rect50_Border />}
                </TouchableWithoutFeedback> 
            }
			<Text
				style={[
					txt.noto24,
					{
						color: props.disable ? GRAY20 : GRAY10,
						paddingLeft: 12 * DP,
					},
				]}>
				{props.value}
			</Text>
		</View>
	);
};

CheckBox.defaultProps = {
	value: null,
	disable: false,
    onCheck : e => console.log(e)
};
