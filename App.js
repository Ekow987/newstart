import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import Appstack from './src/routes/stackRoute';
import { NativeBaseProvider} from 'native-base';

export default function App() {
  return (

<SafeAreaProvider>
<NavigationContainer>
  <NativeBaseProvider>
< Appstack/>
</NativeBaseProvider>
</NavigationContainer>
</SafeAreaProvider>
  



);
  }



//

// export default function App() {
//   return (
//    
//   );
// }