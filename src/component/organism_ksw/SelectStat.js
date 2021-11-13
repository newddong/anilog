import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';
import {txt} from 'Root/config/textstyle';
import {temp_style} from '../templete/style_templete';
import {selectStat} from './style_organism';

/**
 *
 * @param {{onSelectMode: function, onCancelSelectMode: '펑션', }} props
 */
export default SelectStat = props => {
	const [selectMode, setSelectMode] = React.useState(false);
	return (
		<View style={[selectStat.container]}>
			{/* 취소, 전체선택, 선택삭제 */}
			<View style={[temp_style.selectstat, selectStat.selectstat]}>
				{selectMode ? (
					<TouchableOpacity style={[temp_style.textBtn]} onPress={() => setSelectMode(!selectMode)}>
						<Text style={[txt.noto24, {alignSelf: 'flex-start'}]}>취소</Text>
						<Text>{props.headerText}</Text>
					</TouchableOpacity>
				) : null}
				{selectMode ? (
					<View style={[selectStat.rightContainer]}>
						<TouchableOpacity style={[temp_style.textBtn]}>
							<Text style={[txt.noto24]}>전체 선택</Text>
						</TouchableOpacity>
						<View style={[selectStat.vertical_stick]} />
						<TouchableOpacity style={[temp_style.textBtn]}>
							<Text style={[txt.noto24]}>선택 삭제</Text>
						</TouchableOpacity>
					</View>
				) : (
					<View style={[selectStat.rightContainer]}>
						<TouchableOpacity style={[temp_style.textBtn]} onPress={() => setSelectMode(!selectMode)}>
							<Text style={[txt.noto24]}>선택하기</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</View>
	);
};

SelectStat.propTypes = {
	onSelectMode: PropTypes.func.isRequired,
	onCancelSelectMode: PropTypes.func.isRequired,
};
SelectStat.defaultProps = {
	onSelectMode: e => console.log(e),
	onCancelSelectMode: e => console.log(e),
};
// media_uri: 'https://consecutionjiujitsu.com/wp-content/uploads/2017/04/default-image.jpg',
