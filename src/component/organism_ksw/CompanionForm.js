import React from 'react';
import {Text, View} from 'react-native';
import DropdownSelect from '../molecules/DropdownSelect';
import {companionForm} from './style_organism';

export default CompanionForm = props => {
	// 품종, 나이, 반려동물 기간 항목들에 들어갈 배열정보는 고정
	// props.data.breed , props.data.age, props.data.duration에는 각각 해당 데이터와 일치하는 index가 담김
	// 예)한 반려동물은 품종이 index 0(개냥이), 나이가 index 1(10세이상), 키운 기간 index 2(15년이상)
	const testBreed = ['개냥이', '고양이', '트리케라톱스'];
	const testAge = ['15세 이상', '10세 이상', '5세 이상'];
	const testDuration = ['1년 이상', '5년 이상', '15년 이상'];

	return (
		<View style={[companionForm.container]}>
			<View style={[companionForm.insideContainer]}>
				<View style={[companionForm.upperMenu]}>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text>종</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<DropdownSelect itemList={testBreed} defaultIndex={props.data.breed} />
						</View>
					</View>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text>나이</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<DropdownSelect itemList={testAge} defaultIndex={props.data.age} />
						</View>
					</View>
					<View style={[companionForm.inputItem]}>
						<View style={[companionForm.fieldName]}>
							<Text>반려생활 기간</Text>
						</View>
						<View style={[companionForm.dropDownSelect]}>
							<DropdownSelect itemList={testDuration} defaultIndex={props.data.duration} />
						</View>
					</View>
				</View>
				<View style={[companionForm.lowerMenu]}>
					<DropdownSelect itemList={['무지개 다리를 건넜어요']} width={634} />
				</View>
			</View>
		</View>
	);
};

// value: null,
// itemList: [1, 2, 3, 4], //DropDown될 리스트 목록
// defaultIndex: 0, // DropDown Default상태의 index
// width: 180, //Select+Text 부분의 width Default=180(5글자)
// onChange: e => console.log(e),
