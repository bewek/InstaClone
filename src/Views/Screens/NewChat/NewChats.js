import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NewChats = ({image, title, description}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}>
      <TouchableOpacity>
        <Image
          source={image}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            marginLeft: 8,
          }}
        />
      </TouchableOpacity>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            fontSize: 18,

            color: 'black',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'grey',
          }}>
          {description}
        </Text>
      </View>
      <View
        style={{
          height: 30,
          width: 30,
          borderColor: '#525252',
          borderWidth: 2,
          borderRadius: 40,
          alignSelf: 'center',
        }}></View>
    </View>
  );
};

export default NewChats;

const styles = StyleSheet.create({});
