import React from 'react'
import {Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './Books'
import Navbar from './Navbar' 
import EditBook from './EditBook'
import SignUpForm from './SignForm'


function Main () {


 const  PrivateRoute = ({ children })  => {
  // const value = false
  var determineAuth = true
  let token = localStorage.getItem('token');
  if(token) {
    determineAuth = true
  }




  return determineAuth ? children : <Navigate to="/sign-up" />;
}


  return (
    <Router>
        <Navbar/>
      <div>
        <Routes>
        <Route path='/sign-up' exact element={<SignUpForm />} />
          <Route path='/'  element={
          <PrivateRoute>
          <Books />
          </PrivateRoute>
          } />
          <Route path='/edit-book'  element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main
