import { useState } from 'react'
import './App.css'
import { MenuList } from './compontents/MenuList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-800 text-white'>
      <header>
        <h1 className='text-center text-3xl font-bold'>Our Menu</h1>
      </header>
      <main className='max-w-300 p-4 shadow-2xl m-auto'>
        <MenuList/>
      </main>
    </div>
  )
}

export default App
