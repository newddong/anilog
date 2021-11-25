import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { txt } from 'Root/config/textstyle';
import AnimalInfo from './AnimalInfo';
import { animalInfoList } from './style_organism';

export default AnimalInfoList = props => {

	const [data, setData] = React.useState(props.items)

	React.useEffect(() => {
		setData(props.items)
	}, [props.items])

	const renderItem = (item, index) => {
		return (
			<View style={[animalInfoList.itemContainer,]}>
				<AnimalInfo data={item} />
			</View>
		);
	};

	return (
		<View style={[animalInfoList.container]}>
			<FlatList data={data} renderItem={({ item, index }) => renderItem(item, index)} />
		</View>
	);
};

// PetImageLabel.defaultProps = {
// 	img_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg', //image uri
// 	petStatus: 'normal', // normal protected adopted
// 	petNickname: null, // 펫 프로필이미지 아래에 출력되는 닉네임
// };
