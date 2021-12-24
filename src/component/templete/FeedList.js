import React from 'react';
import {Text, View, TouchableWithoutFeedback, FlatList, ScrollView} from 'react-native';
import {WHITE} from 'Root/config/color';
import {dummy_FeedObject} from 'Root/config/dummyDate_json';
import {Write94} from '../atom/icon';
import Feed from '../organism/Feed';
import {feedList, login_style, missingAnimalDetail, temp_style} from './style_templete';
import {getSuggestFeedList} from 'Root/api/feedapi';
import Modal from 'Component/modal/Modal';
import OneBtnModal from '../molecules/OneBtnModal';
import DP from 'Root/config/dp';

export default FeedList = ({route, navigation}) => {

	const [feedList, setFeedList] = React.useState([]);

	React.useEffect(() => {
		getSuggestFeedList(
			{},
			({msg}) => {
				setFeedList(msg);
			},
			errormsg => {
				Modal.popOneBtn(errormsg, '확인', () => Modal.close());
			},
		);
	}, []);

	const moveToFeedWrite = () => {
		navigation.push('FeedWrite',{type:'Feed'});
	};

	const renderItem = item => {
		return <Feed data={item} />;
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1, backgroundColor: WHITE}]}>
			<FlatList data={feedList} renderItem={({item}) => renderItem(item)} keyExtractor={(item,index)=>index} />
			<View style={{position:'absolute',bottom:40*DP,right:30*DP}}>
				<Write94 onPress={moveToFeedWrite} />
			</View>
		</View>
	);
};
