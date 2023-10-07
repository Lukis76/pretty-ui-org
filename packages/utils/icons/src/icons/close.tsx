import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'



export const CloseIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </WrapperIcon>
)