import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {APRI10, GRAY10, GRAY20, GRAY30} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import { btn_w226 } from '../atom/btn/btn_style';


export default AniButton = props => {
	const btnTheme = () => {
        //btnTheme이 shadow일 경우 Button의 View에 아래의 style을 추가한다
		if(props.btnTheme=='shadow') {
            return {
                shadowColor: '#000000',
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                shadowOffset: {
                    width: 1*DP,
                    height: 2*DP,
                },
                elevation: 2,
            };
        }
		}
	
	const btnTxtColor = () => {
		//txt Color의 종류는 3가지 - white, APRI10, GRAY20
		if (props.btnTheme == 'gray' && props.btnStyle == 'border') {
			return GRAY20;
		}
		if (props.disable || props.btnStyle == 'filled') {
			return 'white';
		}

		return APRI10;
	};

    
    const border = () => {
        //border은 btnStyle이 border인 경우 모두 발생 
        //default는 APRI10, Gray의 경우 GRAY20
        if (props.btnStyle=='border' && props.btnTheme == 'gray') {
            return {borderColor: GRAY20, borderWidth: 4 * DP};
        } else if(props.btnStyle=='border'){
            return {borderColor: APRI10, borderWidth: 4 * DP};
        }
    };

    
	const btnStyle = () => {
        //filled인 경우 APRI10
        //Border 혹은 noBorder일 경우 white
        //Disable값이 true인 경우 GRAY30
		if(props.btnStyle=='filled'){
            return {
                backgroundColor: APRI10,
            }
        } else if(props.disable){
            return{
                backgroundColor: GRAY30,
            }
        } else {
            return{
                backgroundColor: 'white'
            }
        }
	};
	
    //클릭 이벤트
	const handlePress = e => {
		props.onPress();
	};
	const lineHeight = () => {
		//Border가 설정되는 disable=true , btnStyle='border'의 경우 border의 width만큼 lineheight에서 빼준다
		if (props.btnStyle == 'border') {
			return props.btnLayout.height - 4 * DP;
		} else {
			return props.btnLayout.height;
		}
	};
	return (
		<TouchableOpacity onPress={handlePress}>
            {/* 각각 필요한 스타일들(배경색, 테두리, 그림자효과)을 함수에서 얻어와 더해갑니다 */}
			<View style={[props.btnLayout, btnTheme(), border() ,btnStyle(), {justifyContent: 'center',}]}>
				<Text
					style={[
						txt.noto24b,
						{
							fontSize: props.titleFontStyle * DP,
							color: btnTxtColor(), //TXT_COLOR가 다양하므로 함수로 분기처리
							textAlign: 'center',
							includeFontPadding:false,
							lineHeight: lineHeight() , 
						},
					]}>
					{props.btnTitle}
				</Text>
			</View>
		</TouchableOpacity>
	);
};


AniButton.defaultProps={
	btnTitle:'title', //버튼의 제목
	btnTheme:'shadow',// btnTheme - ’shadow’, ‘noShadow’, ‘gray’에서 결정
	btnStyle:'filled',// btnStyle - ‘filled’, ‘border’, ‘noBorder’ 에서 결정
	disable:false, // disable - 기본값은 false true일 경우 버튼 탭을 할수없도록 하고 표시를 바
	titleFontStyle:24*DP, // titleFontStyle - title의 폰트 크기
	btnLayout:btn_w226,// btnLayout - 버튼의 레이아웃(width, height, borderRadius를 결정)
	onPress:{} // 버튼을 탭했을때 발생하는 콜백
}