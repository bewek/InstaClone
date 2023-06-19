import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {purplegirlImage} from '../../../Assets/Images';
import NewChatTop from './NewChatTop';
import NewChats from './NewChats';

const msg = [
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
  {image: purplegirlImage, title: 'Jenny Shaw', description: 'jenny345'},
];

const NewChat = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <NewChatTop />
        <Text style={{fontSize: 16, color: 'black', margin: 10}}>
          Suggested
        </Text>
        <View>
          {msg.map((item, index) => {
            return (
              <NewChats
                key={index}
                image={item?.image}
                title={item?.title}
                description={item?.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewChat;

const styles = StyleSheet.create({});
