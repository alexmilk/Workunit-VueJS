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
    },
    SingleVastInline: {
        "slotType": "Single VAST Inline",
        "adTagUrl": "https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=is&c=23&pl=VAST&pli=14602547&PluID=0&pos=9562&ord=%5Btimestamp%5D&cim=1",
    },
    VmapPreMidPost: {
        "slotType": "VMAP Pre,Mid,Post ad pods",
        "adTagUrl": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=",
    },
    VPAIDPreroll: {
        "slotType": "VPAID 2.0 Preroll",
        "adTagUrl": "http://search.spotxchange.com/vast/2.0/85394?VPAID=JS&content_page_url={utility.referrer_url}&cb={utility.random}&player_width=640&player_height=480",
    },
    None: {
        "slotType": "No ads",
        "adTagUrl": null,
    }
};/**
 * Created by alex.milkis on 13/12/2017.
 */
