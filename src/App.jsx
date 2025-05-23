import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='font-sans min-w-4xl'>
      <header className="bg-gray-800 text-gray-50 w-full h-20 flex justify-between align-center">
        <h1 className='m-5 text-2xl font-bold'>Store</h1>

        <nav className='m-6.5'>
          <ul className='flex gap-8'>
            <li className='hover:font-bold cursor-pointer'>Consoles</li>
            <li className='hover:font-bold cursor-pointer'>Notebooks</li>
            <li className='hover:font-bold cursor-pointer'>Acessórios</li>
            <li className='hover:font-bold cursor-pointer'>Jogos</li>
          </ul>
        </nav>

        <div className="flex m-6.5 gap-2">
          <input className='bg-gray-700 rounded-md p-4' type="search" placeholder='Pesquisar'/>
          <button className='bg-[url(./assets/icon-search.svg)] bg-no-repeat bg-center bg-size-4 bg-sky-700 rounded-md pl-10 pt-7.75 hover:bg-sky-600 cursor-pointer'/>
        </div>
      </header>

      <main className='bg-gray-700 w-full h-200'></main>
      <footer className='bg-gray-800 w-full h-30'></footer>
    </div>
  )
}

export default App
