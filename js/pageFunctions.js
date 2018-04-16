//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//The page functions script                                  ||
//Created by Alex Milkis - 2017                              ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const panelStatus = {
    embedPanel: null,
    loggerPanel: null
};
let checkStatus;
let checkControlsStatus;
const pageFunctions = {
    checkAdTag: (input) => {this.open(input)},
    cleanMonitor: () => $('#appendStats').text(''),
    vpaasSearch:  () => {
        let searchTerm = $('#searchInput').val();
        this.open("https://vpaas.kaltura.com/search/#stq=" + searchTerm + "&stp=1")
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
        let ele = document.getElementById('playerToggle');
        if (panelStatus.embedPanel === true) {
            ele.textContent = "\u25BC Close Embed Section";
            panelStatus.embedPanel = false;
        } else {
            panelStatus.embedPanel = true;
            ele.textContent = "\u25B6 Open Embed Section"
        }
        toggleStatus = document.querySelector('#playToggle');
        if (toggleStatus.classList.contains("collapsed") === true) {
            toggleStatus.textContent = "\u25BC Embed Section";
        } else if (toggleStatus.classList.contains("collapsed") === false) {
            toggleStatus.textContent = "\u25B6 Embed Section";
        }},
    markFalse: () => {
        panelStatus.embedPanel = false;
    },
    markFalse2: () => {
        panelStatus.loggerPanel = false;
    },
    renderLogger: () => {
        let ele = document.getElementById('logToggle');
        if (panelStatus.loggerPanel === false) {
            ele.textContent = "\u25B6 Open Logger";
            panelStatus.loggerPanel = true
        } else {
            panelStatus.loggerPanel = false;
            ele.textContent = "\u25BC Close Logger";
        }
    }
};