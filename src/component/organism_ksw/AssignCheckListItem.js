import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { APRI10, BLACK, GRAY20 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import CheckBox from '../molecules/CheckBox';
import { assignCheckListItem } from './style_organism';

/**
 *
 *@param {{
 *data: 'Object / text, detail 필요',
 *onCheck : void,
 *state : 'boolean / 체크박스 상태'
 *onPressDetail : void
 * }} props
 */
export default AssignCheckListItem = props => {
	const [chekced, setChecked] = React.useState(props.state);
	const onCheck = e => {
		setChecked(e);
		props.onCheck(e);
	};
	return (
		<View style={[assignCheckListItem.container]}>
			<View style={[assignCheckListItem.check50]}>
				<CheckBox onCheck={e => onCheck(e)} state={props.data.state} />
			</View>
			<View style={[assignCheckListItem.textContainer]}>
				<Text style={[txt.noto24, { color: chekced ? APRI10 : BLACK }]}>{props.data.text}</Text>
			</View>
			{props.data.detail ? (
				<TouchableOpacity onPress={() => props.onPressDetail()} style={[assignCheckListItem.detailText]}>
					<Text style={[txt.roboto24b, { color: GRAY20, textDecorationLine: 'underline' }]}>보기</Text>
				</TouchableOpacity>
			) : null}
		</View>
	);
};

AssignCheckListItem.defaultProps = {
	state: false,
	data: {
		text: 'Defatult',
		detail: false,
	},
	onPressDetail: e => console.log(e),
	onCheck: e => console.log(e),
};
