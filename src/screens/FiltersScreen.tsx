import {Backdrop, BackdropSubheader, Button} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Touchable, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import {
  AuthTypes,
  LoginActionSaga,
  LOGIN_SAGA,
  LogOutActionSaga,
  LOGOUT_SAGA,
  RegisterActionSaga,
} from '../redux/actionTypes';
import {Redux} from '../redux/store';

interface ReduxProps {
  logout: () => void;
  token: string;
}

const FiltersScreen = ({logout, token}: ReduxProps) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<any>([
    {label: 'Romania', value: 'romania'},
    {label: 'Austria', value: 'austria'},
  ]);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [price, setPrice] = useState<string>('');
  const [open3, setOpen3] = useState<boolean>(false);
  const [value3, setValue3] = useState<string>('');
  const [items3, setItems3] = useState<any>([
    {label: 'Easy', value: 'easy'},
    {label: 'Medium', value: 'Medium'},
    {label: 'High', value: 'high'},
  ]);

  useEffect(() => {
    if (!token) navigation.navigate('LoginScreen');
  }, [token]);

  return (
    <View style={{width: '90%', marginLeft: '5%'}}>
      <Text style={{fontSize: 30, marginTop: 50}}>Filters</Text>
      <Text style={{marginTop: '10%'}}>Country</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text style={{marginTop: '10%'}}>Date</Text>
      <TouchableOpacity
        onPress={() => setOpenCalendar(true)}
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
        }}>
        <TextInput editable={false} value={date.toDateString()} />
      </TouchableOpacity>
      <DatePicker
        modal
        open={openCalendar}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpenCalendar(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenCalendar(false);
        }}
      />
      <Text style={{marginTop: '10%'}}>Price($)</Text>
      <TextInput
        onChangeText={text => setPrice(text)}
        value={price}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          backgroundColor: 'white',
          height: 50,
          borderRadius: 5,
        }}
      />
      <Text style={{marginTop: '10%'}}>Level</Text>
      <DropDownPicker
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
        style={{zIndex: 5}}
      />

      <Button
        title={'Search'}
        style={{width: '50%', marginTop: '15%', alignSelf: 'center'}}
        onPress={() => navigation.navigate('ResortsListScreen')}
      />
      <Button
        title={'LOG OUT'}
        style={{width: '50%', marginTop: '15%', alignSelf: 'center'}}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: Redux) => {
  const {registerError, token} = state.authReducer;
  return {registerError, token};
};

const mapDispatchToProps = (
  dispatch: (arg0: LogOutActionSaga | AuthTypes | LoginActionSaga) => void,
) => ({
  logout: () => dispatch({type: LOGOUT_SAGA, payload: null}),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
