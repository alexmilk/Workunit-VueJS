/**
 * Created by alex.milkis on 12/4/2018.
 * This js file contains only player and page functions.
 */
let checkStatus;
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
        let playerSources = playerFrame().getSources();
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
            }})},
    renderName: () => {
        let toggleStatus = document.getElementById('playerToggle');
        if (toggleStatus.classList.contains("collapsed") === true) {
            toggleStatus.textContent = "\u25BC Embed Section";
        } else if (toggleStatus.classList.contains("collapsed") === false) {
            toggleStatus.textContent = "\u25B6 Embed Section";
        }},
    markFalse: () => {
        checkStatus = false;
    },
    renderLogger: () => {
        let ele = document.getElementById('logToggle');
        if (checkStatus === false) {
            ele.textContent = "\u25B6 Open Logger";
            checkStatus = true
        } else {
            checkStatus = false;
            ele.textContent = "\u25BC Close Logger";
        }
    }
};