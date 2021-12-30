import React from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
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
		text: '',
		cursor: 0,
        currentTag:'',
        editTag:'',
	}).current;

	const inputCursor = React.useRef(0);

	const [userlist, setUserlist] = React.useState([]);

	const onChangeText = text => {
        // console.log(internal,inputCursor)
		internal.text = text.replace(/([#@])([^#@\s]*)/gm,'&$1&$1$1$2|&|&$1&$1');
        internal.editTag = findTagAt(inputCursor.current, text);
		console.log('편집중인글 =>', internal.editTag);
		console.log('편집중인 위치가 테그인지', isTag(internal.editTag));
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
		}

		
		setValue(text);
		props.onChangeText(text);
	};

	const onSelectionChange = e => {
		// setCursor(e.nativeEvent.selection);
		const {start, end} = e.nativeEvent.selection;
		if (start == end) {
			inputCursor.current = start;
		}
        internal.editTag = findTagAt(start, value);

        console.log(start, value[start])
        console.log(internal.text[internal.cursor])

        // console.log(cursor, inputCursor);
		console.log('커서부근의 단어 =>', findTagAt(start, value));
		console.log('커서가 테그 편집에 있는지', isTag(findTagAt(start, value)));
		setFind(isTag(findTagAt(start, value)));
		// console.log(value.match(/[@#](\S*?)(?=[\s\n@#]|$)/g));
		// const regex = /[@#](\S*?)(?=[\s\n@#]|$)/gm;
	};

	const userSelect = (user,index) => {
        let nickname = '@'+user.user_nickname
        console.log(internal.editTag);
        console.log(value.replace(internal.editTag,nickname));
        setValue(value.replace(internal.editTag,nickname));



		// setCursor({start: 0, end: 0});

		setFind(false);
	};

	React.useEffect(() => {
		//검색 함수 true일때 실행(태그에 처음 진입했을때 검색창 띄움)
		getUserListByNickname(
			{
				user_nickname: getTagName(findTagAt(inputCursor.current, value)),
			},
			result => {
				setUserlist(result.msg);
			},
			error => {
				console.log(error);
			},
		);
	}, [find]);

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
