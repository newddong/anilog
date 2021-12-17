import React from 'react';
import {View} from 'react-native';
import {login_style, animalFromShelter_style} from './style_templete';
import AnimalNeedHelpList from '../organism_ksw/AnimalNeedHelpList';
import {useNavigation} from '@react-navigation/core';
import {dummy_AdoptorInformation, dummy_AnimalFromShelter_adopted} from 'Root/config/dummyDate_json';
import {getShelterProtectAnimalList} from 'Root/api/shelterapi';

export default AnimalFromShelter = ({route}) => {
	const navigation = useNavigation();
	const [data, setData] = React.useState(dummy_AnimalFromShelter_adopted); //AnimalNeedHelpList에 보낼 리스트정보

	React.useEffect(() => {
		getShelterProtectAnimalList(
			{
				shelter_protect_animal_object_id: null,
				request_number: 2,
			},
			successed => {
				console.log('successed / getShelterProtectAnimalList', successed.msg);
				setData(successed.msg);
			},
			err => {
				console.log('err / getShelterProtectAnimalList', err);
				setData(err);
			},
		);
	}, [route]);

	const onClickLabel = (status, user_id, item) => {
		console.log('status , id => ' + status + '_' + user_id);
	};
	//테두리 모드 On 상태에서 입양처 보기 클릭
	const onPressAdoptorInfo = data => {
		// console.log('item', item);

		navigation.push('AdoptorInformation', data);
	};

	// 테두리 모드 On 상태에서 게시글보기 클릭 => AnimapProtectRequestDetail == ProtectRequestManage
	const onPressProtectRequest = item => {
		navigation.push('ProtectRequestManage', item);
	};

	return (
		<View style={[login_style.wrp_main, {flex: 1}]}>
			{/* {console.log('props.route.params.listType=>' + props.route.params.listType)} */}
			{/* {console.log('AnimalFromShelter:props.route.params.borderMode=>' + props.route.params.borderMode)} */}
			<View style={[animalFromShelter_style.container]}>
				<AnimalNeedHelpList
					data={data}
					borderMode={true}
					onClickLabel={onClickLabel}
					onPressAdoptorInfo={onPressAdoptorInfo}
					onPressProtectRequest={onPressProtectRequest}
				/>
			</View>
		</View>
	);
};

AnimalFromShelter.defaultProps = {
	data: [],
};
