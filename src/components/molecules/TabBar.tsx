import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';
import Image from '../atoms/Image';
import CardOverLap from './CardOverlap';
import Tab from '../atoms/Tab';

const mockData = [
    { name: 'new', data: [{ name: 'Sample product', imgSrc1: 'https://via.placeholder.com/370x300.png', imgSrc2: 'https://via.placeholder.com/370x300.png',  price: 1200}] },
    {
        name: 'sell', data: [
            { name: 'sell1', imgSrc1: 'https://via.placeholder.com/250.png',  imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200},
            { name: 'sell2', imgSrc1: 'https://via.placeholder.com/250.png', imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200 },
            { name: 'sell3', imgSrc1: 'https://via.placeholder.com/250.png', imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200 },
            { name: 'sell4', imgSrc1: 'https://via.placeholder.com/250.png', imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200 },
            { name: 'sell5', imgSrc1: 'https://via.placeholder.com/250.png', imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200 },
            { name: 'sell6', imgSrc1: 'https://via.placeholder.com/250.png', imgSrc2: 'https://via.placeholder.com/250.png',  price: 1200 },
        ]
    }
]

type Props = {
    e?: (e: any) => void;
    active?: boolean;
}


const TabBar: React.FC<Props> = (props) => {
    // const { data } = props;
    const [state, setState] = useState('sell')
    const handleClick = (e: any) => {
        e.preventDefault()
        setState(e.target.id)
    }
    const renderData = mockData.filter(i => i.name === state)[0]

    return (
        <>
        <Tab data={mockData} state={state} handleClick={handleClick}/>
        <Box>
            <Box display='grid' gridTemplateColumns='auto auto auto' gridGap={3} mt={3}>
                {renderData.data.map(i =>
                    <CardOverLap imgSrc1={i.imgSrc1} imgSrc2={i.imgSrc2} text={i.name} price={i.price}/>
                )}
            </Box>
        </Box>
        </>
    );
};


export default TabBar;
