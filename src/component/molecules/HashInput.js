import React from 'react';
import {View, Text, TextInput} from 'react-native';
import HashText from 'Molecules/HashText';

export default function HashInput(props) {
	return (
        <View style={props.containerStyle}>
            <TextInput
                {...props} //props override
                onScroll={()=>{console.log('ve')}}
                textAlignVertical={'top'}
                multiline={true}
                placeholder="게시물을 작성하세요"></TextInput>
        </View>
	);
}



HashInput.defaultProps={
    containerStyle:{},
}