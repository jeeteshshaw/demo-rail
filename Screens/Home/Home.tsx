import { StyleSheet, Text, View,FlatList, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OptionList } from '../../Static/data';
import { Button } from 'react-native-paper';

const Home = () => {
    const { colors } = useTheme()
  return (
      
          <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: colors.card, paddingVertical: 16, flex:1, alignItems:"center" }}>
              <View style={{backgroundColor:"#fff", width:"90%", elevation:10, borderRadius:20,padding:20}}>
                <View style={{}}>
                  <View style={{justifyContent:"space-between",flexDirection:"row", height:40,alignItems:"flex-start", borderBottomWidth:2, borderColor:"#cccccc"}}>
                    <Text style={{color:"#F67325", fontSize:16, flex:1, textAlign:"center", fontWeight:"700",height:"100%"}}>Search by Station</Text>
                    <View style={{width:1.5, height:30, backgroundColor:"#cccccc"}} />
                    <Text style={{flex:1, color:"#F67325", fontSize:16, textAlign:"center", fontWeight:"700"}}>Search by Train</Text>
                    
                  </View>
                  <View style={{width:"50%", height:4, backgroundColor:"#F9822B",  borderTopLeftRadius:20, borderTopRightRadius:20, transform:[{translateY:-3.5}], marginBottom:10}} />
                  <View>
                    
                    <FlatList
                      data={["From Station","To Station"]}
                      keyExtractor={(item)=>item}
                      scrollEnabled={false}
                      ItemSeparatorComponent={()=><View  style={{width:"100%", height:1, marginVertical:10, backgroundColor:"#cccccc", position:"relative"}} >
                        <View style={{position:"absolute", right:16, top:-16, backgroundColor:"#fff", borderRadius:50, borderWidth:1, padding:2}}>
                          <MaterialCommunityIcons name={"swap-vertical"} size={30} color={"#F67325"} />
                        </View>
                      </View>}
                      renderItem={({item})=>(
                        <View style={{height:40, alignItems:"center", flexDirection:"row", width:"100%"}}>
                        <MaterialCommunityIcons name="train" size={30}  color={"#F67325"}/>
                        <TextInput placeholder='From Station' style={{fontSize:18, paddingHorizontal:10}} />

                      </View>
                      )}
                    />
                    <View style={{width:"100%", flexDirection:"row", marginTop:10, justifyContent:"space-between", alignItems:"center"}}>
                        <Text style={{color:"#747474", fontSize:16}}>Select Date</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomWidth:1, borderColor:"#cccccc"}}>
                          <MaterialCommunityIcons size={24}  name="calendar-blank-outline" color={"#F9822B"} />
                          <Text style={{fontWeight:"700", fontSize:18, color:"#000", lineHeight:40}}> 30th <Text style={{fontSize:14,}}>Jan, Mon</Text> </Text>
                        </View>
                    </View>
                    <Button  style={{backgroundColor:"#F9822B", marginVertical:16, height:45, justifyContent:"center"}} labelStyle={{fontSize:16}} mode="contained" onPress={() => console.log('Pressed')}>
                      Search Trains
                    </Button>
                  </View>
                </View>                


              </View>
           
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