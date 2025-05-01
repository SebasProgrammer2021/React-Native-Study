import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';
import CustomSwitch from '../../components/ui/CustomSwitch';
import Separator from '../../components/ui/Separator';
import Title from '../../components/ui/Title';

const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isEnabled: true,
    isHungry: false,
    isHappy: true
  })
  return (
    <CustomView style={{
      // marginTop: 100,
      paddingHorizontal: 20
    }}>
      {/* <Card>
        <Switch
          trackColor={{ false: '#767577', true: '#ff0000' }}
          thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Card> */}
      <Title text='Switches' />

      <Card>
        <CustomSwitch
          isOn={state.isEnabled}
          onChange={(value) => setState({ ...state, isEnabled: value })}
          text='activo'
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text='hambre'
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text='feliz'
        />
      </Card>
    </CustomView>
  );
}

const styles = StyleSheet.create({})

export default SwitchScreen;
