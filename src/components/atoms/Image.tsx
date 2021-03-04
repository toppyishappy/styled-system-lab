import React from 'react';
import styled from 'styled-components'
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'

type Props = {
    mt?: number;
    width?: string;
    height?: string;
    imageSrc: string;
}
type StyledImage = SpaceProps & LayoutProps

const StyledImage = styled.img<StyledImage>`
    ${space}
    ${layout}
    cursor: pointer;    
`

const Image: React.FC<Props> = (props) => {
    const {imageSrc} = props
    return <StyledImage src={imageSrc} {...props}/>
}

export default Image;