import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {styles} from '../atom/image/imageStyle';
import {APRI10} from 'Root/config/color';
import {Paw94x90} from '../atom/icon';
export default LocalMedia = props => {
	const [selected, setSelected] = React.useState(false);
	// 데이터명세
	//    img_uri : uri
	//    isVideo : true,
	//    duration : "03:10"
	// index - 다중선택 상태일 때 선택된 item들  배열 중 해당 컴포넌트의 index
	// isSingleSelection - 다중선택/단독선택 여부 결정
	// onSelect - 컴포넌트 클릭시 발생, img_uri값을 매개변수로 넘김

	const handleMediaClick = e => {
		setSelected(!selected);
		props.onSelect(props.data.img_uri);
	};
	const handle_selected_style = () => {
		if (selected) {
			return [styles.img_square_178, {borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6}];
		} else if (!selected) {
			return styles.img_square_186;
		}
	};
	const selected_style_image = () => {
		if ( selected && props.isSingleSelection) {
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
		} else if (selected && props.isSingleSelection == false) {
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
					}}>
					<View style={{paddingVertical: 3 * DP, paddingHorizontal: 6 * DP}}>
						<Text style={[txt.roboto24, {textAlign: 'center', textAlignVertical: 'center', color: 'white'}]}>{props.index}</Text>
					</View>
				</View>
			);
		}
	};
	// isVideo = true 분기
	if (props.data.isVideo == true) {
		// VIDEO 데이터이면서 단독선택 분기
		return (
			<View style={styles.img_square_186}>
				<TouchableOpacity onPress={handleMediaClick}>
					<Image source={{uri: props.data.img_uri}} style={handle_selected_style()} />
					{selected_style_image()}

					<View style={{position: 'absolute', left: 10 * DP, bottom: 6 * DP}}>
						<Text style={[txt.roboto22, {color: 'white'}]}>{props.data.duration}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
		// vIDEO 데이터이면서 isSingleSelection과 index값이 없는 디폴트 상태일 경우

		// 데이터가 Video 타입이 아닐 경우 (Photo)
	} else if (props.data.isVideo == false) {
		// Photo + 단독 선택 분기
		return (
			<View style={styles.img_square_186}>
				<TouchableOpacity onPress={handleMediaClick}>
					<Image
						source={{uri: props.data.img_uri}} style={handle_selected_style()}
					/>
					{selected_style_image()}
				</TouchableOpacity>
			</View>
		);
	}
};
