import React from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback,Platform} from 'react-native';
import HashText from 'Molecules/HashText';
import AccountHashList from '../organism_ksw/AccountHashList';
import AccountList from '../organism_ksw/AccountList';
import {GRAY20} from 'Root/config/color';
import {findTagAt, isTag, getTagName,findStartIndexOfTag,findEndIndexOfTag} from 'Root/util/stringutil';
import {getUserListByNickname} from 'Root/api/userapi';
import Modal from '../modal/Modal';

export default function HashInput(props) {
	const [value, setValue] = React.useState('');
	const [find, setFind] = React.useState(false);
	const [cursor, setCursor] = React.useState();
	const inputRef = React.useState();
	const internal = React.useRef({
		value:'',
		text: '',
		textInputCursor:0, //입력칸의 커서 위치
		cursor: 0, //text에서 커서 위치
        tagStartIdx: 0,
		tagEndIdx: 0,
		currentTag:'',
		editTag:'',
		prevEditTag:'',
		hashStore: new Map(),
		linkStore: new Map(),
	}).current;

	const [userlist, setUserlist] = React.useState([]);
	const changeTextRegex = /([#@])([^#@\s]+)/gm;
	//이벤트는 onChangeText가 onSelectionChange보다 먼저 발생한다.
	//onSelectionChange는 한글의 자모 조립시에는 발생하지 않고, 한 음절이 입력이 끝난 뒤 커서의 위치가 변동되었을 경우만 발생한다.
	const onChangeText = text => {
		// internal.text = text.replace(/([#@])([^#@\s]+)/gm,'&$1&$1$1$2|&|&$1&$1'); //디비에 입력될 내용으로 변환
		let temp = text.replace(changeTextRegex,'&$1&$1$1$2|&|&$1&$1'); //디비에 입력될 내용으로 변환
        if(linkStore.size>0){
			linkStore.forEach((value,key) => {
				let regex = new RegExp(`&@&@@${key}|&|.*?&@&@`)
				// temp.replace(,)
			});
		}
		if(hashStore.size>0){
			hashStore.forEach((value,key))
		}

		internal.editTag = findTagAt(internal.textInputCursor, text);
		setFind(isTag(internal.editTag));

        if (isTag(internal.editTag)) {
			getUserListByNickname(
				{
					user_nickname: getTagName(internal.editTag),
				},
				result => {
					setUserlist(result.msg);
				},
				error => {
					// Modal.alert(error)
					console.log(error);
				},
			);
		}//onChangeText에서 api검색을 수행해야 자모 변경에도 민감하게 반응, 음절 완료시 검색을 하게 하려면 onSelectionChange로 if문을 이동

		internal.value = text;
		setValue(text);
		props.onChangeText(text);
	};

	const onSelectionChange = e => {
		const {start, end} = e.nativeEvent.selection;
		if (start == end) {
			internal.textInputCursor = start;
		}
		internal.prevEditTag = internal.editTag;
        internal.editTag = findTagAt(start, value); //현재 커서의 위치에서 태그를 찾음

		if(internal.editTag!=internal.prevEditTag){
			getUserListByNickname(
				{
					user_nickname: getTagName(findTagAt(internal.textInputCursor, value)),
				},
				result => {
					setUserlist(result.msg);
				},
				error => {
					console.log(error);
				},
			);
		}//커서 이동시 태그값이 바뀌면 리스트를 갱신

		internal.tagStartIdx = findStartIndexOfTag(internal.textInputCursor,value); //현재 커서가 위치한 단어의 시작 인덱스,
		internal.tagEndIdx = findEndIndexOfTag(internal.textInputCursor,value); //현재 커서가 위치한 단어의 끝 인덱스
		setFind(isTag(internal.editTag));
	};

	const userSelect = (user,index) => {
        let nickname = '@'+user.user_nickname;
		let offset = Platform.OS=='android'?0:1;
		console.log('userselect start at : ',internal.tagStartIdx,', end at : ', internal.tagEndIdx);
        console.log('대상 태그',value.substring(internal.tagStartIdx, internal.tagEndIdx));
		setValue(value.substring(0,internal.tagStartIdx+offset).concat(nickname, value.substring(internal.tagEndIdx)).trimEnd().concat(' '));
		
		internal.linkStore.set(user.user_nickname,user._id);
		


		console.log(internal.linkStore);

		setFind(false);
	};

	// React.useEffect(() => {
	// 	//검색 함수 true일때 실행(태그에 처음 진입했을때 검색창 띄움)
	// 	getUserListByNickname(
	// 		{
	// 			user_nickname: getTagName(findTagAt(internal.textInputCursor, value)),
	// 		},
	// 		result => {
	// 			setUserlist(result.msg);
	// 		},
	// 		error => {
	// 			console.log(error);
	// 		},
	// 	);
	// }, [find]);

	return (
		<>
			<View style={[props.containerStyle, {height: 10 * DP}]}>
				<TextInput
					{...props} //props override
					textAlignVertical={'top'}
					multiline={true}
					value={value}
					onChangeText={onChangeText}
					placeholder="게시물을 작성하세요"
					placeholderTextColor={GRAY20}
					selection={cursor}
					ref={inputRef}
					onSelectionChange={onSelectionChange}></TextInput>

				{/* <View style={{position: 'absolute', width: '100%', height: '100%', top: 100 * DP, padding: 15 * DP, flexDirection: 'row'}}>
				{value.length == 0 ? (
					<Text style={{color: props.placeholderTextColor}}>{props.placeholder}</Text>
				) : (
					<HashText allowTab={false}>{value}</HashText>
				)}
				<View style={{width: 2 * DP, height: 40 * DP, backgroundColor: 'red'}} />
			</View> */}
			</View>
			<View style={{width: '100%', height: 200 * DP, top: 0 * DP, padding: 15 * DP, flexDirection: 'row', backgroundColor: 'gold', zIndex: 99}}>
				<Text style={{color: props.placeholderTextColor}}>{internal.text}</Text>
			</View>
			{find && (
				<View style={{width: '100%', height: 600 * DP, padding: 15 * DP, flexDirection: 'row', backgroundColor: 'green'}}>
					<AccountList items={userlist} onSelect={userSelect} />
				</View>
			)}
		</>
	);
}

HashInput.defaultProp = {
	containerStyle: {},
};
