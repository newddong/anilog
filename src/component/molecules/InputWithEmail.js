import React from 'react';
import {txt} from 'Root/config/textstyle';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import DP from 'Root/config/dp';
import {Arrow_Down_GRAY20, Arrow_Up_GRAY20, Cross52} from '../atom/icon';
import {APRI10, GRAY30, RED10} from 'Root/config/color';
import NormalDropDown from './NormalDropDown';
import Input24 from './Input24';
import {EMAIL_DOMAIN} from 'Root/i18n/msg';
import EmialDropDown from './EmailDropDown';

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
 * @param {()=>void} props.onSelectDirectInput - 직접 입력 선택 콜백
 * @param {(isValid:boolean)=>void} props.onValid - 택스트 입력이 유효할 경우 반환(현재는 입력길이가 1이상일 경우 유효함)
 * @param {(item:object, index:number)=>void} props.onSelectDropDown - 이메일 도메인에서 선택값 오브젝트와 인덱스 반환
 * @param {(value:string)=>void} props.onChange - InputWithEmail값의 변동에 따른 콜백
 *
 */
const InputWithEmail = props => {
	// Dropdown에서 현재 선택된 항목 State, 처음 Mount시 itemList[defaultIndex]를 반환
	const [selectedItem, setSelectedItem] = React.useState(EMAIL_DOMAIN[props.defaultIndex || 0]);
	const [index, setIndex] = React.useState();
	const [input, setInput] = React.useState(props.value || '');
	const [domainDirect, setDomainDirect] = React.useState('');
	const [directInputMode, setDirectInputMode] = React.useState(false);
	const [email, setEmail] = React.useState(props.value);

	React.useEffect(() => {
		// console.log('Email 합치기 :', email);
		props.onChange(email);
	}, [email]);

	React.useEffect(() => {
		//상세정보인 경우 DB의 값을 가져와서 드롭다운을 해당 DB도메인주소와 맞춰준다
		if (props.defaultValue) {
			const findIndex = EMAIL_DOMAIN.findIndex(e => e == props.defaultValue.split('@')[1]);
			setIndex(findIndex);
			setSelectedItem(EMAIL_DOMAIN[findIndex]);
		}
	}, [props.defaultValue]);

	const onChange = text => {
		setInput(text);
		directInputMode ? setEmail(text + '@' + domainDirect) : setEmail(text + '@' + selectedItem);
	};

	const onSelectDropDown = (item, index) => {
		// console.log('onselectDropdown', item, index);
		if (item == '직접입력') {
			setDomainDirect('');
			setDirectInputMode(true);
			setEmail(input);
			props.onSelectDropDown(item, index);
		} else {
			setDirectInputMode(false);
			setSelectedItem(item);
			setIndex(index);
			setEmail(input + '@' + selectedItem);
			props.onSelectDropDown(item, index);
		}
	};

	const onDirectInput = text => {
		setDomainDirect(text);
		setEmail(input + '@' + text);
	};

	const validator = text => {
		return text.length > 0;
	};

	const onValid = isValid => {
		props.onValid(isValid);
	};

	return (
		<View style={{}}>
			{props.title ? (
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
					value={props.defaultValue ? props.defaultValue.split('@')[0] : input}
					onChange={onChange}
					showCrossMark={false}
					maxlength={30}
					// onClear={onClear}
					width={props.width || 240}
					validator={validator}
					onValid={onValid}
				/>
				<View style={{}}>
					<Text style={[txt.roboto24b, {lineHeight: 36 * DP}]}>@</Text>
				</View>
				<EmialDropDown menu={EMAIL_DOMAIN} width={254} defaultIndex={index} onChangeDomain={onDirectInput} onSelect={onSelectDropDown} />
			</View>
		</View>
	);
};
InputWithEmail.defaultProps = {
	placeholder: 'placeholder',
	value: '',
	title_star: false,
	onClear: e => {},
	onChange: e => {},
	onValid: e => {},
	onSelectDropDown: e => {},
};

export default InputWithEmail;
