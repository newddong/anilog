import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Check50, ImageList48, VideoPlay48} from '../atom/icon';
import {styles} from '../atom/image/imageStyle';
import {BLACK, RED10, WHITE} from 'Root/config/color';

/**
 * 피드썸네일
 * @param {object} props - Props Object
 * @param {boolean} props.selectMode - Feed 클릭시 테두리 혹은 투명도 스타일 적용 여부
 * @param {object} props.data - 피드 썸네일 데이터( @FeedObject)
 */
const FeedThumbnail = props => {
	// console.log('FeedThumbnail', props.data.feed_medias);
	const [selected, setSelected] = React.useState(false);

	React.useEffect(() => {
		setSelected(props.data.checkBoxState);
	}, [props.data.checkBoxState]);

	const onSelect = () => {
		props.onSelect(props.data._id);
		// console.log('FeedThumbnail OnSelect', props.data._id);
		props.selectMode ? setSelected(!selected) : false; //SelectMode가 true일 경우에 한해서만 setSelected로 스타일을 바꿈
	};

	const getFeedIcon = () => {
		const find = props.data.feed_medias.findIndex(e => e.is_video == true); //feed_media의 값 중 is_video값이 true인 경우가 있다면 1 없다면 -1
		//data.medias의 값들 중 video형식의 media가 하나 이상 존재하는 경우
		if (find != -1) {
			return <VideoPlay48 />;
			//data.medias 배열의 길이가 1개 이상인 경우
		} else if (props.data.feed_medias.length > 1) {
			return <ImageList48 />;
		} else return;
	};

	const checkDisplay = () => {
		if (props.selectMode && (selected || props.data.checkBoxState)) {
			return (
				<View style={{position: 'absolute', top: 14 * DP, right: 10 * DP}}>
					<Check50 />
				</View>
			);
		}
	};

	const checkSelect = () => {
		if ((props.selectMode && selected) || (props.selectMode && props.data.checkBoxState)) {
			return (
				<View style={[{opacity: 0.4, backgroundColor: BLACK}]}>
					<Image source={{uri: props.data.feed_thumbnail}} style={styles.img_square_246} />
				</View>
			);
		} else if (!props.data.checkBoxState || !selected) {
			return <Image source={{uri: props.data.feed_thumbnail}} style={styles.img_square_246} />;
		}
	};

	return (
		<TouchableOpacity onPress={onSelect}>
			{/* Select된 상태일 때 불투명도 40% 적용 및 배경색  Black */}
			{/* 그림인지 영상인지 표기(무조건 표기) */}
			<View style={{position: 'absolute', top: 20 * DP, left: 20 * DP, zIndex: 1}}>{getFeedIcon()}</View>
			{checkSelect()}
			{props.data.feed_type == 'missing' || props.data.feed_type == 'report' ? (
				<View
					style={{
						width: 124 * DP,
						height: 48 * DP,
						position: 'absolute',
						justifyContent: 'center',
						backgroundColor: RED10,
						borderTopEndRadius: 20 * DP,
						borderTopLeftRadius: 20 * DP,
						right: 0,
						bottom: 0,
					}}>
					<Text style={[txt.noto24b, {width: 124 * DP, lineHeight: 36 * DP, color: WHITE, textAlign: 'center'}]}>
						{props.data.feed_type == 'missing' ? '실 종' : '제 보'}
					</Text>
				</View>
			) : (
				<></>
			)}

			{/* 클릭하거나 전체 선택시 체크 표기 - 모드는 선택하기 모드여야 함. */}
			{checkDisplay()}
		</TouchableOpacity>
	);
};
FeedThumbnail.defaultProps = {};
export default FeedThumbnail;
