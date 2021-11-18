import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { txt } from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import { styles } from '../atom/image/imageStyle';
import { APRI10, WHITE } from 'Root/config/color';
import { Paw94x90 } from '../atom/icon';

/**
 *
 *@param {{
 *data: Object,
 *index: 'number / 선택되는 순서 번호',
 *isSingleSelection: boolean,
 *onSelect: '선택 Callback',
 *disable : '선택 불가 모드',
 * }} props
 */
export default LocalMedia = props => {
	const [selected, setSelected] = React.useState(false);

	const onSelect = e => {
		console.log("PropsDisable", props.disable)
		if (props.disable) {
			!selected ? alert('5초과') : setSelected(!selected);
			props.onSelect(props.data.img_uri, !selected);
		}
		else if (!props.disable) {
			setSelected(!selected);
			props.onSelect(props.data.img_uri, !selected);
		};
	}
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
