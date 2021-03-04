import React, { RefObject, useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components'
import Box from './Box';

type Props = {
    animate?: boolean;
    ref?: any;
    children?: any;
}

const StyledAnimation = styled(Box)<Props>`
    transform: translateX(${({ animate }) => (animate ? '0' : '-100vw')});
    transition: transform 1s ease;
    height: 900px;
    width: 300px;
    background-color: red;
`

const Animation: React.FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    const [isShow, setIsShow] = useState<boolean>(false)

    const { children } = props
    let topPosition = 0
    console.log(ref.current)
    if (ref.current) {
        topPosition = ref.current.getBoundingClientRect().top
        
    }
    const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight
        if (topPosition > 0) {
            if (topPosition < scrollPosition) {
                setIsShow(true)
            }
        }
    }
    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
        },
        [])
    
    return (
        <>
            <StyledAnimation ref={ref} animate={isShow}>{children}</StyledAnimation>
        </>
    )
}
StyledAnimation.defaultProps = {
    animate: false,
}

export default Animation;

