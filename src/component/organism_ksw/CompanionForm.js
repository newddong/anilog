import React from 'react';
import { Text, View } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { COMPANION_DURATION, COMPANION_STATUS, PET_AGE, PET_KIND } from 'Root/i18n/msg';
import NormalDropDown from '../molecules/NormalDropDown';
import { companionForm } from './style_organism';


/**
 *
 * @param {{
 * onSelectSpecies : void,
 * onSelectAge:void,
 * onSelectDuration :void,
 * onSelectStatus :void,
 * }} props
 */
export default CompanionForm = props => {

	//종 선택 콜백
	const onSelectSpecies = (v, i) => {
		props.onSelectSpecies(v, i)
	}

	//나이 선택 콜백
	const onSelectAge = (v, i) => {
		props.onSelectAge(v, i)

	}

	//반려생활 기간 콜백
	const onSelectDuration = (v, i) => {
		props.onSelectDuration(v, i)

	}

	//반려생활 상태 콜백
	const onSelectStatus = (v, i) => {
		props.onSelectStatus(v, i)

	}

	return (
		<View style={[companionForm.container]}>
			<View style={[companionForm.insideContainer]}>
				<View style={[companionForm.upperMenu]}>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text style={[txt.noto24, { color: GRAY10 }]}>종</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<NormalDropDown
								menu={PET_KIND}
								onSelect={(v, i) => onSelectSpecies(v, i)}
							/>
						</View>
					</View>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text style={[txt.noto24, { color: GRAY10 }]}>나이</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<NormalDropDown
								menu={PET_AGE}
								onSelect={(v, i) => onSelectAge(v, i)}
							/>
						</View>
					</View>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text style={[txt.noto24, { color: GRAY10 }]}>반려생활 기간</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<NormalDropDown
								menu={COMPANION_DURATION}
								onSelect={(v, i) => onSelectDuration(v, i)}
							/>
						</View>
					</View>
				</View>
				<View style={[companionForm.lowerMenu]}>
					<NormalDropDown
						menu={COMPANION_STATUS}
						onSelect={(v, i) => onSelectStatus(v, i)}
						width={654}
					/>
				</View>
			</View>
		</View>
	);
};

CompanionForm.defaultProps = {

}

// value: null,
// itemList: [1, 2, 3, 4], //DropDown될 리스트 목록
// defaultIndex: 0, // DropDown Default상태의 index
// width: 180, //Select+Text 부분의 width Default=180(5글자)
// onChange: e => console.log(e),
