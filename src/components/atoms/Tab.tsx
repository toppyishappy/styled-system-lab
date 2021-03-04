import React, {HtmlHTMLAttributes, useState} from 'react';
import styled from 'styled-components'
import { space, color, layout, flexbox, position, LayoutProps, SpaceProps, ColorProps, FlexProps, PositionProps } from 'styled-system'
import Box from './Box';

type TabData = {
    name: string;
    imgSrc1: string;
    imgSrc2: string;
    price: number;
}

type DataType = {
    name: string;
    data: TabData[];
}

type Props = {
    active?: boolean;
    data: DataType[];
    state: string;
    handleClick: (e: EventListener) => void;
}
type TabProps = SpaceProps & LayoutProps & Props & HTMLDivElement;

const TabStyled = styled.div<any>`
    ${space}
    ${layout}
    cursor: pointer;
    border-bottom: ${({ active }) => active && '1px solid red'};
    font-size: 20px;
    &:hover {
        border-bottom: 1px solid red;
        color: red;
    }
` 

const Tab: React.FC<Props> = (props) => {
    const { data, handleClick, state } = props

    return (
        <Box display='flex' mt={5} justifyContent='center'>
            {data.map((i, idx) => {
                return (
                    i.name === state
                        ? <TabStyled mx={3} key={idx} active onClick={(e: EventListener) => handleClick(e)} id={i.name}>{i.name}</TabStyled>
                        : <TabStyled mx={3} key={idx} onClick={(e: EventListener) => handleClick(e)} id={i.name}>{i.name}</TabStyled>
                )
            })}
            
        </Box>
    )
}

Tab.defaultProps = {
    active: false,
}

export default Tab;