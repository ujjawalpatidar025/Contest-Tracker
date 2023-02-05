import React from 'react'
import { useState } from 'react';
import { Container, Box, Typography, Avatar, TextField, FormControl, Button, FormHelperText } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { shadows } from '@material-ui/system';
import { hover } from '@testing-library/user-event/dist/hover';
import { Email, Gradient } from '@material-ui/icons';


const Register = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [Institute, setInstitute] = useState("");
    const [email, setemail] = useState("");
    const [Graduation, setGraduation] = useState();




    const years = ["2022", "2023", "2024", "2025", "2026", "2027"];


    return (
        <Container
            maxWidth={1} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
        >
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={0}
                p={0}
                style={{ width: '50%', margin: '60px auto', backgroundColor: 'white', height: 'auto', borderRadius: '10px', boxShadow: '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)' }}
            >

                <Box
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <Avatar maxWidth={2}></Avatar>
                    <Typography
                        variant='h5'
                        style={{ margin: '10px', fontFamily: 'sans-serif', fontWeight: 'bolder' }}

                    >Register User</Typography>

                </Box>
                <FormControl
                    style={{ marginTop: '20px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box style={{ height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>


                        <TextField
                            variant='outlined'
                            color='primary'
                            value={Name}
                            type='text'
                            label='Full Name'
                            onChange={(e) => {
                                setName(e.target.value);

                            }}
                            style={{ margin: '10px', width: '20rem' }}

                            required
                        />


                        <TextField
                            variant='outlined'
                            color='primary'
                            value={Username}
                            type='text'
                            label='Username'
                            onChange={(e) => {
                                setUsername(e.target.value);

                            }}
                            style={{ margin: '10px', width: '20rem' }}

                            required
                        />


                        <TextField
                            variant='outlined'
                            color='primary'
                            value={email}
                            type='email'
                            label='Email'
                            onChange={(e) => {
                                setemail(e.target.value);

                            }}
                            style={{ margin: '10px', width: '20rem' }}


                            required
                        />


                        <TextField
                            variant='outlined'
                            color='primary'
                            value={Institute}
                            type='text'
                            label='Institute'
                            onChange={(e) => {
                                setInstitute(e.target.value);

                            }}
                            style={{ margin: '10px', width: '20rem' }}

                            required
                        />


                        <Autocomplete
                            options={years}

                            renderInput={(params) => <TextField {...params} label='Graduation ' variant='outlined' color='primary' />}
                            style={{ margin: '10px', width: '20rem' }}
                            value={Graduation}
                            onChange={(e) => {
                                setGraduation(e.target.value);

                            }}

                        />




                        <TextField
                            variant='outlined'
                            color='primary'
                            type='password'
                            label='Password'
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value);

                            }}
                            style={{ margin: '10px', width: '20rem' }}

                            required
                        />

                    </Box>
                    <Button
                        variant="contained"
                        color='primary'
                        style={{ margin: '20px', width: '20rem' }}
                    >Submit</Button>


                    <FormHelperText>If you are already registered</FormHelperText>
                    <Button
                        color='primary'
                        style={{ marginBottom: '20px' }}
                    // onClick={checkStatus}
                    > Login Here</Button>


                </FormControl>

                {/* <Button onClick={show}>show</Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={600}

                    message="Note archived">

                </Snackbar> */}

            </Box>

        </Container>
    )
}

export default Register