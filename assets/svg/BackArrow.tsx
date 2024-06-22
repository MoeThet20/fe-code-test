import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={11} height={18} fill="none" {...props}>
        <Path
            fill="#000"
            stroke="#000"
            strokeWidth={0.5}
            d="m.747 9.604 7.605 7.602a.857.857 0 0 0 1.209 0 .852.852 0 0 0 0-1.207L2.559 9l7-6.998A.853.853 0 1 0 8.352.794L.746 8.396a.862.862 0 0 0 .001 1.208Z"
        />
    </Svg>
);
export default SvgComponent;
