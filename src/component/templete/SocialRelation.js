import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {testArray} from 'Root/i18n/msg';
import {socialRelation, login_style, temp_style} from './style_templete';
import {useNavigation} from '@react-navigation/core';

export default SocialRelation = props => {
	const [showRecommendList, setShowRecommendList] = React.useState(false);

	//Dummy Data
	const getFlat = item => {
		return (
			<View>
				<Text>{item}</Text>
				<Text>{item}</Text>
			</View>
		);
	};

	const navigation = useNavigation();
	const moveToSocialRelation = () => {
		navigation.push('UserProfile');
	};

	return (
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
						<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
					</View>
					<View style={[temp_style.controllableAccountList, socialRelation.recommendList]}>
						<FlatList data={testArray} renderItem={({item}) => getFlat(item)} />
					</View>
				</View>
			) : (
				//AccountList FullScreen Mode
				<TouchableWithoutFeedback onPress={moveToSocialRelation}>
					<View style={[temp_style.controllableAccountList, socialRelation.controllableAccountListFull]}>
						<Text>(O)ControllableAccountListFull</Text>
					</View>
				</TouchableWithoutFeedback>
			)}
			{/* Floating Btn */}
			<View style={[temp_style.floatingBtn, socialRelation.floatingBtn]}>
				<Text>(M)FloatingBtn</Text>
			</View>
		</View>
	);
};
