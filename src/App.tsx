/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {Screen2} from './Screen2'
import {Screen1} from './Screen1'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RootStackParamList} from './NavigationParamList'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Screen1'}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{title: 'Screen 2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
