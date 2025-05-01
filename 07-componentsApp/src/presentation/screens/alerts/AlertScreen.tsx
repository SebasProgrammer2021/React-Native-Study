import React, { useContext } from 'react';
import { Alert, StyleSheet } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import Separator from '../../components/ui/Separator';
import Button from '../../components/ui/Button';
import { promptAdapter } from '../../../config/adapters/prompt.adapter';
import { ThemeContext } from '../../context/ThemeContext';

const AlertScreen = () => {
  const { isDark } = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light'
      }
    );

  /*************  ✨ Codeium Command ⭐  *************/
  /******  b751286d-f017-4a24-8544-6e2e08974511  *******/
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light'
      }
    );

  const createCustomAlert = () =>
    Alert.alert('Custom Alert', 'Custom Alert Msg', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  //SOLO IOS - no funciona para android
  const showNativePrompt = () => {
    //CODIGO NATIVO
    Alert.prompt('Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      (valor: string) => console.log({ valor }),
      'secure-text',
      'default value',
      'number-pad'
    );
  };

  const showLibPrompt = () => {
    //CODIGO LIB react-native-prompt-android
    promptAdapter({
      title: 'Enter password',
      message: 'Enter your password to claim your $1.5B in lottery winnings',
      buttons: [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      options: {
        type: 'default',
        cancelable: true,
        defaultValue: '',
        placeholder: 'password'
      }
    });
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button text={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Separator />
      <Button text={'3-Button Alert'} onPress={createThreeButtonAlert} />
      <Separator />
      <Button text={'Custom Alert'} onPress={createCustomAlert} />
      <Separator />
      <Button text={'Prompt solo para IOS'} onPress={showNativePrompt} />
      <Separator />
      <Button text={'prompt libreria'} onPress={showLibPrompt} />
    </CustomView>
  );
}

const styles = StyleSheet.create({})

export default AlertScreen;
