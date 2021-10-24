import React from 'react';
import {ScrollView, Text} from 'react-native';
import PetLabel from 'Root/component/molecules/petLabel';
import UserDescriptionLabel from 'Root/component/molecules/UserDescriptionLabel';
import UserLocationLabel from 'Root/component/molecules/UserLocationLabel';
import UserLocationTimeLabel from 'Root/component/molecules/UserLocationTimeLabel';
import UserPetLabel from 'Root/component/molecules/UserPetLabel';
import UserTimeLabel from 'Root/component/molecules/UserTimeLabel';
import HashLabel from 'Root/component/molecules/HashLabel';
import {APRI10, BLACK, GRAY10, GRAY20} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import ShelterLabel from 'Root/component/molecules/ShelterLabel';
const LabelTest = () => {
	//Test용 데이터
	const data = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
		owner : 'OwnerName',
		text_intro : 'Text/Intro',
	};
	const _userTimeLabel_dummy = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		time : 'time'
	}
	const shelter_dummy1 = {
		user_id: 'user_id',
		shelter_name : 'shelter_name',
		shelter_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
		shelter_type : 'public'
	};
	const shelter_dummy2 = {
		user_id: 'user_id',
		shelter_name : 'shelter_name',
		shelter_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
		shelter_type : 'private'
	};
	//Test용 데이터
	return (
		<ScrollView>
			<Text style={txt.roboto28b}> roboto28b </Text>
			<Text style={txt.noto24}> noto24 </Text>
			<Text style={{backgroundColor: 'blue', color: 'white'}}>UserLocationLabel </Text>
			<UserLocationLabel data={data} onLabelClick={(e) => alert(e)} nameColor={APRI10} />
			<UserLocationLabel data={data} onLabelClick={(e) => alert(e)} nameColor={BLACK} />

			<Text style={{backgroundColor: 'blue', color: 'white'}}>UserDescriptionLabel </Text>
			<UserDescriptionLabel data={data} onLabelClick={(e) => alert(e)} status={true} />
			<UserDescriptionLabel data={data} onLabelClick={(e) => alert(e)} status={false} />

			<Text style={{backgroundColor: 'blue', color: 'white'}}>UserPetLabel </Text>
			<UserPetLabel data={data} onLabelClick={(e) => alert(e)} />

			<Text style={{backgroundColor: 'blue', color: 'white'}}>UserLocationTimeLabel</Text>
			<UserLocationTimeLabel data={data} onLabelClick={(e) => alert(e)} nameColor={APRI10} time={'time'} />
			<UserLocationTimeLabel data={data} onLabelClick={(e) => alert(e)} nameColor={BLACK} time={'time'} />

			<Text style={{backgroundColor: 'blue', color: 'white'}}>UserTimeLabel</Text>
			<UserTimeLabel data={_userTimeLabel_dummy} onLabelClick={(e) => alert(e)} nameColor={GRAY10}  />
			<UserTimeLabel data={_userTimeLabel_dummy} onLabelClick={(e) => alert(e)} nameColor={APRI10}  />

			<Text style={{backgroundColor: 'blue', color: 'white'}}>PetLabel</Text>
			<PetLabel data={data} onLabelClick={(e) => alert(e)} protected={true} />
			<PetLabel data={data} onLabelClick={(e) => alert(e)} protected={false} />

			<Text style={txt.roboto28b}> roboto28b </Text>
			<Text style={txt.noto24}> KEYWORD - noto24 </Text>
			<Text style={txt.noto30}> KEYWORD - noto30 </Text>
			<Text style={{backgroundColor: 'blue', color: 'white'}}>HashLabel</Text>

			{/* HashLabel :  keyword = Keyword Text  ,  kwywordBold = True일 경우 KeywordText Bold처리 , count = count Text,  Null일 경우 출력안됨  */}
			<HashLabel keyword={'#KEYWORD'} keywordBold={true} />
			<HashLabel keyword={'#KEYWORD'} keywordBold={true} count={'Count한 게시물'} />
			<HashLabel keyword={'#KEYWORD'} keywordBold={false} count={'Count한 게시물'} />

			{/* ShelterLabel의 경우 private - True => [사] 글자 아이콘 / False => [공] 글자 아이콘 */}
			{/* nameColor=Shelter_name 칼라가 바뀐다 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}>ShelterLAbel</Text>
			<ShelterLabel data={shelter_dummy2} onLabelClick={(e) => alert(e)} private={true} />
			<ShelterLabel data={shelter_dummy2} nameColor={APRI10} onLabelClick={(e) => alert(e)} private={true} />
			<ShelterLabel data={shelter_dummy1} onLabelClick={(e) => alert(e)} private={false} />
			<ShelterLabel data={shelter_dummy1} nameColor={APRI10} donLabelClick={(e) => alert(e)} private={false} />
		</ScrollView>
	);
};
export default LabelTest;
