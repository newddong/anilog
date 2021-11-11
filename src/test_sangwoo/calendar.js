import React from 'react';

import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {styles} from './calendarStyle';
import moment from 'moment';
import Modal from 'react-native-modal';
import DP from 'Root/config/dp';
import {day} from 'Root/i18n/msg';
import {txt} from 'Root/config/textstyle';
import {APRI10, GRAY20, GRAY30, WHITE} from 'Root/config/color';
import {NextMark, PreviousMonthBtn} from 'Root/component/atom/icon';

const Calendar = props => {
	const [getMoment, setMoment] = React.useState(moment()); //현재 시각 정보
	// 현재달일 경우 저번달로 넘어가지 못하게 하는 모달

	const today = getMoment;
	const firstWeek = today.clone().startOf('month').week(); //현재 날짜 정보가 가지는 month의 첫째 주 정보를 가져온다
	const lastWeek =
		today.clone().endOf('month').week() === 1 //현재날짜 정보가 가지는 month의 마지막 주 정보를 가져온다
			? 53 //12월 마지막째 주가 그 해의 52번째 주를 넘겨서 1로 되었을 때는 이를 53으로 인식시켜야한다.
			: today.clone().endOf('month').week();

	const calendarArr = () => {
		//달력 각 Booth에 들어갈 날짜정보
		let result = [];
		let week = firstWeek;
		for (week; week <= lastWeek; week++) {
			//첫째주부터 마지막째 주까지 반복해서 7개씩 흩뿌린다
			result = result.concat(
				//날짜 정보를 하나씩 추가해간다.
				<View key={week} style={styles.dateContainer}>
					{Array(7) //today를 기준으로 조회한 이번 달의 첫째 주부터 마지막 주까지 Array
						.fill(0)
						.map((data, index) => {
							//result에는 해당 날짜를 하나씩 붙여간다.
							let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성 - index값에  day정보
							// console.log("days console : "+days.date())
							if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
								//정확히 오늘 날짜와 일치하는 date
								return (
									<TouchableOpacity onPress={() => props.selectDate(days.format('yyyy.MM.DD'))} key={index} style={styles.today}>
										<View style={{width: 66 * DP, height: 66 * DP, backgroundColor: APRI10, borderRadius: 20}}>
											<Text style={[txt.roboto28b, {color: WHITE, alignSelf: 'center', lineHeight: 66 * DP}]}>{days.format('D')}</Text>
										</View>
									</TouchableOpacity>
								);
							} else if (days.format('MM') !== today.format('MM')) {
								//이번달이 아니지만 달력에 출력된 dates
								return (
									<View key={index} style={styles.days_this_month}>
										<Text style={[txt.roboto28, {color: GRAY30}]}>{days.format('D')}</Text>
									</View>
								);
							} else {
								//이외의 이번달 날짜들은 하얀색으로 출력
								return (
									<TouchableOpacity onPress={() => props.selectDate(days.format('yyyy.MM.DD'))} key={index} style={styles.days_this_month}>
										<Text style={[txt.roboto28, {}]}>{days.format('D')}</Text>
									</TouchableOpacity>
								);
							}
						})}
				</View>,
			);
		}
		return result;
	};

	return (
		//달력 모달 View 부분
		<Modal isVisible={props.modalOn} avoidKeyboard={true} transparent={true} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<View style={styles.outside}>
				<View style={styles.headerCont}>
					<TouchableOpacity
						style={styles.changeMonthBtn}
						onPress={() => {
							setMoment(getMoment.clone().subtract(1, 'month'));
						}}>
						<View style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 * DP}}>
							<Text style={[txt.roboto32b, {color: GRAY20, marginRight: 12 * DP}]}>{getMoment.clone().subtract(1, 'month').month() + 1}</Text>
							<PreviousMonthBtn />
						</View>
					</TouchableOpacity>
					<View style={{marginTop: 40 * DP, marginHorizontal: 40 * DP}}>
						<Text style={[txt.roboto32b, {alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}]}>{today.format('MM')}</Text>
						<Text style={[txt.roboto24, {alignItems: 'center', justifyContent: 'center', alignSelf: 'center', color: GRAY20}]}>
							{today.format('YYYY')}
						</Text>
					</View>
					<TouchableOpacity
						style={styles.changeMonthBtn}
						onPress={() => {
							setMoment(getMoment.clone().add(1, 'month'));
						}}>
						<View style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 * DP}}>
							<NextMark />
							<Text style={[txt.roboto32b, {color: GRAY20, marginLeft: 12 * DP}]}>{getMoment.clone().add(1, 'month').month() + 1}</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{backgroundColor: APRI10, width: '100%', height: 2 * DP}} />
				<View style={styles.daysCont}>
					{Array(7)
						.fill(day) //월화수목금토일 정보
						.map((data, index) => {
							//data가 없으면 안되는구나.
							return (
								<View key={index} style={styles.daysView}>
									<Text
										style={
											[txt.roboto24, index == 0 ? styles.weekend : styles.daysText]
											//일요일 토요일은 빨간색 글자로 출력
										}>
										{day[index]}
									</Text>
								</View>
							);
						})}
				</View>

				<View style={{marginTop: 15 * DP}}>{calendarArr()}</View>
				{/* 모달바깥쪽 클릭으로 인한 modal Off 처리 */}
				<TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 440, height: 100, top: -100, left: -20}} />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 30, height: 450, top: 0, right: -20}} />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 30, height: 450, top: 0, left: -20}} />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 440, height: 170, bottom: -170, left: -20}} />
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	);
};
export default Calendar;
