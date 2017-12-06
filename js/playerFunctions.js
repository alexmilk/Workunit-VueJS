/**
 * Created by alex.milkis on 06/12/2017.
 * This js file contains only player and page functions.
 */
const kdpFunctions = {
    doPlay: () => {document.kPlayer_ifp_ifp.kPlayer_ifp.sendNotification('doPlay')},
    doStop: () => {document.kPlayer_ifp_ifp.kPlayer_ifp.sendNotification('doStop')},
    reload: () => {document.kPlayer_ifp_ifp.kPlayer_ifp.sendNotification("doReplay")},
    getBitrate: () => {
        let playerFrame = document.kPlayer_ifp_ifp.kPlayer_ifp;
        $("#appendStats").prepend("<h5>" + playerFrame.plugins.morePlugins.embedPlayer.currentBitrate + "</h5>");
    },
    getFlavor: () => {
        const playerSource = document.kPlayer_ifp_ifp.kPlayer_ifp, currentSource = playerSource.getSource();
        window.open(currentSource.src, '_blank');
    },
    setEntry: () => {
        let input = document.getElementById("entryInput").value;
        document.kPlayer_ifp_ifp.kPlayer_ifp.sendNotification('changeMedia', {'entryId': input});
        runtimeFields.text('');
        pageFunctions.cleanErrors();
    },
    setKS: () => {
        runtimeFields.empty();
        kWidget.addReadyCallback(function (playerId) {
            let kdp = document.getElementById(playerId);
            let input = document.getElementById("ksInput").value;
            kdp.setKDPAttribute('servicesProxy.kalturaClient', 'ks', input);
            runtimeFields.text('');
            pageFunctions.cleanErrors();
        });
    },
    goToVast: () => {
        let vastInspectUrl = 'https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector?tag=';
        let playerAdTag = document.kPlayer_ifp_ifp.kalturaIframePackageData.playerConfig.plugins.doubleClick.adTagUrl;
        let encodedAdTag = encodeURIComponent(playerAdTag);
        if (playerAdTag === undefined) {
            alert("DoubleClick is not configured")
        } else {
            window.open(vastInspectUrl + encodedAdTag);
        }
    },
    getCaptions: () => {
        let getCaptions = $("#getCaptions");
        let playerCaptions = document.kPlayer_ifp_ifp.kPlayer_ifp.mediaElement.getTextTracks();
        for (let i = 0; i < playerCaptions.length; i++) {
            parent.document.getElementById('appendStats').append(JSON.stringify(playerCaptions[i], null, 2));
        }
    }
};
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
    }
};