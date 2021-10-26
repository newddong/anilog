//미완성 상태

import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/screens/dp';
import {Check50, ImageList48, VideoPlay48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';

export default FeedThumbnail = props => {
	const [selected, setSelected] = React.useState(false);
	const handleClick = () => {
		props.onPress(props.data.feed_id);
		setSelected(!selected);
	};
	const getFeedIcon = () => {
		//data.medias의 값들 중 video형식의 media가 하나 이상 존재하는 경우
		if (props.data.medias.includes('Video')) {
			return (
				<View style={{position: 'absolute', top: 20 * DP, left: 20 * DP}}>
					<VideoPlay48 />
				</View>
			);
		}
		//data.medias 배열의 길이가 1개 이상인 경우
		if (props.data.medias.length > 1) {
			return (
				<View style={{position: 'absolute', top: 20 * DP, left: 20 * DP}}>
					<ImageList48 />
				</View>
			);
		}
	};
	return (
		<TouchableOpacity onPress={handleClick}>
			{/* Select된 상태일 때 불투명도 40% 적용 및 배경색  Black */}
			<View style={selected ? {opacity: 0.4, backgroundColor: 'black'} : null}>
				<Image source={{uri: props.img_uri}} style={styles.img_square_246} />
				{getFeedIcon()}
			</View>
			{props.data.alert_title != null ? (
				<View
					style={{
						width: 124 * DP,
						height: 48 * DP,
						position: 'absolute',
						backgroundColor: 'red',
						borderTopEndRadius: 20 * DP,
						borderTopLeftRadius: 20 * DP,
						right: 0,
						bottom: 0,
					}}>
					<Text style={[txt.noto24b, {width: 124 * DP, lineHeight: 36 * DP, color: 'white'}]}>{props.data.alert_title}</Text>
				</View>
			) : null}
			{selected ? (
				<View style={{position: 'absolute', top: 14 * DP, right: 10 * DP}}>
					<Check50 />
				</View>
			) : (
				<></>
			)}
		</TouchableOpacity>
	);
};
FeedThumbnail.defaultProps = {
	data: {
		feed_id: null,
		isVideo: false,
		medias: null,
		alert_title: 'alert_msg',
	},
	onPress: () => console.log('클릭'),
	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
};

	// 컴포넌트 클릭시 onPress 콜백 실행, 매개변수로 feed_id를 넘김
	// 	Data
	// feed_id - 해당 feed의 DB ID(표시되지 않음)
	// isVideo - 해당 feed가 동영상을 포함하고 있는지 여부
	// medias - 해당 feed의 media 리스트
	// alert_title - feed의 긴급 메시지 제목
	// TODO : Selected 처리방법, feed의 uri 리스트를 동영상, 이미지 따로 분리할 것인지 하나의 리스트로 관리할지 결정
