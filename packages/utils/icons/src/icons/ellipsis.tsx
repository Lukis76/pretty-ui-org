import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const ElipsisIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
        fill="none"
        shapeRendering="geometricPrecision"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        {...props}
    >
        <circle cx="12" cy="12" fill="currentColor" r="1" />
        <circle cx="19" cy="12" fill="currentColor" r="1" />
        <circle cx="5" cy="12" fill="currentColor" r="1" />
    </WrapperIcon>
)