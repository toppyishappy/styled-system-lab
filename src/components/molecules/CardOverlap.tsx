import React from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from '../atoms/Box'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image';

type Props = {
    text: string;
    imgSrc1: string;
    imgSrc2: string;
    price: number;
}
  
const StyledImg1 = styled(Image)`
    position: absolute;
    &:hover {
        opacity: 0;
    }
`
const StyledImg2 = styled(Image)`
    position: absolute;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`


const CardItem: React.FC<Props> = (props) => {
    const { text, imgSrc1, imgSrc2, price } = props;
    return (
        <Box>
            <Box position='relative' height='250px' width='200px'>
                <StyledImg1 imageSrc={imgSrc1} />
                <StyledImg2 imageSrc={imgSrc2} />
            </Box>
            {text &&
                <Box>
                <Typography as='h4'>{text}</Typography>
                <Typography as='h4' textAlign='center'>{price}</Typography>
                </Box>
            }
        </Box>
    );
};


export default CardItem;
