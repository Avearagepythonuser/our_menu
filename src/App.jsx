import { useState } from 'react'
import './App.css'
import { MenuList } from './compontents/MenuList'
import { MyHeader } from './compontents/MyHeader'

function App() {
  const [selectedCateg, setSelectedCateg] = useState("all");

  return (
    <div className='bg-gray-800 text-white min-h-screen'>
      <MyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
      <main className='max-w-300 p-4 shadow-2xl m-auto'>
        <MenuList selectedCateg={selectedCateg}/>
      </main>
    </div>
  )
}

export default App
