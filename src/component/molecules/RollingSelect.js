import React from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback, ScrollView,Platform} from 'react-native';
import {txt} from 'Root/config/textstyle';
import Animated, {useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, runOnJS, ceil} from 'react-native-reanimated';
import DP from 'Root/config/dp';
import Modal from 'Component/modal/Modal';
import { APRI10 } from 'Root/config/color';



/**
 * 회전 선택창 모달 컴포넌트
 * 
 * @param {Object} props - props object 
 * @param {Array.<string>} props.items - 선택 항목의 배열
 * @param {string} props.title - 선택창 제목
 * @param {(item:string)=>void} props.onSelect - 선택 버튼 콜백
 * @param {()=>void} props.onCancel - 취소 버튼 콜백
 * 
 */
const RollingSelect = props => {
	
	
	const scrollRef = React.useRef();
	const scrollOffsetY = useSharedValue(0);
	// const [itemCountInWindow, setItemCountInWindow] = React.useState(0); 
	const selectedItem = React.useRef();
	const [scrollOffset, setScrollOffset] = React.useState({x:0,y:0});
	
	const items = props.items;
	const itemheight = Math.ceil(50*DP);
	const layoutHeight = Math.ceil(370*DP);

	const [scrollList, setScrollList] = React.useState([]);

	const scrollHandler = useAnimatedScrollHandler(
		event => {
		// console.log('scrollhandler ',event);
		scrollOffsetY.value = event.contentOffset.y;
		}
	);
	// const scrollHandler = event => {
	// 	console.log('scrollhandler', event);

	// }
	
	const onScrollEnd = e => {
		// console.log('onscrollend  ', e.nativeEvent);
		let index = Math.round(e.nativeEvent.contentOffset.y / itemheight);
		
		
		if(index<items.length-1){
			index = index + items.length;
			scrollRef.current.scrollTo({x:0,y:itemheight*index,animated:false});
			// setScrollOffset({x:0,y:itemheight*index});
		}
		

		if(index>items.length*2-1){
			index = index - items.length;
			scrollRef.current.scrollTo({x:0,y:itemheight*index,animated:false});
			// setScrollOffset({x:0,y:itemheight*index});
		}

		// setScrollOffset({x:0,y:itemheight*index});
		scrollRef.current.scrollTo({x:0,y:itemheight*index,animated:true});

	};
	const onItemSelection = e => {
		selectedItem.current = e;
	}
	const onSelect = () => {
		props.onSelect(selectedItem.current);
		Modal.close();
	}

	const onCancel = () => {
		props.onCancel();
		Modal.close();
	}

	const onLayout = e => {
		// console.log('Parent onLayout',Platform.OS,e.nativeEvent);
		const showItemNumber = Math.floor(e.nativeEvent.layout.height/itemheight);
		
		let list = items;
		if(showItemNumber > items.length){
			let length = 0;
			let count = Math.floor(1+showItemNumber/items.length)
			// console.log('count',count);
			for(let i=0;i<Math.floor(1+showItemNumber/items.length)*3;i++){
				// console.log('d',i);
				list=list.concat(items);
			}
			// console.log(list.length);
			// setItemCountInWindow(length);
			setScrollList(list);
		}else{
			// setItemCountInWindow(items.length);
			setScrollList(items.concat(items).concat(items));
		}
		setScrollOffset({x:0,y:itemheight*Math.floor(items.length+showItemNumber/2)});
	}

	return (
		<View style={{flex: 1, backgroundColor: '#0009', justifyContent: 'flex-end'}}>
			<View style={{height: 470*DP, backgroundColor: '#fff', justifyContent: 'flex-end'}}>
				<View style={{width:'100%',flex:1,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
					<TouchableWithoutFeedback onPress={onCancel}>
					<Text style={[txt.noto26b,{color:APRI10}]}>취소</Text>
					</TouchableWithoutFeedback>
					<Text style={txt.noto32b}>{props.title}</Text>
					<TouchableWithoutFeedback onPress={onSelect}>
					<Text style={[txt.noto26b,{color:APRI10}]}>선택</Text>
					</TouchableWithoutFeedback>
				</View>
				<View style={{height: layoutHeight, backgroundColor: '#fff', alignItems: 'center'}} onLayout={onLayout}>
					<Animated.ScrollView
						showsVerticalScrollIndicator={false}
						ref={scrollRef}
						contentOffset={scrollOffset}
						scrollEventThrottle={5}
						onMomentumScrollEnd={onScrollEnd}
						onScroll={scrollHandler}
						style={{height: layoutHeight,width:'100%'}}
						>
						{scrollList.map((item, index) => (
							<ScrollItem index={index} key={index} scrolloffset={scrollOffsetY} layoutheight={layoutHeight} itemheight={itemheight} item={item} onItemSelection={onItemSelection}/>
						))}
					</Animated.ScrollView>

					{/* <View style={{height: 60*DP, width: '100%', borderColor:'black',borderTopWidth:2*DP,borderBottomWidth:2*DP, position: 'absolute', top: 143*DP,left:0}} /> */}
					<View style={{height: 2*DP, width: '100%',backgroundColor:'#999999',position: 'absolute', top: 143*DP,left:0}} />
					<View style={{height: 2*DP, width: '100%',backgroundColor:'#999999',position: 'absolute', top: 203*DP,left:0}} />
				</View>
			</View>
		</View>
	);
};

RollingSelect.defaultProps = {
	title:'제목',
	items:['항목1','항목2','항목3','항목4','항목5'],
	onSelect:e=>{console.log('onSelect',e)},
	onCancel:e=>{console.log('onCancel',e)}
}


/**
 * @typedef {import('react-native-reanimated').useSharedValue} SharedValue
 * 
 */


/**
 * 회전 선택창 항목 컴포넌트
 * 
 * @param {Object} props - props object 
 * @param {string} props.item - 항목 내용
 * @param {number} props.layoutheight - 레이아웃(스크롤 전체)의 높이
 * @param {SharedValue} props.scrolloffset - 스크롤이 움직인 오프셋 값(스크롤 핸들러에서 받아온 값)
 * @param {(item:string)=>void} props.onItemSelection - 항목이 하이라이트(선택) 됐을때 콜백
 * 
 */
const ScrollItem = props => {
	
	const [isSelect, setSelect] = React.useState(false);
	const selectItem = React.useRef('기본값');
	const [itemOffset, setItemOffset] = React.useState(0);
	
	const onLayout = e => {
		console.log('Child onLayout',Platform.OS,e.nativeEvent);
		setItemOffset(e.nativeEvent.layout.y);
	};

	const itemSelection = value => {
		if(value<15&&value>-15){
			setSelect(true);
			props.onItemSelection&&props.onItemSelection(props.item);
		}else{
			setSelect(false);
		}
	};
	
	const itemStyle = useAnimatedStyle(() => {
		/** 스크롤 창(보여지는부분) 맨 위에서부터 항목까지의 거리 */
		let offsetInLayout = itemOffset - props.scrolloffset.value;
		/** 항목이 회전할 정도 */
		let degCalc = 80 - (180 / props.layoutheight) * offsetInLayout;
		if(degCalc<15&&degCalc>-15){
			selectItem.current = props.item;
		}
		runOnJS(itemSelection)(degCalc);
		return {
			transform: [
				{rotateX: `${(degCalc >= 90 ? 89.9 : degCalc <= -90 ? -89.9 : degCalc)*1}deg`},
				{translateY: -degCalc/4*1},
			],
		};
	});
	return (
		<Animated.View style={[itemStyle,{justifyContent:'center', height: props.itemheight,width:'100%',alignItems:'center'}]} onLayout={onLayout}>
			<Animated.Text style={[txt.noto28b,{color: isSelect ? 'red' : 'black', includeFontPadding:false}]}>
				{props.item}
			</Animated.Text>
		</Animated.View>
	);
};

export default RollingSelect;