import clsx from 'clsx'
import { Text, TouchableOpacity } from 'react-native'

interface ConfirmButtonProps {
  content: string
  onClick?: () => void
}

const ConfirmButton = (props: ConfirmButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onClick}
      className={clsx(
        'bg-neutral-500',
        'h-[48px] justify-center rounded-[12px]',
      )}
    >
      <Text
        className={clsx(
          'text-white',
          'text-center font-rubik_500_medium text-[16px]',
        )}
      >
        {props.content}
      </Text>
    </TouchableOpacity>
  )
}

export default ConfirmButton
