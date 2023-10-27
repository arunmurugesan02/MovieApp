import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import MovieScreen from '../screen/MovieScreen';
import AllMovieScreen from '../screen/AllMovieScreen';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name="Home"  component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Movie" component={MovieScreen} />
        <Stack.Screen options={{headerShown:false}} name="AllMovie" component={AllMovieScreen} />
        <Stack.Screen options={{headerShown:false}} name="MovieScreen" component={MovieScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation





