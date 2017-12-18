/**
 * Created by alex.milkis on 14/12/2017.
 */
// This is the JSON modal controller

hideJsonModal = () => {
    $('#jsonModal').modal('hide');
};
showJsonModal = () => {
    $('#jsonModal').modal('show');
};
openJson = () => {
    let jsonText = document.getElementById('appendJSON').textContent;
    document.open(jsonText)
};