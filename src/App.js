import React from 'react'

import { Container, Box, Divider } from '@material-ui/core';

import { Routes, Route } from 'react-router-dom';

import './App.css'
import Main from './Components/Main/Main';
import Codeforces from './Components/Codeforces/Codeforces';
import Codechef from './Components/Codechef/Codechef';
import Leetcode from './Components/Leetcode/Leetcode';
import Hackerrank from './Components/Hackerrank/Hackerrank';
import Google from './Components/Google/Google';
import Atcoder from './Components/Atcoder/Atcoder';


const App = () => {
  return (

    <Container maxWidth={1} style={{ height: 'auto', minHeight: '100vh', padding: '0',backgroundColor:'black' }}>
      

     
      
     
        <Routes>
         
          <Route exact path='/' element={<Main/>} />
          <Route exact path='/codeforces' element={<Codeforces/>} />
          <Route exact path='/codechef' element={<Codechef/>} />
          <Route exact path='/leetcode' element={<Leetcode/>} />
          <Route exact path='/hackerrank' element={<Hackerrank/>} />
          <Route exact path='/kickstart' element={<Google/>} />
          <Route exact path='/atcoder' element={<Atcoder/>} />

        </Routes>
       



      {/* <Login/> */}

    </Container>
  )
}

export default App