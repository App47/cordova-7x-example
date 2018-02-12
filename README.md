
# App47 Cordova 7.x Example Project

Clone this repository or download the zip. The sample project just contains the HTML and Javascript for the sample app but most of the work is done by the Cordova command line interface to set up the project and the plugin.  Note, the plugin in use in this project can be found at the [App47 Cordova-7.x repository](https://github.com/App47/Cordova-7.x).

## Setting up the project
You need to have Cordova installed on your system.  You can find out how to install Cordova at [Get Started Fast](http://cordova.apache.org/#getstarted) 

1. Create the project 
```
$ cordova create cordovatest com.mycompany.cordovatest CordovaTest
``` 
2. Change to the project folder
```
$ cd cordovatest
``` 
3. Add the platform(s) you want to support, can just add ios, android or both
```
$ cordova platform add ios android 
``` 
4. Add the App47 plugin
```
$ cordova plugin add https://github.com/App47/Cordova-7.x
``` 
5. Copy the source files to the project's www folder
```
$ cp -R [path-to-clone]/cordova-7.x-example/wwww/* ./www
``` 

## Building and running on Android
For Android you will need to be running JDK 1.8 or higher
1. Build the Android app
```
$ cordova build android 
```
2. Run on Android emulator
```
$ cordova emulate android 
```
3. Run on Android device
```
$ cordova run android --device
```
You can also open the project in AndroidStudio by Import Project and selecting the platforms/android folder. For more information on using Cordova with Android see the [Android Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)

## Building and running on iOS
1. Build the iOS app
```
$ cordova build ios
```
2. Run the iOS app on the simulator or optionally a device
```
$ cordova run ios [--device] 
```

You can also open the iOS project in Xcode by opening platforms/ios/CordovaTest.xcworkspace and running from there.  For more information on using Cordova with iOS see the [iOS Platform Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

