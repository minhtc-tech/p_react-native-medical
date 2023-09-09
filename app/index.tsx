import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SAMPLE_ROUTES } from '../constants/data'
import ConfirmButton from '../components/commons/ConfirmButton'
import { View } from 'react-native'

export default function Page() {
  return (
    <SafeAreaView className='flex-1 justify-center px-4 py-8'>
      {SAMPLE_ROUTES.map((route: string) => (
        <View key={route} className='py-4'>
          <ConfirmButton
            content={route}
            onClick={() => {
              router.push(`/${route}`)
            }}
          />
        </View>
      ))}
    </SafeAreaView>
  )
}
