# TIMSU (Timbangan Serial)

Read data from RS232 serial *(timbangan)* on android (using api from [bastengao/react-native-serial-port-api: react-native serial port API](https://github.com/bastengao/react-native-serial-port-api)).

## Getting Started

### Installing

```
yarn
```

### Executing program

```
yarn android --deviceId=<ANDROIDDEVICEID>
```

## Step to Reproduce

```console
foo@bar:~$ npx react-native init timsu --version 0.68.2
foo@bar:~$ cd timsuproject
foo@bar:~/timsuproject$ yarn add prajadimas/react-native-serial-port-api@1.3.2
foo@bar:~/timsuproject$ npx react-native run-android
```

## License

Who cares...

## Acknowledgments

* [bastengao/react-native-serial-port-api: react-native serial port API](https://github.com/bastengao/react-native-serial-port-api)
* [Setting up the development environment · React Native](https://reactnative.dev/docs/0.68/environment-setup)