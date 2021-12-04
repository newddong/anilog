import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {styles} from '../atom/image/imageStyle';
import {APRI10, WHITE} from 'Root/config/color';
import {Paw94x90} from '../atom/icon';

/**
 * 디바이스의 미디어 썸네일을 표시, 선택할때 사용하는 최소단위 컴포넌트
 *
 * @typedef {object} LocalMediaProps
 * @property {object} data - LocalMedia의 데이터
 * @property {boolean} data.state - 미디어의 상태(선택 여부)
 * @property {boolean} data.isVideo - 미디어가 동영상인지 여부
 * @property {string} data.group_name - 미디어의 그룹 이름
 * @property {number} data.timestamp - 미디어가 생성된 timestamp
 * @property {object} data.image - 미디어의 이미지 속성
 * @property {string} data.image.uri - 미디어의 uri
 * @property {number} data.image.playableDuration - 미디어 재생시간
 * @property {number} index - 선택 순서를 표시(다중 선택, isSingleSelection이 false일 때)
 * @property {boolean} isSingleSelection - 단일 선택일때(발자국 표시) true, 다중 선택일때(번호 표시) false
 * @property {(data:object)=>void} onSelect - LocalMedia가 선택될때 콜백, 미디어정보 오브젝트를 넘겨줌
 * @property {(data:object)=>void} onCancel - LocalMedia가 선택 취소될때 콜백, 미디어정보 오브젝트를 넘겨줌
 * @property {boolean} disable - true일때 선택 불가능
 */

/**
 * @type {React.FunctionComponent<LocalMediaProps>}
 *
 */
const LocalMedia = React.memo(function(props){
	// console.log(props.index)
	const [isSelect, setSelected] = React.useState(false);

	// React.useEffect(() => {
	// 	props.data.state ? setSelected(true) : setSelected(false);
	// }, [props.data.state]);

	const onPressMedia = React.useCallback(e => {
		if (isSelect) {
			setSelected(false);
			props.onCancel(props.data);
		} else {
			setSelected(true);
			props.onSelect(props.data);
		}
	},[props.data]);

	// const onPressMedia = React.useCallback(() => {alert('click')},[]);

	const onSelect = e => {
		// console.log("PropsDisable", props.disable)

		if (props.disable) {
			!isSelect ? alert('5초과') : setSelected(!isSelect);
			props.onSelect(props.data.image.uri, !isSelect);
		} else if (!props.disable) {
			setSelected(!isSelect);
			props.onSelect(props.data.image.uri, !isSelect);
		}
	};

	const getStyleOfSelectedItem = () => {
		return isSelect ? selectedStyle : defaultStyle;
	};

	const getImageOfSelectedItem = () => {
		if (props.isSingleSelection) {
			return (
				<View style={mediaStyle.singleItemSelected}>
					<Paw94x90 />
				</View>
			);
			//다중선택
		} else {
			return (
				<View style={mediaStyle.multiItemSelected}>
					<Text style={[txt.roboto24, mediaStyle.indexText]}>{props.index}</Text>
				</View>
			);
		}
	};

	return (
		<TouchableOpacity onPress={onPressMedia}>
			<Image source={{uri: props.data.image.uri}} style={getStyleOfSelectedItem()} />
			{isSelect && getImageOfSelectedItem()}
			{props.data.image.playableDuration != null && <Text style={[txt.roboto22, mediaStyle.durationText]}>{duration(props.data.image.playableDuration)}</Text>}
		</TouchableOpacity>
	);
	// isVideo = true 분기
});

/** 재생시간 표시(초를) hh:mm:ss형식의 문자열로 변경
 * @param {number} duration - 재생시간(초)
 */
const duration = (duration = 0) => {
	let hour = parseInt(duration / 3600);
	let min = parseInt((duration % 3600) / 60);
	let sec = Math.ceil((duration % 3600) % 60);

	return (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
};

LocalMedia.defaultProps = {
	data: {
		image: {
			uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
			playableDuration: 0,
		},
		timestamp: 0,
		group_name: 'Picture',
		isVideo: false,
		duration: null,
	},
	index: 1,
	disable: false,
	isSingleSelection: true,
	onSelect: e => console.log(e),
	onCancel: e => console.log(e),
};

const mediaStyle = StyleSheet.create({
	localmediaMargin: {
		marginBottom: 2 * DP,
		marginRight: 1.4 * DP,
	},
	selectedItemBorder: {
		borderWidth: 4 * DP,
		borderColor: APRI10,
		opacity: 0.6,
	},
	singleItemSelected: {
		width: 94 * DP,
		height: 90 * DP,
		position: 'absolute',
		paddingVertical: 48 * DP,
		paddingHorizontal: 46 * DP,
	},
	multiItemSelected: {
		width: 44 * DP,
		height: 44 * DP,
		position: 'absolute',
		borderRadius: 20 * DP,
		backgroundColor: APRI10,
		right: 18 * DP,
		top: 12 * DP,
		justifyContent: 'center',
	},
	indexText: {
		alignSelf: 'center',
		color: WHITE,
		lineHeight: 32 * DP,
	},
	durationText: {
		color: WHITE,
		position: 'absolute',
		left: 10 * DP,
		bottom: 6 * DP,
	},
});

const defaultStyle = StyleSheet.compose(mediaStyle.localmediaMargin, styles.img_square_186);
const selectedStyle = StyleSheet.compose(defaultStyle, mediaStyle.selectedItemBorder);

export default LocalMedia;
