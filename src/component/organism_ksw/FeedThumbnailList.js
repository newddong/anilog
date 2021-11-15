import React from 'react';
import { FlatList, Text, View } from 'react-native';
import FeedThumnail from '../molecules/FeedThumnail';

export default FeedThumbnailList = props => {
	const NUMCOLUMNS = 3;

	const _dummyData = [
		{
			feed_id: 'dog7',
			isVideo: true,
			//Video가 포함되어 있는 dummyData의 경우 FeedThumbnail에서 재생표시( '▶')가 나타난다
			medias: [1, 2, 3, 'Video'],
			alert_title: '실종',
			img_uri:
				'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fhappypet%2F9075e36d837244bd84cc370a63444825.jpg',
		},
		{
			feed_id: 'dog2',
			isVideo: true,
			medias: [1, 2, 3, 4],
			alert_title: '',
			img_uri: 'https://t1.daumcdn.net/cfile/tistory/9925F03C5AD486B033',
		},
		{
			feed_id: 'dog3',
			isVideo: false,
			medias: [1, 2, 3, 'Video'],
			alert_title: '',
			img_uri: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg',
		},
		{
			feed_id: 'dog4',
			isVideo: true,
			medias: [1, 2, 3, 'Video'],
			alert_title: '실종',
			img_uri: 'https://t1.daumcdn.net/cfile/blog/2547A74C52B3D5D40B',
		},
		{
			feed_id: 'dog6',
			isVideo: true,
			medias: [1, 2, 3, 4],
			alert_title: '구조',
			img_uri: 'https://i.pinimg.com/originals/96/02/ee/9602ee8abb93b9100335c49c147e4098.jpg',
		},
	];

	const renderItem = (item, index) => {
		// FavoriteFeeds에서 SelectStat로부터 받은 받은 선택모드 값을 selectMode 변수로 넘겨줌. FeedThumail에서 투명도 조절과 체크 사항을 표기하기 위함
		return <FeedThumnail data={item} onSelect={e => props.onClickThumnail(e)} selectMode={props.selectMode} />;
	};

	return <FlatList data={_dummyData} renderItem={({ item, index }) => renderItem(item, index)} numColumns={NUMCOLUMNS} />;
};
