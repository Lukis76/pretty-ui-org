import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'



export const ChevronDownIcon = ({...props}: IconSvgProps) => (
    <WrapperIcon 
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}>
      <path d="m6 9 6 6 6-6" />
    </WrapperIcon>
)