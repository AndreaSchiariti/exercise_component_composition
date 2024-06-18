import './App.css'
import { Container } from './Container'
import kefka from "./kefka_palazzo.png"

function App() {
  return (
    <>
      <Container title="Container a scomparsa">
        <img src={kefka} alt="Kefka Palazzo" />
      </Container>
    </>
  )
}

export default App
