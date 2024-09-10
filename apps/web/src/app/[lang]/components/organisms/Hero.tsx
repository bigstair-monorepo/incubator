import React from 'react'
import Container from '@atoms/Container';
import Banner from '@organisms/Banner'
import Trustees from '@molecules/Trustees';


const Hero = () => {
  return (
    <Container>
      <Banner />
      <Trustees/>
    </Container>
  )
}

export default Hero