import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ProtectedThumbnail from 'Root/component/molecules/ProtectedThumbnail';
import DP from 'Root/config/dp';
export default ProtectedThumbnailTest = props => {
    const _protectedThumbnail={
        img_uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU",
        gender : 'male',
        status : 'protected'
    }
    const _protectedThumbnail2={
        img_uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU",
        gender : 'female',
        status : 'protected'
    }
    const _protectedThumbnail3={
        img_uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU",
        gender : 'male',
        status : 'emergency'
    }
    const _protectedThumbnail4={
        img_uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU",
        gender : 'male',
    }
	return (
		<View>
			<ProtectedThumbnail 
                data={_protectedThumbnail}
            />
            <ProtectedThumbnail 
                data={_protectedThumbnail2}
            />
            <ProtectedThumbnail 
                data={_protectedThumbnail3}
            />
            <ProtectedThumbnail 
            />

		</View>
	);
};
