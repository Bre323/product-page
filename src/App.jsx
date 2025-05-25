import { useState } from 'react'
import viteLogo from '/vite.svg'
import photo1 from './assets/dualsensePhoto1.jpg'
import photo2 from './assets/dualsensePhoto2.jpg'
import photo3 from './assets/dualsensePhoto3.jpg'
import photo4 from './assets/dualsensePhoto4.jpg'
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

      <main className='flex justify-evenly items-center bg-gray-700 w-full h-screen'>
        <div className="product flex flex-col justify-center gap-10">
          <div className="photo flex justify-center">
            <img className='h-100 w-100 rounded-2xl' src={photo1} alt="main photo" />
          </div>
          <div className="gallery flex gap-10">
            <img className='h-25 w-25 rounded-2xl cursor-pointer hover:border-2 hover:border-sky-600' src={photo1} alt="product photo 1" />
            <img className='h-25 w-25 rounded-2xl cursor-pointer hover:border-2 hover:border-sky-600' src={photo2} alt="product photo 2" />
            <img className='h-25 w-25 rounded-2xl cursor-pointer hover:border-2 hover:border-sky-600' src={photo3} alt="product photo 3" />
            <img className='h-25 w-25 rounded-2xl cursor-pointer hover:border-2 hover:border-sky-600' src={photo4} alt="product photo 4" />
          </div>
        </div>

        <div className='m-10 w-50 text-gray-50 text-center'>
          <h1 className='text-4xl text-bold mt-5 mb-7'>Dualsense</h1>
          <h2 className='text-xl text-bold mb-5'>R$ 300,00</h2>
          <button className='text-xl h-12 w-32 bg-sky-700 shadow-md rounded-md hover:bg-sky-600 cursor-pointer'>COMPRAR</button>
        </div>
      </main>

      <footer className='flex items-center justify-center bg-gray-800 w-full h-30'>
        <p className='text-gray-50'>Made by <a className='hover:text-blue-200' href="https://github.com/Bre323" target='_blank'>Bre323</a></p>
      </footer>
    </div>
  )
}

export default App
