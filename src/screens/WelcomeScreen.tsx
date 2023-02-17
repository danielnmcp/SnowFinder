import {Text} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {images} from '../constants/images';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={images.welcomeScreen}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{marginBottom: 30}} onPress={() => {navigation.navigate('LoginScreen')}}>
          <Text style={{color: 'white'}}>CONTINUE</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
