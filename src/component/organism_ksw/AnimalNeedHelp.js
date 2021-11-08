import React from 'react';
import {View, Text} from 'react-native';
import {GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import {FavoriteTag48_Border, Male48} from '../atom/icon';
import ProtectedThumbnail from '../molecules/ProtectedThumbnail';
import {animalNeedHelp} from './style_organism';

export default AnimalNeedHelp = props => {
	const data = props.data;

	return (
		<View style={[animalNeedHelp.container]}>
			<View style={[animalNeedHelp.protectedThumbnail_container]}>
				<ProtectedThumbnail />
				<View style={[animalNeedHelp.gender]}>
					<Male48 />
				</View>
			</View>
			<View style={[animalNeedHelp.detailContainer]}>
				<View style={[animalNeedHelp.detail_upperMenu]}>
					<View style={[animalNeedHelp.detail_upper_petStateContainer]}>
						{props.temp_protection_request ? (
							<View style={[animalNeedHelp.detail_upper_petState]}>
								<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>임보요청</Text>
							</View>
						) : null}
						{props.adoption_days_remain ? (
							<View style={[animalNeedHelp.detail_upper_petState]}>
								<Text style={[txt.noto24, animalNeedHelp.petStatusContainer_text]}>{props.adoption_days_remain}일 후 입양가능</Text>
							</View>
						) : null}
					</View>
					<View style={[animalNeedHelp.detail_upper_tag]}>
						<FavoriteTag48_Border />
					</View>
				</View>
				<View style={[animalNeedHelp.detail_lowerMenu]}>
					<View style={[animalNeedHelp.lowerMenu_kindAndBreed]}>
						<Text style={[txt.noto30b]}>고양이</Text>
						<Text style={[txt.noto28, animalNeedHelp.breedText]}>코리안 숏헤어</Text>
					</View>
					<View style={[animalNeedHelp.lowerMenu_helpDetail]}>
						<Text style={[txt.noto24]}>등록일 : {props.registered_date}</Text>
						<Text style={[txt.noto24]}>보호장소 : {props.location}</Text>
						<Text style={[txt.noto24]}>구조지역 : {props.saved_location}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

AnimalNeedHelp.defaultProps = {
	temp_protection_request: true,
	adoption_days_remain: 10,
	registered_date: '2021-06-17',
	location: '자운',
	saved_location: '경기도 강정동',
	data: {
		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
		gender: 'female',
		status: 'protected',
	},
};

// ProtectedThumbnail.defaultProps = {
// 	data: {
// 		img_uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnMtf3hxsk1F_4zdgzjjlP-wnyiXLcdbR7w&usqp=CAU',
// 		gender: 'female',
// 		status: 'protected',
// 	},
// };
