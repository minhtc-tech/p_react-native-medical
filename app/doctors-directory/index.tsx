import clsx from 'clsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/commons'
import { FlashList } from '@shopify/flash-list'
import { Text, TouchableOpacity, View } from 'react-native'
import { ArrowIcon } from '../../components/icons'
import { Image } from 'expo-image'
import { DOCTORS_DATA } from '../../constants/data'

export default function Page() {
  return (
    <SafeAreaView className='flex-1'>
      <Header isOnlyBackBtn={false} />

      <View className='flex-1 pt-[36px]'>
        <FlashList
          data={DOCTORS_DATA}
          estimatedItemSize={93}
          renderItem={({ item }) => (
            <View className='px-[24px]'>
              <TouchableOpacity
                className={clsx(
                  'flex-row items-center justify-between',
                  'mb-[12px] h-[80px] w-full px-[16px]',
                  'rounded-[16px] bg-neutral-100',
                )}
              >
                <View className='flex-row'>
                  <Image
                    className='mr-[16px] h-[48px] w-[48px] rounded-[12px]'
                    source={item.avatar}
                    contentPosition={'top center'}
                  />
                  <View className='justify-center'>
                    <Text
                      className={clsx(
                        'text-neutral-500',
                        'font-rubik_600_semibold text-[14px] leading-[18px]',
                      )}
                    >
                      Dr. {item.name}
                    </Text>
                    <Text
                      className={clsx(
                        'pt-[4px] text-neutral-400',
                        'font-rubik_400_regular text-[12px] leading-[16px]',
                      )}
                    >
                      {item.field}
                    </Text>
                  </View>
                </View>
                <ArrowIcon className='rotate-180 fill-neutral-400' />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
