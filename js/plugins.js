/**
 * Created by alex.milkis on 01/08/2017.
 */
var plugins = [
    {
        "displayName" : "DoubleClick With Debugging",
        "json" : {
            "DoubleClick": {
                "plugin": true,
                "adTagUrl": "",
                "prerollUrlJs": null,
                "leadWithFlash": false,
                "trackCuePoints": false,
                "debugMode": true, //Should enable debugMode for DoubleClick systems.
                "adsManagerLoadedTimeout": 15000
            }
        }
    } ,
    {
        "displayName" : "Google Analytics",
        "json" : {
            "googleAnalytics": {
                "urchinCode": "UA-49010777-1",
                "trackEventMonitor": "",
                "trackingCategory": "Kaltura Video Events",
                "customEvent": "doPlay,relatedVideoSelect,doPause,doStop,playerPlayed",
                "plugin": true
            }
        }
    } ,
    {
        "displayName" : "Source Selector",
        "json" : {
            "sourceSelector": {
                "switchOnResize": true,
                "simpleFormat": true,
                "displayMode": "sizebitrate",
                "plugin": true
            }
        }
    } ,
    {
        "displayName" : "Closed Captions",
        "json" : {
            "closedCaptions": {
                "layout": "ontop",
                "displayCaptions": false,
                "fontFamily": "Helvetica,Arial",
                "fontsize": 12,
                "fontColor": "rgb(255, 255, 255)",
                "bg": "rgb(0, 0, 0)",
                "useGlow": false,
                "glowBlur": 0,
                "glowColor": "#ffffff",
                "showEmbeddedCaptions": false,
                "plugin": true,
                "hideWhenEmpty": true,
                "enableOptionsMenu": true
            }
        }
    },
    {
        "displayName" : "Chromecast",
        "json" : {
            "chromecast": {
                "plugin" : true,
                "applicationId" : true,
                "parent": "controlsContainer"
            }
        }
    },
    {
        "displayName" : "KS",
        "json" : {
            "ks": "Enter KS String here"
        }
    },
    {
        "displayName" : "LiveCore - Disable Live Check",
        "json" : {
            "liveCore.disableLiveCheck": true
        }
    }
];
