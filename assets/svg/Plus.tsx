import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            fill="#000"
            stroke="#000"
            strokeWidth={0.3}
            d="M22.541 10.892h-9.433V1.458a1.108 1.108 0 1 0-2.216 0v9.434H1.458a1.108 1.108 0 1 0 0 2.216h9.434v9.434a1.108 1.108 0 1 0 2.216 0v-9.434h9.434a1.108 1.108 0 1 0 0-2.216Z"
        />
    </Svg>
);
export default SvgComponent;
