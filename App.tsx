/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC } from 'react';
import type { PropsWithChildren } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NavigationContainer, useTheme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native';
import { OptionList } from './Static/data';
import { TouchableHighlight } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
function HomeScreen() {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: colors.card, paddingVertical: 16 }}>

        <FlatList
          data={OptionList}
          numColumns={3}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item, index }) => (
            <View style={{ width: (Dimensions.get("screen").width / 3), alignItems: "center" }}>
              <TouchableOpacity onPress={() => { }}>
                <View style={{ padding: 10, backgroundColor: "#0275d8", elevation: 2, borderRadius: 30 }}>
                  <Ionicons name={item.icon} size={24} color={"#fff"} />

                </View>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, color: colors.text, marginTop: 4 }}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting !</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


const App: FC = () => {
 SplashScreen.hide();
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingBottom: 10,
            height: 60
          },
          header: () => (
            <View style={{ height: 60, backgroundColor: "#fff", justifyContent:"center", paddingHorizontal:16, elevation:10 }}>
                <Text style={{color:DefaultTheme.colors.text, fontSize:22}}>Train Man Demo</Text>
            </View>
          ),

          tabBarActiveTintColor: '#0275d8',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"home"} size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Profile" component={SettingsScreen} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"person"} size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Search" component={SettingsScreen} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"search"} size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"settings"} size={size} color={color} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})