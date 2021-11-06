import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, Text, View} from 'react-native';
import {Check50, Cross46} from '../atom/icon';
import UserDescriptionLabel from '../molecules/UserDescriptionLabel';
import {controllableAccount, organism_style, temp_text} from './style_organism';

export default ControllableAccount = props => {
	const [checked, setChecked] = React.useState(false);

	return (
		<View style={controllableAccount.container}>
			{checked ? (
				<View style={[controllableAccount.check50]}>
					<Check50 />
				</View>
			) : (
				false
			)}
			<View
				style={[
					organism_style.userDescriptionLabel,
					checked ? controllableAccount.userDescriptionLabel_checked : controllableAccount.userDescriptionLabel,
				]}>
				<UserDescriptionLabel data={props.data} />
			</View>
			<View style={[controllableAccount.btn_w108_controllableAccount]}>
				<Text style={[temp_text.small]}>(A)Btn_w108</Text>
			</View>
			{checked ? (
				false
			) : (
				<View style={[organism_style.cross46, controllableAccount.cross46]}>
					<Cross46 />
				</View>
			)}
		</View>
	);
};
