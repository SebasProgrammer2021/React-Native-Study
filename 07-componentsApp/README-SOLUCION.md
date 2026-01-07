# Solución de Compatibilidad - React Native 0.76

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

# 4. Ejecutar la app
npx react-native start --reset-cache

# En otra terminal:
npx react-native run-android
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

