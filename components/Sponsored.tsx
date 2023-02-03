import { StyleSheet, Text, View, FlatList,TouchableOpacity, Image,Dimensions} from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('screen').width;
export default function Sponsored() {
    const DATA = [
        { id:1,
          illustration: '../assets/1.jpg',
        },
        {
           id:2,
          illustration: '../assets/1.jpg',
        },
        {
           id:3,
          illustration: '../assets/1.jpg',
        },
        {
            id:4,
            illustration: '../assets/1.jpg',
      
        },
      ];




      const renderItem = () => {
    
        return (
            <TouchableOpacity  style={styles.container}>
            <Image source={require('../assets/logo1.webp')} resizeMode={'cover'}  style={styles.image}/>
          </TouchableOpacity>
        );
      };
    

  return (
    <View>

    <View style={{height:120,width:screenWidth-40,marginVertical:15,borderRadius:20,alignSelf:'center', backgroundColor:'#fff', justifyContent:'center',elevation: 5,borderColor:'#fff',borderWidth:1}}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index + "aasdasd"}
        renderItem={renderItem}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
        />
    </View>
    <TouchableOpacity style={{backgroundColor:'#fff', height:20,width:20, position:'absolute' ,marginTop:120, marginLeft:190}}>
        <Image source={require('../assets/arrow.png')} style={{height:'100%', width:'100%'}}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
    width:screenWidth-20,
    marginHorizontal:10,
    marginVertical:10,
    height:150,
    borderRadius:20,
    justifyContent:'center',
  },
  image: {
    height:50,
    width:50,
    resizeMode: 'cover',
    borderRadius:6,
    alignSelf:"flex-start"
  },
  });