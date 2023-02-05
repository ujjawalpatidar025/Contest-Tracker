import React from 'react'
import { useState } from 'react';
import { Container, Box, Typography, Avatar, TextField, FormControl, Button, FormHelperText } from '@material-ui/core';


const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Ucheck, setUcheck] = useState(false);
  const [Pcheck, setPcheck] = useState(false);





  return (
    <Container
      maxWidth={1}
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={0}
        p={0}
        style={{ width: '25%', margin: '60px auto', backgroundColor: 'white', height: 'auto', borderRadius: '10px', boxShadow: '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)' }}
      >

        <Box
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
        >
          <Avatar maxWidth={2} ></Avatar>
          <Typography
            variant='h5'
            style={{ margin: '10px', fontFamily: 'sans-serif', fontWeight: 'bolder' }}


          >Login</Typography>

        </Box>
        <FormControl
          style={{
            marginTop: '30px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <TextField
            variant='outlined'
            color='primary'
            value={Username}
            label='username'
            onChange={(e) => {
              setUsername(e.target.value);
              setUcheck(true);

            }}
            style={{ margin: '10px', width: '20rem' }}
            error={(!Username && Ucheck)}
            helperText={(!Username && Ucheck) ? '*required' : false}
            required

          />
          <TextField
            variant='outlined'
            color='primary'
            value={Password}
            label='password'
            onChange={(e) => {
              setPassword(e.target.value);
              setPcheck(true);
            }}
            sx={{
              '&:hover': {
                outline: 'none'
              }
            }}
            type='password'
            style={{ margin: '10px', width: '20rem' }}
            error={(!Password && Pcheck)}
            helperText={(!Password && Pcheck) ? '*required' : 'Do not share your Password with anyone'}
            required
          />
          <Button
            variant="contained"
            color='primary'
            style={{ margin: '20px', width: '20rem' }}
          >Submit</Button>

          <FormHelperText>If you are not registered yet</FormHelperText>
          <Button
            // variant='outlined'
            color='primary'

            style={{ marginBottom: '20px' }}
          > Register Here</Button>


        </FormControl>


      </Box>

    </Container>
  )
}

export default Login