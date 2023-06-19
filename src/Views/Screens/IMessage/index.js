import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from './MessageComponent';
import {
  calliconImage,
  cameraImage,
  leftarrowImage,
  messageImage,
  myimgImage,
  purplegirlImage,
  videocalliconImage,
} from '../../../Assets/Images';

const msgs = [
  {
    sender: {
      name: 'me',
      image: '',
    },
    msg: '',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
];

const IMessage = () => {
  const navigation = useNavigation();

  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);

  const sendFunc = sender => {
    if (msg) {
      let msgs = {
        sender: {name: sender ?? 'me', image: myimgImage},
        msg: msg,
        sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        id: messages.length,
      };
      setMessages([...messages, msgs]);
      setMsg('');
    }
  };

  const deleteMessage = id => {
    let filtered = messages.filter(msg => msg.id !== id);
    setMessages(filtered);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <Image
            source={leftarrowImage}
            style={{
              height: 25,
              width: 25,
              marginLeft: 10,
              marginTop: 15,
            }}
          />
        </TouchableOpacity>
        <Image
          source={purplegirlImage}
          style={{
            height: 30,
            width: 30,
            borderRadius: 30,
            alignSelf: 'center',
            marginLeft: 20,
          }}
        />
        <View style={{margin: 5, flex: 1, paddingHorizontal: 15}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Jenny Shaw
          </Text>
          <Text>Active Now</Text>
        </View>

        <Image
          source={calliconImage}
          style={{height: 25, width: 25, alignSelf: 'center', marginRight: 30}}
        />
        <Image
          source={videocalliconImage}
          style={{height: 25, width: 25, alignSelf: 'center', marginRight: 15}}
        />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={[...messages].reverse()}
          inverted
          renderItem={React.useCallback(
            ({item}) => {
              return (
                <MessageComponent
                  onDelete={() => {
                    deleteMessage(item.id);
                  }}
                  key={item.id}
                  msg={item}
                  date={item?.date}
                  image={item?.image}
                />
              );
            },
            [messages],
          )}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-around',
          borderColor: '#d9e3f0',
          borderWidth: 1,
        }}>
        <TouchableOpacity>
          <Image source={cameraImage} style={styles.image} />
        </TouchableOpacity>
        <TextInput
          placeholder="message..."
          value={msg}
          style={styles.input}
          onChangeText={setMsg}
        />
        <TouchableOpacity onPress={() => sendFunc()}>
          <Image source={messageImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IMessage;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  input: {
    margin: 10,
    fontSize: 20,
    padding: 10,
    width: 280,
    height: 40,
  },
  image: {
    height: 25,
    width: 25,
    marginTop: 15,
  },
});
