/**
 * Created by alex.milkis on 30/09/2017.
 */


let introModal = new Vue({
    el: '.modal-dialog',
    data: {
        message1: 'Partner Id:',
        message2: 'Player Id:',
        message3: 'Entry Id:',
        partnerGreenTick: false,
        playerGreenTick: false,
        entryGreenTick: false,
        disabled: true,
        errorTick: false,
        partnerId: '',
        uiconfId: '',
        entryId: '',
    },
    computed: {
        partnerErrorTick: function () {
            if (this.partnerId.length >= 8) {
                return {
                    errorTick: true,
                }
            }
        },
        partnerTick: function () {
            if (this.partnerId.length === 7) {
                return {
                    partnerGreenTick: true
                }
            }
        },
        playerTick: function () {
            if (this.uiconfId.length === 8) {
                return {
                    playerGreenTick: true
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
                    entryGreenTick: true
                }
            }
        },
        checkDisable: function (){
            if (this.partnerId.length === 7 && this.entryId.length === 10 && this.uiconfId.length === 8 ) {
                return false
            } else {
                return true
            }
        }
    }
});


console.log(introModal);
