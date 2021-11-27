import React from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {txt} from 'Root/config/textstyle';
import Animated, {useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, runOnJS} from 'react-native-reanimated';
import test from 'experiment/test';

export default Test = () => {
	// useEffect(() => {
	// 	try {
	// 	  setTimeout(() => {
	// 			SplashScreen.hide();
	// 	  }, 1000); /** 스플래시 시간 조절 (1초) **/
	// 	} catch(e) {
	// 	  console.warn('Error');
	// 	  console.warn(e);
	// 	}
	//  });
	const scroll = React.useRef();
	const translationY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler(event => {
		console.log(event);
		translationY.value = event.contentOffset.y;
	});
	const tt = () => {
		scroll.current.scrollTo({y: 0, animated: false});
	};

	const testArray = Array.from({length: 30}, (v, i) => i);

	return (
		<View style={{flex: 1, backgroundColor: '#0009', justifyContent: 'flex-end'}}>
			<View style={{height: 400, backgroundColor: '#fff', justifyContent: 'flex-end'}}>
				<View style={{height: 300, backgroundColor: '#fff', alignItems: 'center'}}>
					
					{/* <Animated.FlatList data={Array.from({length: 150}, (v, i) => i)} renderItem={render} /> */}
					<Animated.ScrollView
						ref={scroll}
						onScroll={scrollHandler}
						style={{height: 300, backgroundColor: 'green'}}
						contentContainerStyle={{backgroundColor: 'blue'}}>
						{/* {Array.from({length: 10}, (v, i) => i).map((v, i) => (
						<Testcomp index={v} key={i} t trans={translationY} layout={300}/>
					))}
					{Array.from({length: 10}, (v, i) => i).map((v, i) => (
						<Testcomp index={v} key={i} t trans={translationY} layout={300}/>
					))}
					{Array.from({length: 10}, (v, i) => i).map((v, i) => (
						<Testcomp index={v} key={i} t trans={translationY} layout={300}/>
					))} */}
						{testArray.map((v, i) => (
							<Testcomp index={v} key={i} t trans={translationY} layout={300} />
						))}
					</Animated.ScrollView>
					<View style={{height: 20, width: 20, backgroundColor: 'purple', position: 'absolute', top: 150,left:135}} />
				</View>
				<TouchableWithoutFeedback onPress={tt}>
					<View style={{height: 80, width: 80, backgroundColor: 'red', position: 'absolute'}}></View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

const Testcomp = props => {
	const [mark, setMark] = React.useState(false);
	const y = React.useRef(0);
	const [sy, setY] = React.useState(0);
	const [h, setH] = React.useState(0);
	const onLayout = e => {
		// console.log('test', e.nativeEvent);
		// y.current = e.nativeEvent.layout.y;
		setY(e.nativeEvent.layout.y);
		setH(e.nativeEvent.layout.height);
	};

	const selection = value => {
		// props.index===0&&console.log(props.t,props.index,'JS',value);

		(value < 6 && value > -6 && (setMark(true) || true)) || setMark(false);
	};
	React.useEffect(() => {
		// console.log('mark!','아이템',props.index)
	}, [mark]);
	const stylez = useAnimatedStyle(() => {
		let offset = sy - props.trans.value;
		let result = 90 - (180 / props.layout) * offset;
		// offset<400&&offset>200&&setMark(true);
		runOnJS(selection)(result);
		return {
			transform: [
				// {rotateX:`${props.trans.value - sy}deg`}
				{rotateX: `${result > 90 ? 90 : result < -90 ? -90 : result}deg`},
				{translateY: -result},
			],
		};
	});

	// console.log('render'+sy);
	return (
		<Animated.View style={[stylez, {backgroundColor: 'yellow', height: 20}]} onLayout={onLayout}>
			<Animated.Text style={[txt.noto30b, , {color: mark ? 'red' : 'black'}]}>
				{props.t && '아이템'}
				{props.index}
			</Animated.Text>
		</Animated.View>
	);
};
