import React from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from '../atoms/Box'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image';

type Props = {
    text?: string;
    imgSrc: string;
    width?: any;
}

const StyledBox = styled(Box)`
    overflow: hidden;

    
`   
const StyledImg = styled(Image)`
    width: inherit;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.2);
    }
`


const CardItem: React.FC<Props> = (props) => {
    const { text, imgSrc, ...rest } = props;
    return (
        <StyledBox {...rest} display='inline-block'>
            <StyledImg imageSrc={imgSrc} />
            {text && <Typography>{text}</Typography>}
        </StyledBox>
    );
};


export default CardItem;
