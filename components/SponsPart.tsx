import React, {useState} from 'react';
// @ts-ignore
import Carousel from 'react-native-snap-carousel';
import {View,Dimensions,StyleSheet,Image, TouchableOpacity, Linking} from 'react-native';
import { Text } from 'react-native';
const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/250.png'),
    url:"https://www.oyorooms.com/"
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../assets/zomato_offer.png'),
    url:"https://www.zomato.com/"
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    // illustration: '../assets/1.jpg',
    illustration: require('../assets/flipkart_offer.jpg'),
    url:"https://www.flipkart.com/"

  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../assets/250.png'),
    url:"https://www.oyorooms.com/"

  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../assets/zomato_offer.png'),
    url:"https://www.zomato.com/"
  },
];

const {width: screenWidth} = Dimensions.get('window');

const SponseredPartner =()=> {
  const [entries, setEntries] = useState(ENTRIES1);

  const renderItem =({item,index})=> {
    return (
      <TouchableOpacity onPress={()=> Linking.openURL(item.url)} style={{backgroundColor:'white',borderWidth:1,width:screenWidth-40,height:200, borderRadius:20,alignSelf:'center',elevation:5,borderColor:'#fff'}}>
        <Image source={item.illustration}  style={[styles.image,{
        resizeMode: 'stretch',

        }]}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'orange'}}>BOOK NOW</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={entries}
        renderItem={renderItem}
        autoplay={true}
        layout={'default'}
        loop={true}
      />
    </View>
  );
};

export default SponseredPartner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth,
    height: 150,
    backgroundColor:'aqua',
    justifyContent:'center',
  },
  imageContainer: {
    flex: 1,
    // marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'tomato',
    borderRadius: 8,
  },
  image: {
    height:'80%',
    width:'100%',
    alignSelf:'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});
