import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from '../themes/Color';
import {useNavigation} from '@react-navigation/native';
import {ChevronDoubleLeftIcon} from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('window');

const AllMovieScreen = ({route}) => {
  const navigation = useNavigation();
  const {title, data} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop:15,
          marginBottom: 15,

        }}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ChevronDoubleLeftIcon
            size={25}
            strokeWidth={2}
            style={{
              color: 'white',
            }}
          />
        </TouchableWithoutFeedback>
        <Text style={{color:'white',fontSize:20,fontWeight:500}}>
        <Text style={styles.text}>
        {title.length > 1 ? title.slice(0,1) : title}
          </Text>
          {title.length > 1 ? title.slice(1) : title}
        </Text>
        <View style={{width: 25}} /> 
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,          

        }}>
        {data.map((item, index) => {
          const img = 'https://image.tmdb.org/t/p/w500'+item.poster_path
          const name = item.original_title
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', {item:item})}
              >
              <View>
                <Image
                  source={{ uri: img}}
                  style={{
                    width: width * 0.4,
                    height: height * 0.3,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 600,
                    marginTop: 5,
                    textAlign: 'center',
                  }}>
                  {name.length >15 ? name.slice(0,15)+'...':name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AllMovieScreen;
