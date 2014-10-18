//
// getMobileOSver
//   written by Jim Bergman
//   PUBLIC DOMAIN
//
//  https://github.com/jimbergman/getMobileOSver.js
//
// v1.00 - 2012-Nov-24
// v1.10 - 2014-Oct-17 - recognizes iPod and refactored

// uncomment these for v1.00 compatibility
// var mobileOS    = getMobileOS.os;   // will either be iOS, Android or unknown (NOTE: lower case in v1.10 breaks compatibility, is now: ios, android or false)
// var mobileOSver = getMobileOS.ver;  // this is a string, use Number(mobileOSver) to convert

// getMobileOS.os      is ios, android or false
// getMobileOS.device  is iPad iPod iPhone or Android
// getMobileOS.ver     is the OS major.minor version as a string e.g. '4.1' or '8.0' ( use Number(mobileOSver) to convert )
var getMobileOS = {
  init: function ( p ) {
    var ua, uaindex;

    if ( p ) { ua = p } else { ua = navigator.userAgent }

    if      ( ua.match(/iPad/i) )    { getMobileOS.device = 'iPad';     getMobileOS.os = 'ios';      uaindex = ua.indexOf( 'OS ' ); }
    else if ( ua.match(/iPod/i) )    { getMobileOS.device = 'iPod';     getMobileOS.os = 'ios';      uaindex = ua.indexOf( 'OS ' ); } // must come before iPhone line
    else if ( ua.match(/iPhone/i) )  { getMobileOS.device = 'iPhone';   getMobileOS.os = 'ios';      uaindex = ua.indexOf( 'OS ' ); }
    else if ( ua.match(/Android/i) ) { getMobileOS.device = 'Android';  getMobileOS.os = 'android';  uaindex = ua.indexOf( 'Android ' ); }
    else                             { getMobileOS.device = 'unknown';  getMobileOS.os = false; }

    // see file getMobileOSver-useragent-test.html for sample navigator.userAgent strings

    if ( getMobileOS.os === 'ios'  &&  uaindex > -1 ) {
      getMobileOS.ver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
      // console.log( 'getMobileOS.ver: iOS v' + getMobileOS.ver );
      return true;
    }
    else if ( getMobileOS.os === 'android' ) {
      getMobileOS.ver = ua.substr( uaindex + 8, 3 );
      // console.log( 'getMobileOS.ver: Android v' + getMobileOS.ver );
      return true;
    }
    else {
      // console.log( 'getMobileOS.os: ' + getMobileOS.os );
      getMobileOS.ver = false;
      return false;
    }
  }
};
