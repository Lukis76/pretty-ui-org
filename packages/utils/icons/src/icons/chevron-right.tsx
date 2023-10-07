import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const ChevronRightIcon = ({...props}: IconSvgProps) => (
    <WrapperIcon 
        strokeWidth = {1.5} 
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round" 
        {...props}>
       <path d="m9 18 6-6-6-6" />
    </WrapperIcon>
)