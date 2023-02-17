import {Button, TextInput} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {
  AuthTypes,
  LoginActionSaga,
  RegisterActionSaga,
  REGISTER_SAGA,
} from '../redux/actionTypes';
import {Redux} from '../redux/store';

interface ReduxProps {
  register: (
    name: string,
    surname: string,
    email: string,
    password: string,
  ) => void;
  token: string;
}

const RegisterScreen = ({register, token}: ReduxProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (token) {
      //Add navigation here
    }
  }, [token]);

  return (
    <View style={{flex: 1, marginTop: 30, width: '80%', marginLeft: '10%'}}>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 50}}>
        WELCOME TO SNOWFINDER
      </Text>
      <Text style={{fontSize: 15, alignSelf: 'center'}}>
        REGISTER AND GET A COLD WELCOME
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
        title="REGISTER"
        onPress={() =>
          register('mockName', 'mockSurname', email, password)
        }
        style={{marginTop: 60}}
      />
      {
        //add navigation to login screen Onpress
      }
      <TouchableOpacity onPress={() => {}}>
        <Text style={{fontSize: 13, marginTop: 20}}>
          Already have an account? Login instead...
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
  register: (name: string, surname: string, email: string, password: string) =>
    dispatch({type: REGISTER_SAGA, payload: {name, surname, email, password}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
