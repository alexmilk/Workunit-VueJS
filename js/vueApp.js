/**
 * Created by alex.milkis on 30/09/2017.
 */
let introModal = new Vue({
    el: '.modal-body',
    data: {
        message1: 'Partner Id:',
        message2: 'Player Id:',
        message3: 'Entry Id:'
    },
    cumputed: {
        fullname: function() {
            return this.message1 + this.message2;
        }
    }
});
// 2-Way bindings function
// function changePartner(){
//     introModal.message1 = "Changed! two-way-binding";
// }