import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/Components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Depart from './Pages/Depart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home/>
      {/* <Services/> */}
      <Depart/>
    </>
  )
}

export default App
