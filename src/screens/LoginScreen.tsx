import {Button, TextInput} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {
  AuthTypes,
  LoginActionSaga,
  LOGIN_SAGA,
  RegisterActionSaga,
} from '../redux/actionTypes';
import {Redux} from '../redux/store';

interface ReduxProps {
  login: (email: string, pass: string) => void;
  token: string;
}

const LoginScreen = ({login, token}: ReduxProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    if (token) {
      navigation.navigate("FiltersScreen")
    }
  }, [token]);

  return (
    <View style={{flex: 1, marginTop: 30, width: '80%', marginLeft: '10%'}}>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 50}}>
        WELCOME TO SNOWFINDER
      </Text>
      <Text style={{fontSize: 15, alignSelf: 'center'}}>
        LOGIN AND FIND YOUR SNOW
      </Text>
      <TextInput
        label="Email"
        variant="outlined"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        style={{marginTop: '30%'}}
      />
      <TextInput
        label="Password"
        variant="outlined"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
        style={{marginTop: 40}}
      />
      <Button
        title="LOGIN"
        onPress={() => login(email, password)}
        style={{marginTop: 60}}
      />
      <TouchableOpacity onPress={() => {navigation.navigate("RegisterScreen")}}>
        <Text style={{fontSize: 13, marginTop: 20}}>
          Don't have an account yet? Register here...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: Redux) => {
  const {registerError, token} = state.authReducer;
  return {registerError, token};
};

const mapDispatchToProps = (
  dispatch: (arg0: RegisterActionSaga | AuthTypes | LoginActionSaga) => void,
) => ({
  login: (email: string, password: string) =>
    dispatch({type: LOGIN_SAGA, payload: {email, password}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
