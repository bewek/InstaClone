import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Call = ({image, title, description, call, video}) => {
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

      <TouchableOpacity>
        <Image
          source={call}
          style={{
            width: 30,
            height: 30,
            marginRight: 15,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={video}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Call;

const styles = StyleSheet.create({});
