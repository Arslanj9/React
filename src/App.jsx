import { useState } from 'react'

function App() {

  const [color, setColor] = useState('black')
  
  return (
    <div className='h-screen w-full flex flex-col items-center justify-between' style={{ backgroundColor: color }}>
      <h1 className='text-white mt-20 text-4xl'>Background Color Changing Website</h1>
      <div className='bg-white w-9/12 rounded-3xl mb-6 flex justify-center'>
        <button 
          className='bg-red-500 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("red")}>
          Red
        </button>
        <button 
          className='bg-green-600 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("rgb(22 163 74)")}>
          Green
        </button>
        <button 
          className='bg-orange-500 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("orange")}>Orange</button>
        <button 
          className='bg-blue-500 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("rgb(96 165 250)")}>Blue</button>
        <button 
          className='bg-yellow-500 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("rgb(234 179 8)")}>Yellow</button>
        <button 
          className='bg-slate-600 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("rgb(71 85 105)")}>Slate</button>
        <button 
          className='bg-stone-600 rounded-2xl ml-3 my-2 text-white py-0.5 px-5'
          onClick={() => setColor("rgb(87 83 78)")}>Stone</button>
      </div>
    </div>
  )
}

export default App
