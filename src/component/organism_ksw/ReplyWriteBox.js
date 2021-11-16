import React from 'react';
import { TextInput, View, } from 'react-native';
import { Lock60_Border, Lock60_Filled, Photo60, Send60 } from '../atom/icon';
import { feedCommentList } from '../templete/style_templete';
/**
 *
 * @param {{
 * onLockBtnClick : void ,
 * onChangeReplyInput : void,
 * onAddPhoto : void,
 * onWrite : void,
 * privateComment : 'boolean / 비밀글 여부'
 * }} props
 */
export default ReplyWriteBox = props => {
    return (
        <View style={[feedCommentList.editComment]}>
            {props.privateComment
                ? <Lock60_Filled onPress={() => props.onLockBtnClick()} />
                : <Lock60_Border onPress={() => props.onLockBtnClick()} />}
            <Photo60 onPress={() => props.onAddPhoto()} />
            <TextInput style={[feedCommentList.replyTextInput]} onChangeText={text => props.onChangeReplyInput(text)} />
            <Send60 onPress={() => props.onWrite()} />
        </View>
    );
};

ReplyWriteBox.defaultProps = {
    onLockBtnClick: e => console.log(e),
    onAddPhoto: e => console.log(e),
    onChangeReplyInput: e => console.log(e),
    onWrite: e => console.log(e),
    privateComment: false

}