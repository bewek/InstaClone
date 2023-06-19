import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CreateCard = ({image, title}) => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <TouchableOpacity>
        <Image
          source={image}
          style={{height: 40, width: 40, marginTop: 10, marginLeft: 15}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{fontSize: 18, color: 'black', padding: 15}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCard;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
