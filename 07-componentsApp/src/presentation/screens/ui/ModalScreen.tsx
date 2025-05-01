import React, { useState } from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text='Modal' safe />

      <Button
        text='Open Modal'
        onPress={() => setModalVisible(true)}
      />

      <Modal
        visible={modalVisible}
        animationType='fade'
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'white',
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Title text='Modal Content' safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text='Close Modal'
            onPress={() => setModalVisible(false)}
            style={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    backgroundColor: '#0476F2',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
})

export default ModalScreen;
