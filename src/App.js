import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import { Container, Box, Divider } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';

import { Home } from '@material-ui/icons';
import Homepage from './Home/Homepage';

import './App.css'


const App = () => {
  return (

    <Container maxWidth={1} style={{ height: 'auto', minHeight: '100vh', padding: '0' }}>
      <Container style={{minHeight:'64px'}}>

      </Container>

      <Navbar />
      <Container className='App' maxWidth={1} style={{ height: 'auto', minHeight: '90vh', padding: '0' }}>
     
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/' element={<Homepage />} />

        </Routes>
        </Container>




      {/* <Login/> */}

    </Container>
  )
}

export default App