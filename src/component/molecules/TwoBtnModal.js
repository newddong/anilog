import React from 'react';
import { View, Text, TouchableOpacity,SafeAreaView,StyleSheet } from 'react-native';
import AniButton from 'Molecules/AniButton';
import { btn_w226 } from 'Atom/btn/btn_style';
import {WHITE,GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import {Modal} from 'Component/modal/Modal';

/**
 *
 * @param {{popUpMsg : string,
 * noMsg : string,
 * yesMsg : string,
 * onNo : Function,
 * onYes : Function
 * }} props
 * 
 * @param {object} ls
 */


/**
 * @param {object} props
 */
export default TwoBtnModal = props => {
    const pressYes = () => {
        props.onYes();
    }
    const pressNo = () => {
        props.onNo();
    }

    return (
        <View style={style.background}>
            <View style={[style.popUpWindow,style.shadow]}>
                <Text style={[txt.noto28,style.msg]}>{props.popUpMsg}</Text>
                <View style={style.buttonContainer}>
                    <AniButton btnLayout={btn_w226} btnStyle={'border'} btnTitle={props.noMsg} onPress={pressNo} />
                    <AniButton btnLayout={btn_w226} btnStyle={'filled'} btnTitle={props.yesMsg} onPress={pressYes} />
                </View>

            </View>
        </View>
    );
}

TwoBtnModal.defaultProps = {
    popUpMsg: 'popUp',
    noMsg: 'cancel',
    yesMsg: 'ok',
    onNo: () => { alert('NO') },
    onYes: () => { alert('YES') },
}

const style = StyleSheet.create({
    background : {
        backgroundColor:'#0009',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    popUpWindow : {
        width:614*DP,
        backgroundColor:WHITE,
        paddingTop:60*DP,
        paddingBottom:52*DP,
        paddingHorizontal:64*DP,
        borderRadius:40*DP,
    },
    msg:{
        marginBottom:30*DP,
        color:GRAY10,
        textAlign:'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    shadow:{
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