import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import AniButton from 'Molecules/AniButton';
import ActionButton from 'Molecules/ActionButton';
import Dropdown from 'Molecules/Dropdown';
import { btn_w280, btn_w226 } from 'Atom/btn/btn_style';
import { APRI10, WHITE } from 'Root/config/color';
import DP from 'Root/config/dp';
import { Modal } from 'Component/modal/Modal';
import { txt } from 'Root/config/textstyle';
import { Meatball50_APRI10_Horizontal, Meatball50_GRAY20_Horizontal, Meatball50_GRAY20_Vertical, Meatball50_APRI10_Vertical } from 'Atom/icon';

/**
 *
 * @param {{btnTitle : string,
 * btnStyle : 'filled' | 'border' | 'noborder' | undefined,
 * btnLayout : '버튼의 레이아웃 ex)btn_w226' ,
 * disable : boolean,
 * titleFontStyle : number,
 * onOpen : Function,
 * onClose : Function,
 * onSelect : Function,
 * }} props
 */
export default MeatBallDropdown = props => {
    const onClose = () => {
        props.onClose();
        Modal.close();
    }
    return (
        <Dropdown
            // buttonComponent={<ActionButton {...props} initState={false} noStateChange />}
            buttonComponent={<MeatballButton />}
            dropdownList={
                <View style={{ backgroundColor: APRI10, borderRadius: 40 * DP, alignItems: 'center' }}>
                    <ActionButton {...props} initState noStateChange onClose={onClose} />
                    {props.menu.map((v, i) =>
                        <TouchableWithoutFeedback onPress={() => props.onSelect(v, i)} key={i}>
                            <View style={{ width: props.btnLayout.width, marginVertical: 15 * DP }}>
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

ProfileDropdown.defaultProps = {
    btnTitle: 'BTN_W654', //버튼의 제목
    disable: false, // 버튼탭 사용불가 상태 boolean
    btnLayout: btn_w226, // 버튼의 레이아웃(width, height, radius 등의 수치 결정)
    titleFontStyle: 24, // 버튼 title의 폰트 크기
    btnStyle: 'border', // 버튼스타일 filled border noBorder
    onOpen: e => console.log(e),
    onClose: e => console.log(e),
    onSelect: (v, i) => console.log(i + ':' + v)
};

const MeatballButton = props => {
    const [isOpen, setOpen] = React.useState(props.initState)
    const meatballClick = () => {
        setOpen(!isOpen);
    }



    return (
        <TouchableOpacity onPress={meatballClick}>
            {isOpen ?
                props.horizontal ? <Meatball50_APRI10_Horizontal /> : <Meatball50_APRI10_Vertical />
                : props.horizontal ? <Meatball50_GRAY20_Horizontal /> : <Meatball50_GRAY20_Vertical />

            }
        </TouchableOpacity>

    )

}

MeatballButton.defaultProps = {
    initState: false,

}