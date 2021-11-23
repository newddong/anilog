import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CompanionForm from './CompanionForm';
import { companionFormList } from './style_organism';


/**
 *
 * @param {{
 * onSelectSpecies : void,
 * onSelectAge:void,
 * onSelectDuration :void,
 * onSelectStatus :void,
 * onDelete : void,
 * }} props
 */
export default CompanionFormList = props => {

	const [companionList, setCompanionList] = React.useState([])
	console.log('temp', props.tempData)

	React.useEffect(() => {
		props.items.length == 0 ? setCompanionList(1) : setCompanionList(props.items)
	}, [props.items])

	const renderItem = (item, index) => {
		return (
			<View style={[companionFormList.companionFormContainer]}>
				<CompanionForm
					data={item}
					onSelectSpecies={(v, i) => props.onSelectSpecies(v, i, index)}
					onSelectAge={(v, i) => props.onSelectAge(v, i, index)}
					onSelectDuration={(v, i) => props.onSelectDuration(v, i, index)}
					onSelectStatus={(v, i) => props.onSelectStatus(v, i, index)}
					onDelete={() => props.onDelete(index)}
				/>
			</View>
		);
	};

	return (
		<View style={[companionFormList.container]}>
			<FlatList data={companionList} renderItem={({ item, index }) => renderItem(item, index)} />
		</View>
	);
};

CompanionFormList.defaultProps = {
	items: [],
	onSelectSpecies: e => console.log(e),
	onSelectAge: e => console.log(e),
	onSelectDuration: e => console.log(e),
	onSelectStatus: e => console.log(e),
	onDelete: e => console.log(e)
}
