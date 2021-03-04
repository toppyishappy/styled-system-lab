import React from 'react';
import styled from 'styled-components'
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from '../atoms/Box';

type Props = {
    mt?: number;
    width?: string;
    height?: string;
    imageSrc: string;
}
type StyledCard = SpaceProps & LayoutProps

const StyledCard = styled(Box)<StyledCard>`
    ${space}
    ${layout}
`

const Card: React.FC<Props> = (props) => {
    const {imageSrc} = props
    return (
        <StyledCard {...props}>
        </StyledCard>
    )

}

export default Card;