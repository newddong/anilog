import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {getUserInfoById} from 'Root/api/userapi';
import {GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ProfileImageMedium120 from '../molecules/ProfileImageMedium120';
import {protectedPetList} from './style_organism';
import {getUserProtectAnimalList} from 'Root/api/protectapi';

export default ProtectedPetList = props => {
	const user_id = props.data;
	const [userPet, setUserPet] = React.useState([]);
	React.useEffect(() => {
		getUserProtectAnimalList(
			{
				userobject_id: user_id._id,
			},
			result => {
				// console.log('result / getUserInfoById / ProtectPet  ', result.msg);
				// let user_protect_pet = result.msg.user_my_pets.filter(e => e.pet_status != 'companion');
				// user_protect_pet.map((v, i) => {
				// 	user_protect_pet[i].protect_act_address = result.msg.user_address;
				// });
				console.log(result);
				setUserPet(result.msg);
			},
			err => {
				console.log('err  / getUserInfoById / ProtectPet  ', err);
			},
		);
	}, []);

	const renderItem = (item, index) => {
		return (
			<View style={[protectedPetList.itemContainer]}>
				<View style={[protectedPetList.petProfileImageMedium]}>
					<TouchableOpacity onPress={() => props.onClickLabel(item)}>
						<ProfileImageMedium120 data={item} />
					</TouchableOpacity>
				</View>

				<View style={[protectedPetList.petProfileInfo]}>
					<Text style={[txt.noto30, protectedPetList.nicknameCont]}> {item.user_nickname}</Text>
					<Text style={[txt.noto24, protectedPetList.addressCont]}>{item.protect_act_address.brief}</Text>
				</View>
			</View>
		);
	};
	return (
		<View style={[protectedPetList.container]}>
			<FlatList data={userPet} renderItem={({item, index}) => renderItem(item, index)} horizontal={true} showsHorizontalScrollIndicator={false} />
		</View>
	);
};

ProtectedPetList.defaultProps = {
	onClickLabel: e => console.log(e),
};
