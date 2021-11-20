import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Modal} from 'Component/modal/Modal';


export default Dropdown = props => {
    const container = React.useRef();
	const [toggle,setToggle] = React.useState(false);
    const onPressOverride = () => {
		console.log('override!');
        setToggle(!toggle);
        // Modal.popOneBtn('모달','오',()=>{Modal.close()})
        container.current.measure((fx,fy,width,height,px,py)=>{
            Modal.popSelect(<View style={{position:'absolute',width:100,height:100,top:py,left:px,backgroundColor:'blue'}}/>);
        })
		props.buttonComponent.props.onPress();
	};
	const button = React.cloneElement(props.buttonComponent, {...props.buttonComponent.props, onPress: onPressOverride});

	return (
		<View ref={ref=>container.current=ref} 
        onLayout={(e)=>{
            // container.current.measure((fx, fy, width, height, px, py)=>{
                // console.log('Component width is: ' + width);
				// console.log('Component height is: ' + height);
				// console.log('X offset to frame: ' + fx);
				// console.log('Y offset to frame: ' + fy);
				// console.log('X offset to page: ' + px);
				// console.log('Y offset to page: ' + py);
            // })
        }
    }>
			{/* {props.buttonComponent} */}
			{button}
		</View>
	);
};

DropdownSelect.defaultProps = {};

const style = StyleSheet.create({
	default: {
		backgroundColor: 'red',
	},
});
