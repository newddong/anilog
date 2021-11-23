import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import Dropdown from 'Molecules/Dropdown';
import { btn_w280, btn_w226 } from 'Atom/btn/btn_style';
import { APRI10, WHITE } from 'Root/config/color';
import DP from 'Root/config/dp';
import { Modal } from 'Component/modal/Modal';
import { txt } from 'Root/config/textstyle';
import MeatballButton from 'Molecules/MeatballButton';

/**
 *
 * @param {{
 * menu : Array,
 * disable : boolean,
 * onOpen : Function,
 * onClose : Function,
 * onSelect : Function,
 * }} props
 */
export default MeatBallDropdown = props => {
    const onOpen = () => {
        props.onOpen();
    }

    const onClose = () => {
        props.onClose();
        Modal.close();
    }
    return (
        <Dropdown
            // buttonComponent={<ActionButton {...props} initState={false} noStateChange />}
            alignBottom
            alignRight
            buttonComponent={<MeatballButton {...props} initState={false}/>}
            dropdownList={
                <View style={{ backgroundColor: APRI10, borderRadius: 40 * DP, alignItems: 'center' }}>
                    {props.menu.map((v, i) =>
                        <TouchableWithoutFeedback onPress={() => props.onSelect(v, i)} key={i}>
                            <View style={{ width: 100*DP, marginVertical: 15 * DP }}>
                                <Text style={[
                                    txt.noto24b,
                                    {
                                        fontSize: props.titleFontStyle * DP,
                                        textAlign: 'center',
                                        color: WHITE,
                                    }
                                ]}>
                                    {v}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    }
                </View>
            }
        />
    );
};

MeatBallDropdown.defaultProps = {
    disable: false, // 버튼탭 사용불가 상태 boolean
    titleFontStyle: 24, // 버튼 title의 폰트 크기
    btnStyle: 'border', // 버튼스타일 filled border noBorder
    onOpen: e => console.log('MeatBallDropdown onOpen Default'),
    onClose: e => console.log('MeatBallDropdown onClose Default'),
    onSelect: (v, i) => console.log(i + ':' + v),
    menu:[],
    horizontal:true
};
