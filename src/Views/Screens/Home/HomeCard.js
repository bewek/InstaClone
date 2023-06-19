import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeCard = ({
  img,
  title,
  threeimg,
  image,
  heart,
  comment,
  message,
  seen,
  desc,
  name,
  description,
  viewall,
  hour,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={img}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 17,
            color: 'black',
            fontWeight: '500',
            marginLeft: 10,
            alignSelf: 'center',
            flex: 1,
          }}>
          {title}
        </Text>

        <TouchableOpacity>
          <Image
            source={threeimg}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          source={image}
          style={{height: 350, width: '95%', marginLeft: 10}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image source={heart} style={styles.imagee} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={comment} style={styles.imagee} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={message} style={styles.imagee} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={seen}
            style={{height: 30, width: 100, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          {desc}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Text style={{color: 'black', marginLeft: 10, fontWeight: 'bold'}}>
            {name}
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'black', marginLeft: 10}}>{description}</Text>
      </View>
      <Text style={{marginLeft: 10}}>{viewall}</Text>
      <Text style={{fontSize: 12, marginLeft: 10}}>{hour}</Text>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  imagee: {
    height: 20,
    width: 20,
    margin: 10,
  },
});
