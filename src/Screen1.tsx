import React from 'react'
import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from './NavigationParamList'
import { Button } from 'react-native-paper'

export const Screen1 = ({
  navigation
}: RootStackScreenProps<'Screen1'>): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigation.navigate('Screen2')}
      >
        Go to Screen 2
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  button: {
    alignSelf: 'center'
  }
})
