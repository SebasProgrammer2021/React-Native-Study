import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../config';
import { useProfielStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

const HomeScreen = () => {
  const name = useProfielStore(state => state.name)
  const email = useProfielStore(state => state.email)
  const counter = useCounterStore(state => state.count)

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count:{counter}</Text>
    </View>
  );
}


export default HomeScreen;
