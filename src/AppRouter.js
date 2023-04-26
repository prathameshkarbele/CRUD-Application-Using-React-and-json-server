import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from './App'
import Add from './Add'
import Edit from './Edit'
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element ={<App />}></Route>
            <Route path='/create' element={<Add />}></Route>
            <Route path='/update/:id' element={<Edit />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter