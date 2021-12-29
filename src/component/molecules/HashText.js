import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {BLUE20} from 'Root/config/color';
import { useNavigation } from '@react-navigation/native';
/**
 * 해시테그, 유저 링크가 들어간 텍스트
 *
 * @param {object} props - Props Object
 * @param {string} props.value - 텍스트 값
 * @param {(input:string)=>void} props.onChange - 인풋 값 변경 콜백
 */
export default function HashText(props) {
	return <Text style={props.style}>{makeFeedInputView(props.children, props.allowTab)}</Text>;
}

HashText.defaultProps = {
	allowTab: true,
}


const makeFeedInputView = (input,allowTab) => {
	let arr0 = '해쉬나 계정에 대한 테그가 없는 글입니다. 테스트용이라 삭제하셔도 됩니다.';
	if(!input||input.length==0){
	input = '&@&@시프리티|&|61c5667e38c5f6dee5a8b77f&@&@ &@&@레몬이|&|61c5669d38c5f6dee5a8b782&@&@ &#&#띠롱|&|띠롱&#&#오늘은&@&@기영|&|eioasd&@&@이와함께 &#&#딸기|&|aslkdfja&#&# 를&@&@효쏭|&|aslfs&@&@과 함께 사먹었어요 &@&@행복&@&@이는&#&#간식을&#&#먹네요$$부럽네요$$증말';
	}
	if (!input.includes('&@&@') && !input.includes('&#&#')) return input;
	let Regex = /((.*?\n)*?.*?(&@&@.*?&@&@|&#&#.*?&#&#))([^&@#]*?$)?/g;
	let Regex2 = /(((.*?\n)*.*?)(&@&@(.*?)&@&@|&#&#(.*?)&#&#)(.*)$)/;
	let delimiter = '|&|';
	let result = input.match(Regex);

	const navigation = useNavigation();

	const onHashClick = hashID => {
		allowTab&&alert(hashID);
	};

	const onUserClick = userID => {
		allowTab&&navigation.navigate('UserProfile',{userobject:{_id:userID}});
	};

	return result?.map((v, i) => {
		let item = v.match(Regex2);
		if (v.includes('@')) {
			let user = item[5]?.split(delimiter);
			return (
				<React.Fragment key={i}>
					{item[2]}
					<Text
						style={{color: BLUE20}}
						onPress={() => {
							onUserClick(user[1]);
						}}>
						{user[0]}
					</Text>
					{item[7]}
				</React.Fragment>
			);
		}
		if (v.includes('#')) {
			let hash = item[6]?.split(delimiter);
			return (
				<React.Fragment key={i}>
					{item[2]}
					<Text
						style={{color: BLUE20}}
						onPress={() => {
							onHashClick(hash[1]);
						}}>
						{hash[0]}
					</Text>
					{item[7]}
				</React.Fragment>
			);
		}
	});
};
