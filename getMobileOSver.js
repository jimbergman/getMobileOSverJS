//
// getMobileOSver
//   written by Jim Bergman
//   MIT License
//
//  https://github.com/jimbergman/getMobileOSverJS
//
// v1.00 2012-Nov-24 initial release
// v1.10 2014-Oct-17 recognizes iPod and refactored
// v1.20 2016-Sep-28 bug fix for major OS version being two digits (i.e. 10 or higher) & Windows Phone support
//                   major, minor and patch version available & new flags .android .ios .ipad .ipod .iphone .windowsphone

var getMobileOS = {

  init: function ( p ) {
    var ua, uaindex, uaindexend;
    'use strict';

    // see file getMobileOSver-useragent-test.html for sample navigator.userAgent strings
    if ( p ) { ua = p } else { ua = navigator.userAgent }

    // reset the device booleans
    getMobileOS.android = getMobileOS.ios = getMobileOS.ipad = getMobileOS.ipod = getMobileOS.iphone = getMobileOS.windowsphone = false;

    // determine device type and set the things
    if ( ua.match(/iPad/i) ) {
      uaindex = ua.indexOf( 'OS ' ) + 3;
      uaindexend = ua.indexOf( ' ', uaindex );
      getMobileOS.ios = getMobileOS.ipad = true;
      getMobileOS.setAllTheThings( ua, 'iPad', 'ios', uaindex, uaindexend );
    }
    else if ( ua.match(/iPod/i) ) {
      // must come before iPhone
      uaindex = ua.indexOf( 'OS ' ) + 3;
      uaindexend = ua.indexOf( ' ', uaindex );
      getMobileOS.ios = getMobileOS.ipod = true;
      getMobileOS.setAllTheThings( ua, 'iPod', 'ios', uaindex, uaindexend );
    }
    else if ( ua.match(/iPhone/i) ) {
      // must come after iPod
      uaindex = ua.indexOf( 'OS ' ) + 3;
      uaindexend = ua.indexOf( ' ', uaindex );
      getMobileOS.ios = getMobileOS.iphone = true;
      getMobileOS.setAllTheThings( ua, 'iPhone', 'ios', uaindex, uaindexend );
    }
    else if ( ua.match(/Windows Phone/i) ) {
      // must come before Android
      uaindex = ua.indexOf( 'Windows Phone ' ) + 14;
      uaindexend = ua.indexOf( ';', uaindex );
      getMobileOS.windowsphone = true;
      getMobileOS.setAllTheThings( ua, 'Windows Phone', 'windowsphone', uaindex, uaindexend );
    }
    else if ( ua.match(/Android/i) ) {
      // must come after Windows Phone
      uaindex = ua.indexOf( 'Android ' ) + 8;
      uaindexend = ua.indexOf( ';', uaindex );
      getMobileOS.android = true;
      getMobileOS.setAllTheThings( ua, 'Android', 'android', uaindex, uaindexend );
    }
    else {
      getMobileOS.setAllTheThings( '' );
    }

  },

  setAllTheThings: function ( userAgent, device, os, i, e ) {
    'use strict';
    getMobileOS.device = device || '';
    getMobileOS.os = os || false;
    getMobileOS.ver = userAgent.substr( i, ( e - i ) ) || '';
    var temp = getMobileOS.ver.split( /[_\.]+/ );   // iOS versions use '_' between numbers, Android and Windows use '.'
    getMobileOS.major = temp[0] || 0;
    getMobileOS.minor = temp[1] || 0;
    getMobileOS.patch = temp[2] || 0;

    // the funky Apple uses underscores in their version string instead of period like Android and Windows Phone
    if ( getMobileOS.ios ) {
      getMobileOS.ver = getMobileOS.ver.replace( /_/g, '.' );
    }
  }

};
