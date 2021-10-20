import React from 'react';
import {SafetyAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import PetLabel from 'Root/component/molecules/petLabel';
import  UserDescriptionLabel from 'Root/component/molecules/userDescriptionLabel';
import  UserLocationLabel from 'Root/component/molecules/userLocationLabel';
import  UserLocationTimeLabel  from 'Root/component/molecules/userLocationTimeLabel';
import  UserPetLabel  from 'Root/component/molecules/userPetLabel';
import  UserTimeLabel  from 'Root/component/molecules/userTimeLabel';
import HashLabelWithoutPost from 'Root/component/molecules/hashLabel';
import { APRI10, BLACK, GRAY10, GRAY20 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
const LabelTest = () => {
	const userInfo = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
	};
	return (
		<ScrollView>
            <Text style={txt.roboto28b}> roboto28b </Text>
            <Text style={txt.noto24}> noto24 </Text>
            <Text style={{backgroundColor:'blue', color:'white'}} >UserLocationLabel </Text>
			<UserLocationLabel userInfo={userInfo}  onLabelClick={()=> alert("onLabelClick")} nameColor={APRI10} />
			<UserLocationLabel userInfo={userInfo}  onLabelClick={()=> alert("onLabelClick")} nameColor={BLACK} />
            
            <Text style={{backgroundColor:'blue', color:'white'}} >UserDescriptionLabel </Text>
            <UserDescriptionLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} status={true}/>
            <UserDescriptionLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} status={false}/>
            
            <Text style={{backgroundColor:'blue', color:'white'}} >UserPetLabel </Text>
            <UserPetLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")}/>

            <Text style={{backgroundColor:'blue', color:'white'}}>UserLocationTimeLabel</Text>
            <UserLocationTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={APRI10} time={'time'}  />
            <UserLocationTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={BLACK} time={'time'} />

            <Text style={{backgroundColor:'blue', color:'white'}}>UserTimeLabel</Text>
            <UserTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={GRAY10} time={'time'} />
            <UserTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={APRI10} time={'time'} />

            <Text style={{backgroundColor:'blue', color:'white'}}>PetLabel</Text>
            <PetLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} protected={true} />
            <PetLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} protected={false}/>


            <Text style={txt.roboto28b}> roboto28b </Text>
            <Text style={txt.noto24}> KEYWORD - noto24 </Text>
            <Text style={txt.noto30}> KEYWORD  - noto30 </Text>
            <Text style={{backgroundColor:'blue', color:'white'}}>HashLabel</Text>

            {/* HashLabel :  keyword = Keyword Text  ,  kwywordBold = True일 경우 KeywordText Bold처리 , count = count Text,  Null일 경우 출력안됨  */}
            <HashLabel keyword={"#KEYWORD"}  keywordBold={true} />
            <HashLabel keyword={"#KEYWORDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"} keywordBold={true} count={"Count한 게시물ddddddddddddddddddddddddddd"}  />
            <HashLabel keyword={"#KEYWORDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"} keywordBold={false} count={"Count한 게시물dddddddddddddddddddddddddddd"}  />
		</ScrollView>
	);
};
export default LabelTest;
