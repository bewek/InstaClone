import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {instaImage, metaImage} from '../../../Assets/Images';
import commonStyles from '../css';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import Buttons from '../../Components/Buttons';
// import {useDispatch} from 'react-redux';
// import {login} from '../../../Redux/Slice/auth.slice';

const Login = () => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  // const [submitFocus, setSubmitFocus] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          margin: 10,
          textAlign: 'center',
          paddingTop: 20,
        }}>
        InstaClone
      </Text>
      <Image
        source={instaImage}
        style={{height: 70, width: 70, alignSelf: 'center'}}
      />

      <View style={{flex: 1}}>
        <TextInput
          placeholder="Username, email or mobile number"
          style={commonStyles.input}
        />
        <TextInput placeholder="Password" style={commonStyles.input} />

        <Button
          name={'Log in'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FindAccount');
          }}>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              textAlign: 'center',
              margin: 10,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <Buttons
        name={'Create new account'}
        style={styles.butt}
        onPress={() => {
          navigation.navigate('Home');
          // setSubmitFocus(true);
          // dispatch(login());
        }}
      />

      <Image
        source={metaImage}
        style={{
          height: 20,
          width: 80,
          alignSelf: 'center',
          marginBottom: 15,
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  butt: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
