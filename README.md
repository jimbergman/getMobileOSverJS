# getMobileOSverJS

A bit of JavaScript to determine OS version from Android, iOS and Windows Phone devices.

Extracts information from the UserAgent string in the browser:

    getMobileOS.device  is 'Android' | 'iPad' | 'iPod' | 'iPhone' | 'Windows Phone' | '' if unknown
    getMobileOS.os      is 'android' | 'ios' | 'windowsphone' | false if unknown

    getMobileOS.ver     is major.minor.patch version as a string e.g. '4.4.4' or '10.0' | '' if unknown
    getMobileOS.major   is the numeric major version, i.e. in '9.3.6' it would be 9 | 0 if unknown
    getMobileOS.minor   is the numeric minor version, i.e. in '9.3.6' it would be 3 | 0 if unknown
    getMobileOS.patch   is the numeric patch version, i.e. in '9.3.6' it would be 6 | 0 if unknown

    getMobileOS.android true if Android, all others (.ios .ipad .ipod .iphone .windowsphone) | false
    getMobileOS.ios     true if iOS and also one of these will be true [.ipad .ipod .iphone] | false
    getMobileOS.ipad    true if iPad | false
    getMobileOS.ipod    true if iPod | false
    getMobileOS.iphone  true if iPhone | false
    getMobileOS.windowsphone  true if Windows Phone | false

Small, lightweight, and mobile friendly. Tested on iOS 4.3+, Android 2.3+ and Windows Phone 8+.

Works great with Cordova/PhoneGap applications.

## Requirements

Include these in your HTML:

    <script src="getMobileOSver.js"></script>

or use the minified version:

    <script src="getMobileOSver.min.js"></script>

## Example

    getMobileOS.init();

    if ( getMobileOS.ios && getMobileOS.major >= 9 ) {
      ...; // your code here
    }

## Dependencies

None. All code is vanilla JavaScript v5.

## Unit Test Data

getMobileOSver-useragent-test.html runs tests with real user agent strings for Android 2.3.4 to 7.0, iOS 4.3 to 10.0.1 and Windows Phone 8.0 to 10.0 (all the latest as of this push date).

## Live Demo

http://jimbergman.net/scripts/getMobileOSverJS/

## version 1.0 compatibility

    // add these for v1.00 compatibility
    // (NOTE: lower case in v1.10+ breaks compatibility, is now: ios | android | windowsphone | false)
    var mobileOS    = getMobileOS.os;
    var mobileOSver = getMobileOS.ver;

## License

Licensed under the [MIT License](http://opensource.org/licenses/MIT). Please refer to the LICENSE file.
