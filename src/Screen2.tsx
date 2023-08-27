import {ReactElement} from 'react'
import {Button, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {RootStackScreenProps} from './NavigationParamList'

export const Screen2 = ({
  navigation,
}: RootStackScreenProps<'Screen2'>): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Go to screen 1'}
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
