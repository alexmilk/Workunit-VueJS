/**
 * Created by alex.milkis on 07/12/2017.
 */
//Custom embed code loader script.
let buildPath = function() {
    let partner = $('#partnerId').val();
    if (!partner) {
        partner = "1666321";
    }
    let uiconf = $('#uiconfId').val();
    if (!uiconf) {
        uiconf = "39120681";
    }
    let path;
    let radioInputs = $('#selectLocal,#selectCdn,#selectSecure');
    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            path = radioInputs[i].id;
        }
    }
    // path = 'http://kgit.html5video.org/'+coreVer+'/mwEmbedLoader.php'+"/uiconf_id/"+$('#uiconf').val()+"/partner_id/"+$('#partnerId').val()+"/"+psVer
    // Future development core tag
    let endPoint;
    switch (path) {
        case "selectLocal":
            endPoint = '/mwEmbed/mwEmbedLoader.php/p/' + partner + '/sp/' + partner +
                '00/embedIframeJs/uiconf_id/' + uiconf + '/partner_id/' + partner + "?&debug=true";
            break;
        case "selectCdn":
            endPoint = 'http://cdnapi.kaltura.com/p/' + partner + '/sp/' + partner +
                '00/embedIframeJs/uiconf_id/' + uiconf + '/partner_id/' + partner + "?&debug=true";
            break;
        case "selectSecure":
            endPoint = 'https://cdnsecakmi.kaltura.com/p/' + partner + '/sp/' + partner +
                '00/embedIframeJs/uiconf_id/' + uiconf + '/partner_id/' + partner + "?&debug=true";
    }
    $.getScript(endPoint, function(data, textStatus, jqxhr) {
        if (jqxhr.status === 200) {
            loadUpdatedEmbed();
        } else {
            alert("Script failed to load. Cannot render player :(");
        }
    });
};
//Reload player function
let loadUpdatedEmbed = function() {
    //The default configs for the player.
    mw.setConfig("EmbedPlayer.ShowPlayerAlerts", true);
    mw.setConfig("debug", true);
    mw.setConfig("debugTarget", "analyticsLog");
    mw.setConfig("autoScrollDebugTarget", true);
    mw.setConfig('Kaltura.EnableEmbedUiConfJs', true);
    //Get inputs from the embed fields.
    let partner = $('#partnerId').val();
    if (!partner) {
        partner = "1666321";
    }
    let uiconf = $('#uiconfId').val();
    if (!uiconf) {
        uiconf = "39120681";
    }
    let entry = $('#entryId').val();
    if (!entry) {
        entry = "0_kjb4gz27";
    }
    //Clean all runtime values on the page.
    runtimeFields.text('');
    $("#errorBar").slideUp(300);
    pageFunctions.cleanErrors();
    //Check if we have any uivars and split.
    let str = $('#uivarsOverride').val();
    if (str) {
        str = str.split("\n").join('');
    }
    let myJson;
    //Catches error for incorrect uivars.
    try {
        myJson = str ? $.parseJSON(str) : {};
    } catch (error) {
        alert('Please validate your JSON');
        return;
    }
    //The main embed object.
    const newEmbed = {
        "targetId": "kPlayer_ifp",
        "wid": "_" + partner,
        "uiconf_id": uiconf,
        "flashvars": myJson,
        "cache_st": Date.now(),
        "entry_id": entry
    };
    document.kPlayer_ifp_ifp.kWidget.embed(newEmbed);
};