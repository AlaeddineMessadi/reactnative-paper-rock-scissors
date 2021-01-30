import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from "react-native";
  
Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "Paper Rock Scissors",
    host: '192.168.0.84'
  }) // controls connection & communication settings
  .useReactNative({
        asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate|127.0.0.1/,
    },
    editor: false,
    // eslint-disable-next-line no-unused-vars
    errors: { veto: stackFrame => false },
    overlay: false,
  }) // add all built-in react native plugins
  .connect() // let's connect!
