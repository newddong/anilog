import React from 'react';
import {View, StyleSheet,Text} from 'react-native';



export default Dropdown = props => {
    const onPressOverride = () => {
        console.log('override!');
        props.buttonComponent.props.onPress();
    }
    const button = React.cloneElement(props.buttonComponent,{...props.buttonComponent.props,onPress:onPressOverride});

    return (
        <View>
            {/* {props.buttonComponent} */}
            {button}
            <View style={{backgroundColor:'blue',width:100,height:300,position:'absolute'}}>
                <Text>{props.buttonComponent.props.btnTitle}</Text>
            </View>
        </View>
    );


}


DropdownSelect.defaultProps = {




}

const style  = StyleSheet.create({
    default : {
        backgroundColor:'red'
    }
})