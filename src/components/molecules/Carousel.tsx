import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Box from '../atoms/Box';

type DataImages = {
    src: string;
    id: number;
}

type Props = {
    variant?: string;
    colorTheme?: string;
    data: DataImages[];
    mt?: number;
}

const SlideImage = styled.img`
    width: inherit;
    // object-fit: cover;
    height: 500px;
`

const Carousel: React.FC<Props> = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
      };

    return (
        <Box>
        <Slider {...settings}>
          <div>
            <SlideImage src='https://via.placeholder.com/1440x500.png' />
          </div>
          <div>
            <SlideImage src='https://via.placeholder.com/1440x500.png' />
          </div>
          <div>
            <SlideImage src='https://via.placeholder.com/1440x500.png' />
          </div>
          <div>
            <SlideImage src='https://via.placeholder.com/1440x500.png' />
          </div>
        </Slider>
      </Box>

    );
};

export default Carousel;
