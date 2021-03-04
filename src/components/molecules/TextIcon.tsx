import React from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from '../atoms/Box'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image';

type Props = {
    text: string;
    icon: string;
    mt?: string | any;
}


const TextIcon: React.FC<Props> = (props) => {
    const { text, icon } = props;
    return (
        <Box display='flex' alignItems='center' {...props} justifyContent='center'>
            <Image imageSrc={icon} width='52px'/>
            <Typography>{text}</Typography>
        </Box>
    );
};


export default TextIcon;
