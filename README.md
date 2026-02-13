# React Native App - Development Build

This app uses **Expo Development Build** instead of Expo Go.

## Running the App

### Web (Easiest)
```bash
npm run web
```
Then open http://localhost:8081 in your browser.

### Android
```bash
npm run android
```
This will build and install the development client on your Android device/emulator.

### iOS (macOS only)
```bash
npm run ios
```
This will build and install the development client on your iOS simulator.

## Why Development Build?

- ✅ No version conflicts with React Native Reanimated
- ✅ Full control over native dependencies
- ✅ Better debugging capabilities
- ✅ Production-like environment

## First Time Setup

If running on mobile for the first time:
```bash
npm run prebuild
npm run android  # or npm run ios
```

This will generate the native Android/iOS folders and build the app.
