import React from 'react';
import {LogBox, ScrollView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {socialRelation, login_style, temp_style} from './style_templete';

export default SocialRelation = props => {
	const [showRecommendList, setShowRecommendList] = React.useState(false);
	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	return (
		<ScrollView>
			<View style={[login_style.wrp_main, socialRelation.container]}>
				{/* (O)topTabNavigation */}
				<View style={[temp_style.topTabNavigation_border, socialRelation.topTabNavigation]}>
					<Text>(O)topTabNavigation</Text>
				</View>
				{/* (M)inputWithSearchIcon */}
				<View style={[temp_style.inputWithSearchIcon, socialRelation.inputWithSearchIcon]}>
					<Text>(M)inputWithSearchIcon</Text>
				</View>
				<TouchableOpacity onPress={() => setShowRecommendList(!showRecommendList)} style={{width: 250, height: 25, backgroundColor: '#6495ED'}}>
					<Text style={{textAlign: 'center'}}> 임시 체크용 버튼 </Text>
				</TouchableOpacity>
				{showRecommendList ? (
					// 2개 분할 AccountList Mode
					<View>
						<View style={[temp_style.controllableAccountList, socialRelation.controllableAccountList]}>
							<Text>(O)controllableAccountList</Text>
						</View>
						<View style={[temp_style.controllableAccountList, socialRelation.recommendList]}>
							<Text>(O)controllableAccountList</Text>
						</View>
					</View>
				) : (
					//AccountList FullScreen Mode
					<View style={[temp_style.controllableAccountList, socialRelation.controllableAccountListFull]}>
						<Text>(O)ControllableAccountListFull</Text>
					</View>
				)}
				{/* Floating Btn */}
				<View style={[temp_style.floatingBtn, socialRelation.floatingBtn]}>
					<Text>(M)FloatingBtn</Text>
				</View>
			</View>
		</ScrollView>
	);
};
