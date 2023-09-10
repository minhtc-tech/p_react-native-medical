import { router } from 'expo-router'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowIcon, SearchIcon } from '../icons'
import { customerImg } from '../../constants/images'
import { Image } from 'expo-image'
import clsx from 'clsx'

interface HeaderProps {
  isOnlyBackBtn: boolean
}

const Header = (props: HeaderProps) => {
  return (
    <View className='flex-row'>
      <TouchableOpacity
        className='h-[40px] justify-center px-[24px]'
        onPress={router.back}
      >
        <ArrowIcon className='fill-neutral-500' />
      </TouchableOpacity>

      {!props.isOnlyBackBtn && (
        <>
          <View className='relative flex-1'>
            <TextInput
              className={clsx(
                'h-[40px] rounded-[12px] bg-white px-[8px]',
                'font-rubik_400_regular text-[14px] text-neutral-500',
              )}
              placeholder='Dentists'
            />
            <TouchableOpacity
              className={clsx(
                'absolute right-0',
                'h-full justify-center px-[16px]',
              )}
            >
              <SearchIcon />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className='h-[40px] justify-center px-[24px]'>
            <Image
              className='h-[32px] w-[32px] rounded-[12px]'
              source={customerImg}
              contentPosition={'top center'}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default Header
