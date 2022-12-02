import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/Logo.png'

export default function Header() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  )
}

const Container = styled.div`
width: 100vw;
height: 7rem;
background-color: black;

display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.img`
background-color: transparent;
width: 6.5rem;
`
