import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import AniButton from 'Molecules/AniButton';
import { btn_w226 } from 'Atom/btn/btn_style';
import { WHITE, GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import { Modal } from 'Component/modal/Modal';

/**
 *
 * @param {{popUpMsg : string,
 * okMsg : string,
 * onOk : Function,
 * }} props
 */
export default NoBtnModal = props => {


    return (
        <View style={style.background}>
            <View style={[style.popUpWindow, style.shadow]}>
                <Text style={[txt.noto28, style.msg]}>{props.popUpMsg}</Text>
            </View>
        </View>
    );
}

NoBtnModal.defaultProps = {
    popUpMsg: 'popUp',
    noMsg: 'cancel',
    yesMsg: 'ok',
    onNo: () => { alert('NO') },
    onYes: () => { alert('YES') },
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#0009',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popUpWindow: {
        width: 614 * DP,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 * DP,
        minHeight: 170 * DP,
    },
    msg: {
        // marginBottom: 30 * DP,
        // marginTop: 30 * DP,
        textAlignVertical: 'center',
        color: GRAY10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowOffset: {
            width: 1 * DP,
            height: 2 * DP,
        },
        elevation: 2,
    }
})