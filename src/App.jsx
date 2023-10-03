import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const todos = [
  'Acheter du pain',
  'Etendre le linge',
  'Préparer le repas'
]

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header></Header>  
    <Main></Main>
    <Footer></Footer>
  </>
  
}

function Title ({color, hidden, children}){
  if (hidden){
    return null
  }

  const props = {
    id: 'monId',
    className: 'maClasse'
  }

  return <h1 style={{color: color}} {...props}>{children}</h1>
}

export default App
