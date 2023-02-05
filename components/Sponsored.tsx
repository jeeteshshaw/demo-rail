import { StyleSheet, Text, View, FlatList,TouchableOpacity, Image,Dimensions} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/logo1.webp'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../assets/zomato_logo.png'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    // illustration: '../assets/1.jpg',
    illustration: require('../assets/flipkart_logo.png'),

  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/oyo_logo.png'),

  },

];
const screenWidth = Dimensions.get('screen').width;
export default function Sponsored() {
    




      const renderItem = ({item, index}) => {
    
        return (
            <TouchableOpacity  style={styles.container}>
            <Image source={item.illustration} resizeMode={'cover'}  style={styles.image}/>
          </TouchableOpacity>
        );
      };
    

  return (
    <View>

    <View style={{height:120,width:screenWidth-40,marginVertical:15,borderRadius:20,alignSelf:'center', backgroundColor:'#fff', justifyContent:'center',elevation: 5,borderColor:'#fff',borderWidth:1}}>
      <FlatList
        data={ENTRIES1}
        keyExtractor={(item, index) => index + "aasdasd"}
        renderItem={renderItem}
        style={{}}
        // horizontal={true}
        numColumns={4}
        
        ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
        />
    </View>
    <TouchableOpacity style={{position:'absolute', alignSelf:"center", bottom:-4,}}>
        {/* <Image source={require('../assets/arrow.png')} style={{height:'100%', width:'100%'}}/> */}
        <MaterialCommunityIcons  name="chevron-down"  size={40}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"25%",
    marginVertical:20,
    justifyContent:"center",
    // backgroundColor:"red",
    height:50,
    // justifyContent:'center',
    // alignSelf:"center"
  },
  image: {
    height:50,
    width:50,
    resizeMode: 'cover',
    // borderRadius:6,
    borderRadius:10,


    alignSelf:"center"
  },
});