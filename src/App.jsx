import { useState } from 'react'
import Header from './components/Header.jsx'
import './styles/App.css'

function App() {

  return (
    <>
      <Header />

      <div className='headline'>
        <h1>Helping clients build innovative, efficient solutions fast.</h1>
        <p>If you're an early-stage founder, SaaS owner, or indie-maker seeking efficient and innovative solutions, I'd love to collaborate.</p>
        <p>Let's build something amazing together!</p>
      </div>
    </>
  )
}

export default App
