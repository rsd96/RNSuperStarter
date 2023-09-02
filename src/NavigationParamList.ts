import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Screen1: undefined
  Screen2: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>
