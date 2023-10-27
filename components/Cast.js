import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Cast = ({cast}) => {
  return (
    <View style={{margin: 15}}>
      <Text
        style={{
          color: 'white',
          fontSize: 23,
          fontWeight: '500',
          marginBottom: 10,
          marginHorizontal: 6,
        }}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            console.log(person);
            let characterName = person.character;
            let personName = person.original_name;
            const img = 'https://image.tmdb.org/t/p/w300' + person.profile_path;
            return (
              <TouchableOpacity
                key={index}
                style={{alignItems: 'center', marginRight: 10}}>
                <View
                  style={{
                    overflow: 'hidden',
                    borderRadius: 50,
                    height: 80,
                    width: 75,
                    alignItems: 'center',
                    borderWidth: 2,
                    borderColor: 'gray',
                  }}>
                  <Image
                    source={{uri:img}}
                    style={{
                      width: 70,
                      height: 75,
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 400,
                    marginTop: 3,
                  }}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + '...'
                    : characterName}
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 15,
                    fontWeight: 400,
                    marginTop: 3,
                  }}>
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
