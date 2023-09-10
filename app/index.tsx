import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SAMPLE_ROUTES } from '../constants/data'
import { ConfirmButton } from '../components/commons'
import { View } from 'react-native'

export default function Page() {
  return (
    <SafeAreaView className='flex-1 justify-center px-[16px] py-[32px]'>
      {SAMPLE_ROUTES.map((route: string) => (
        <View key={route} className='py-[8px]'>
          <ConfirmButton
            content={route}
            onClick={() => router.push(`/${route}`)}
          />
        </View>
      ))}
    </SafeAreaView>
  )
}
