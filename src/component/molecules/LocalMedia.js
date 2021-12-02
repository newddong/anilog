import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { txt } from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import { styles } from '../atom/image/imageStyle';
import { APRI10, WHITE } from 'Root/config/color';
import { Paw94x90 } from '../atom/icon';

/**
 * 디바이스의 미디어 썸네일을 표시, 선택할때 사용하는 최소단위 컴포넌트
 * 
 * @param {object} props
 * @param {object} props.data - LocalMedia의 데이터 state(), img_uri(), isVideo, duration
 * @param {boolean} props.data.state - 미디어의 상태(선택 여부)
 * @param {string} props.data.img_uri - 미디어의 uri
 * @param {boolean} props.data.isVideo - 미디어가 동영상인지 여부
 * @param {number} props.data.duration - 미디어가 동영상일 때 재생시간을 표시
 * @param {number} props.index - 선택 순서를 표시(다중 선택, isSingleSelection이 false일 때)
 * @param {boolean} props.isSingleSelection - 단일 선택일때(발자국 표시) true, 다중 선택일때(번호 표시) false
 * @param {(img_uri:string,selected:boolean)=>void} props.onSelect - LocalMedia를 선택(클릭) 했을때 콜백
 * @param {boolean} props.disable - true일때 선택 불가능
 * 
 */
const LocalMedia = props => {
	// console.log(props.index)
	const [selected, setSelected] = React.useState(false);

	React.useEffect(() => {
		props.data.state ? setSelected(true) : setSelected(false)
	}, [props.data.state])

	const onSelect = e => {
		// console.log("PropsDisable", props.disable)

		if (props.disable) {
			!selected ? alert('5초과') : setSelected(!selected);
			props.onSelect(props.data.img_uri, !selected);
		} else if (!props.disable) {
			setSelected(!selected);
			props.onSelect(props.data.img_uri, !selected);
		}
	};
	const getStyleOfSelectedItem = () => {
		return selected ? [styles.img_square_186, { borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6 }] : styles.img_square_186;
	};

	const getImageOfSelectedItem = () => {
		if (selected && props.isSingleSelection) {
			return (
				<View
					style={{
						width: 94 * DP,
						height: 90 * DP,
						position: 'absolute',
						paddingVertical: 48 * DP,
						paddingHorizontal: 46 * DP,
					}}>
					<Paw94x90 />
				</View>
			);
			//다중선택
		} else if (selected && !props.isSingleSelection) {
			return (
				<View
					style={{
						width: 44 * DP,
						height: 44 * DP,
						position: 'absolute',
						borderRadius: 20 * DP,
						backgroundColor: APRI10,
						right: 18 * DP,
						top: 12 * DP,
						justifyContent: 'center',
					}}>
					<Text
						style={[
							txt.roboto24,
							{
								alignSelf: 'center',
								color: WHITE,
								lineHeight: 32 * DP,
							},
						]}>
						{props.index}
					</Text>
				</View>
			);
		}
	};

	return (
		<TouchableOpacity onPress={onSelect} style={styles.img_square_186}>
			<Image source={{ uri: props.data.img_uri }} style={getStyleOfSelectedItem()} />
			{getImageOfSelectedItem()}
			{props.data.isVideo ? (
				<Text style={[txt.roboto22, { color: WHITE, position: 'absolute', left: 10 * DP, bottom: 6 * DP }]}>{props.data.duration}</Text>
			) : (
				false
			)}
		</TouchableOpacity>
	);
	// isVideo = true 분기
};

LocalMedia.defaultProps = {
	data: {
		img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
		isVideo: false,
		duration: null,
	},
	index: 1,
	disable: false,
	isSingleSelection: true,
	number: 1,
	onSelect: e => console.log(e),
};

export default LocalMedia;