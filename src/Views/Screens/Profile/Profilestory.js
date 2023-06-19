import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Profilestory = ({image, title}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={image}
          style={{
            height: 70,
            width: 70,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: 'grey',
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
      <View>
        <Text style={{color: 'black', textAlign: 'center'}}>{title}</Text>
      </View>
    </View>
  );
};

export default Profilestory;

const styles = StyleSheet.create({});
