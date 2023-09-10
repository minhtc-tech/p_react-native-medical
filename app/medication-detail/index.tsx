import { useState } from 'react'
import clsx from 'clsx'
import colors from '../../colors'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Switch } from 'react-native-switch'
import { ConfirmButton, Header } from '../../components/commons'
import { BellIcon, DrugIcon, FinishIcon } from '../../components/icons'

export default function Page() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <SafeAreaView className='flex-1'>
      <Header isOnlyBackBtn />

      <View className='items-center px-[24px] pt-[8px]'>
        <DrugIcon />

        <Text
          className={clsx(
            'pb-[48px] pt-[24px]',
            'text-neutral-500',
            'font-rubik_500_medium text-[24px] leading-[28px]',
          )}
        >
          Vitamin C
        </Text>

        <View className='w-full gap-y-[12px]'>
          <View
            className={clsx(
              'flex-row items-center justify-between',
              'h-[48px] pl-[24px] pr-[16px]',
              'rounded-[16px] bg-neutral-100',
            )}
          >
            <View className='flex-row items-center'>
              <BellIcon />
              <Text
                className={clsx(
                  'pl-[16px]',
                  'font-rubik_400_regular text-[14px] text-neutral-500',
                )}
              >
                Everyday at 9:00
              </Text>
            </View>

            <Switch
              containerStyle={{
                borderColor: colors.neutral[500],
                borderWidth: 1,
              }}
              value={isEnabled}
              onValueChange={() => setIsEnabled((prevState) => !prevState)}
              activeText=''
              inActiveText=''
              circleSize={12}
              barHeight={20}
              backgroundActive={colors.neutral[100]}
              backgroundInactive={colors.neutral[100]}
              circleActiveColor={colors.neutral[500]}
              circleInActiveColor={colors.neutral[500]}
              circleBorderWidth={0}
              switchWidthMultiplier={40 / 12}
            />
          </View>

          <View
            className={clsx(
              'h-[48px] flex-row items-center justify-between pl-[24px]',
              'rounded-[16px] bg-neutral-100',
            )}
          >
            <View className='flex-row items-center'>
              <View className='h-[14px] w-[14px] rounded-full bg-red-500' />
              <Text
                className={clsx(
                  'pl-[16px]',
                  'font-rubik_400_regular text-[14px] text-neutral-500',
                )}
              >
                Before meal
              </Text>
            </View>
          </View>

          <View
            className={clsx(
              'h-[48px] flex-row items-center justify-between pl-[24px] pr-[5px]',
              'rounded-[16px] bg-neutral-100',
            )}
          >
            <View className='flex-row items-center'>
              <View className='h-[14px] w-[14px] justify-center'>
                <FinishIcon />
              </View>
              <Text
                className={clsx(
                  'pl-[16px]',
                  'font-rubik_600_semibold text-[14px] text-neutral-500',
                )}
              >
                Finish course
              </Text>
            </View>

            <View
              className={clsx(
                'h-[38px] w-[80px] items-center justify-center',
                'rounded-[12px] bg-neutral-300',
              )}
            >
              <Text className='font-rubik_600_semibold text-[14px] text-neutral-500'>
                Aug 23
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className='absolute bottom-[24px] w-full px-[24px]'>
        <ConfirmButton content='Request refill' />
      </View>
    </SafeAreaView>
  )
}
