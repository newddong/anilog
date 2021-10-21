import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {styles} from '../atom/image/imageStyle';
import {APRI10} from 'Root/config/color';
import {Paw94x90} from '../atom/icon';
export default LocalMedia = props => {
	// props.mediaInfo 에 담긴 데이터
	//    img_uri : uri
	//    isVideo : true,
	//    duration : "03:10"
	// index - 다중선택 상태일 때 선택된 item들  배열 중 해당 컴포넌트의 index
	// isSingleSelection - 다중선택/단독선택 여부 결정
	// onSelect - 컴포넌트 클릭시 발생, img_uri값을 매개변수로 넘김

	// isVideo = true 분기
	if (props.mediaInfo.isVideo == true) {
		// VIDEO 데이터이면서 단독선택 분기
		if (props.isSingleSelection == true) {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image
							source={{uri: props.mediaInfo.img_uri}}
							style={{width: 178 * DP, height: 178 * DP, borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6}}
						/>
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
						<View style={{position: 'absolute', left: 10 * DP, bottom: 6 * DP}}>
							<Text style={[txt.roboto22, {color: 'white'}]}>{props.mediaInfo.duration}</Text>
						</View>
					</TouchableOpacity>
				</View>
			);
		//vIDEO 데이터이면서 다중선택 분기
		} else if (props.index != null) {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image
							source={{uri: props.mediaInfo.img_uri}}
							style={{width: 178 * DP, height: 178 * DP, borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6}}
						/>
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
						<View style={{position: 'absolute', left: 10 * DP, bottom: 6 * DP}}>
							<Text style={[txt.roboto22, {color: 'white'}]}>{props.mediaInfo.duration}</Text>
						</View>
					</TouchableOpacity>
				</View>
			);
		// vIDEO 데이터이면서 isSingleSelection과 index값이 없는 디폴트 상태일 경우
		} else {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image source={{uri: props.mediaInfo.img_uri}} style={styles.img_square_186} />
						<View style={{position: 'absolute', left: 10 * DP, bottom: 6 * DP}}>
							<Text style={[txt.roboto22, {color: 'white'}]}>03:10</Text>
						</View>
					</TouchableOpacity>
				</View>
			);
		}

	// 데이터가 Video 타입이 아닐 경우 (Photo)
	} else if (props.mediaInfo.isVideo == false) {
		// Photo + 단독 선택 분기
		if (props.isSingleSelection == true) {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image
							source={{uri: props.mediaInfo.img_uri}}
							style={{width: 178 * DP, height: 178 * DP, borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6}}
						/>
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
					</TouchableOpacity>
				</View>
			);
		// Photo + 다중 선택 
		} else if (props.index != null) {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image
							source={{uri: props.mediaInfo.img_uri}}
							style={{width: 178 * DP, height: 178 * DP, borderWidth: 4 * DP, borderColor: APRI10, opacity: 0.6}}
						/>
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
					</TouchableOpacity>
				</View>
			);
		// Photo 디폴트
		} else {
			return (
				<View style={styles.img_square_186}>
					<TouchableOpacity onPress={props.onSelect}>
						<Image source={{uri: props.mediaInfo.img_uri}} style={styles.img_square_186} />
					</TouchableOpacity>
				</View>
			);
		}
	}
	return null;
};
