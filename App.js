import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StateProvider } from './src/contextApi/context';
import reducer, { initialState } from './src/contextApi/reducer';
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
 
  return ( 
    
      <StateProvider initialState={initialState} reducer={reducer} >
         <StatusBar style="auto" />
         <StackNavigator/>   
      </StateProvider>  
  );
}

const styles = StyleSheet.create({
  
});
