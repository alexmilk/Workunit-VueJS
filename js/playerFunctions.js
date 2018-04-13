/**
 * Created by alex.milkis on 06/12/2017.
 * This js file contains only player and page functions.
 * Do not share, copy or use without proper permission.
 */
let playerFrame = () => {
    return document.kPlayer_ifp_ifp.kPlayer_ifp;
    };
const kdpFunctions = {
    doPlay: () => { playerFrame().sendNotification('doPlay')},
    doStop: () => { playerFrame().sendNotification('doStop')},
    reload: () => { playerFrame().sendNotification("doReplay")},
    getBitrate: () => {
        let bitrate = playerFrame().plugins.morePlugins.embedPlayer.currentBitrate;
        $("#appendStats").prepend("<h5>" + bitrate + "</h5>");
    },
    getFlavor: () => {
        let currentSource = playerFrame().getSource();
        window.open(currentSource.src, '_blank');
    },
    setEntry: () => {
        let input = document.getElementById("entryInput").value;
        playerFrame().sendNotification('changeMedia', {'entryId': input});
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
        let playerAdTag = playerFrame().playerConfig.plugins.doubleClick.adTagUrl;
        let encodedAdTag = encodeURIComponent(playerAdTag);
        if (playerAdTag === undefined) {
            alert("DoubleClick is not configured")
        } else {
            window.open(vastInspectUrl + encodedAdTag);
        }
    },
    getCaptions: () => {
        let playerCaptions = playerFrame().mediaElement.getTextTracks();
        let monitor = parent.document.getElementById('appendStats');
        for (let i = 0; i < playerCaptions.length; i++) {
            monitor.append(JSON.stringify(playerCaptions[i], null, 2));
        }
    },
    removeThumb: () => {
        const playerContent = $("#kPlayer_ifp_ifp").contents()[0];
        const playerThumb = $(playerContent).find("#kPlayer_ifp");
        if ($(playerThumb).css("visibility") == 'visible') {
            document.getElementById('removeThumb').textContent = "Show thumbnail";
            $(playerThumb).css("visibility", "hidden");
        } else {
            $(playerThumb).css("visibility", "visible");
            document.getElementById('removeThumb').textContent = "Hide thumbnail";
        }
    },
    removePlayBtn: () => {
        const playerContent = $("#kPlayer_ifp_ifp").contents()[0];
        const playButton = $(playerContent).find(".largePlayBtn");
        if ($(playButton).css("display") == 'block') {
            document.getElementById('removePlay').textContent = "Show play button";
            $(playButton).css("display", "none");
        } else {
            $(playButton).css("display", "block");
            document.getElementById('removePlay').textContent = "Hide play button";
        }
    },
    hideControls: () => {
        const hideControls = $("#kPlayer_ifp_ifp").contents()[0];
        const controls = window.kPlayer_ifp_ifp.document.querySelector('.controlBarContainer');
        if (controls.style.display === "none") {
            controls.style.display = "block";
            document.getElementById('hideControls').textContent = "Hide controls bar";
        } else {
            controls.style.display = "none";
            document.getElementById('hideControls').textContent = "Show controls bar";
        }
    }
};