import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import SelectedMedia410 from 'Root/component/molecules/selectedMedia410';
import SelectedMedia190 from 'Root/component/molecules/selectedMedia190';
import LocalMedia from 'Root/component/molecules/localMedia';
import { ScrollView } from 'react-native';
import CameraLink from 'Root/component/molecules/cameraLink';
export default SelectedMediaTest = () => {

    const mediaInfo = {
        img_uri : 'https://image.fmkorea.com/files/attach/new/20201207/3842645/2930567375/3244995220/a1088d8425a7870a66d4503b07c83b48.jpg',
        isVideo : true,
        duration : "03:10"
    }
    const photoInfo = {
        img_uri : 'https://image.fmkorea.com/files/attach/new/20201207/3842645/2930567375/3244995220/a1088d8425a7870a66d4503b07c83b48.jpg',
        isVideo : false,
        duration : "03:10"
    }
	return (
		<ScrollView>
            <Text style={{backgroundColor:'blue', color:'white'}}> SelectedMedia410 </Text>
			<View>
				<SelectedMedia410
					uri={'https://image.fmkorea.com/files/attach/new/20201207/3842645/2930567375/3244995220/a1088d8425a7870a66d4503b07c83b48.jpg'}
                    onDelete={()=> alert("삭제시도")}
				/>
			</View>
            <Text style={{backgroundColor:'blue', color:'white'}}> SelectedMedia190 </Text>
            <View>
				<SelectedMedia190
					uri={'https://image.fmkorea.com/files/attach/new/20201207/3842645/2930567375/3244995220/a1088d8425a7870a66d4503b07c83b48.jpg'}
                    onDelete={()=> alert("삭제시도")}
				/>
			</View>

            {/* Local */}
            {/* Photo Thumnail */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia - Photo Thumbnail </Text>
            <View>
				<LocalMedia
                    mediaInfo={photoInfo}
                    onSelect={ () => alert(mediaInfo.img_uri)}
				/>
			</View>
            {/* Photo 1 selected */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia - Photo - selected 1 photo </Text>
            <View>
				<LocalMedia
                    mediaInfo={photoInfo}
                    isSingleSelection={true}
                    onSelect={ () => alert(mediaInfo.img_uri)}
				/>
			</View>
            {/* Photo multiple selected */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia - PHoto - selected 5 photos  </Text>
            <View>
				<LocalMedia
                    mediaInfo={photoInfo}
                    index={5}
                    onSelect={ () => alert(mediaInfo.img_uri)}
				/>
			</View>
            {/* isVideo=true Thumbnail */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia186 - Video(Thumbnail)  </Text>
            <View>
				<LocalMedia
                    mediaInfo={mediaInfo}
                    onSelect={ () => alert(mediaInfo.img_uri)}
				/>
			</View>
            {/* isVideo True 1 video Selected */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia186 - selected 1 video  </Text>
            <View>
				<LocalMedia
                    mediaInfo={mediaInfo}
                    isSingleSelection={true}
                    onSelect={ () => alert(mediaInfo.img_uri)}
				/>
			</View>
            {/* isVideo True multiple selected */}
            <Text style={{backgroundColor:'blue', color:'white'}}> LocalMedia186 - Video(Thumbnail)  </Text>
            <View>
				<LocalMedia
                    mediaInfo={mediaInfo}
                    onSelect={ () => alert("Media Clicked")}
                    index={5}
				/>
			</View>
            <Text style={{backgroundColor:'blue', color:'white'}}>CameraLink </Text>
            <View>
				<CameraLink onClick={ ()=> alert("Onclick")}/>
			</View>
            
		</ScrollView>
	);
};
