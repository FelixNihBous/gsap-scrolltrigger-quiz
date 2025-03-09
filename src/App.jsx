import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FloatingComponents from './components/FloatingComponents'
import ProjectList from './components/ProjectList'
import Shelters from './components/Shelters'
import TeamList from './components/TeamList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FloatingComponents />
      <Header />
      <Hero />
      <ProjectList />
      <Shelters />
      <TeamList />
    </>
  )
}

export default App
