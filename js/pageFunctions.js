//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
//The page functions script                                  ||
//Created by Alex Milkis - 2017                              ||
//The MIT License                                            ||
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const panelStatus = {
    embedPanel: null,
    loggerPanel: null,
    controlPanel: null
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
    },
    markFalse: () => {
        panelStatus.embedPanel = false;
    },
    markFalse2: () => {
        panelStatus.loggerPanel = false;
    },
    markFalse3: () => {
        panelStatus.controlPanel = false;
    },
    renderLogger: () => {
        let ele = document.getElementById('logToggle');
        let btn = document.getElementsByClassName('clearLog');
        if (panelStatus.loggerPanel === false) {
            ele.textContent = "\u25B6 Open Logger";
            panelStatus.loggerPanel = true;
            btn[0].style.visibility = 'hidden';
        } else {
            panelStatus.loggerPanel = false;
            ele.textContent = "\u25BC Close Logger";
            btn[0].style.visibility = 'visible';
        }
    },
    renderControls: () => {
        let ele = document.getElementById('controlsToggle');
        if (panelStatus.controlPanel === false) {
            ele.textContent = "\u25B6 Open Controls";
            panelStatus.controlPanel = true
        } else {
            panelStatus.controlPanel = false;
            ele.textContent = "\u25BC Close Controls";
        }
    }
};