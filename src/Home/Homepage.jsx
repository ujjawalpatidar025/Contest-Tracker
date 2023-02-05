import { Container, Paper, Typography, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import image from '../Images/svg.png'
import React from 'react'

import './Homepage.css'

const Homepage = () => {
  return (
    <Container maxWidth={1} style={{ padding: '0', margin: '0' }}>




      <Box style={{ height: '300px', width: '100vw',margin:'0',padding:'0'}}>


        <Typography variant='h2' color='primary' component='div' style={{ width: '600px', letterSpacing:'10px', fontWeight: 'bolder', textAlign: 'left', position: 'absolute', left: '80px', top: '170px' }}>Learn Without Limits 💡</Typography>


        <Typography variant='h5' component='div' style={{ width: '500px', fontWeight: 'bolder', letterSpacing:'7px', textAlign: 'left', position: 'absolute', left: '80px', top: '370px' }}> Be here to learn something new.....👍</Typography>



        <Typography variant='h6' component='div' style={{ width: '450px', letterSpacing:'3px', fontWeight: 'bolder', textAlign: 'center', position: 'absolute', right: '80px', top: '170px' ,fontWeight:'bolder'}}>Start, switch, or advance your career with courses, Professional Certificates, and degrees from world-class universities and companies.</Typography>

        <Box style={{ width: '450px', fontWeight: 'bolder', fontFamily: 'sans-serif', textAlign: 'center', position: 'absolute', right: '80px', top: '370px' }}>
          <Button size='large' variant="contained" color='primary' style={{ textTransform: 'capitalize', width: '200px', margin: 'auto 10px' }}> Sign In</Button>

          <Button size='large' variant="outlined" color='primary' style={{ textTransform: 'capitalize', width: '200px', fontWeight: 'bold', }}> Sign up </Button>



        </Box>
      </Box>
      <svg style={{display:'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f51b5" fill-opacity="1" d="M0,256L1440,160L1440,320L0,320Z"></path></svg>
      <Box style={{height:'300px',backgroundColor:'#3f51b5'}}>

      </Box>

    </Container>
  )
}

export default Homepage