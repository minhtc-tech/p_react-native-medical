import clsx from 'clsx'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { customerImg, doctorBgImg } from '../../constants/images'
import { Image } from 'expo-image'
import { CameraIcon, MicroIcon, PhoneIcon } from '../../components/icons'
import { Header } from '../../components/commons'

export default function Page() {
  return (
    <ImageBackground
      className='basis-full'
      resizeMode='cover'
      source={doctorBgImg}
    >
      <SafeAreaView className='flex-1'>
        <Header isOnlyBackBtn />

        <Image
          className={clsx(
            'h-[128px] w-[104px] rounded-[12px]',
            'ml-auto mr-[24px] mt-[-4px]',
          )}
          source={customerImg}
          contentPosition={'top center'}
        />

        <View className='absolute bottom-[40px] left-0 right-0 items-center'>
          <Text
            className={clsx(
              'pb-[8px] text-neutral-100',
              'font-rubik_500_medium text-[24px] leading-[28px]',
            )}
          >
            Dr. Phil
          </Text>
          <Text
            className={clsx(
              'pb-[40px] text-white',
              'font-rubik_400_regular text-[16px] leading-[20px]',
            )}
          >
            00:19:21
          </Text>

          <View className='flex-row items-center gap-x-[24px]'>
            <TouchableOpacity
              className={clsx(
                'h-[48px] w-[48px] items-center justify-center',
                'rounded-full bg-neutral-100/40',
              )}
            >
              <MicroIcon />
            </TouchableOpacity>

            <TouchableOpacity
              className={clsx(
                'h-[72px] w-[72px] items-center justify-center',
                'rounded-full bg-red-500',
              )}
            >
              <PhoneIcon />
            </TouchableOpacity>

            <TouchableOpacity
              className={clsx(
                'h-[48px] w-[48px] items-center justify-center',
                'rounded-full bg-neutral-100/40',
              )}
            >
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
