/**
 * Created by alex.milkis on 30/09/2017.
 */
let introModal = new Vue({
    el: '.modal-dialog',
    data: {
        message1: 'Partner Id:',
        message2: 'Player Id:',
        message3: 'Entry Id:',
        classGreen: false,
        classRed: false,
        classTick: false,
        disabled: false,
        errorTick: false,
        partnerId: '',
        uiconfId: '',
        entryId: '',
    },
    computed: {
        partnerErrorTick: function () {
            if (this.partnerId.length >= 8) {
                this.disabled = true;
                return {
                    errorTick: true,
                    disabled: true
                }
            } else if (this.partnerId.length === 8) {
                this.disabled = false;
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
                this.disabled = true;
                return {
                    errorTick: true
                }
            } else if (this.uiconfId.length === 9) {
                this.disabled = false;
            }
        },
        entryErrorTick: function (){
            if (this.entryId.length > 10) {
                this.disabled = true;
                return {
                    errorTick: true
                }
            } else if (this.entryId.length === 10) {
                this.disabled = false;
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
