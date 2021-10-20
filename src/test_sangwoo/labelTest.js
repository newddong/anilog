import React from 'react';
import {SafetyAreaView, StyleSheet, Text, View} from 'react-native';
import { UserDescriptionLabel } from 'Root/component/molecules/userDescriptionLabel';
import { UserLocationLabel } from 'Root/component/molecules/userLocationLabel';
import { UserLocationTimeLabel } from 'Root/component/molecules/userLocationTimeLabel';
import { UserPetLabel } from 'Root/component/molecules/userPetLabel';
import { UserTimeLabel } from 'Root/component/molecules/userTimeLabel';
import { APRI10, BLACK } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
const LabelTest = () => {
	const userInfo = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
	};
	return (
		<View>
            <Text style={txt.roboto28b}> roboto28b </Text>
            <Text style={txt.noto24}> noto24 </Text>
			<UserLocationLabel userInfo={userInfo}  onLabelClick={()=> alert("onLabelClick")} nameColor={APRI10} />
			<UserLocationLabel userInfo={userInfo}  onLabelClick={()=> alert("onLabelClick")} nameColor={BLACK} />
            <UserDescriptionLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} status={true}/>
            <UserDescriptionLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} status={false}/>
            <UserPetLabel userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")}/>
            <UserLocationTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={APRI10} time={'time'}  />
            <UserLocationTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={BLACK} time={'time'} />
            <UserTimeLabel  userInfo={userInfo} onLabelClick={()=> alert("onLabelClick")} nameColor={BLACK} time={'time'} />
		</View>
	);
};
export default LabelTest;
