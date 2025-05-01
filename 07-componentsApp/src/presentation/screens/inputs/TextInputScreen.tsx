import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title text='TextInputScreen' safe />
          <Card>
            <TextInput
              onChangeText={value => setForm({ ...form, name: value })}
              placeholder='Ingrese su nombre'
              style={globalStyles.input}
              autoCapitalize={"words"}
              autoCorrect={false}
            />
            <TextInput
              onChangeText={value => setForm({ ...form, email: value })}
              placeholder='Correo electrónico'
              style={globalStyles.input}
              autoCapitalize={"none"}
              autoCorrect={false}
              keyboardType='email-address'
            />
            <TextInput
              onChangeText={value => setForm({ ...form, phone: value })}
              placeholder='Telefono'
              style={globalStyles.input}
              autoCapitalize={"none"}
              autoCorrect={false}
              keyboardType='phone-pad'
            />
          </Card>
          <Card style={{ marginTop: 20 }}>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <TextInput
              onChangeText={value => setForm({ ...form, name: value })}
              placeholder='Ingrese su nombre'
              style={globalStyles.input}
              autoCapitalize={"words"}
              autoCorrect={false}
            />
          </Card>
        </CustomView>
        <View style={{ height: 100 }} />
      </ScrollView>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({})

export default TextInputScreen;
