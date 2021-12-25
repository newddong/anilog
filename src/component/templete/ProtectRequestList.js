import React from 'react';
import {ScrollView, Text, View, ActivityIndicator} from 'react-native';
import {login_style, protectRequestList, searchProtectRequest, temp_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {btn_w306} from '../atom/btn/btn_style';
import {GRAY10} from 'Root/config/color';
import OnOffSwitch from '../molecules/OnOffSwitch';
import {txt} from 'Root/config/textstyle';
import {dummy_ProtectRequestList} from 'Root/config/dummy_data_hjs';
import {ONLY_CONTENT_FOR_ADOPTION, PET_KIND, PET_PROTECT_LOCATION} from 'Root/i18n/msg';
import FilterButton from '../molecules/FilterButton';
import {getProtectRequestList, getProtectRequestListByShelterId} from 'Root/api/shelterapi.js';

export default ProtectRequestList = ({navigation, route}) => {
	const [data, setData] = React.useState([]);
	const [showAdoptable, setShowAdoptable] = React.useState(false);
	const [filterData, setFilterData] = React.useState({});
	const [refreshing, setRefreshing] = React.useState(false);
	const [loading, setLoading] = React.useState(true); //로딩상태

	React.useEffect(() => {
		const getList = () => {
			console.log('getProtectRequestList:feedlist of protectRequest');
			getProtectRequestList(
				{
					//필터 - 보호지역 (user_address.city 데이터)
					city: '',
					//필터 - 동물종류
					protect_animal_species: '',
					//입양 가능한 게시글만 보기
					adoptable_posts: false,
					//커서 역할을 할 보호요청 오브잭트(페이징 처리)
					protect_request_object_id: '',
					//보호요청게시글 요청 숫자
					request_number: 10,
				},
				data => {
					// console.log('data' + JSON.stringify(`data${data}`));
					console.log('length', data.msg.length);
					// console.log('보호요청 ', data.msg[0]);
					// data.msg.forEach(e => console.log('forEach', e.protect_animal_id.protect_animal_sex, e.protect_animal_id.protect_animal_status));
					data.msg.forEach(each => {
						each.protect_animal_sex = each.protect_animal_id.protect_animal_sex;
						each.protect_animal_status = each.protect_animal_id.protect_animal_status;
					});
					setData(data.msg);
				},
				errcallback => {
					console.log(`errcallback:${JSON.stringify(errcallback)}`);
				},
			);
		};
		//스크린 이동시 리스트 갱신
		const unsubscribe = navigation.addListener('focus', () => {
			getList();
			setTimeout(() => {
				setLoading(false);
			}, 800);
		});
		//Refreshing 요청시 리스트 다시 조회
		refreshing ? getList() : false;
		return unsubscribe;
	}, [refreshing]);

	const onClickLabel = (status, id, item) => {
		//data에는 getProtectRequestList(어떠한 필터도 없이 모든 보호요청게시글을 출력)의 결과값이 담겨있음
		//따라서 출력할 것을 해당 게시글의 작성자(보호소)가 작성한 보호요청게시글로 좁혀야함
		console.log('item', item.protect_request_writer_id._id);
		getProtectRequestListByShelterId(
			{
				shelter_userobject_id: item.protect_request_writer_id._id,
				protect_request_status: 'rescue',
				protect_request_object_id: null,
				request_number: 10,
			},
			result => {
				console.log('result / getPRotectRequestListByShelterId / ProtectRequestList  : ', result.msg);
				navigation.navigate('AnimalProtectRequestDetail', {item: item, list: result.msg});
			},
			err => {
				console.log('err / getProtectRequestListByShelterId / ProtectRequestList   : ', err);
			},
		);
	};

	const filterOn = () => {
		// alert('입양 가능한 게시글만 보기');
		console.log('입양 가능한 게시글만 보기');
		setShowAdoptable(true);
	};
	const filterOff = () => {
		// alert('입양 가능한 게시글만 보기 끄기');
		console.log('입양 가능한 게시글만 OFF');
		setShowAdoptable(false);
	};
	//별도의 API 사용 예정.
	const onOff_FavoriteTag = (value, index) => {
		console.log('즐겨찾기=>' + value + ' ' + index);
	};
	const onSelectLocation = location => {
		setData({...data, city: location});
	};

	const onSelectKind = kind => {
		setData({...data, protect_animal_species: kind});
	};

	if (loading) {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'}}>
				<ActivityIndicator size={'large'}></ActivityIndicator>
			</View>
		);
	}

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			<ScrollView style={{flex: 1}}>
				<View style={[searchProtectRequest.filterView]}>
					<View style={[searchProtectRequest.filterView.inside]}>
						<View style={{flexDirection: 'row'}}>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_PROTECT_LOCATION} onSelect={onSelectLocation} width={306} />
							</View>
							<View style={[temp_style.filterBtn]}>
								<FilterButton menu={PET_KIND} onSelect={onSelectKind} width={306} />
							</View>
						</View>
						{/* 입양 가능한 게시물만 보기 */}
						<View style={[searchProtectRequest.filterView.onOffBtnView]}>
							<View style={[searchProtectRequest.filterView.onOffBtnMsg]}>
								<Text style={[txt.noto20, {color: GRAY10}]}>{ONLY_CONTENT_FOR_ADOPTION}</Text>
							</View>
							<View style={[temp_style.onOffSwitch, searchProtectRequest.filterView.onOffSwitch]}>
								<OnOffSwitch onSwtichOn={filterOn} onSwtichOff={filterOff} />
							</View>
						</View>
					</View>
				</View>
				<View style={[searchProtectRequest.animalNeedHelpList]}>
					<AnimalNeedHelpList data={data} onClickLabel={onClickLabel} onFavoriteTag={onOff_FavoriteTag} />
				</View>
			</ScrollView>
		</View>
	);
};

ProtectRequestList.defaultProps = {};
