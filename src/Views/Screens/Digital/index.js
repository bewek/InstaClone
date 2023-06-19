import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  contImage,
  crossImage,
  lockImage,
  metaImage,
  uploadImage,
} from '../../../Assets/Images';
import {markChanged} from 'immer/dist/internal';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const Digital = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image
          source={crossImage}
          style={{height: 25, width: 25, margin: 15}}
        />
      </TouchableOpacity>
      <Image
        source={metaImage}
        style={{height: 30, width: 100, marginLeft: 15}}
      />
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          fontWeight: '700',
          textAlign: 'center',
        }}>
        Share digital collectibles with followers and fans
      </Text>
      <Text style={{fontSize: 15, paddingHorizontal: 15}}>
        Connect a digital wallet to share your NFT's.
      </Text>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', margin: 15}}>
          <Image
            source={lockImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 20}}>
            Securely connect digital wallets like
            {'\n'}
            Trust Wallet and Rainbow.
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 15}}>
          <Image
            source={uploadImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 20}}>
            Share your collection from multiple
            {'\n'}
            blockchains.
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 15}}>
          <Image
            source={contImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 20}}>
            You'll be tagged in the digital collectibles
            {'\n'}
            you've created or own. Learn more
          </Text>
        </View>
      </View>
      <Button name={'Get started'} />
    </View>
  );
};

export default Digital;

const styles = StyleSheet.create({});
