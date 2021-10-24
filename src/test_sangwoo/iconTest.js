import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import {
	Heart30Border,
	Heart30Filled,
	Paw30_APRI10,
	Paw30_YELL20,
	Paw30_Mixed,
	Private30,
	Public30,
	Cat38,
	Dog38,
	Cross46,
	Shelter46,
	FavoriteTag46Filled,
	FavoriteTag48Filled,
	FavoriteTag48Border,
	Paw46,
	Setting46,
	Search48,
	AlarmBadger48,
	RadioChecked48,
	RadioUnchecked48,
	Public48,
	Private48,
	Like48Border,
	Like48Filled,
	Comment48Border,
	Heart48Filled,
	Paw48Yell20,
	Paw48Mixed,
	House48,
	Paw48_APRI10,
	Telephone48,
	Check48,
	Rect48,
	Rect48Border,
	Calendar48Filled,
	Share48Filled,
	Share48Border,
	Calendar48Border,
	Cross48,
	Person48,
	Phone48,
	TextBalloon48,
	Male48,
	Female48,
	VideoPlay48,
	Bracket48,
	Star50Border,
	Star50Filled,
	Meatball50h_GRAY20,
	Meatball50h_APRI10,
	Meatball50v_GRAY20,
	Meatball50v_APRI10,
	Hash50,
	Rect50Border,
	Check50,
	Heart52Border,
	Heart52,
	Eye52_APRI10,
	Eye52_GRAY20,
	Cross52,
	Location54_APRI10,
	Location54_GRAY30,
	Camera54,
	PawBorder54,
	Location54Filled,
	SirenRed58,
	SirenWhite58,
	ImageList48,
	Cancel48,
	Star60Border,
	Star60Filled,
	Photo60,
	Send60,
	Send60Big,
	Lock60Border,
	Lock60Filled,
	Dog62,
	Cat62,
	Rabbit62,
	Paw62_APRI10,
	Paw62_YELL20,
	Paw62_Mixed,
	Cancel62,
	Private62,
	Public62,
	AddItem64,
	Tag70,
	Social_kakao72,
	Clip72,
	Email72,
	FlashOff72,
	Rotate72,
	FlashOn72,
	AddItem92,
	Write94,
	FloatAddPet_126x92,
	FloatAddArticle_126x92,
	FeedTabBorder,
	AnimalSavingTabBorder,
	CommunityTabBorder,
	MyTabBorder,
	FeedTabFilled,
	AnimalSavingTabFilled,
	CommunityTabFilled,
	MyTabFilled,
} from 'Root/component/atom/icon/index';
import DP from 'Screens/dp';

export default IconTest = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<ScrollView>
				<TouchableOpacity onPress={() => navigation.navigate('ImageStyle')}>
					<View style={{backgroundColor:'yellow'}}><Text>Imagesetyle</Text></View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Label')}>
				<View style={{backgroundColor:'powderblue'}}><Text>Label</Text></View>
				</TouchableOpacity>
				<View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 0}}>
					{/* <SvgWrap style={{backgroundColor:'yellow'}}  svg={<Meatball50h fill='black'/>}/> */}
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 30, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 30 Size Icon : </Text>
						<View style={{width: 30 * DP, height: 30 * DP, backgroundColor: 'red'}} />
						<Heart30Filled />
						<Heart30Border />
						<Paw30_APRI10 />
						<Paw30_YELL20 />
						<Paw30_Mixed />
						<Private30 />
						<Public30 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 38, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 38 Size Icon : </Text>
						<View style={{width: 38 * DP, height: 38 * DP, backgroundColor: 'red'}} />
						<Cat38 />
						<Dog38 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 46, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 46 Size Icon : </Text>
						<View style={{width: 46 * DP, height: 46 * DP, backgroundColor: 'red'}} />
						<Cross46 />
						<Shelter46 />
						<FavoriteTag46Filled />
						<Paw46 />
						<Setting46 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 48, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 48 Size Icon : </Text>
						<View style={{width: 48 * DP, height: 48 * DP, backgroundColor: 'red'}} />
						<Search48 />
						<AlarmBadger48 />
						<RadioChecked48 />
						<RadioUnchecked48 />
						<Public48 />
						<Private48 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 48, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 48 Size Icon : </Text>
						<View style={{width: 48 * DP, height: 48 * DP, backgroundColor: 'red'}} />
						<Like48Border />
						<Like48Filled />
						<Comment48Border />
						<Heart48Filled />
						<Paw48Yell20 />
						<Paw48Mixed />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 48, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 48 Size Icon : </Text>
						<View style={{width: 48 * DP, height: 48 * DP, backgroundColor: 'red'}} />
						<House48 />
						<Paw48_APRI10 />
						<Telephone48 />
						<Check48 />
						<Rect48 />
						<Rect48Border />
						<Calendar48Filled />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 48, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 48 Size Icon : </Text>
						<View style={{width: 48 * DP, height: 48 * DP, backgroundColor: 'red'}} />
						<Share48Filled />
						<Share48Border />
						<FavoriteTag48Filled />
						<FavoriteTag48Border />
						<Calendar48Border />
						{/* <Cross46/>  */}
						<Cross48 />
						<Person48 />
						<Phone48 />
						<TextBalloon48 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 48, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 48 Size Icon : </Text>

						<View style={{width: 48 * DP, height: 48 * DP, backgroundColor: 'red'}} />
						<Male48 />
						<Female48 />
						{/* 파란 배경은 확인용입니다*/}
						<View style={{backgroundColor: 'blue', flexDirection: 'row'}}>
							<VideoPlay48 />
							<ImageList48 />
							<Cancel48 />
						</View>
						<Bracket48 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 50, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 50 Size Icon : </Text>
						<View style={{width: 50 * DP, height: 50 * DP, backgroundColor: 'red'}} />
						<Star50Border />
						<Star50Filled />
						<Meatball50h_GRAY20 />
						<Meatball50v_GRAY20 />
						<Hash50 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 50, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 50 Size Icon : </Text>
						<View style={{width: 50 * DP, height: 50 * DP, backgroundColor: 'red'}} />
						<Rect50Border />
						<Check50 />

						<Meatball50h_APRI10 />
						<Meatball50v_APRI10 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 52, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 52 Size Icon : </Text>
						<View style={{width: 52 * DP, height: 52 * DP, backgroundColor: 'red'}} />
						<Heart52Border />
						<Heart52 />
						<Eye52_APRI10 />
						<Eye52_GRAY20 />
						<Cross52 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 54, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 54 Size Icon : </Text>
						<View style={{width: 54 * DP, height: 54 * DP, backgroundColor: 'red'}} />
						<Location54_APRI10 />
						<Location54_GRAY30 />
						<Camera54 />
						<PawBorder54 />
						<Location54Filled />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 58, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 58 Size Icon : </Text>
						<View style={{width: 58 * DP, height: 58 * DP, backgroundColor: 'red'}} />
						<SirenRed58 />
						<View style={{backgroundColor: 'blue', flexDirection: 'row'}}>
							<SirenWhite58 />
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 60, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 60 Siz </Text>
						<View style={{width: 60 * DP, height: 60 * DP, backgroundColor: 'red'}} />
						<Star60Border />
						<Star60Filled />
						<Photo60 />
						<Send60 />
						<Send60Big />

						<Lock60Border />
						<Lock60Filled />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 62, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 62 Size Icon : </Text>
						<View style={{width: 62 * DP, height: 62 * DP, backgroundColor: 'red'}} />
						<Dog62 />
						<Cat62 />
						<Rabbit62 />
						<Paw62_APRI10 />
						<Paw62_YELL20 />
						<Paw62_Mixed />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 62, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 62 Size Icon : </Text>
						<View style={{width: 62 * DP, height: 62 * DP, backgroundColor: 'red'}} />
						{/* 화면 분간용*/}
						<View style={{backgroundColor: 'blue', flexDirection: 'row'}}>
							<Cancel62 />
						</View>
						<Private62 />
						<Public62 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 64, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 64 Size Icon : </Text>
						<View style={{width: 64 * DP, height: 64 * DP, backgroundColor: 'red'}} />

						<AddItem64 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 70, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 70 Size Icon : </Text>
						<View style={{width: 70 * DP, height: 70 * DP, backgroundColor: 'red'}} />

						<Tag70 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 72, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 72 Size Icon : </Text>
						<View style={{width: 72 * DP, height: 72 * DP, backgroundColor: 'red'}} />
						<Social_kakao72 />
						<Clip72 />
						<Email72 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 72, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 72 Size Icon : </Text>
						<View style={{width: 72 * DP, height: 72 * DP, backgroundColor: 'red'}} />
						{/* 화면 분간용*/}
						<View style={{backgroundColor: 'blue', flexDirection: 'row'}}>
							<FlashOff72 />
							<Rotate72 />
							<FlashOn72 />
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 92, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 92 Size Icon : </Text>
						<View style={{width: 92 * DP, height: 92 * DP, backgroundColor: 'red'}} />

						{/* 화면 분간용*/}
						<View style={{backgroundColor: 'blue', flexDirection: 'row'}}>
							<AddItem92 />
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 100, height: 94, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}> 94 Size Icon : </Text>
						<View style={{width: 94 * DP, height: 94 * DP, backgroundColor: 'red'}} />
						<Write94 />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 126, height: 92, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}>
							{' '}
							126 * 92 Size Icon :{' '}
						</Text>
						<View style={{width: 126 * DP, height: 92 * DP, backgroundColor: 'red'}} />
						<FloatAddPet_126x92 />
						<FloatAddArticle_126x92 />
					</View>
					<View style={{backgroundColor: 'yellow', height: 12, width: 400}} />
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 126, height: 30, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}>
							{' '}
							Not yet classified:{' '}
						</Text>
						<FeedTabBorder />
						<AnimalSavingTabBorder />
						<CommunityTabBorder />
						<MyTabBorder />
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{width: 126, height: 30, marginHorizontal: 10, textAlign: 'center', textAlignVertical: 'center'}}>
							{' '}
							Not yet classified:{' '}
						</Text>
						<FeedTabFilled />
						<AnimalSavingTabFilled />
						<CommunityTabFilled />
						<MyTabFilled />
					</View>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('ImageStyle')}>
					<Button title={'ImageStyle ==>'} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Label')}>
					<Button title={'Label ==>'} />
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};
