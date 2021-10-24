import React from 'react';

import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {styles} from './calendarStyle';
import moment from 'moment';
import Modal from 'react-native-modal';
import DP from 'Root/config/dp';
const Calendar = props => {
	const [getMoment, setMoment] = React.useState(moment()); //현재 시각 정보
	// 현재달일 경우 저번달로 넘어가지 못하게 하는 모달

	const today = getMoment;
	let day = ['일', '월', '화', '수', '목', '금', '토']; //요일 정보
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
									<View key={index} style={styles.today}>
										<TouchableOpacity onPress={() => props.selectDate(days.format('yyyy.MM.DD'))}>
											<Text style={styles.daysText}>{days.format('D')}</Text>
										</TouchableOpacity>
									</View>
								);
							} else if (days.format('MM') !== today.format('MM')) {
								//이번달이 아니지만 달력에 출력된 dates
								return (
									<View key={index} style={styles.days_not_this_month}>
										<Text style={styles.days_not_this_month_text}>{days.format('D')}</Text>
									</View>
								);
							} else {
								//이외의 이번달 날짜들은 하얀색으로 출력
								return (
									<View key={index} style={styles.days_this_month}>
										<TouchableOpacity onPress={() => props.selectDate(days.format('yyyy.MM.DD'))}>
											<Text style={styles.daysText}>{days.format('D')}</Text>
										</TouchableOpacity>
									</View>
								);
							}
						})}
				</View>,
			);
		}
		return result;
	};

	return (
		<Modal isVisible={props.modalOn} avoidKeyboard={true} transparent={true} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<View style={styles.outside}>
					<View style={styles.headerCont}>
						<TouchableOpacity
							style={styles.changeMonthBtn}
							onPress={() => {
								setMoment(getMoment.clone().subtract(1, 'month'));
							}}>
							<Text style={styles.changeMonthText}>◀</Text>
						</TouchableOpacity>

						<Text style={styles.headerText}>{today.format('MMMM YYYY')}</Text>

						<TouchableOpacity
							style={styles.changeMonthBtn}
							onPress={() => {
								setMoment(getMoment.clone().add(1, 'month'));
							}}>
							<Text style={styles.changeMonthText}>▶</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.daysCont}>
						{Array(7)
							.fill(day) //월화수목금토일 정보
							.map((data, index) => {
								//data가 없으면 안되는구나.
								return (
									<View key={index} style={styles.daysView}>
										<Text
											style={
												//일요일 토요일은 빨간색 글자로 출력
												index == 0 || index == 6 ? styles.weekend : styles.daysText
											}>
											{day[index]}
										</Text>
									</View>
								);
							})}
					</View>

					<View>
						<View>{calendarArr()}</View>
					</View>
          {/* 모달바깥쪽 클릭으로 인한 modal Off 처리 */}
          <TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 440, height: 100, top: -100, left: -20}} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 30, height: 450, top: 0, right:-20}} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 30, height: 450, top: 0, left: -20}} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={props.modalOff}>
					<View style={{position: 'absolute', width: 440, height: 170, bottom:-170, left: -20}} />
          </TouchableWithoutFeedback>
				</View>
		</Modal>
	);
};
export default Calendar;
