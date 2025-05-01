import React from 'react'
import { SafeAreaView } from 'react-native'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
import { HomeworkScreen_EX1 } from './src/presentation/screens/HomeworkScreen_EX1';
import { HomeworkScreen_EX2 } from './src/presentation/screens/HomeworkScreen_EX2';
import { HomeworkScreen_EX3 } from './src/presentation/screens/HomeworkScreen_EX3';
import { HomeworkScreen_EX4 } from './src/presentation/screens/HomeworkScreen_EX4';
import { HomeworkScreen_EX5_6_7_8_9_10 } from './src/presentation/screens/HomeworkScreen_EX5_6_7_8_9_10';

export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <Ionicon {...props} />
    }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Sebastian Londoño" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <HomeworkScreen/> */}
        {/* <HomeworkScreen_EX1/> */}
        {/* <HomeworkScreen_EX2/> */}
        {/* <HomeworkScreen_EX3 /> */}
        {/* <HomeworkScreen_EX4 /> */}
        <HomeworkScreen_EX5_6_7_8_9_10 />
      </SafeAreaView>
    </PaperProvider>
  )
}
