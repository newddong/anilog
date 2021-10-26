import {StyleSheet} from 'react-native';
import {LIGHT_SALMON, MIDNIGHT_BLUE, PALETUR} from 'Root/config/color';
import DP from 'Root/config/dp';
export const styles = StyleSheet.create({
	outside: {
		backgroundColor: 'white',
		justifyContent: 'center',
		borderRadius: 40 * DP,
		width: 650 * DP,
		marginBottom: 100 * DP,
	},
	headerCont: {
		flexDirection: 'row',
		alignSelf: 'center',
		height: 140 * DP,
	},
	headerText: {
		fontFamily: 'BMJUA',
		fontSize: 58 * DP,
		alignItems: 'center',
		alignSelf: 'center',
		color: MIDNIGHT_BLUE,
		textAlign: 'center',
	},
	changeMonthBtn: {
		alignItems: 'center',
		alignSelf: 'center',
		width: 80 * DP,
		height: 80 * DP,
		marginHorizontal: 40 * DP,
	},
	changeMonthText: {
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 50 * DP,
		color: MIDNIGHT_BLUE,
	},
	changeMonthText_unavailable: {
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 50 * DP,
		color: '#dcdcdc',
		opacity: 1,
	},
	dateContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginHorizontal: 120 * DP,
		marginTop: 50 * DP,
	},
	daysCont: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	daysView: {
		width: 70 * DP,
		height: 70 * DP,
		marginBottom: -20 * DP,
		backgroundColor: PALETUR,
		paddingTop: 16 * DP,
		opacity: 0.7,
		marginHorizontal: 5 * DP,
	},
	weekend: {
		fontSize: 30 * DP,
		color: 'red',
		fontFamily: 'BMJUA',
		textAlign: 'center',
	},
	today: {
		width: 70 * DP,
		height: 70 * DP,
		backgroundColor: 'yellow',
		marginHorizontal: 5 * DP,
	},
	days_not_this_month: {
		width: 70 * DP,
		height: 70 * DP,
		marginHorizontal: 5 * DP,
	},
	days_not_this_month_text: {
		fontSize: 30 * DP,
		fontFamily: 'BMJUA',
		alignSelf: 'center',
		color: 'gray',
		opacity: 0.5,
		marginHorizontal: 5 * DP,
	},
	days_this_month: {
		width: 70 * DP,
		height: 70 * DP,
		marginHorizontal: 5 * DP,
	},
	days_have_task: {
		width: 70 * DP,
		height: 70 * DP,
		backgroundColor: LIGHT_SALMON,
	},
	daysText: {
		fontSize: 30 * DP,
		fontFamily: 'BMJUA',
		alignSelf: 'center',
	},
});
