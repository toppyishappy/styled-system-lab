import React from 'react';
import TextIcon from '../molecules/TextIcon'
import Box from '../atoms/Box'
import Timer from '../../assets/icons/timer.png'
import Coupon from '../../assets/icons/coupon.png'
import Support from '../../assets/icons/24-hours.png'

const IconBar = () => {
    return (
        <Box display='grid' mt={5} gridTemplateColumns={{_: 'auto', lg:'auto auto auto auto'}} >
            <TextIcon mt={4} icon={Timer} text='On time' />
            <TextIcon mt={4} icon={Coupon} text='on sell' />
            <TextIcon mt={4} icon={Support} text='support 24 hours' />
            <TextIcon mt={4} icon={Timer} text='support 24 hours'/>
        </Box>
    )
}

export default IconBar;