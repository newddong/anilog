import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Check50, ImageList48, VideoPlay48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {BLACK, RED10, WHITE} from 'Root/config/color';

export default FeedThumbnail = props => {
	const [selected, setSelected] = React.useState(false);

	const onSelect = () => {
		props.onSelect(props.data.feed_id);
		// setSelected(!selected);
	};

	const getFeedIcon = () => {
		//data.medias의 값들 중 video형식의 media가 하나 이상 존재하는 경우
		if (props.data.medias.includes('Video')) {
			return <VideoPlay48 />;
			//data.medias 배열의 길이가 1개 이상인 경우
		} else if (props.data.medias.length > 1) {
			return <ImageList48 />;
		} else return false;
	};
	return (
		<TouchableOpacity onPress={onSelect}>
			{/* Select된 상태일 때 불투명도 40% 적용 및 배경색  Black */}
			<View style={selected ? {opacity: 0.4, backgroundColor: BLACK} : false}>
				{/* <Image source={{uri: props.img_uri}} style={styles.img_square_246} /> */}
				<Image source={{uri: props.data.img_uri}} style={styles.img_square_246} />
				<View style={{position: 'absolute', top: 20 * DP, left: 20 * DP}}>{getFeedIcon()}</View>
			</View>
			{/* {props.data.alert_title != false || props.data.alert_title != undefined ? ( */}
			{props.data.alert_title != '' && props.data.alert_title != undefined ? (
				<View
					style={{
						width: 124 * DP,
						height: 48 * DP,
						position: 'absolute',
						backgroundColor: RED10,
						borderTopEndRadius: 20 * DP,
						borderTopLeftRadius: 20 * DP,
						right: 0,
						bottom: 0,
					}}>
					<Text style={[txt.noto24b, {width: 124 * DP, lineHeight: 36 * DP, color: WHITE}]}>{props.data.alert_title}</Text>
				</View>
			) : (
				false
			)}
			{selected ? (
				<View style={{position: 'absolute', top: 14 * DP, right: 10 * DP}}>
					<Check50 />
				</View>
			) : (
				false
			)}
		</TouchableOpacity>
	);
};
FeedThumbnail.defaultProps = {
	//
	data: [
		{
			feed_id: 'dog',
			isVideo: false,
			medias: [1, 2, 3, 4],
			alert_title: '실종',
			img_uri: 'http://storage.enuri.info/pic_upload/knowbox2/202105/09151281620210518c342be40-3a75-40df-b7eb-6dd511de41a8.jpg',
		},
		{
			feed_id: 'cat',
			isVideo: true,
			medias: [1, 2, 3, 4],
			alert_title: '구조',
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/9925F03C5AD486B033',
		},
		{
			feed_id: 'snake',
			isVideo: false,
			medias: [1, 2, 3, 4],
			alert_title: '',
			img_uri: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg',
		},
		{
			feed_id: 'snake',
			isVideo: true,
			medias: [1, 2, 3, 4],
			alert_title: '실종',
			img_uri: 'https://t1.daumcdn.net/cfile/blog/2547A74C52B3D5D40B',
		},
	],
	onSelect: e => console.log(e),
	// img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
	// img_uri: 'http://storage.enuri.info/pic_upload/knowbox2/202105/09151281620210518c342be40-3a75-40df-b7eb-6dd511de41a8.jpg',
};
