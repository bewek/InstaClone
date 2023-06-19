import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const text = {
  color: 'black',
};

const Button = ({
  onPress,
  name,
  width = '90%',
  style,
  textStyle = text,
  source,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {width: width}, style]}>
        {source && (
          <Image
            source={source}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
        )}
        <Text style={[styles.buttonText, textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 55,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    marginLeft: 20,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});
