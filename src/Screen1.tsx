import {ReactElement} from 'react'
import {Button, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {RootStackScreenProps} from './NavigationParamList'

export const Screen1 = ({
  navigation,
}: RootStackScreenProps<'Screen1'>): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Go to Screen 2'}
        onPress={() => navigation.navigate('Screen2')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
