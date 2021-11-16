import React from 'react';
import { FlatList, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { activationList, login_style, temp_style } from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default ActivationList = props => {
	const dummy = [
		{
			title: '임시보호 참여하기',
			image: 'https://t1.daumcdn.net/cafeattach/1YMOi/6a29e54280110d61d2fee57dc946518b5b712af9',
		},
		{
			title: '반려동물 실종시 전단지 만들기',
			image: 'https://www.korea.kr/newsWeb/resources/attaches/2018.08/13/j(10)(1).jpg',
		},
		{
			title: '임시보호 가이드 댕댕이 편',
			image: 'https://i.ytimg.com/vi/_sGXBdriPls/maxresdefault.jpg',
		},
		{
			title: '임시보호 가이드 냥이 편',
			image: 'https://blog.kakaocdn.net/dn/dqxd2e/btqF9CkxulW/VGaLWC0cEGxKTDsMQLEge1/img.png',
		},
		{
			title: '입양하기',
			image:
				'https://post-phinf.pstatic.net/MjAxODA1MjVfMTI0/MDAxNTI3MjI0ODM0NjUy.3W_Gofc55O0KiKsFbSQHtDFcszORyaJanPV1c4kQrREg.--OIU53Y4G2wigHZQfha9IkpyA2yWsT3W9GH66I3ZcYg.PNG/mug_obj_152722483276385125.png?type=w1080',
		},
	];

	const boxClick = category => {
		alert(category.title);
	};

	const renderItem = (item, index) => {
		return (
			<View style={[activationList.activity]}>
				<View style={[activationList.activityNameContainer]}>
					<Text style={[txt.noto28, { color: GRAY10 }]}>{item.title}</Text>
				</View>
				<TouchableOpacity style={[activationList.activityImage]} onPress={() => boxClick(item)}>
					<Image source={{ uri: item.image }} style={{ flex: 1 }} resizeMode={'stretch'} />
				</TouchableOpacity>
			</View>
		);
	};
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, activationList.container]}>
				{/* Activities Container */}
				<View style={[activationList.activityContainer]}>
					<FlatList data={dummy} renderItem={({ item, index }) => renderItem(item, index)} />
				</View>
			</View>
		</ScrollView>
	);
};
