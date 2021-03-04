import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button'
import Appbar from './components/molecules/Appbar'
import Container from './components/atoms/Container'
import Carousel from './components/molecules/Carousel'
import IconBar from './components/organisms/IconBar'
import CardItem from './components/molecules/CardItem';
import Box from './components/atoms/Box';
import TabBar from './components/molecules/TabBar'
import Animation from './components/atoms/Animation'


function App() {
  const dataImages = [
    { src: 'https://via.placeholder.com/400x500.png', id: 1 },
    { src: 'https://via.placeholder.com/400x600.png', id: 2 },
    {src: 'https://via.placeholder.com/400.png', id: 3},
  ]
  return (
    <>
      <Appbar />
      <Carousel data={dataImages}/>
      <Container>
        <IconBar />
        <Box mt={5} display='grid' gridTemplateColumns='auto auto' justifyContent='space-between'>
          <CardItem imgSrc='https://via.placeholder.com/570x300.png' width={{_: '300px', lg: '570px'}}/>
          <CardItem imgSrc='https://via.placeholder.com/570x300.png' width={{_: '300px', lg: '570px'}}/>
        </Box>
        {/* <TabBar/> */}
        <Animation>
          <div>test</div>
        </Animation>
      </Container>
    </>
  );
}

export default App;
