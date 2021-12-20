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


	const debug = true;
	const navigation = useNavigation();
	
	const [btnStatus, setBtnStatus] = React.useState(false); //더보기 Arrow방향 false면 아래
	const [isGotHeight, setIsGotHeight] = React.useState(false); //이미 한 번 받아온 최초 Height가 있다면 true
	const [layout, setLayout] = React.useState({}); // 초기의 Layout

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

	console.log('feedwriter',feed_writer_id);
	console.log('아바타',feed_avatar_id);


	return (
		<View style={[organism_style.feedContent, {}]}>
			{/* line 1 */}
			<View style={[organism_style.userLocationLabel_view_feedContent]}>
				{/* UserLocationLabel */}
				<View style={[organism_style.userLocationLabel_feedContent]}>
					<UserLocationLabel data={feed_avatar_id||feed_writer_id||undefined} onLabelClick={(id) => navigation.push('UserProfile',{id:id})} location={feed_location}/>
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
				<View style={[organism_style.tipOff_feedContent, feedContent_style.tipOff]}>
					<Text style={[txt.noto28]}>제보 날짜: {report_witness_date}</Text>
					<Text style={[txt.noto28]}>제보 장소: {report_witness_location}</Text>
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
				<FeedText text={feed_content} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				{/* // <FeedText text={dumy_data.missing_data} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				// ) : ( // <FeedText text={temp_data.feedText_contents} onHashClick={hashText => moveToFeedListForHashTag(hashText)} />
				// )} */}
			</View>
			{/* 피드 작성 날짜  3 */}
			<View style={[organism_style.time_view_feedContent, {marginTop: btnStatus ? null : 10 * DP}]}>
				<View style={[organism_style.time_feedContent]}>
					<Text>{feed_date}</Text>
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
