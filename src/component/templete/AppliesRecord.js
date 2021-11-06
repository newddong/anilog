import React from 'react';
import {Text, View} from 'react-native';
import {NextMark} from '../atom/icon';
import {appliesRecord, login_style, temp_style} from './style_templete';

// 각각 뷰에 컴포넌트 삽입시 style의 첫번째 index 삭제할 것. 두번째 index는 상.하 간격 style이라서 이 컴포넌트에만 해당 됨.
//ex) 변경 전: <View style={[btn_style.btn_w654, findAccount_style.btn_w654]}>   변경 후:  <View style={[findAccount_style.btn_w654]}>

export default AppliesRecord = props => {
	return (
		<View style={[login_style.wrp_main, appliesRecord.container]}>
			<View style={[appliesRecord.record]}>
				{/* (O)AnimalNeedHelp */}
				<View style={[appliesRecord.animalNeedHelp.container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.title]}>
							<Text>Title</Text>
						</View>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>
							<Text>더보기 </Text>
							<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
								<NextMark />
							</View>
						</View>
					</View>
					<View style={[temp_style.animalNeedHelp]}>
						<Text>(O)AnimalNeedHelp</Text>
					</View>
				</View>
				{/* (O)AnimalNeedHelp */}
				<View style={[appliesRecord.animalNeedHelp.container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.title]}>
							<Text>Title</Text>
						</View>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>
							<Text>더보기 </Text>
							<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
								<NextMonthBtn />
							</View>
						</View>
					</View>
					<View style={[temp_style.animalNeedHelp]}>
						<Text>(O)AnimalNeedHelp</Text>
					</View>
				</View>
				{/* (O)ShelterList */}
				<View style={[appliesRecord.shelterList.container]}>
					<View style={[appliesRecord.animalNeedHelp.headerContainer]}>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.title]}>
							<Text>Title</Text>
						</View>
						<View style={[appliesRecord.animalNeedHelp.headerContainer.moreTxt]}>
							<Text>더보기 </Text>
							<View style={[appliesRecord.animalNeedHelp.headerContainer.moreBtn]}>
								<NextMonthBtn />
							</View>
						</View>
					</View>
					<View style={[temp_style.shelterList]}>
						<Text>(O)ShelterList</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
