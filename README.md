getMobileOSver.js
=================

A bit of JavaScript to determine iOS and Android OS version.

Two global vars mobileOS & mobileOSver contain the client's OS and version after a call to getMobileOS();

getMobileOSver-useragent-test.html runs tests with actual user agent strings for iOS 4.3 to 6.0.1, and Android 2.3.4 to 4.2

Example:

&lt;script src="getMobileOSver.js"&gt;&lt;/script&gt;

...

getMobileOS();

if ( userOS === 'iOS' && Number( userOSver.charAt(0) ) &gt;= 5 )
{
  ...; // your code here
}