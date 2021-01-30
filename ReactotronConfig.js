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
    errors: { veto: stackFrame => false },
    overlay: false,
  }) // add all built-in react native plugins
  .connect() // let's connect!






// Reactotron
//   .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure({
//     name: "React Native Demo"
//   })
//   .useReactNative({
//     asyncStorage: false, // there are more options to the async storage.
//     networking: { // optionally, you can turn it off with false.
//       ignoreUrls: /symbolicate/
//     },
//     editor: false, // there are more options to editor
//     errors: { veto: (stackFrame) => false }, // or turn it off with false
//     overlay: false, // just turning off overlay
//   })
//   .connect();