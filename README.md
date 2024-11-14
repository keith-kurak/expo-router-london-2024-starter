# React Native London Conf 2024 Workshop: Expo Router
Workshop starter template for the Expo Router workshop at React Native London Conf 2024.

## How to use this repo

1. Fork this repo. You'll start working right on `main`.
2. Grab the [lessons from here](https://github.com/keith-kurak/expo-router-london-2024-lessons) (clone it, open it in your browser, whatever works for you).
2. Start at the first module by opening up the file starting with "01-".
3. Do the rest of the modules in order.

## Prerequisites
- Node LTS version (18+)
- Visual Studio Code
- Expo Go on your device or simulator
- Web browser

> [!NOTE]
> ~~We're working on the cutting edge on this workshop - SDK 52. We anticipate it will be fully-live just before the workshop, but for now, if you test this out before the workshop, you'll have to download the SDK 52 Expo Go beta through the Expo CLI [instrutions](https://expo.dev/changelog/2024/10-24-sdk-52-beta#how-to-try-out-the-beta-release) for use with Android or iOS simulators. If you want to run it on your iOS device before the new version is ready, you can make a development build (see below). Of course, we'll be ready to help you out in the workshop, and even if you have issues getting things working on a device, rest assured that practically all exercises can be completed in a web browser.~~ Nevermind! SDK 52 is LIVE! Just download Expo Go from the Play Store or App Store.

You actually don't need a Mac for this workshop. You don't need to do any native builds for the main workshop exercises (maybe useful for 1 or 2 side quests)

## Test your setup before the workshop

Do these steps to ensure you'll be ready to go when the workshop starts:

1. Fork and clone this repo

2. Open the project in Visual Studio Code and install the recommended extensions.

3. Restore dependencies with

```npm install```

4. Run `npx expo start`

5. Press `w` to open the app in your web browser.

6. Scan the QR code with your phone to test the app in Expo Go.

> [!TIP]
> Pull changes from the forked starter repo and run `npm install` again right before the workshop, as there may be fixes and version bumps!

## Make a development build for an iOS device with EAS Build (Apple Developer subscription required)
(see https://docs.expo.dev/develop/development-builds/use-development-builds/)

1. Clone the repo, run `npm install`
2. Run `npx expo install expo-dev-client`
3. Install the EAS CLI (`npm install -g eas-cli`)
4. Run `eas build:configure` (login to / create your Expo account if needed)
5. Run `eas credentials` to register your device for ad-hoc distribution ("website" method is easiest)
6. Run `eas build --profile development --platform ios`

## Make a development build locally
(see https://docs.expo.dev/guides/local-app-development/)

1. Clone the repo, run `npm install`
2. Run `npx expo install expo-dev-client`
3. Run `npx expo run:ios`

## Other resources

TBD

## Connect
- [Linked In](https://www.linkedin.com/in/keith-kurak/)
- [Expo Discord](https://chat.expo.dev)
