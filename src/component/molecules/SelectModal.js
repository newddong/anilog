import React from 'react';
import { View, Text, TouchableOpacity,SafeAreaView,StyleSheet } from 'react-native';
import DropdownSelect from 'Molecules/DropdownSelect';


import AniButton from 'Molecules/AniButton';
import { btn_w226 } from 'Atom/btn/btn_style';
import {WHITE,GRAY10} from 'Root/config/color';
import {txt} from 'Root/config/textstyle';
import DP from 'Root/config/dp';
import Modal from 'Component/modal/Modal';
import Input30 from './Input30';
import Input24 from './Input24';

/**
 * 선택창과 직접 입력창을 띄우는 모달 컴포넌트
 * 
 * @param {Object} props - props object 
 * @param {string} props.popUpMsg - 팝업 메시지
 * @param {string} props.noMsg - 취소 버튼 메시지
 * @param {string} props.yesMsg - 확인 버튼 메시지
 * @param {()=>void} props.onNo - 취소 버튼 콜백
 * @param {()=>void} props.onYes - 확인 버튼 콜백
 * 
 */
const SelectModal = props => {
    const initValue = props.selectItems?props.selectItems:'멍멍이';

    const [value, setValue] = React.useState(initValue);


    const pressYes = () => {
        props.onYes();
        Modal.close();

    }
    const pressNo = () => {
        props.onNo();
        Modal.close();
    }

    return (
        <View style={style.background}>
            <View style={[style.popUpWindow,style.shadow]}>
                <View style ={{flexDirection:'row',justifyContent:'space-between',marginBottom:40*DP}}>
                <DropdownSelect width={204} value={value} />
                {false?<DropdownSelect width={262} value={value} />:<Input24></Input24>}
                </View>
                <View style={style.buttonContainer}>
                    <AniButton btnLayout={btn_w226} btnStyle={'filled'} btnTitle={props.yesMsg} onPress={pressYes} />
                </View>

            </View>
        </View>
    );
}

SelectModal.defaultProps = {
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
        justifyContent:'center',
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

export default SelectModal;