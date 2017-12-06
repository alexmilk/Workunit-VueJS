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
        cleanPreviousErrors();
    }
};
const pageFunctions = {
    checkAdTag: (input) => {window.open(input)},
    cleanMonitor: () => $('#appendStats').text(''),
    vpaasSearch:  () => {
        let searchTerm = $('#searchInput').val();
        window.open("https://vpaas.kaltura.com/search/#stq=" + searchTerm + "&stp=1")
    },

};