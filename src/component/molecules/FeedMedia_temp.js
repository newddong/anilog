import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { txt } from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import { ImageList48, VideoPlay48, VideoPlay_Feed } from '../atom/icon';
import { styles } from '../atom/image/imageStyle';
import { BLACK, RED10, WHITE } from 'Root/config/color';

export default FeedMedia_temp = props => {
	// console.log(props.data.medias);
	const onSelect = () => {
		props.onSelect(props.data.feed_id);
		// setSelected(!selected);
	};

	const getFeedIcon = () => {
		//data.medias의 값들 중 video형식의 media가 하나 이상 존재하는 경우
		if (props.data.medias.includes('video')) {
			return (
				<View style={{ position: 'absolute', top: 290 * DP, left: 328 * DP }}>
					<VideoPlay_Feed />
				</View>
			);
			//data.medias 배열의 길이가 1개 이상인 경우
		} else if (props.data.medias.length > 1) {
			return (
				<View style={{ position: 'absolute', top: 20 * DP, left: 20 * DP }}>
					<ImageList48 />
				</View>
			);
		} else return false;
	};
	return (
		<TouchableOpacity onPress={onSelect} style={styles.img_square_750x750}>
			{/* Select된 상태일 때 불투명도 40% 적용 및 배경색  Black */}
			<View style={{ backgroundColor: BLACK }}>
				<Image source={{ uri: props.img_uri }} style={styles.img_square_750x750} />
				{getFeedIcon()}
			</View>
			{props.data.emergency ? (
				<View
					style={{
						width: 202 * DP,
						height: 94 * DP,
						position: 'absolute',
						backgroundColor: RED10,
						borderBottomLeftRadius: 20 * DP,
						borderBottomRightRadius: 20 * DP,
						alignItems: 'center',
						justifyContent: 'center',
						right: 10,
						top: 0,
					}}>
					<Text style={[txt.noto40b, { color: WHITE }]}>{props.data.alert_title}</Text>
				</View>
			) : (
				false
			)}
			{props.data.emergency ? (
				<View>
					<View
						style={{
							width: 750 * DP,
							height: 214 * DP,
							position: 'absolute',
							justifyContent: 'center',
							bottom: 0,
							zIndex: 1,
							marginLeft: 26 * DP,
						}}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={[txt.roboto34b, { color: 'white' }]}>개 /푸들믹스</Text>
							<Text
								style={[
									txt.roboto34b,
									{
										color: 'white',
										marginLeft: 40 * DP,
										width: 468 * DP,
										height: 80 * DP,
									},
								]}>
								경기도 김포시 김포한강8로 16-6 인근 비닐 하우스
							</Text>
						</View>
						<Text style={[txt.roboto24, { color: 'white', marginTop: 15 * DP, width: 700 * DP }]}>
							이현동 큰 사거리 맥도날드 공사장 근처에서 하얀 말티즈가 혼자 돌아다니는걸 봤어요. 목걸이는 없고 아직 깨끗한거 보니 잃어버린지 얼마
							되지...
						</Text>
					</View>
					<View
						style={{
							width: 750 * DP,
							height: 214 * DP,
							backgroundColor: BLACK,
							opacity: 0.5,
							position: 'absolute',
							bottom: 0,
							zIndex: 0,
						}}
					/>
				</View>
			) : null}
		</TouchableOpacity>
	);
};
FeedMedia_temp.defaultProps = {
	//
	data: {
		feed_id: null,
		isVideo: false,
		medias: [1, 2, 3, 4],
		alert_title: 'alert_msg',
		emergency: false,
	},

	// onSelect: e => console.log(e),
	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
};
