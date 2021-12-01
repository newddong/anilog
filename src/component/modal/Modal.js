
export const Modal = {
    /**
     * 모달창 종료
     * 모달은 스택으로 쌓이므로 가장 나중에 호출된 모달창이 사라짐
     * ```js
     * Modal.close()
     * ```
     * 
     * 
     */
    close: () => { },
    /**
     * 두버튼 모달창
     * 
     * @param {string} msg - 팝업창 메세지
     * @param {string} noMsg - 취소 버튼 메시지
     * @param {string} yesMsg - 확인 버튼 메시지
     * @param {(e:string)=>{}} onNo - 확인 버튼 메시지
     * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
    * value of {@link SHOE_COLORS}
     * @return void
     */
    popTwoBtn: (msg,noMsg,yesMsg,onNo,onYes) => { },
   
    popNoBtn: () => { },
    popOneBtn: () => { },
    popDrop: () => { },
    popCalendar: () => { },
    rollingSelect: () => { }
};