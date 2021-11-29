import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {btn_w226} from '../atom/btn/btn_style';
import {login_style, btn_style, temp_style, progressbar_style, assignProtectAnimal_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';
import Stagebar from '../molecules/Stagebar';
import {APRI10, GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {PLEASE_UPLOAD_PIC} from 'Root/i18n/msg';
import SelectedMediaList from '../organism_ksw/SelectedMediaList';
import {AddItem64, AddItem92, Arrow_Down_GRAY20, Camera54} from '../atom/icon';
import AniButton from '../molecules/AniButton';
import {styles} from '../atom/image/imageStyle';
import {dummy_selectedMediaList} from 'Root/config/dummyDate_json';

export default AssignProtectAnimalImage = props => {
	const navigation = useNavigation();

	const [imageList, setImageList] = React.useState([...dummy_selectedMediaList]); //PhotoSelect에서 선택된 사진List
	const [data, setData] = React.useState({
		protect_animal_photos: null,
	});

	React.useEffect(() => {
		console.log('data', data);
	}, [data]);

	React.useEffect(() => {
		if (props.route.params == null) {
			// setImgSelected('https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg')
		} else if (props.route.params.length > 0) {
			setImageList(props.route.params);
			setData({...data, protect_animal_photos: props.route.params});
		}
	}, [props.route.params]);

	//SelectedMedia 아이템의 X마크를 클릭
	const onDelete = index => {
		let copy = [...imageList];
		copy.splice(index, 1);
		setImageList(copy);
	};

	//다음 클릭
	const gotoNextStep = () => {
		navigation.push('AssignProtectAnimalDate', data);
	};

	//사진 추가 클릭
	const gotoSelectPicture = () => {
		navigation.push('MultiPhotoSelect', props.route.name);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView contentContainerStyle={{alignItems: 'center'}}>
				{/* (M)StageBar	 */}
				<View style={[temp_style.stageBar, progressbar_style.stageBar]}>
					<Stagebar
						style={{}} //전체 container style, text와 bar를 감싸는 view의 style
						backgroundBarStyle={{
							width: 400 * DP,
							height: 20 * DP,
							backgroundColor: 'white',
							borderRadius: 20 * DP,
							borderWidth: 4 * DP,
							borderColor: APRI10,
						}} //배경이 되는 bar의 style, width props으로 너비결정됨
						insideBarStyle={{width: 80 * DP, height: 20 * DP, backgroundColor: APRI10, borderRadius: 18 * DP}} //내부 bar의 style, width는 background bar의 길이에서 현재 단계에 따라 변화됨
						current={1} //현재 단계를 정의
						maxstage={4} //전체 단계를 정의
						width={600 * DP} //bar의 너비
						textStyle={[txt.roboto24, {marginLeft: 18 * DP, width: 40 * DP, height: 32 * DP, marginBottom: 10 * DP, color: GRAY10}]} //text의 스타일
					/>
				</View>

				<View style={[assignProtectAnimal_style.textMsg]}>
					<Text style={txt.noto24}>{PLEASE_UPLOAD_PIC}</Text>
				</View>

				<View style={[assignProtectAnimal_style.selectedMediaList]}>
					{imageList.length == 0 ? (
						<TouchableOpacity onPress={gotoSelectPicture} style={[assignProtectAnimal_style.addPhoto]}>
							<Text style={[txt.roboto28b, assignProtectAnimal_style.addPhotoText]}>사진을 추가해주세요</Text>
							<AddItem64 />
						</TouchableOpacity>
					) : (
						<SelectedMediaList layout={styles.img_square_round_410} items={imageList} onDelete={index => onDelete(index)} />
					)}
				</View>

				<View style={[temp_style.btn_w226_assignProtectAnimal, assignProtectAnimal_style.btn_w226_view_image]}>
					<View style={[assignProtectAnimal_style.pic]}>
						<Camera54 onPress={gotoSelectPicture} />
						<TouchableOpacity onPress={gotoSelectPicture}>
							<Text style={[txt.noto24, assignProtectAnimal_style.addpic]}>사진추가</Text>
						</TouchableOpacity>
					</View>
					<View style={[btn_style.btn_w226]}>
						<AniButton btnTitle={'다음'} btnStyle={'filled'} titleFontStyle={24} btnLayout={btn_w226} onPress={gotoNextStep} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
