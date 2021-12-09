import React from 'react';
import {Text, View} from 'react-native';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import PetImageLabel from '../molecules/PetImageLabel';
import {animalInfo} from './style_organism';

export default AnimalInfo = props => {
	const [data, setData] = React.useState(props.data);

	React.useEffect(() => {
		let split = props.data.protect_animal_date.split('-');
		const pro_date = new Date(split[0], split[1] - 1, split[2]); //String의 날짜 정보를 Date로 전환
		const diff_date_time = (new Date().getTime() - pro_date.getTime()) / 1000; // 오늘 getTime과 임보 시작 날짜 getTime의 차이 계산
		const diff_date = Math.floor(diff_date_time / 86400); // 하루 86400초로 나눠서 몇 일이 경과되었는지 계산
		setData({...props.data, protect_animal_date: diff_date});
	}, [props.data]);

	return (
		<View style={[animalInfo.container]}>
			<PetImageLabel data={data} />
			<View style={[animalInfo.infoContainer]}>
				<Text style={[animalInfo.infoContainer_petNickname, txt.noto30b]}>{data.user_nickname}</Text>
				<Text style={[animalInfo.infoContainer_petDetail, txt.noto24, {color: GRAY20}]}>
					{data.pet_species}/{data.pet_species_detail}
				</Text>
				<Text style={[animalInfo.infoContainer_petDetail, txt.noto24, {color: GRAY20}]}>임시보호 {data.protect_animal_date}일 째</Text>
			</View>
		</View>
	);
};

AnimalInfo.defaultProps = {};

// PetImageLabel.defaultProps = {
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	petStatus: 'normal', // normal protected adopted
// 	petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임
// };
