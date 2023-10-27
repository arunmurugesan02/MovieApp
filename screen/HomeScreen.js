import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {styles} from '../themes/Color';
import Trending from '../components/Trending';
import MovieList from '../components/MovieList';
import {useIsFocused} from '@react-navigation/native';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../api/movieAPI';
const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);
  const isFocussed = useIsFocused();
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopratedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log(data);
    setTrending(data.results);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log(data.results);
    setUpcoming(data.results);
  };
  const getTopratedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log(data);
    setToprated(data.results);
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingTop: 10}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Bars3CenterLeftIcon color="white" strokeWidth={3} size="25" />
          <Text style={{color: 'white', fontSize: 25, fontWeight: 500}}>
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon color="white" strokeWidth={3} size="25" />
          </TouchableOpacity>
        </View>
        <Trending list={trending} />
        <MovieList title="Upcoming Movies" data={upcoming} />
        <MovieList title="Top Rated" data={toprated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
