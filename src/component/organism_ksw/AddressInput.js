import React from 'react';
import {Text, View} from 'react-native';
import {GRAY10} from 'Root/config/color';
import DP from 'Root/config/dp';
import {txt} from 'Root/config/textstyle';
import {btn_w226} from '../atom/btn/btn_style';
import AniButton from '../molecules/AniButton';
import Input24 from '../molecules/Input24';
import {btn_style, temp_style} from '../templete/style_templete';
import {addressInput} from './style_organism';

/**
 *
 * 
 * 
 * @param {object} props
 * @param {string} props.title - 제목
 * @param {string} props.titleColor - 제목 색상
 * @param {string} props.addressDefault - 기존에 작성된 주소 정보
 * @param {string} props.detailAddressDefault - 기존에 작성된 세부 주소 정보
 * @param {(address:string)=>void} props.onChangeAddress - 주소 정보가 변동될때 콜백(주소를 파라메터로 넘김)
 * @param {(detailAddress:string)=>void} props.onChangeDeatilAddress - 세부 주소가 변동될때 콜백(세부 주소를 파라메터로 넘김)
 * @param {()=>void} props.onPressSearchAddr - 주소찾기를 눌렸을때 발생생
 */


const AddressInput = props => {
	//주소 값 변경 콜백
	const onChangeAddress = addr => {
		// console.log(addr);
		props.onChangeAddress(addr);
	};

	//세부 주소 값 변경 콜백
	const onChangeDetailAddress = addr => {
		// console.log(addr);
		props.onChangeDeatilAddress(addr);
	};

	//주소 찾기 클릭
	const onPressSearchAddr = () => {
		// console.log('onPressSearchAddr');
		props.onPressSearchAddr();
	};

	return (
		<View style={[addressInput.container]}>
			<View style={[addressInput.upperContainer]}>
				<View style={[addressInput.input24A]}>
					<Input24
						width={388}
						placeholder={'주소 찾기를 눌러주세요'}
						onChange={onChangeAddress}
						title={props.title}
						descriptionType={'star'}
						showCrossMark={false}
						defaultValue={props.addressDefault}
					/>
				</View>
				<View style={[btn_style.btn_w226, addressInput.btn_w226]}>
					<AniButton btnTitle={'주소 찾기'} btnLayout={btn_w226} btnTheme={'shadow'} onPress={onPressSearchAddr} />
				</View>
			</View>
			<View style={[temp_style.inputNoTitle, addressInput.inputNoTitle]}>
				<Input24
					width={654}
					defaultValue={props.detailAddressDefault}
					placeholder={'세부 주소를 입력해 주세요.'}
					onChange={onChangeDetailAddress}
				/>
			</View>
		</View>
	);
};

AddressInput.defaultProps = {
	title: '나의 장소',
	titleColor: GRAY10,
	addressDefault: null,
	detailAddressDefault: null,
	onChangeDeatilAddress: e => console.log(e),
	onChangeAddress: e => console.log(e),
	onPressSearchAddr: e => console.log(e),
};


export default AddressInput;