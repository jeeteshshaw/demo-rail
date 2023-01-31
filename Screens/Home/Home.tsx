import { StyleSheet, Text, View,FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OptionList } from '../../Static/data';

const Home = () => {
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
      
     
      
      
  )
}

export default Home

const styles = StyleSheet.create({})

export function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting !</Text>
      </View>
    );
  }