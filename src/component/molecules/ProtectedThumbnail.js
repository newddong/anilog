import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY10, RED10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Mercy_Killing, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

/**
 *
 *@param {{
 * data: 'Object - img_uri, gender(female, male), status(protected, missing, reported, onNegotiation, adoption_available, adopted'
 * }} props
 */
export default ProtectedThumbnail = props => {
	const borderByStatus = () => {
		if (props.data.status == 'emergency') {
			return {
				borderWidth: 8 * DP,
				borderColor: RED10,
				borderRadius: 30 * DP,
			};
		} else return false;
	};

	const getEmergencyMsg = () => {
		return props.data.status == 'emergency' ? (
			<View style={{position: 'absolute', alignSelf: 'center', bottom: 46 * DP}}>
				<Mercy_Killing />
			</View>
		) : (
			false
		);
	};

	const getStatusContainerStyle = () => {
		if (props.data.status == 'missing') {
			return {backgroundColor: RED10};
		} else if (props.data.status == 'reported') {
			return {backgroundColor: 'pink'};
		} else if (props.data.status == 'emergency') {
			return {backgroundColor: RED10, borderWidth: 2 * DP, borderColor: RED10};
		} else return {backgroundColor: GRAY10};
	};

	const getStatusText = () => {
		switch (props.data.status) {
			case 'rescue':
				return '입양가능';
			case 'emergency':
				return '입양가능';
			case 'missing':
				return '실종';
			case 'reported':
				return '제보';
			case 'discuss':
				return '협의 중';
			case 'adopted':
				return '입양완료';
			case 'adopted':
				return '입양완료';
		}
	};

	const onClickLabel = () => {
		props.onLabelClick(props.data.status, props.data.user_id);
	};

	return (
		<View style={styles.img_square_round_214}>
			<TouchableOpacity onPress={onClickLabel}>
				<Image source={{uri: props.data.img_uri}} style={[styles.img_square_round_214, borderByStatus()]} />
				{/* 펫 성별마크 */}
				<View style={{position: 'absolute', right: 10 * DP, top: 10 * DP}}>{props.data.gender == 'male' ? <Male48 /> : <Female48 />}</View>
				{/* 펫 보호상태 */}
				<View
					style={[
						getStatusContainerStyle(),
						{
							position: 'absolute',
							width: '100%',
							height: 36 * DP,
							opacity: 1,
							bottom: 0,
							borderBottomLeftRadius: 30 * DP,
							borderBottomRightRadius: 30 * DP,
						},
					]}>
					<Text style={[txt.noto24, {color: WHITE, textAlign: 'center', lineHeight: 32 * DP}]}>{getStatusText()}</Text>
				</View>
				{getEmergencyMsg()}
			</TouchableOpacity>
		</View>
	);
};

ProtectedThumbnail.defaultProps = {
	data: {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'female',
		status: 'adoption_available', // protected, missing, reported, onNegotiation, adoption_available, adopted
	},
	onLabelClick: e => console.log(e),
};
