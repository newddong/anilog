import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {btn_w226, btn_w654} from 'Root/component/atom/btn/btn_style';
import {Leaflet, Urgent_Write1, Urgent_Write2} from 'Root/component/atom/icon';
import ActionButton from 'Root/component/molecules/ActionButton';
import AniButton from 'Root/component/molecules/AniButton';
import FilterButton from 'Root/component/molecules/FilterButton';
import ProtectedThumbnail from 'Root/component/molecules/ProtectedThumbnail';
import DP from 'Root/config/dp';
export default ProtectedThumbnailTest = props => {
	//status 상태 임시로 protected, emergency , default:protected로 설정
	const _protectedThumbnail = {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'male',
		status: 'protected',
	};
	const _protectedThumbnail2 = {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'female',
		status: 'protected',
	};
	const _protectedThumbnail3 = {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'male',
		status: 'emergency',
	};
	return (
		<ScrollView>
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProtectedThumbnail </Text>
			<ScrollView horizontal={true} style={{flexDirection: 'row'}}>
				<ProtectedThumbnail data={_protectedThumbnail} />
				<ProtectedThumbnail data={_protectedThumbnail2} />
				<ProtectedThumbnail data={_protectedThumbnail3} />
				<ProtectedThumbnail />
			</ScrollView>

			{/* 버튼 테스트 */}
			{/* props = btnTitle(버튼Text), disable(버튼사용불가능 스타일), titleFontSize(버튼 글꼴크기), btnLayout(버튼의 레이아웃)*/}
			{/*         btnStyle(버튼의 스타일-filled, border, noBorder) onOpen(버튼 open시 발생하는 콜백), onClose(버튼 close시 발생하는 콜백) */}
			{/*         btnTheme(그림자 효과 처리) */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> Button </Text>
			<Text> Shadow noShadow Gray</Text>
			<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10 * DP}}>
				<Text style={{width: 60}}>Filled </Text>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={30}
					btnTheme={'shadow'}
					btnStyle={'filled'}
					onPress={() => alert('Onpress')}
				/>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					btnTheme={'noShadow'}
					btnStyle={'filled'}
					onPress={() => alert('Onpress')}
				/>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					btnTheme={'gray'}
					btnStyle={'filled'}
					onPress={() => alert('Onpress')}
				/>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', marginTop:DP}}>
				<Text style={{width: 60}}>Border </Text>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={26}
					btnTheme={'shadow'}
					btnStyle={'border'}
					onPress={() => alert('Onpress')}
				/>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={26}
					btnTheme={'noShadow'}
					btnStyle={'border'}
					onPress={() => alert('Onpress')}
				/>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={26}
					btnTheme={'gray'}
					btnStyle={'border'}
					onPress={() => alert('Onpress')}
				/>
			</View>

			<View style={{flexDirection: 'row', alignItems: 'center', }}>
				<Text style={{width: 60}}>noBorder </Text>
				<AniButton
					btnLayout={btn_w226}
					btnTitle={'수정완료'}
					titleFontStyle={26}
					btnTheme={'shadow'}
					btnStyle={'noBorder'}
					onPress={() => alert('Onpress')}
				/>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', marginTop:DP}}>
				<Text style={{width: 60}}>Disable </Text>
				<AniButton btnLayout={btn_w226} btnTitle={'취소'} titleFontStyle={26} btnTheme={'shadow'} disable={true} onPress={() => alert('Onpress')} />
				<AniButton btnLayout={btn_w226} btnTitle={'확인'} titleFontStyle={26} btnTheme={'noShadow'} disable={true} onPress={() => alert('Onpress')} />
				<AniButton btnLayout={btn_w226} btnTitle={'BTN_W654'} titleFontStyle={26} disable={true} onPress={() => alert('Onpress')} />
			</View>

			{/* 액션 버튼 테스트 */}
			{/* props = btnTitle(버튼Text), disable(버튼사용불가능 스타일), titleFontSize(버튼 글꼴크기), btnLayout(버튼의 레이아웃)*/}
			{/*         btnStyle(버튼의 스타일-filled, border, noBorder) onOpen(버튼 open시 발생하는 콜백), onClose(버튼 close시 발생하는 콜백) */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> Action Button </Text>
			<View style={{flexDirection: 'row', alignItems: 'center',}}>
				<ActionButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					disable={true}
					onOpen={() => alert('OnOpen')}
					onClose={() => alert('OnClose')}
				/>
				<ActionButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					btnStyle={'filled'}
					onOpen={() => alert('OnOpen')}
					onClose={() => alert('OnClose')}
				/>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center', }}>
				<ActionButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					btnStyle={'border'}
					onOpen={() => alert('OnOpen')}
					onClose={() => alert('OnClose')}
				/>
				<ActionButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					btnStyle={'noBorder'}
					onOpen={() => alert('OnOpen')}
					onClose={() => alert('OnClose')}
				/>
			</View>
			
			{/* 필터 버튼 테스트 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> Action Button </Text>
				<FilterButton
					btnLayout={btn_w226}
					btnTitle={'BTN_W654'}
					titleFontStyle={24}
					onOn={() => alert('OnOn')}
					onOff={() => alert('OnOff')}
				/>
			

			{/* 긴급상황 아이콘 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> 긴급상황 icon 추가 </Text>
			<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10 * DP}}>
				<Urgent_Write1 />
				<Urgent_Write2 />
				<Leaflet />
			</View>
		</ScrollView>
	);
};
