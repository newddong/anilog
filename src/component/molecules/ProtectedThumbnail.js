import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {GRAY10, RED10, WHITE} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {Mercy_Killing, Female48, Male48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

/**
 * 버튼 컴포넌트트
 * @param {object} props - Props Object
 * @param {object} props.data - 썸네일 오브젝트 (img_uri, gender(female, male), status(protected, missing, reported, onNegotiation, adoption_available, adopted)
 * @param {(status:boolean, _id:number)=>void} props.onLabelClick - 썸네일 클릭할 때 동작하는 콜백, 썸네일 클릭 상태와 클릭한 썸네일의 고유 _id반환
 */
const ProtectedThumbnail = props => {
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
				return '안락사 임박';
			case 'missing':
				return '실종';
			case 'reported':
				return '제보';
			case 'discuss':
				return '협의 중';
			case 'adopted':
				return '입양완료';
			case 'protect':
				return '임시보호중';
			case 'rainbowbridge':
				return '무지개다리';
		}
	};

	const onClickLabel = () => {
		props.onLabelClick(props.data.protect_request_status, props.data._id);
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
	onLabelClick: e => console.log(e),
};
export default ProtectedThumbnail;
