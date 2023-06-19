import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {cameraImage, myimgImage, purplegirlImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const messgs = [
  {
    id: 0,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'Hello',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 1,
    sender: {
      name: 'Jenny',
      image: purplegirlImage,
    },
    msg: 'Hi',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 2,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'What are you doing',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 3,
    sender: {
      name: 'Jenny',
      image: purplegirlImage,
    },
    msg: 'I am doing some works and you',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 4,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'I am playing games',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
];

const MessageSection = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage', messgs);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage', messgs);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage', messgs);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IMessage');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image
            source={purplegirlImage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 8,
            }}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
              }}>
              Jenny Shaw
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'grey',
              }}>
              How are you
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageSection;

const styles = StyleSheet.create({});
