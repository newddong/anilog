import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {organism_style, feedContent_style} from './style_organism';
import UserLocationLabel from 'Root/component/molecules/UserLocationLabel';
import AniButton from 'Root/component/molecules/AniButton';
import {btn_w130} from 'Root/component/atom/btn/btn_style';
import {useNavigation} from '@react-navigation/core';
import {FavoriteTag48_Filled, Meatball50_GRAY20_Horizontal, Share48_Filled} from '../atom/icon';
import {txt} from 'Root/config/textstyle';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20} from '../atom/icon';
import FeedText from '../organism_ksw/FeedText';
import DP from 'Root/config/dp';
import {GRAY10} from 'Root/config/color';
import {SHARE} from 'Root/i18n/msg';

export default FeedContent = props => {
	const debug = true;
	const navigation = useNavigation();
	const dumy_data = props.data;
	const location = '모델하우스 앞 공터';
	const [btnStatus, setBtnStatus] = React.useState(false); //더보기 Arrow방향 false면 아래

	const [isGotHeight, setIsGotHeight] = React.useState(false); //이미 한 번 받아온 최초 Height가 있다면 true

	const [layout, setLayout] = React.useState({}); // 초기의 Layout


	let temp_data = {
		_id: 'user_99',
		user_nickname: '웹툰작가99',
		user_profile_uri: 'http://pds.joins.com/news/component/moneytoday/201507/23/2015072308581995198_1.jpg',
		user_address: {
			city: '서울시', //시,도
			district: '강남구', //군,구
			neighbor: '신사동', //동,읍,면
		},
		// text_intro: 'Text/Intro',
		// feedText_contents:
		// 	'우리 #둥이 는 언제나 #창가 에 앉아있기를 좋아하는거같다. That is not a propblem ' +
		// 	'우리 #둥이 는 언제나 #창가 에 앉아있기를 좋아하는거같다. 다른 강아지들은 높은곳을 무서워한다는데 정말 알 수가 없네요ㅎㅎㅎ' +
		// 	'우리 #둥이 는 언제나 #창가 에 앉아있기를 좋아하는거같다. 다른 강아지들은 높은곳을 무서워한다는데 정말 알 수가 없네요ㅎㅎㅎ',
	};

	//화면전환 시 isGotHeight는 초기값으로 가서 차후 호출 시, Height를 다시 받아오도록 함
	React.useEffect(() => {
		navigation.addListener('blur', () => {
			setIsGotHeight(true);
		});
	});

	const moveToFeedListForHashTag = tagText => {
		const dummyHashData = {
			keyword: tagText,
			count: 10,
			keywordBold: true,
		};
		navigation.push('FeedListForHashTag', dummyHashData);
	};

	

	//FeedText가 담긴 View 의 onLayout
	const onLayout = event => {
		const {width, height} = event.nativeEvent.layout;
		if (!isGotHeight) {
			// console.log(width, height);
			setLayout({width, height});
			setIsGotHeight(true);
		} else {
			// console.log("Already Got Height!", width, height);
		}
	};

	// FeedText View의 maxHeight설정
	const getMaxHeight = () => {
		// console.log('getMAx', layout.height);
		if (btnStatus) {
			return null;
		} else if (layout.height > 120 * DP) {
			return 120 * DP;
		} else {
			null;
		}
	};

	const onClickMeatball = () => {
		console.log('meatball');
	};

	return (
		<View style={[organism_style.feedContent, {}]}>
			{/* line 1 */}
			<View style={[organism_style.userLocationLabel_view_feedContent]}>
				{/* UserLocationLabel */}
				<View style={[organism_style.userLocationLabel_feedContent]}>
					{debug && console.log(`\nFeedContent:view - dumy_data=>:${JSON.stringify(dumy_data)}`)}
					{/* <UserLocationLabel data={dumy_data} onLabelClick={() => navigation.push('UserProfile', {_id: dumy_data._id})} /> */}
					{/* {dumy_data != undefined ? (
						<UserLocationLabel data={dumy_data} onLabelClick={() => navigation.push('UserProfile')} />
					) : (
						<UserLocationLabel data={temp_data} onLabelClick={() => navigation.push('UserProfile')} />
					)} */}
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
							<Meatball50_GRAY20_Horizontal onPress={onClickMeatball} />
						</View>
					</>
				) : (
					<View style={[organism_style.button_view_feedContent]}>
						<View style={[organism_style.favoriteTag_view_feedContent]}>
							<View style={[organism_style.favoriteTag_feedContent]}>
								<FavoriteTag48_Filled />
							</View>
							<View style={[organism_style.like_count_feedContent, feedContent_style.like_count]}>
								<Text>29</Text>
							</View>
						</View>
						<View style={[organism_style.share48_view_feedContent]}>
							<View style={[organism_style.share48_feedContent]}>
								<Share48_Filled />
							</View>
							<View style={[organism_style.share_feedContent, feedContent_style.share]}>
								<Text style={[txt.noto24, {color: GRAY10}]}>{SHARE}</Text>
							</View>
						</View>
					</View>
				)}
			</View>

			{/* line 1-1 (제보관련 내용) */}
			{props.data.feed_type == 'report' && (
				<View style={[organism_style.tipOff_feedContent, feedContent_style.tipOff]}>
					<Text style={[txt.noto28]}>제보 날짜: {dumy_data.report_witness_date}</Text>
					<Text style={[txt.noto28]}>제보 장소: {dumy_data.report_witness_location}</Text>
				</View>
			)}

			{/* FeedText */}
			<View
				style={[
					organism_style.content_feedContent,
					feedContent_style.content,
					{
						// FeedText의 높이가 120이상(3줄 이상)일 경우 maxheight가 지정되며, 아닐 경우 Maxheight는 없다
						height: getMaxHeight(),
						// maxHeight: getMaxHeight()
					},
					{
						//하지만 더보기를 누른다면 maxHeight 제한은 사라지며 본래의 크기를 보여준다
						// maxHeight: btnStatus ? null : 120 * DP,
					},
				]}
				onLayout={onLayout}>
				{/* {dumy_data != undefined ? ( */}
				<FeedText text={dumy_data.feed_content} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				{/* // <FeedText text={dumy_data.missing_data} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				// ) : ( // <FeedText text={temp_data.feedText_contents} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				// )} */}
			</View>
			{/* 피드 작성 날짜  3 */}
			<View style={[organism_style.time_view_feedContent, {marginTop: btnStatus ? null : 10 * DP}]}>
				<View style={[organism_style.time_feedContent]}>
					<Text>{dumy_data.calcData}</Text>
				</View>

				{/* 내용이 길어지면 더보기 버튼이 생기는 로직은 추후 구현 */}
				{layout.height > 120 * DP && (
					<View style={[organism_style.addMore_view_feedContent]}>
						<View style={[organism_style.addMore_feedContent]}>
							<Text style={[txt.noto22, {color: GRAY10}]}>더보기</Text>
						</View>
						<View style={[organism_style.braket]}>
							{btnStatus ? (
								<Arrow_Up_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />
							) : (
								<Arrow_Down_GRAY20 onPress={() => setBtnStatus(!btnStatus)} />
							)}
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
		content: 'comment 내용을 넣어야 합니다.',
	},
};
