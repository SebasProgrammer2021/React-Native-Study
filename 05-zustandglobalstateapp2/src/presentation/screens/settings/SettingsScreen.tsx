import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const counter = useCounterStore(state => state.count)
  const incrementBy = useCounterStore(state => state.incrementBy)
  const decrementBy = useCounterStore(state => state.decrementBy)
  const navigation = useNavigation();

  useEffect(() => {

    navigation.setOptions({
      title: `Counter ${counter}`
    })
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Text style={styles.title}>Count:{counter}</Text>
      <Pressable style={styles.primaryButton}
        onPress={() => incrementBy(1)}
      >
        <Text>
          Incrementar +1
        </Text>
      </Pressable>
      <Pressable style={styles.primaryButton}
        onPress={() => decrementBy(1)}
      >
        <Text>
          Decrementar -1
        </Text>
      </Pressable>
    </View>
  );
}


export default SettingsScreen;
