import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../constants/images';

const resortsArray = [
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image1,
  },
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image2,
  },
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image3,
  },
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image1,
  },
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image2,
  },
  {
    name: 'Resort Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ultrices ante cras pellentesque nibh ut tellus venenatis. Ultrices ante cras pellentesque.',
    imageUrl: images.image3,
  },
];

const ResortsList = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, marginTop: '15%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={images.back}
          style={{width: 30, height: 30, marginLeft: '5%'}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 30, marginLeft: '5%'}}>List</Text>
      <ScrollView>
        {resortsArray.map((item, index) => {
          return (
            <TouchableOpacity key={item.name + index.toString()}>
              <View
                style={{
                  marginTop: 10,
                  height: 150,
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  width: '90%',
                  marginLeft: '5%',
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <Image
                  source={item.imageUrl}
                  style={{
                    width: 100,
                    height: 130,
                    borderRadius: 10,
                    marginLeft: 20,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Text style={{fontSize: 20}}>{item.name}</Text>
                  <Text style={{flexWrap: 'wrap', flex: 1, marginTop: 10}}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResortsList;
