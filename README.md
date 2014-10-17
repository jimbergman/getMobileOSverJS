getMobileOSver.js
=================

A bit of JavaScript to determine iOS and Android OS version.

Sets 3 vars:

    getMobileOS.os      is 'ios' | 'android' | false
    getMobileOS.device  is 'iPad' | 'iPod' | 'iPhone' | 'Android'
    getMobileOS.ver     is major.minor version as a string e.g. '4.1' or '8.0'
                        ( use Number(mobileOSver) to convert )

see code for notes on backwards compatibility issues with v1.00

getMobileOSver-useragent-test.html runs tests with real user agent strings for iOS 4.3 to 8.0.2, and Android 2.3.4 to 4.4.4

Example:

    <script src="getMobileOSver.js"></script>

    ...

    getMobileOS.init();

    if ( getMobileOS.os === 'ios' && Number( getMobileOS.ver ) >= 5 ) {
      ...; // your code here
    }
