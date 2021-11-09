import React from 'react';
import {Text, View} from 'react-native';
import {organism_style, feedContent_style} from './style_organism';
import UserLocationLabel from 'Root/component/molecules/UserLocationLabel';
import AniButton from 'Root/component/molecules/AniButton';
import {btn_w130} from 'Root/component/atom/btn/btn_style';
import {useNavigation} from '@react-navigation/core';
import {FavoriteTag48_Filled, Share48_Filled} from '../atom/icon';

export default FeedContent = props => {
	//Test용 데이터
	const navigation = useNavigation();
	const test_data = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
		text_intro: 'Text/Intro',
	};

	return (
		<View style={organism_style.feedContent}>
			{/* line 1 */}
			<View style={[organism_style.userLocationLabel_view_feedContent]}>
				{/* UserLocationLabel */}
				<View style={[organism_style.userLocationLabel_feedContent]}>
					<UserLocationLabel data={test_data} onLabelClick={() => navigation.push('UserProfile')} />
				</View>

				{/* type값이 status일 경우 status 버튼이 나오고 그렇지 않으면 다른 버튼 표기 */}
				{props.data.type == 'status' ? (
					<>
						<View style={[feedContent_style.status]}>
							<AniButton
								btnLayout={[btn_w130]}
								btnTitle={'Status'}
								btnTheme={'noShadow'}
								btnStyle={'border'}
								titleFontStyle={24}
								onPress={() => alert('Onpress')}
							/>
						</View>

						<View style={[organism_style.meatball, feedContent_style.meatball]}>
							<Text>MEATBALL 50 HORIZONTAL</Text>
						</View>
					</>
				) : (
					<View style={[organism_style.button_view_feedContent]}>
						<View style={[organism_style.favoriteTag_view_feedContent]}>
							<View style={[organism_style.favoriteTag_feedContent]}>
								<FavoriteTag48_Filled />
							</View>
							<View style={[organism_style.like_count_feedContent, feedContent_style.like_count]}>
								<Text>like_count</Text>
							</View>
						</View>
						<View style={[organism_style.share48_view_feedContent]}>
							<View style={[organism_style.share48_feedContent]}>
								<Share48_Filled />
							</View>
							<View style={[organism_style.share_feedContent, feedContent_style.share]}>
								<Text>공유</Text>
							</View>
						</View>
					</View>
				)}
			</View>

			{/* line 1-1 (제보관련 내용) */}
			{props.data.tipOff && (
				<View style={[organism_style.tipOff_feedContent, feedContent_style.tipOff]}>
					<Text>제보 날짜: 20201.10.22\n제보장소: 경기도 김포시 김포한강8로 16-6 인근 비닐 하우스</Text>
				</View>
			)}

			{/* line 2 */}
			<View style={[organism_style.content_feedContent, feedContent_style.content]}>
				<Text>Content</Text>
			</View>

			{/* line 3 */}
			<View style={[organism_style.time_view_feedContent]}>
				<View style={[organism_style.time_feedContent]}>
					<Text>time시간 전</Text>
				</View>

				{/* 내용이 길어지면 더보기 버튼이 생기는 로직은 추후 구현 */}
				{props.data.addMore && (
					<View style={[organism_style.addMore_view_feedContent]}>
						<View style={[organism_style.addMore_feedContent]}>
							<Text>더보기</Text>
						</View>
						<View style={[organism_style.braket]}>
							<Text>BRACKET 48</Text>
						</View>
					</View>
				)}
			</View>
		</View>
	);
};

FeedContent.defaultProps = {
	data: {
		type: 'button',
		addMore: true,
		tipOff: true,
	},
};
