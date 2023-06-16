import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import LeftPillar from './components/LeftPillar'
import RightPillar from './components/RightPillar'

function App() {

  return (
    <>
      <div className='main-app-container'>
        <Navbar />
        <Hero />
        <LeftPillar />
        <RightPillar />
      </div>
    </>
  )
}

export default App
