import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ProfileImageSelect from 'Root/component/molecules/ProfileImageSelect';
import {ScrollView} from 'react-native';
import ProfileImageLarge160 from 'Root/component/molecules/ProfileImageLarge160';
import ProfileImageLarge194 from 'Root/component/molecules/ProfileImageLarge194';
import ProfileImageMedium120 from 'Root/component/molecules/ProfileImageMedium120';
import ProfileImageMedium140 from 'Root/component/molecules/ProfileImageMedium140';
import ProfileImageSmall from 'Root/component/molecules/ProfileImageSmall';
import PetImageLabel from 'Root/component/molecules/PetImageLabel';
export default ProfileImageSelectTest = props => {
	return (
		<ScrollView>
			{/* Profile Image */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImage - img uri 有 </Text>

			<ProfileImageSelect
				defaultImageUri={'https://colorate.azurewebsites.net/SwatchColor/DBDBDB'}
				selectedImageUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				onClick={() => alert('클릭시 이미지 선택화면으로 이동')}
			/>
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImage - img uri null </Text>
			<ProfileImageSelect
				onClick={() => alert('클릭시 이미지 선택화면으로 이동')}
				defaultImageUri={'https://colorate.azurewebsites.net/SwatchColor/DBDBDB'}
			/>

			{/* Profile Image Label Large 160 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImage Label Large </Text>
			<ProfileImageLarge160
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
				/>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
				/>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
				/>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
				/>
				<ProfileImageLarge160
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
				/>
			</View>
			{/* Profile Image Label Large 194 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImage Label Large </Text>
			<ProfileImageLarge194
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
				/>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
				/>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
				/>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
				/>
				<ProfileImageLarge194
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
				/>
			</View>

			{/*Profile Image Medium 120 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImageMedium120 </Text>
			<ProfileImageMedium120
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
				/>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
				/>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
				/>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
				/>
				<ProfileImageMedium120
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
				/>
			</View>

			{/*Profile Image Medium 140 */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImageMedium140 </Text>
			<ProfileImageMedium140
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
				/>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
				/>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
				/>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
				/>
				<ProfileImageMedium140
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
				/>
			</View>

            {/*Profile Image Small  */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImageSmall 94 </Text>
			<ProfileImageSmall
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
                size={94}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
                    size={94}

				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
                    size={94}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
                    size={94}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
                    size={94}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
                    size={94}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
                    size={94}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
                    size={94}
                    userType={'hash'}
				/>
			</View>

            {/*Profile Image Small  */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> ProfileImageSmall 46 </Text>
			<ProfileImageSmall
				imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
				userType={'user'}
                size={46}
			/>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
                    size={46}

				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'normal'}
                    size={46}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'protected'}
                    size={46}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'pet'}
					petStatus={'adopted'}
                    size={46}
				/>
			</View>
			<View style={{flexDirection: 'row'}}>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'public'}
                    size={46}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					userType={'shelter'}
					shelterType={'private'}
                    size={46}
				/>
				<ProfileImageSmall
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
                    size={46}
                    userType={'hash'}

				/>
			</View>


            {/* Pet Image Label  */}
			<Text style={{backgroundColor: 'blue', color: 'white'}}> Pet Image Label </Text>
			<View style={{flexDirection: 'row'}}>
				<PetImageLabel
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}

				/>
				<PetImageLabel
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					petStatus={'normal'}
				/>
				<PetImageLabel
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					petStatus={'protected'}
				/>
				<PetImageLabel
					imgUri={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxxkWTv71fEvE9HvXaCLjexYJhc_Ij_w7JA&usqp=CAU'}
					petStatus={'adopted'}
				/>
			</View>


			
		</ScrollView>
	);
};
