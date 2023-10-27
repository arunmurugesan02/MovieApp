import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from '../themes/Color';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const MovieList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 500}}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllMovie', {title:title,data:data})
          }>
          <Text style={[styles.text, {fontSize: 20}]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 15, paddingHorizontal: 14, gap: 20}}>

        {data.map((item, index) => {
          const name = item.original_title
          const img = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', {item:item})}>
              <View>
                <Image
                  source={{uri: img}}
                  style={{
                    width: width * 0.4,
                    height: height * 0.26,
                    borderRadius:15
                  }}
                />
                <Text style={{color: 'white', fontSize: 15, fontWeight: 400}}>
                  {name.length > 20
                    ? name.slice(0, 20) + '...'
                    : name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
