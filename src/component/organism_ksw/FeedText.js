import { parse } from 'qs';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { GRAY10 } from 'Root/config/color';
import { txt } from 'Root/config/textstyle';
import { feedText, organism_style } from './style_organism';

export default FeedText = props => {
    const origin_text = props.text
    // const sliced_text = ['우리 #둥이는', ' 언제나 창가에 앉아있끼를', '좋아하는 것이 아닌가 호텔 캘리포니아']

    const sliced_text = ['우리 #둥이는 뚠뚠 espors', 'Cant Be the real Sports', 'Why do you so sarcastic to me these days']
    React.useEffect(() => {

        const char = []
        char.length = origin_text.length
        for (let i = 0; i < char.length; i++) {
            char[i] = origin_text.charAt(i)
        }
        console.log(char)
        const textLength = parseInt(props.text.length / 20)
        const sliced = []
        sliced.length = textLength
        for (let i = 0; i < textLength; i++) {
            sliced[i] = char.slice(i, 20)
        }
        console.log(sliced)
    })


    const renderItem = (item, index) => {
        const splitedArr = item.split(" ");
        let idx = 0;
        const valueInfos = splitedArr.map(str => {
            const idxArr = [idx, idx + str.length - 1];
            idx += str.length + 1;
            return {
                str,
                isHT: str.startsWith("#"),
                idxArr,
            };
        })
        return (
            <View style={{ flexDirection: 'row' }}>
                {valueInfos.map((v, idx) => {
                    const isLast = idx === valueInfos.length - 1;
                    return <Text
                        key={idx}
                        style={[txt.noto28, v.isHT ? { color: 'blue', height: 40 * DP, textDecorationLine: 'underline' } : { height: 40 * DP }]}
                        onPress={() => v.isHT ? props.onHashClick(v.str) : null}
                    >
                        {v.str}
                        {!isLast && <Text style={{ backgroundColor: 'transparent' }}>{" "}</Text>}
                    </Text>
                })}
            </View>
        )
    }

    const getFeedText = item => {
        console.log(item)

        if (item.length == 0) {
            return null
        } else {
            const splitedArr = item.split(" ");
            let idx = 0;
            const valueInfos = splitedArr.map(str => {
                const idxArr = [idx, idx + str.length - 1];
                idx += str.length + 1;
                return {
                    str,
                    isHT: str.startsWith("#"),
                    idxArr,
                };
            })
            return (
                valueInfos.map((v, idx) => {
                    const [firstIdx, lastIdx] = v.idxArr;
                    let value = origin_text.slice(firstIdx, lastIdx + 1)
                    const isLast = idx === valueInfos.length - 1;

                    if (v.isHT) {
                        return (
                            <Text key={idx} style={[txt.noto28, { color: 'blue', height: 40 * DP }]} onPress={() => props.onHashClick(value)}>
                                {value}
                                {!isLast && <Text style={{ backgroundColor: 'transparent' }}>{" "}</Text>}
                            </Text>
                        );
                    }
                    return (
                        <Text key={idx} style={[txt.noto28, { height: 40 * DP, }]}
                        >
                            {value}
                            {!isLast && <Text>{" "}</Text>}
                        </Text>
                    );
                })
            )
        }
    }

    return (
        <View style={feedText.container}>
            {/* <Text style={[txt.noto28, { color: GRAY10 }]}>{props.text}</Text> */}
            <FlatList data={sliced_text} renderItem={({ item, index }) => renderItem(item, index)} />
        </View>
    );
};

FeedText.defaultProps = {
    text: "피드 텍스트 #피드 ",
    onHashClick: e => console.log(e)
}
