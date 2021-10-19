import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, Button } from 'react-native';
import DP from 'Screens/dp';
import svgwrapper, { SvgWrap } from 'Screens/svgwrapper';
import { Meatball50h } from 'Root/component/atom/icon';

export default Test = () => {


    return (
        <SafeAreaView>
            <View>
                {/* <SvgWrap style={{backgroundColor:'yellow'}}  svg={<Meatball50h fill='black'/>}/> */}
                <Meatball50h/>
            </View>
        </SafeAreaView>

    )

}