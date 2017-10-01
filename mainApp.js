//kBinds and other functions
kWidget.addReadyCallback(function (playerId) {
    let kdp = document.getElementById(playerId);
    kdp.kBind('playerReady', function () {
        $("#entryIdText").append(kdp.evaluate("Entry id: " + "{mediaProxy.entry.id}"));
        $("#uiconfText").append(kdp.evaluate("Player id: " + "{configProxy.kw.uiConfId}"));
        let loadedTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        $("#loadTime").prepend("Page loaded in " + loadedTime + " milliseconds");
    });
    kdp.kBind('mediaReady', function () {
        $("#analyticsLog").append("Media Ready\n<br>").addClass('greenText');
    });
    kdp.kBind('adEnd', function () {
        $("#analyticsLog").append("Ad Ended\n<br>").addClass('greenText');
    });
    kdp.kBind('postSequenceStart', function () {
        $("#analyticsLog").append("Post Sequence Started\n<br>").addClass('greenText');
    });
    kdp.kBind('firstPlay', function () {
        $("#analyticsLog").append("First Play\n<br>").addClass('greenText');
    });
    kdp.kBind('doPause', function () {
        $("#analyticsLog").append("Player Paused\n<br>").addClass("greenText");
    });
    kdp.kBind('doPlay', function () {
        $("#analyticsLog").append("Player Playing\n<br>").addClass("greenText");
    });
    kdp.kBind('playerError', function (errorEvent) {
        $("#errorBar").slideDown(300);
        $("#errorBar p").append(" - " + errorEvent.message);
    });
    kdp.kBind('mediaErrorError', function (errorEvent) {
        $("#errorBar").slideDown(300);
        $("#errorBar p").append(" - " + errorEvent.message);
    });
    //OK button handler
    $('#okError').click(function () {
        $('#errorBar').slideUp(300);
    });
    kdp.kBind('bumperStarted', function () {
        $("#analyticsLog").append("Bumper Started\n<br>").addClass("greenText");
    });
    kdp.kBind('postSequenceStart', function () {
        $("#analyticsLog").append("Playing Post Sequence.\n<br>").addClass("greenText");
    })
});

//The mainBrain
function setEntry() {
    kWidget.addReadyCallback(function (playerId) {
        let kdp = document.getElementById(playerId);
        let input = document.getElementById("adInput").value;
        kdp.sendNotification("changeMedia", {
            "entryId": input
        });
    })
}
$("#cleanMedia").click(function () {
    kWidget.addReadyCallback(function (playerId) {
        let kdp = document.getElementById(playerId);
        kdp.sendNotification("cleanMedia");
    })
});

function setKS() {
    kWidget.addReadyCallback(function (playerId) {
        let kdp = document.getElementById(playerId);
        let input = document.getElementById("ksInput").value;
        kdp.setKDPAttribute('servicesProxy.kalturaClient', 'ks', input);
    })
}

function doPlay() {
    kWidget.addReadyCallback(function (playerId) {
        let kdp = document.getElementById(playerId);
        kdp.sendNotification("doPlay");
    })
}

function doStop() {
    kWidget.addReadyCallback(function (playerId) {
        let kdp = document.getElementById(playerId);
        kdp.sendNotification("doStop");
    })
}

function callAd() {
    kWidget.addReadyCallback(function (playerId) {
        let adInput = $('#adTagId').val();
        window.open(adInput);
        return false;
    })
}

function changeEmbed() {
    if ($('#customEmbedParams').css("display") == "none") {
        $("#customEmbedParams").slideDown(500);
    }
    else {
        $("#customEmbedParams").slideUp(500);
    }
}
kWidget.addReadyCallback(function (playerId) {
    let kdp = document.getElementById(playerId);
    kdp.kBind('playerReady', function () {
        let playerFrame = document.kPlayer_ifp_ifp;
        $("#appendJSON").append(JSON.stringify(playerFrame.kalturaIframePackageData.playerConfig.plugins, null, 2));
        $(".mw-debug-info").append(playerFrame.kalturaIframePackageData.playerConfig.plugins.debugInfo);
        return false;
    })
});

// Top menu buttons and logic
$("#removeThumb").click(function () {
    const playerContent = $("#kPlayer_ifp_ifp").contents()[0];
    const playerThumb = $(playerContent).find("#kPlayer_ifp");
    if ($(playerThumb).css("visibility") == 'visible') {
        document.getElementById('removeThumb').textContent = "Show thumbnail";
        $(playerThumb).css("visibility", "hidden");
    }
    else {
        $(playerThumb).css("visibility", "visible");
        document.getElementById('removeThumb').textContent = "Hide thumbnail";
    }
});
$("#removePlay").click(function () {
    const playerContent = $("#kPlayer_ifp_ifp").contents()[0];
    const playButton = $(playerContent).find(".largePlayBtn");
    if ($(playButton).css("display") == 'block') {
        document.getElementById('removePlay').textContent = "Show play button";
        $(playButton).css("display", "none");
    }
    else {
        $(playButton).css("display", "block");
        document.getElementById('removePlay').textContent = "Hide play button";
    }
});
$("#hideControls").click(function () {
    const hideControls = $("#kPlayer_ifp_ifp").contents()[0];
    const controls = window.kPlayer_ifp_ifp.document.querySelector('.controlBarContainer');
    if (controls.style.display == "none") {
        controls.style.display = "block";
        document.getElementById('hideControls').textContent = "Hide controls bar";
    }
    else {
        controls.style.display = "none";
        document.getElementById('hideControls').textContent = "Show controls bar";
    }

});

function goToVast() {
    let vastInspectUrl = 'https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector?tag=';
    let playerAdTag = document.kPlayer_ifp_ifp.kalturaIframePackageData.playerConfig.plugins.doubleClick.adTagUrl;
    window.open(vastInspectUrl + playerAdTag);
}

function getActiveSource() {
    const playerSource = document.kPlayer_ifp_ifp.kPlayer_ifp;
    const currentSource = playerSource.getSource();
    window.location.assign(currentSource.src);
}

function getActiveBitrate() {
    let playerIframePackage = document.kPlayer_ifp_ifp;
    let playerActiveClass = playerIframePackage.document.getElementsByClassName('persistentNativePlayer nativeEmbedPlayerPid');
    let activeBitrate = playerActiveClass.pid_kPlayer_ifp.webkitVideoDecodedByteCount / 1000;
    alert(activeBitrate);
}

function downloadJSON() {
    let jsonContent = document.getElementById('appendJSON');
    window.open('_blank').document.write(jsonContent.innerHTML);
}
$("#getSource").click(function () {
    let playerSources = document.kPlayer_ifp_ifp.kPlayer_ifp.getSources();
    for (let i = 0; i < playerSources.length; i++) {
        parent.document.getElementById('appendStats').append(JSON.stringify(playerSources[i], null, 2));
    }
});
$("#getCaptions").click(function () {
    let playerCaptions = document.kPlayer_ifp_ifp.kPlayer_ifp.mediaElement.getTextTracks();
    for (let i = 0; i < playerCaptions.length; i++) {
        parent.document.getElementById('appendStats').append(JSON.stringify(playerCaptions[i], null, 2));
    }
});
$('button[type=button], input[type=submit]').hover(function () {
    $(this).fadeOut(50);
    $(this).fadeIn(50);
});
$(document).ready(function () {
    $('#topHeaderDiv, #appendStats, #kPlayer_ifp, #mainControlDiv').fadeIn(400);
});
//Preset ad selector for testing
const adSlots = {
    inlinePreroll: {
        "slotType": "Inline preroll",
        "adTagUrl": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=",
    },
    skippablePreroll: {
        "slotType": "skippable preroll",
        "adTagUrl": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=",
    },
    SingleRedirectError: {
        "slotType": "Single redirect error",
        "adTagUrl": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&nofb=1&correlator=",
    }
};
$(document).ready(function() {
    for (let prop in adSlots) {
        $("#adSlotSelector").append( "<option value= " + prop + ">" + adSlots[prop].slotType + "</option>" )
    }
});
function appendSlot(event){
    var prop = $(event.target).val();
    var $adTag = $("#adTagId");
    $("#adTagId").val(adSlots[prop].adTagUrl);
    $adTag.focus();
    $("#updateNotification").fadeIn(500);
}
//Open tinyUrl button
let tiny = function(){
    window.open("http://tinyurl.com/api-create.php?url="+$(location).attr('href')+$(location).attr('search'), '_blank');
};

function buildPath() {
    var path;
    if($('#embedPathSelector').prop('checked')){
        path = '/mwEmbed/mwEmbedLoader.php/p/' + $('#partnerId').val() + '/sp/' + $('#partnerId').val() +
            '00/embedIframeJs/uiconf_id/' + $('#uiconfId').val() + '/partner_id/' + $('#partnerId').val() + "?&debug=true";
    } else {
        path = 'http://cdnapi.kaltura.com/p/' + $('#partnerId').val() + '/sp/' + $('#partnerId').val() +
            '00/embedIframeJs/uiconf_id/' + $('#uiconfId').val() + '/partner_id/' + $('#partnerId').val() + "?&debug=true";
    }
    $.getScript(path, function (data, textStatus, jqxhr) {
        if (jqxhr.status === 200) {
            reembedPlayer();
        } else {
            alert("Script failed to load. Cannot render player :(");
        }
    });
    setTimeout($("#appendJSON").append(JSON.stringify(document.kPlayer_ifp_ifp.kalturaIframePackageData.playerConfig.plugins, null, 2)), 6000);
}
function reembedPlayer() {
    mw.setConfig("EmbedPlayer.ShowPlayerAlerts", true);
    mw.setConfig("debug", true);
    mw.setConfig("debugTarget", "analyticsLog");
    mw.setConfig("autoScrollDebugTarget", true);
    mw.setConfig('Kaltura.EnableEmbedUiConfJs', true);
    $("#appendJSON,#loadTime,#entryIdText,#uiconfText").empty();
    var str = $('.uivarsOverride').val();
    str = str.split("\n").join('');
    var myJson;
    try{
        if(str){
            myJson = $.parseJSON(str);
        }
    } catch(error){
        alert('Please validate your JSON');
        return;
    }
    const newEmbed = {
        "targetId": "kPlayer_ifp",
        "wid": "_" + $('#partnerId').val(),
        "uiconf_id": $('#uiconfId').val(),
        "flashvars": myJson,
        "cache_st": Date.now(),
        "entry_id": $('#entryId').val()
    };
    document.kPlayer_ifp_ifp.kWidget.embed(newEmbed);
}
