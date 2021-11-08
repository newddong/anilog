import React from 'react';
import {Text, View, Image} from 'react-native';
import {Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {aidRequest} from './style_organism';

export default AidRequest = props => {
	const [male, setMale] = React.useState(false);

	return (
		<View style={[aidRequest.container]}>
			<View style={[aidRequest.insideContainer]}>
				<View style={[aidRequest.img_irregular_174]}>
					<View style={[aidRequest.gender]}>{male ? <Male48 /> : <Female48 />}</View>
					<Image style={[styles.img_irregular_174, {zIndex: 0}]} source={{uri: 'http://cdn.ggilbo.com/news/photo/201812/579055_432596_012.jpg'}} />
				</View>
				<View style={[aidRequest.rightContainer]}>
					<View style={[aidRequest.right_insideContainer]}>
						<View style={[aidRequest.right_upperMenu]}></View>
						<View style={[aidRequest.right_middleMenu]}></View>
						<View style={[aidRequest.right_lowerMenu]}></View>
					</View>
				</View>
			</View>

			<View style={[aidRequest.numberContainer]}>
				<Text style={{color: 'white'}}>2</Text>
			</View>
		</View>
	);
};
