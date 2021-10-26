import React from 'react';
import {txt} from 'Root/config/textstyle';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import DP from 'Root/config/dp';
import {APRI10, GRAY40, YELL20} from 'Root/config/color';
export default OnOffSwitch = props => {
	const [btnStatus, setBtnStatus] = React.useState(false);

	return (
		<View>
			{btnStatus ? (
				<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)}>
					<View
						style={{
							width: 84 * DP,
							height: 36 * DP,
							flexDirection: 'row',
							borderRadius: 18 * DP,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: APRI10,
						}}>
						<Text style={[txt.roboto20, {color: 'white'}]}> On </Text>
						<View style={{width: 28 * DP, height: 28 * DP, borderRadius: 30, backgroundColor: 'white'}} />
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={() => setBtnStatus(!btnStatus)}>
					<View
						style={{
							width: 84 * DP,
							height: 36 * DP,
							flexDirection: 'row',
							borderRadius: 18 * DP,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: GRAY40,
						}}>
						<View style={{width: 28 * DP, height: 28 * DP, borderRadius: 30, backgroundColor: 'white'}} />
						<Text style={[txt.roboto20, {color: 'white'}]}> Off </Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
	);
};
OnOffSwitch.defaultProps = {
	default: 0,
	onSwtichOn: {},
	onSwtichOff: {},
};
