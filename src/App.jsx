import { useState } from 'react'

import Header from './components/Header.jsx'
import Headline from './components/Headline.jsx'
import Skill from './components/Skill.jsx'
import Project from './components/Project.jsx'
import './styles/App.css'

function App() {

  return (
    <>
      <Header />
      <Headline />
      <Skill />
      <Project />
    </>
  )
}

export default App
