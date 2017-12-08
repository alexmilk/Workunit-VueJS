/**
 * Created by alex.milkis on 07/12/2017.
 * The initial modal embed function, wrapped to prevent auto execution.
 */
let embedWidget = function() {
    //Player path defaults
    let partner = $("#partnerPrototype").val();
    if (!partner) {
        partner = $("#partnerPrototype").attr("placeholder");
    }
    let uiconf = $("#playerPrototype").val();
    if (!uiconf) {
        uiconf = $("#playerPrototype").attr("placeholder");
    }
    let entryId = $("#entryPrototype").val();
    if (!entryId) {
        entryId = $("entryPrototype").attr("placeholder");
    }
    let path;
    //Check which radio button was selected and define its ID to the path variable.
    let radioInputs = $("#useCdnEmbed,#useLocalEmbed,#useSecureEmbed");
    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            path = radioInputs[i].id;
        }
    }
    //Check which id the path variable was set with, and define the endPoint accordingly for the embed setup.
    //Version oriented embed path http://cdnapi.kaltura.com/html5/html5lib/v2.49/mwEmbedLoader.php/p/189724100/uiconf_id/33256021
    let endPoint;
    switch (path) {
        case "useLocalEmbed":
            endPoint = "/mwEmbed/mwEmbedLoader.php/p/" + partner + "/sp/" + partner +
                "00/embedIframeJs/uiconf_id/" + uiconf + "/partner_id/" + partner + "?&debug=true";
            break;
        case "useCdnEmbed":
            endPoint = "http://cdnapi.kaltura.com/p/" + partner + "/sp/" + partner +
                "00/embedIframeJs/uiconf_id/" + uiconf + "/partner_id/" + partner;
            break;
        case "useSecureEmbed":
            endPoint = "https://cdnsecakmi.kaltura.com/p/" + partner + "/sp/" + partner +
                "00/embedIframeJs/uiconf_id/" + uiconf + "/partner_id/" + partner;
    }
    //The embed library getter script in order to execute the embed function.
    $.getScript(endPoint, function(data, textStatus, jqxhr) {
        if (jqxhr.status === 200) {
            embed();
        } else {
            alert("Script failed to load. Cannot render player :(");
        }
    })
};
//The main embed function for the whole instance.
let embed = function() {
    //Embed defaults
    let partnerPrototype = $('#partnerPrototype').val();
    if (!partnerPrototype) {
        partnerPrototype = "1666321";
    }
    let playerPrototype = $('#playerPrototype').val();
    if (!playerPrototype) {
        playerPrototype = "39120681";
    }
    let entryPrototype = $('#entryPrototype').val();
    if (!entryPrototype) {
        entryPrototype = "0_kjb4gz27";
    }
    pageFunctions.cleanErrors();
    $("#errorBar").slideUp(300);
    $("#updateNotification").fadeOut(500);
    var adInput = $('#adTagId').val();
    if ($('#adTagId').val().length <= 0) {
        adInput = null
    }
    mw.setConfig("EmbedPlayer.ShowPlayerAlerts", true);
    mw.setConfig("debug", true);
    mw.setConfig("debugTarget", "analyticsLog");
    mw.setConfig("autoScrollDebugTarget", true);
    mw.setConfig('Kaltura.EnableEmbedUiConfJs', true);
    kWidget.embed({
        "targetId": "kPlayer_ifp",
        "wid": "_" + partnerPrototype,
        "uiconf_id": playerPrototype,
        "flashvars": {},
        "cache_st": Date.now(),
        "entry_id": entryPrototype
    });
    //kBinds and other functions
    kWidget.addReadyCallback(function(playerId) {
        let kdp = document.getElementById(playerId);
        kdp.kBind('playerReady', function() {
            let runtimes = {
                pageTitle: $('#pageTitle'),
                entryIdField: $("#entryIdText"),
                uiconfIdField: $("#uiconfText"),
                loadTimeField: $("#loadTime"),
                appVersionField: $("#appVersion"),
                loadedTime: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
            };
            let kdp = document.kPlayer_ifp_ifp.kPlayer_ifp;
            runtimes.pageTitle.html(kdp.evaluate("{mediaProxy.entry.name}"));
            runtimes.entryIdField.append(kdp.evaluate("Entry id: " + "{mediaProxy.entry.id}"));
            runtimes.uiconfIdField.append(kdp.evaluate("Player id: " + "{configProxy.kw.uiConfId}"));
            runtimes.loadTimeField.prepend("Page loaded in " + runtimes.loadedTime + " milliseconds");
            runtimes.appVersionField.append("User agent: " + clientInformation.appVersion);
            let playerPlugins = document.kPlayer_ifp_ifp.kalturaIframePackageData.playerConfig.plugins;
            $("#appendJSON").append(JSON.stringify(playerPlugins, null, 2));
            $(".mw-debug-info").append(playerPlugins.debugInfo);
        });

        kdp.kBind('playerError', function(errorEvent) {
            if ($("#errorBar h4").text().length === 0) {
                $("#errorBar").slideDown(300);
                $("#errorBar h4").append("An error has been logged on the player - " + errorEvent.message);
            }
        });
        kdp.kBind('postSequenceStart', function() {
            alert("Playback Ended");
        });
        $('#okError').click(function() {
            $('#errorBar').slideUp(300);
        });
        kdp.kBind('entryReady', function() {
            pageFunctions.cleanErrors();
        });
    });
};