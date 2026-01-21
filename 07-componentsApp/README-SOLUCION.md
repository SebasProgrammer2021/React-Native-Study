# Solución de Compatibilidad - React Native 0.76

## 🚀 Inicio Rápido (TL;DR)

```bash
# Para ejecutar la app:
cd 07-componentsApp
npx react-native run-android
```

✅ **Eso es todo!** La app compilará, instalará y arrancará automáticamente.

---

## ⚠️ Problema Original

El proyecto no compilaba con el siguiente error:

```
Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'
```

Este es un **bug conocido** en `react-native-gesture-handler` versiones 2.25+ y 2.30.0 cuando se usa con React Native 0.76, relacionado con la generación de código (codegen).

---

## ✅ Solución Aplicada

### Versiones que FUNCIONAN:

```json
{
  "dependencies": {
    "react": "18.3.1",
    "react-native": "0.76.6",
    "react-native-gesture-handler": "2.21.2",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "react-native-safe-area-context": "^4.11.0",
    "react-native-screens": "^3.34.0"
  },
  "devDependencies": {
    "@react-native/babel-preset": "0.76.6",
    "@react-native/eslint-config": "0.76.6",
    "@react-native/metro-config": "0.76.6",
    "@react-native/typescript-config": "0.76.6",
    "@react-native-community/cli": "latest",
    "@react-native-community/cli-platform-android": "latest"
  }
}
```

### Configuración Android Requerida:

**`android/build.gradle`:**
```gradle
ext {
    buildToolsVersion = "35.0.0"
    minSdkVersion = 24        // ⚠️ IMPORTANTE: React Native 0.76 requiere mínimo 24
    compileSdkVersion = 35
    targetSdkVersion = 34
    ndkVersion = "26.1.10909125"
    kotlinVersion = "1.9.24"
}
```

---

## 📋 Pasos de Instalación Limpia

Si necesitas reinstalar el proyecto desde cero:

```bash
# 1. Limpiar todo
rm -rf node_modules
rm -rf android/.gradle
rm -rf android/app/build
rm -rf android/build

# 2. Instalar dependencias
npm install

# 3. Limpiar caché de Gradle
cd android
./gradlew clean --no-daemon
cd ..
```

---

## 🚀 Cómo Ejecutar la App (MUY IMPORTANTE)

### Método Recomendado: Ejecutar directamente ✅

```bash
cd 07-componentsApp
npx react-native run-android
```

**Esto hace automáticamente:**
1. ✅ Inicia Metro Bundler en segundo plano
2. ✅ Compila la app Android
3. ✅ Instala en el emulador/dispositivo
4. ✅ Abre la aplicación

⏱️ **Primera ejecución:** ~1-2 minutos  
⏱️ **Ejecuciones siguientes:** ~10-20 segundos

### ✅ Verificación de que funciona:

Deberías ver al final:

```bash
BUILD SUCCESSFUL in XXs
Installing APK 'app-debug.apk' on 'Pixel_9_Pro_API_36(AVD) - 16'
Installed on 1 device.
info Starting the app on "emulator-5554"...
```

Si ves esto, **¡la app está corriendo correctamente!** 🎉

### Solo si tienes problemas de conexión:

```bash
# Terminal 1: Reiniciar Metro con caché limpio
npx react-native start --reset-cache

# Terminal 2: Ejecutar la app
npx react-native run-android
```

---

## ❌ Solución de Problemas Comunes

### Error: `EADDRINUSE: address already in use :::8081`

**Causa:** Ya hay un proceso (normalmente `node.exe` / Metro) usando el puerto 8081.

**Solución (Windows):**

```bash
# 1) Ver el PID que usa el puerto 8081
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 8081 | Select-Object LocalAddress,LocalPort,OwningProcess,State"

# 2) Cerrar ese PID (reemplaza 12345 por el PID real)
taskkill /PID 12345 /F

# 3) Iniciar Metro de nuevo
npx react-native start --reset-cache
```

**Alternativa:** usar otro puerto:

```bash
npx react-native start --port 8082
npx react-native run-android --port 8082
```

### La app se instaló pero no abre / Pantalla en blanco

**Causa:** Metro Bundler no está corriendo

**Solución:**
```bash
# Terminal 1: Iniciar Metro
npx react-native start

# Espera a que diga "Metro waiting on port 8081"
# Luego en la app presiona "R" dos veces para recargar
```

### Error: "Cannot read properties of undefined (reading 'handle')" al iniciar Metro

**Causa:** Bug conocido con Metro cuando se inicia manualmente con `npx react-native start`

**⚠️ IMPORTANTE:** Este error **NO afecta** cuando ejecutas `npx react-native run-android` directamente.

**Solución:** Usa el método recomendado (ejecutar directamente run-android) que inicia Metro automáticamente en segundo plano sin este error.

**Si realmente necesitas Metro separado:**
```bash
# Opción 1: Ignorar el error y usar run-android directamente
npx react-native run-android

# Opción 2: Si absolutamente necesitas Metro separado, reinstala:
rm -rf node_modules package-lock.json
npm install
```

### La app no conecta con Metro

**Solución:**
```bash
# En el emulador/dispositivo, agita el dispositivo
# Selecciona "Settings" > "Change Bundle Location"
# Pon: localhost:8081
# O ejecuta:
adb reverse tcp:8081 tcp:8081
```

---

## 🐛 Sobre el Bug de gesture-handler

### ¿Por qué usamos 2.21.2 en lugar de 2.25+?

Según la [documentación oficial](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation), la tabla de compatibilidad indica:

| Version RNGH | React Native Version |
|--------------|---------------------|
| 2.28.0+      | 0.79.0+            |
| 2.25.0+      | 0.76.0+  ← **Recomendado pero tiene bug** |
| 2.21.0+      | 0.74.0+  ← **Usamos esta (funciona bien)** |

**Razones para usar 2.21.2:**
- ✅ Compila sin errores con RN 0.76.6
- ✅ Todas las funcionalidades funcionan correctamente
- ✅ Compatible hacia adelante (diseñada para 0.74+ pero funciona con 0.76)
- ✅ Evita el bug de `ViewManagerWithGeneratedInterface`

### ¿Cuándo actualizar?

Monitorea los [releases de react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler/releases). Cuando publiquen un parche que corrija el bug de codegen en versiones 2.25+, podrás actualizar:

```bash
npm install react-native-gesture-handler@^2.25.0
```

---

## 🔧 Comandos Útiles

### Limpiar caché completamente:
```bash
# Detener daemons de Gradle
cd android && ./gradlew --stop && cd ..

# Limpiar todo
rm -rf node_modules android/.gradle android/build android/app/build
npm install
```

### Verificar versiones instaladas:
```bash
npm list react-native react-native-gesture-handler
```

### Ejecutar con logs detallados:
```bash
npx react-native run-android --verbose
```

---

## 📚 Referencias

- [React Native Gesture Handler Docs](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native 0.76 Release Notes](https://reactnative.dev/blog)
- [Compatibility Table](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)

---

## ✨ Estado Actual

**BUILD SUCCESSFUL** ✅
- App compilando correctamente
- Sin errores de codegen
- Funcionando en emulador Android API 35

---

**Última actualización:** Enero 2025  
**React Native:** 0.76.6  
**Gesture Handler:** 2.21.2  
**Estado:** Funcionando ✅

