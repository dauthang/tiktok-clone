import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import HomeButtonTabNavigation from "./src/navigation/homeButtonNavigationTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <SafeAreaProvider style={{flex: 1, backgroundColor: 'black'}}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeButtonTabNavigation}/>
            </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
