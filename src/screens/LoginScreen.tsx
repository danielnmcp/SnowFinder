import React from 'react';
import { Button, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {
  AuthTypes,
  LoginActionSaga,
  LOGIN_SAGA,
  RegisterActionSaga,
  REGISTER_SAGA,
} from '../redux/actionTypes';
import {Redux} from '../redux/store';

interface ReduxProps {
  registerError: boolean;
  register: (
    name: string,
    surname: string,
    email: string,
    password: string,
  ) => void;
  login: (email: string, pass: string) => void;
  token: string;
}

const LoginScreen = ({registerError, register, login, token}: ReduxProps) => {
    console.log(token)
    return (
        <View>
            <Text>HLLEO</Text>
            <Button title="REGISTER" onPress={() => register("andrei", "pop", "andreipop02@yahoo.com", "Parola123.")} />
            <Button title="LOGIN" onPress={() => login("andreipop02@yahoo.com", "Parola123.")} />
        </View>
    )
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
  login: (email: string, password: string) =>
    dispatch({type: LOGIN_SAGA, payload: {email, password}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
