/**
 * Created by alex.milkis on 30/09/2017.
 */
let introModal = new Vue({
    el: '.modal-body',
    data: {
        message1: 'Partner Id:',
        message2: 'Player Id:',
        message3: 'Entry Id:',
        classGreen: false,
        classRed: false,
        classTick: false,
        errorTick: false,
        partnerId: '',
        uiconfId: '',
        entryId: '',
    },
    computed: {
        partnerErrorTick: function () {
             if (this.partnerId.length >= 8){
                return {
                    errorTick: true
                }
            }
        },
        partnerTick: function () {
            if (this.partnerId.length === 7) {
                return {
                    classTick: true
                }
            }
        },
        playerTick: function () {
            if (this.uiconfId.length === 8) {
                return {
                    classTick: true
                }
            }
        },
        playerErrorTick: function () {
            if (this.uiconfId.length >= 9) {
                return {
                    errorTick: true
                }
            }
        },
        entryErrorTick: function (){
            if (this.entryId.length > 10) {
                return {
                    errorTick: true
                }
            }
        },
        entryTick: function (){
            if (this.entryId.length === 10) {
                return {
                    classTick: true
                }
            }
        }
    }
});
console.log(introModal);

// 2-Way bindings function
// function changePartner(){
//     introModal.message1 = "Changed! two-way-binding";
// }