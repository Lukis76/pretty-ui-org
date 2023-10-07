import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'



export const ChevronUpIcon = ({...props}: IconSvgProps) => (
    <WrapperIcon 
        strokeWidth = {1.5}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props
         }>
       <path d="m18 15-6-6-6 6" />
    </WrapperIcon>
)