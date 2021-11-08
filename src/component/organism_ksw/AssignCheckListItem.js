import React from 'react';
import {Text, View} from 'react-native';
import {APRI10, BLACK} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import CheckBox from '../molecules/CheckBox';
import {assignCheckListItem} from './style_organism';

export default AssignCheckListItem = props => {
	const [chekced, setChecked] = React.useState(false);
	const onCheck = e => {
		setChecked(!chekced);
		alert(!chekced);
	};
	return (
		<View style={[assignCheckListItem.container]}>
			<View style={[assignCheckListItem.check50]}>
				<CheckBox onCheck={e => onCheck(e)} value={chekced} />
			</View>
			<View style={[assignCheckListItem.textContainer]}>
				<Text style={[txt.noto24, {color: chekced ? APRI10 : BLACK}]}>{props.text}</Text>
			</View>
		</View>
	);
};

AssignCheckListItem.defaultProps = {
	text: 'Default Text',
};
