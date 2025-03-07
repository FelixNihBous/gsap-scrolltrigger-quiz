import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FloatingComponents from './components/FloatingComponents'
import ProjectList from './components/ProjectList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FloatingComponents />
      <Header />
      <Hero />
      <ProjectList />
    </>
  )
}

export default App
