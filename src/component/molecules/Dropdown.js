import React from 'react';
import {View, StyleSheet} from 'react-native';



export default Dropdown = props => {



    return (
        <View>
            {props.buttonComponent}
            <View style={{backgroundColor:'blue',width:10,height:300,position:'absolute'}}></View>
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