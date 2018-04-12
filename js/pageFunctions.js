/**
 * Created by alex.milkis on 12/4/2018.
 * This js file contains only player and page functions.
 */
const pageFunctions = {
    checkAdTag: (input) => {window.open(input)},
    cleanMonitor: () => $('#appendStats').text(''),
    vpaasSearch:  () => {
        let searchTerm = $('#searchInput').val();
        window.open("https://vpaas.kaltura.com/search/#stq=" + searchTerm + "&stp=1")
    },
    cleanErrors: () => {
        let errorBar = $("#errorBar h4");
        if( errorBar.text().length > 2 ) {
            errorBar.text('');
            errorBar.slideUp(300);
        }
    },
    getSource: () => {
        let getSource = $("#getSource");
        let playerSources = document.kPlayer_ifp_ifp.kPlayer_ifp.getSources();
        for (let i = 0; i < playerSources.length; i++) {
            parent.document.getElementById('appendStats').append(JSON.stringify(playerSources[i], null, 2));
        }
    },
    appendSlot: (event) => {
        let selectors = {
            prop: $(event.target).val(),
            adTag: $("#adTagId")
        };
        selectors.adTag.val(adSlots[selectors.prop].adTagUrl);
        selectors.adTag.focus();
        showReloadWarning();
    },
    appendPlugin: (event) => {
        let selectors = {
            prop: $(event.target).val(),
            varsDiv: $("#uivarsOverride")
        };
        selectors.varsDiv.val(JSON.stringify(plugins[selectors.prop].json, null, 2));
        selectors.varsDiv.focus();
        showReloadWarning();
    },
    showHowTo: () => {
        $('#howToModal').modal({show:true})
    },
    checkIpAddress: () => {
        let url = "https://api.ipify.org";
        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Access-Control-Allow-Origin', '*');},
            success: function(data) {
                $("#appendStats").append("<h5>" + data + "</h5>");
            }})}
};