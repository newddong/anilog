/**
 * 모달 모듈
 */
export default Modal = {

	/**
	 * 모달창 종료 함수
	 * 
	 * 모달은 스택으로 쌓이므로 가장 나중에 호출된 모달창이 사라짐
	 * ```js
	 * Modal.close()
	 * ```
	 */
	close: () => {},

	/**
	 * 두버튼 모달창을 띄우는 함수
	 * @param {string} msg - 팝업창 메세지
	 * @param {string} noMsg - 취소 버튼 메시지
	 * @param {string} yesMsg - 확인 버튼 메시지
	 * @param {()=>void} onNo - 취소 버튼의 콜백함수
	 * @param {()=>void} onYes - 확인 버튼의 콜백함수
	 */
	popTwoBtn: (msg, noMsg, yesMsg, onNo, onYes) => {},

	/**
	 * 버튼없는 모달창을 띄우는 함수
	 * @param {string} msg - 팝업창 메세지
	 */
	popNoBtn: msg => {},

	/**
	 * 버튼이 한개인 모달창을 띄우는 함수
	 * @param {string} msg - 팝업창 메세지
	 * @param {string} okMsg - 확인 버튼 메시지
	 * @param {()=>void} onOk - 확인 버튼의 콜백함수
	 */
	popOneBtn: (msg, okMsg, onOk) => {},

	/**
	 * 컴포넌트를 모달로 띄우는 함수
	 * @param {React.FC} component - 팝업할 컴포넌트
	 */
	popDrop: component => {},

	/**
	 * 달력 선택창을 모달로 띄우는 함수
	 * @param {boolean} visible - 설명추가 바람
	 * @param {()=>void} onOff - 설명추가 바람
	 * @param {(moment.Moment)=>void} date -설명
	 */
	popCalendar: (visible, onOff, date) => {},

	/**
	 * 회전 선택창을 모달로 띄우는 함수
	 * ```js
	 * Modal.rollingSelect('제목',['항목1','항목2','항목3'],(item)=>{},()=>{})
	 * ```
	 * @param {string} title - 선택창 타이틀
	 * @param {Array.<string>} items - 선택항목 목록
	 * @param {(event:string)=>void} onSelect - 선택항목을 반환하는 콜백
	 * @param {()=>void} onCance - 취소 버튼의 콜백함수
	 */
	rollingSelect: (title, items = [''], onSelect, onCancel = Modal.close) => {},

	/**
	 * 선택 모달창을 띄우는 함수
	 * @param {Array.<string>} primaryItems - 첫번째 항목 배열
	 * @param {Array.<string>} secondaryItems - 두번째 항목 배열
	 * @param {(primaryItem:string,secondaryItem:string)=>void} onOk - 선택항목들을 반환하는 매개변수가 2개인 콜백
	 * @param {string} okButtonnMsg - 확인버튼에 표시할 텍스트
	 * 
	 * @example
	 * Modal.popSelect(['개','고양이','기타'],['리트리버','말티즈','푸들','치와와'],(val1,val2)=>alert(val1+':'+val2),'동물선택');
	 */
	popSelect: (primaryItems,secondaryItems,onOk,okButtonnMsg) => {},
};
