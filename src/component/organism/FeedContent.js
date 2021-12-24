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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {MAINCOLOR} from 'Root/screens/color';

export default FeedContent = props => {
	const {
		_id,
		feed_content,
		feed_thumbnail,
		feed_medias,
		feed_location,
		feed_date,
		feed_update_date,
		feed_type,
		feed_is_protect_diary,
		feed_recent_comment,
		missing_animal_species,
		missing_animal_species_detail,
		missing_animal_sex,
		missing_animal_age,
		missing_animal_lost_location,
		missing_animal_contact,
		missing_animal_features,
		missing_animal_date,
		report_witness_date,
		report_witness_location,
		report_animal_species,
		report_animal_species_detail,
		report_animal_sex,
		report_animal_age,
		report_animal_contact,
		report_animal_features,
		feed_like_count,
		feed_favorite_count,
		feed_comment_count,
		feed_writer_id,
		feed_avatar_id,
	} = props.data;

	const navigation = useNavigation();

	const [btnStatus, setBtnStatus] = React.useState(false); //더보기 Arrow방향 false면 아래
	const [layout, setLayout] = React.useState({height: 100 * DP, width: 0}); // 초기의 Layout
	const [reportLayout, setReportLayout] = React.useState({height: 0, width: 0});
	const contentHeight = React.useRef(270 * DP);
	const shouldShowMoreBtn = layout.height +reportLayout.height- 100 * DP > 0;

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
		setLayout({width, height});
	};

	//제보게시물
	const onLayoutReport = event => {
		const {width, height} = event.nativeEvent.layout;
		setReportLayout({width, height});
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

	const showMore = () => {
		let offset = layout.height - 100 * DP;
		let reportOffset = reportLayout.height + 16 * DP;
		if (btnStatus) {
			contentHeight.current = 270 * DP;
			setBtnStatus(false);
		} else {
			contentHeight.current = 270 * DP + offset + reportOffset;
			setBtnStatus(true);
		}
	};

	return (
		<View style={[organism_style.feedContent, {height: contentHeight.current}]}>
			{/* line 1 */}
			<View style={[organism_style.userLocationLabel_view_feedContent]}>
				{/* UserLocationLabel */}
				<View style={[organism_style.userLocationLabel_feedContent]}>
					<UserLocationLabel
						data={feed_avatar_id || feed_writer_id || undefined}
						onLabelClick={userobject => navigation.push('UserProfile', {userobject: userobject})}
						location={feed_location}
					/>
				</View>

				{/* type값이 status일 경우 status 버튼이 나오고 그렇지 않으면 다른 버튼 표기 */}
				{feed_type == 'feed' ? (
					<>
						<View style={[feedContent_style.status,{width:130*DP,height:38*DP}]}>
							{feed_is_protect_diary&&<View
								style={{
									width: 130 * DP,
									height: 38 * DP,
									justifyContent: 'center',
									alignItems: 'center',
									borderColor: MAINCOLOR,
									borderRadius: 10 * DP,
									borderWidth: 2 * DP,
								}}>
								<Text style={[txt.roboto24, txt.maincolor]}>임보일기</Text>
							</View>}
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
								<Text>{feed_favorite_count}</Text>
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
			{feed_type == 'report' && (
				<View style={[organism_style.tipOff_feedContent, feedContent_style.tipOff]} onLayout={onLayoutReport}>
					<Text style={[txt.noto28]}>
						제보 날짜: <Text style={[txt.noto32b]}>{report_witness_date}</Text>
					</Text>
					<Text style={[txt.noto28]}>
						제보 장소: <Text style={[txt.noto28b]}>{report_witness_location}</Text>
					</Text>
				</View>
			)}

			{/* FeedText */}
			<View
				style={[
					organism_style.content_feedContent,
					feedContent_style.content,
					{
						// FeedText의 높이가 120이상(3줄 이상)일 경우 maxheight가 지정되며, 아닐 경우 Maxheight는 없다
						// height: getMaxHeight(),
						// maxHeight: getMaxHeight()
					},
					{
						//하지만 더보기를 누른다면 maxHeight 제한은 사라지며 본래의 크기를 보여준다
						// maxHeight: btnStatus ? null : 120 * DP,
					},
				]}
				onLayout={onLayout}>
				{/* <FeedText text={feed_content} onHashClick={hashText => moveToFeedListForHashTag(hashText)} /> */}
				<Text style={txt.noto28} ellipsizeMode="tail">
					{feed_content}
				</Text>
			</View>
			{/* 피드 작성 날짜  3 */}
			<View style={[organism_style.time_view_feedContent]}>
				<View style={[organism_style.time_feedContent]}>
					<Text style={[txt.noto22]}>{feed_date}</Text>
				</View>

				{/* 내용이 길어지면 더보기 버튼이 생기는 로직은 추후 구현 */}
				{shouldShowMoreBtn && (
					<TouchableWithoutFeedback onPress={showMore}>
						<View style={[organism_style.addMore_view_feedContent]}>
							<View style={[organism_style.addMore_feedContent]}>
								<Text style={[txt.noto22, {color: GRAY10}]}>더보기</Text>
							</View>
							<View style={[organism_style.braket]}>{btnStatus ? <Arrow_Up_GRAY20 /> : <Arrow_Down_GRAY20 />}</View>
						</View>
					</TouchableWithoutFeedback>
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
