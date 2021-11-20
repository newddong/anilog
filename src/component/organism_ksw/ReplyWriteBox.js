import React, { useRef } from 'react';
import { Image, Text, TextInput, View, } from 'react-native';
import { Lock60_Border, Lock60_Filled, Photo60, Send60 } from '../atom/icon';
import { styles } from '../atom/image/imageStyle';
import SelectedMedia from '../molecules/SelectedMedia';
import { feedCommentList } from '../templete/style_templete';
/**
 * @param {{
 * onLockBtnClick : void ,
 * onChangeReplyInput : void,
 * onAddPhoto : void,
 * onWrite : void,
 * privateComment : 'boolean / 비밀글 여부',
 * isPhotoAdded : 'boolean / 사진 추가 상태 T/F'
 * }} props
 */
export default ReplyWriteBox = props => {



    const inputRef = useRef()

    const onWrite = () => {
        inputRef.current.clear()
    }

    const onDeleteImage = () => {
        props.onDeleteImage()
    }

    return (
        <View style={[feedCommentList.editComment, { alignItems: 'flex-end', }]}>
            {props.photo.length > 0
                ?
                <View style={[styles.img_square_round_606,]}>
                    {/* <Image source={{ uri: props.photo[0] }} style={styles.img_square_round_606} /> */}
                    <SelectedMedia media_uri={props.photo[0]} layout={styles.img_square_round_606} onDelete={onDeleteImage} />
                </View>
                : null
            }
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {props.privateComment
                    ? <Lock60_Filled onPress={() => props.onLockBtnClick()} />
                    : <Lock60_Border onPress={() => props.onLockBtnClick()} />}
                <Photo60 onPress={() => props.onAddPhoto()} />
                <TextInput style={[feedCommentList.replyTextInput]} onChangeText={text => props.onChangeReplyInput(text)} ref={inputRef} />
                <Send60 onPress={onWrite} />
            </View>
        </View>
    );
};

ReplyWriteBox.defaultProps = {
    onLockBtnClick: e => console.log(e), // 비밀 댓글 클릭
    onAddPhoto: e => console.log(e), // 사진추가하기 버튼 클릭
    onChangeReplyInput: e => console.log(e), // 리플 Input 변경
    onWrite: e => console.log(e), // 보내기 클릭
    privateComment: false, // 비밀 댓글 상태 여부
    photo: [],

}