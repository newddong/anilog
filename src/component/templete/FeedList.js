import React from 'react';
import {Text, View, TouchableWithoutFeedback, FlatList, ScrollView, RefreshControl} from 'react-native';
import {WHITE} from 'Root/config/color';
import {Write94} from '../atom/icon';
import Feed from '../organism/Feed';
import {feedList, login_style, missingAnimalDetail, temp_style} from './style_templete';
import {getSuggestFeedList} from 'Root/api/feedapi';
import Modal from 'Component/modal/Modal';
import OneBtnModal from '../molecules/OneBtnModal';
import DP from 'Root/config/dp';
import userGlobalObject from 'Root/config/userGlobalObject';

export default FeedList = ({route, navigation}) => {
	const [feedList, setFeedList] = React.useState([]);
	const [refreshing, setRefreshing] = React.useState(false);

	//피드썸네일 클릭 리스트일 경우
	React.useEffect(() => {
		// console.log('userobject', route.params?.userobject);
		navigation.setOptions({title: route.params?.userobject.user_nickname + '님의 게시글'});
	}, [route.params?.userobject]);

	React.useEffect(() => {
		const getList = () => {
			getSuggestFeedList(
				{},
				({msg}) => {
					// console.log('msg', msg);
					setFeedList(msg);
				},
				errormsg => {
					Modal.popOneBtn(errormsg, '확인', () => Modal.close());
				},
			);
		};
		//FeedList 스크린 이동시 피드리스트 갱신
		const unsubscribe = navigation.addListener('focus', () => {
			getList();
		});
		//Refreshing 요청시 피드리스트 다시 조회
		refreshing ? getList() : false;
		return unsubscribe;
	}, [refreshing]);

	const moveToFeedWrite = () => {
		userGlobalObject.userInfo && navigation.push('FeedWrite', {feedType: 'Feed'});
	};

	const renderItem = item => {
		return <Feed data={item} />;
	};

	const wait = timeout => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	};

	const onRefresh = () => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false));
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1, backgroundColor: WHITE}]}>
			<FlatList
				data={feedList}
				renderItem={({item}) => renderItem(item)}
				keyExtractor={(item, index) => index}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
			/>
			{userGlobalObject.userInfo && (
				<View style={{position: 'absolute', bottom: 40 * DP, right: 30 * DP}}>
					<Write94 onPress={moveToFeedWrite} />
				</View>
			)}
		</View>
	);
};
