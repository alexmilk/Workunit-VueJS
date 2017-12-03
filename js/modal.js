//Modal functions
$(window).on('load', function () {
    $.getScript("js/vueApp.js", function (data, textStatus, jqxhr) {
        console.log("Vue.js load status: " + textStatus + " " + jqxhr.status); // Success});
    });
    $('#topHeaderDiv, #appendStats, #kPlayer_ifp, #mainControlDiv').fadeIn(400);
    $('#myModal').modal('show');
    let localEmbedRadio = document.getElementById("useLocalEmbed");
    let cdnEmbedRadio = document.getElementById("useCdnEmbed");
    let secureEmbedRadio = document.getElementById("useSecureEmbed");
    if (window.location.protocol === 'https:') {
        localEmbedRadio.disabled = true;
        cdnEmbedRadio.disabled = true;
        secureEmbedRadio.checked = true;
    }

});
function hideModal() {
    $('#myModal').modal('hide');
}
//Modal default props
let invoked = false;
let hasAlert = false;

alertSecure = () => {
    if (!invoked && !hasAlert) {
        $('#sslAlert').fadeIn(200);
        invoked = true;
        hasAlert = true;
    }
};
removeAlert = () => {
    if (hasAlert) {
        $('#sslAlert').fadeOut(200);
        invoked = false;
        hasAlert = false;
    }
};