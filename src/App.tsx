import styled from 'styled-components'
import Header from './components/header';
import ToDo from './components/ToDo';

export default function App() {
  return (
    <Container>
      <Header />
      <Wrapper>
          <ToDo />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Wrapper = styled.div`
`

