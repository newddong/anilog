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
	// input = '엔터도\n들어가네\n된다&@&@@시프리티|&|61c5667e38c5f6dee5a8b77f&@&@ aaddsdfs&@&@@레몬이|&|61c5669d38c5f6dee5a8b782&@&@ sdfsdfaa&#&##띠롱|&|띠롱&#&#오늘은&@&@기영|&|eioasd&@&@이와함께 &#&#딸기|&|aslkdfja&#&# 를&@&@효쏭|&|aslfs&@&@과 함께 사먹었어요 &@&@행복|&|mongoID&@&@이는&#&##간식을|&|mongoid&#&#먹네요$$부럽네요$$증말';
		input = '피드 내용이 없습니다.'
	}
	if (!input.includes('&@&@') && !input.includes('&#&#')) return input;
	let Regex = /(((.*?\n)*?.*?)(&@&@(.*?)%&%(.*?)&@&@|&#&#(.*?)%&%(.*?)&#&#))([^&@#]*?$)?/g;
	const navigation = useNavigation();
	const onHashClick = hashID => {
		allowTab&&alert('해쉬',hashID);
	};

	const onUserClick = userID => {
		allowTab&&navigation.navigate('UserProfile',{userobject:{_id:userID}});
	};
	let match;
	let viewArr = []
	while((match=Regex.exec(input))!==null){
		// console.log(match);
		let pressfn = match[5]?onUserClick:onHashClick;
		let id = match[6]||match[8];
		viewArr.push(
			<React.Fragment key={viewArr.length}>
				{match[2]}
				<Text
					style={{color: BLUE20}}
					onPress={()=>{
						pressfn(id)
					}}>
					{match[5]||match[7]}
				</Text>
				{match[9]}
			</React.Fragment>
		)		
		
	}

	return viewArr;
	
};

