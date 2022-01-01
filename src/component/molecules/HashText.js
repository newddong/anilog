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
	if(!input||input.length==0){
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

