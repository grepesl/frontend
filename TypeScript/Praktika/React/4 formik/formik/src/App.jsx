import { useState } from 'react'
import { Routes, Route} from 'react-router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes
    <Login path="/login" element={}/>
    <Register path="/register" element={}/>
        <Route path="/" element={<MainOutLet />}>
            <Route index element={<Home />}/>
        </Route>
    />

    </>
  )
}

export default App
