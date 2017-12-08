/**
 * Created by alex.milkis on 30/09/2017.
 * The intro modal vue component.
 * The component controls the initial user input on the intro modal, the logic will check the character length of the inputs
 * If input is using an incorrect length, the logic will tick an error class, otherwise it will tick a success class.
 */


let introModal = new Vue({
    el: '.modal-dialog',
    data: {
        message1: 'Partner Id:',
        message2: 'Player Id:',
        message3: 'Entry Id:',
        message4: 'Player tag:',
        partnerGreenTick: false,
        playerGreenTick: false,
        entryGreenTick: false,
        tagGreenTick: false,
        disabled: true,
        errorTick: false,
        partnerId: '',
        uiconfId: '',
        entryId: '',
        tagId: ''
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
        tagErrorTick: function (){
            if (this.tagId.length > 7) {
                return {
                    errorTick: true
                }
            }
        },
        tagTick: function (){
            if (this.tagId.length === 5) {
                return {
                    tagGreenTick: true
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
