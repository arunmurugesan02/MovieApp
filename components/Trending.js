import { View, Text, TouchableWithoutFeedback,Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';
const{width,height} = Dimensions.get('window')


const MovieCard = ({item,handleClick}) =>{
    const img = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
    return(
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <Image 
                source={{uri:img}}
                style={{
                    width:width*0.6,
                    height:height*0.4,
                    borderRadius:10
                }}
            />
        </TouchableWithoutFeedback>
    )
}

const Trending = ({list}) => {
    const navigation = useNavigation()
    const handleClick = (item) =>{
        navigation.navigate('Movie',{item:item})
    }
  return (
    <View>
      <Text style={{color:'white',fontSize:20,fontWeight:500,marginTop:20,marginLeft:10}}>Trending</Text>
      <Carousel 
      data={list}
      renderItem={({item})=> <MovieCard item={item} handleClick={handleClick} />}
      firstItem={1}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{marginTop:20,alignItems: 'center'}}
      />
    </View>
  )
}

export default Trending