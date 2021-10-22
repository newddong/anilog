import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FeedThumnail from 'Root/component/molecules/FeedThumnail';
export default FeedThumbnailTest = props => {
	const rand1 = Math.floor(Math.random() * 100);
	const rand2 = Math.floor(Math.random() * 100);
	const rand3 = Math.floor(Math.random() * 100);
	const mediaList = ['1', '2', '3', '4'];
	const feedInfo = {
		feed_id: 'Feed _id',
		isVideo: rand1 > 50 ? true : false,
		alert_title:  rand1 > 50 ? 'Alert Title' : null, 
		medias: mediaList,
	};
    const feedInfo2 = {
		feed_id: 'Feed _id',
		isVideo: rand2 > 50 ? true : false,
		alert_title:  rand2 > 50 ? 'Alert Title' : null, 
		medias: mediaList,
	};
    const feedInfo3 = {
		feed_id: 'Feed _id',
		isVideo: rand3 > 50 ? true : false,
		alert_title:  rand3 > 50 ? 'Alert Title' : null, 
		medias: mediaList,
	};
	return (
		<View>
			<Text style={{backgroundColor: 'blue', color: 'white'}}>Feed Thumbnail - only photo </Text>
			<FeedThumnail img_uri={'http://ojsfile.ohmynews.com/STD_IMG_FILE/2019/0603/IE002505411_STD.jpg'} feedInfo={feedInfo} />
			<FeedThumnail img_uri={'http://ojsfile.ohmynews.com/STD_IMG_FILE/2019/0603/IE002505411_STD.jpg'} feedInfo={feedInfo2} />
			<FeedThumnail img_uri={'http://ojsfile.ohmynews.com/STD_IMG_FILE/2019/0603/IE002505411_STD.jpg'} feedInfo={feedInfo3} />
		</View>
	);
};
