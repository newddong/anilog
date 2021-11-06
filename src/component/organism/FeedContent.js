import React from 'react';
import {Text, View} from 'react-native';
import {organism_style} from './style_organism';
import UserLocationLabel from 'Root/component/molecules/UserLocationLabel';

export default FeedContent = props => {
	//Test용 데이터
	const data = {
		user_nickname: 'user_nickname',
		user_id: 'user_id',
		user_image: 'https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg',
		location: 'location',
		text_intro: 'Text/Intro',
	};

	return (
		<View style={organism_style.feedContent}>
			{/* UserLocationLabel */}
			<View style={[organism_style.userLocationLabel_view_feedContent]}>
				<View style={[organism_style.userLocationLabel_feedContent]}>
					<UserLocationLabel data={data} onLabelClick={e => alert(e)} />
				</View>
			</View>
		</View>
	);
};
