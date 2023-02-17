import {Backdrop, BackdropSubheader, Button} from '@react-native-material/core';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

const FiltersScreen = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<any>([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
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
      {/* <Text style={{marginTop: '10%'}}>Date</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text style={{marginTop: '10%'}}>Price</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text style={{marginTop: '10%'}}>Level</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      /> */}

      <Button
        title={'Search'}
        style={{width: '50%', marginTop: '15%', alignSelf: 'center'}}
      />
    </View>
  );
};

export default FiltersScreen;
