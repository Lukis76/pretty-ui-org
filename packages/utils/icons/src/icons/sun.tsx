import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const SunIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
    {...props}>
    <path
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <circle
      cx={256}
      cy={256}
      fill="none"
      r={80}
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    </WrapperIcon>
)