import meatball50h from './meatball50h.svg';
import React from 'react';
import DP from 'Screens/dp';

const makeSvg = (component, style, color) => {
    return (
        (props)=>React.createElement(component,{...style,...props,fill:color})
    );
}

const size50 = {width:50*DP,height:50*DP};

export const Meatball50h = makeSvg(meatball50h,size50,'red');