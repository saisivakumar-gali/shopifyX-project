import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/home'

import Details from './components/details'
import Create from './components/Create'
import Edit from './components/edit'

const App = () => {
  const {search,pathname}=useLocation();
  return (
    <div className='w-screen h-screen flex'>
      {(pathname!='/'||search.length>0)&&(
        <Link to="/" className='text-red-300 absolute left-[17%] top-[2%]'> Home</Link>
      )}
      
        <Routes>
          <Route path='/create' element={<Create/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>

        
    </div>
  )
}

export default App