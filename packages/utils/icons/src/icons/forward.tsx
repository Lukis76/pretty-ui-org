import { WrapperIcon } from "../wrapper-icon";
import {IconSvgProps} from '../types'

export const ForwardIcon = ({...props}: IconSvgProps)  => (
    <WrapperIcon
    fill="none"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...props}>
        <path d="M13 17l5-5-5-5" />
        <path d="M6 17l5-5-5-5" />
    </WrapperIcon>
)