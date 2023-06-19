import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {crossImage} from '../../../Assets/Images';
import Button from '../../Components/Button';

const AddCard = ({image, name, desc}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image
          source={crossImage}
          style={{height: 15, width: 15, alignSelf: 'flex-end', margin: 10}}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Image
            source={image}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
          {name}
        </Text>
        <Text style={{textAlign: 'center'}}>{desc}</Text>
        <Button name={'Follow'} style={styles.butt} />
      </View>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  card: {
    height: 240,
    width: '45%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 10,
  },
  butt: {
    backgroundColor: '#2196f3',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    height: 45,
  },
});
