import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export class CameraAdapter {

  static async takePicture(): Promise<string[]> {
    const response = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
      cameraType: 'back',
    });

    // Verificar si el usuario canceló
    if (response.didCancel) {
      console.log('Usuario canceló la captura de foto');
      return [];
    }

    // Verificar si hubo un error
    if (response.errorCode) {
      console.error('Error al tomar foto:', response.errorMessage);
      return [];
    }

    // Verificar si hay assets y URI válida
    if (response.assets?.[0]?.uri) {
      console.log('Foto capturada exitosamente:', response.assets[0].uri);
      return [response.assets[0].uri];
    }

    console.log('No se encontró URI en la respuesta:', response);
    return [];
  }

  static async pickImageFromLibrary(): Promise<string[]> {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
      selectionLimit: 10,
    });

    if (response.assets && response.assets.length > 0) {
      return response.assets.map((asset) => asset.uri!);
    }

    return [];
  }


}