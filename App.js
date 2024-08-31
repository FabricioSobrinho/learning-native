import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PageCep from "./src";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <Button title="CEP" onPress={() => navigation.navigate('CEP')} />
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={styles.details}>
      <Text>Details Screen</Text>
    </View>
  )

}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CEP" component={PageCep} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: '#AE2E34',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f2f8ff',
    margin: '3px'
  },
  home: {
    backgroundColor: "#279D9F",
    color: "#f2f8ff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;