import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Index from './combonent/user/Index.jsx'
import Create from './combonent/user/Create.jsx'
import Input from './sared/Input.jsx'
import Details from './combonent/user/Details.jsx'
import Edit from './combonent/user/Edit.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Input/>}/>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/user/create' element={<Create/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/edit/:id' element={<Edit/>}/>
      <Route path='' element={<h2>User not found</h2>}/>
      
      
    </Routes>
  )
}
