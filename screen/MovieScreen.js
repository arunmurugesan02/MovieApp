import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChevronDoubleLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {styles, theme} from '../themes/Color';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import { fetchCastDeatails } from '../api/movieAPI';

const {width, height} = Dimensions.get('window');

const MovieScreen = ({route}) => {
  const [cast, setCast] = useState([]);
  const item = route.params.item;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const img = 'https://image.tmdb.org/t/p/w500' + item.poster_path;


  useEffect(()=>{
    getCastDetails();
  },[])
   

  const getCastDetails = async ()=>{
    const data = await  fetchCastDeatails(item.id);
    setCast(data.cast);
  }
  console.log(cast[0]);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 10}}
      style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <View
          style={{
            position: 'absolute',
            zIndex: 20,
            marginHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: theme.background,
              borderRadius: 10,
              padding: 5,
            }}>
            <ChevronDoubleLeftIcon
              size={25}
              color={'white'}
              strokeWidth={2.4}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size={35}
              strokeWidth={2.4}
              // color={isFavourite ? theme.background : 'white'}
              style={{
                backgroundColor: isFavourite ? theme.background : 'transparent',
                color: 'white',
                borderRadius: 10,
                padding: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Image
            source={{uri: img}}
            style={{
              width: width,
              height: height * 0.6,
            }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width: width,
              height: height * 0.6,
              position: 'absolute',
            }}
            start={{x: 0.5, y: 0}}
            end={{x: -0.1, y: 1}}
          />
        </View>
      </View>
      <View style={{marginTop: -(height * 0.09), marginBottom: 1}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 500,
            textAlign: 'center',
          }}>
          {item.original_title}
        </Text>
        <Text
          style={{
            color: 'gray',
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 600,
            marginTop: 10,
          }}>
          Released • {item.release_date} • 170 min
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              fontWeight: 600,
            }}>
            Action •
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              fontWeight: 600,
            }}>
            Thrill •
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              fontWeight: 600,
            }}>
            Comedy
          </Text>
        </View>
        <Text
          style={{
            color: 'gray',
            fontSize: 14,
            fontWeight: 400,
            marginHorizontal: 15,
            marginTop: 4,
          }}>
          {item.overview}
        </Text>
      </View>
      <Cast cast={cast} />
    </ScrollView>
  );
};

export default MovieScreen;
