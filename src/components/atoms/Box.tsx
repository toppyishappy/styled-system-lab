import React, {useRef} from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, position, grid, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps, GridProps } from 'styled-system'

type BoxType = React.ReactNode & SpaceProps & ColorProps & LayoutProps & FlexProps & GridProps & HTMLInputElement


type Props = {
    display?: string;
    bg?: string;
    justifyContent?: string;
    flexDirection?: string;
    width?: string;
    height?: string;
    alignItems?: string;
    mt?: string | any;
    m?: string;
    gridTemplateColumns?: any;
    gridGap?: number;
    position?: string;
    children: any;
}

const BoxStyled = styled.div<any>`
    ${space}
    ${color}
    ${layout}
    ${flexbox}
    ${grid}
    ${position}
`;


const Box: React.FC<Props & React.ReactNode> = ((props: any, ref ) => {
    const { children, ...rest } = props;

    return (
        <BoxStyled ref={ref} {...rest}>{children}</BoxStyled>
    );
});

const ForwardRefBox = React.forwardRef(Box);

Box.defaultProps = {
    display: 'block',
    width: '100%',
    height: 'auto'
}
export default ForwardRefBox;
