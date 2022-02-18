import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './Books'
import Navbar from './Navbar' 
import EditBook from './EditBook'

function Main () {
  return (
    <Router>
        <Navbar/>
      <div>
        <Routes>
          <Route path='/' exact element={<Books />} />
          <Route path='/edit-book'  element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main
