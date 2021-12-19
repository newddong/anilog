import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';
import NormalDropDown from './NormalDropDown';
import Input24 from './Input24';

/**
 *
 * @param {object} props
 * @param {Array.<string>} props.dropdownItems - 메일주소 업체들
 * @param {number} props.defaultIndex - 드롭다운의 기본 인덱스(기본값:0)
 * @param {string} props.value - 값
 * @param {number} props.width - 텍스트입력의 너비
 * @param {string} props.title - InputWithEmail의 제목
 * @param {boolean} props.title_star - 제목에 *표시 여부
 * @param {()=>void} props.onClear - 지우기 버튼 클릭시 콜백
 * @param {(isValid:boolean)=>void} props.onValid - 택스트 입력이 유효할 경우 반환(현재는 입력길이가 1이상일 경우 유효함)
 * @param {(item:object, index:number)=>void} props.onSelectDropDown - 이메일 도메인에서 선택값 오브젝트와 인덱스 반환
 * @param {(value:string)=>void} props.onChange - InputWithEmail값의 변동에 따른 콜백
 *
 */
const InputWithEmail = props => {
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(props.itemList[props.defaultIndex]);
	const [index, setIndex] = React.useState(props.defaultIndex);
	const [input, setInput] = React.useState(props.value || '');
	const inputRef = React.useRef();

	const onChange = txt => {
		setInput(txt);
		props.onChange(txt + '@' + selectedItem);
	};

	const onClear = () => {
		setInput(''); //email state를 null로 해주어야 borderColor가 GRAY30으로 반응한다
		props.onChange('');
	};

	const onSelectDropDown = (item, index) => {
		// console.log('onselectDropdown', e, i);
		setSelectedItem(item);
		setIndex(index);
		props.onSelectDropDown(item, index);
	};

	const validator = text => {
		return text.length > 0;
	};

	const onValid = isValid => {
		props.onValid(isValid);
	};

	return (
		<View style={{}}>
			{props.title != null ? (
				<View style={{flexDirection: 'row'}}>
					<Text style={[txt.noto24, {color: APRI10}]}>{props.title}</Text>
					<Text style={[txt.noto24, {color: RED10, marginLeft: 30 * DP}]}>{props.title_star ? '*' : ''}</Text>
				</View>
			) : (
				false
			)}
			{/* <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2 * DP, borderColor: input.length == 0 ? GRAY30 : APRI10}}> */}
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<Input24
					placeholder={props.placeholder}
					value={input}
					ref={inputRef}
					onChange={onChange}
					onClear={onClear}
					width={props.width || 240}
					validator={validator}
					onValid={onValid}
				/>
				<View style={{}}>
					<Text style={[txt.roboto24b, {lineHeight: 36 * DP}]}>@</Text>
				</View>
				<NormalDropDown menu={props.dropdownItems} width={254} defaultIndex={index} onSelect={onSelectDropDown} />
			</View>
		</View>
	);
};
InputWithEmail.defaultProps = {
	dropdownItems: ['naver.com', 'daum.net', 'nate.com'],
	itemList: ['naver.com', 'daum.net', 'nate.com'],
	placeholder: 'placeholder',
	defaultIndex: 0,
	value: '',
	title: '',
	title_star: false,
	onClear: e => {},
	onChange: e => {},
	onValid: e => {},
	onSelectDropDown: e => {},
};

export default InputWithEmail;
