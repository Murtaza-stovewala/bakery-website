import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Home/>
      
    </>
  )
}

export default App
