import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { shadows } from '@material-ui/system';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Avatar } from '@material-ui/core';
import { Box } from '@material-ui/core';

const Navbar = () => {
    const [checkLogin, setcheckLogin] = useState(true)

    return (
        <div position='fixed'>
            <AppBar position="fixed" Top='0px' color='primary' component='div' boxShadow={3} m={0} p={0} style={{ padding: '0',overflow:'hidden' }}>
                <Toolbar >

                    <IconButton color='inherit' size='large' aria-label='logo'>
                        <EmojiObjectsIcon fontSize='large' />
                    </IconButton>

                    <Typography variant='h5' style={{ width: '100px', color: 'primary.light' }} >
                        E-Help

                    </Typography>

                    <Typography component='span' style={{ margin: 'auto 1px' }}>
                        <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Home</Button>


                    </Typography>
                    <Typography component='span' style={{ margin: 'auto 1px' }}>
                        <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Dashboard</Button>

                    </Typography>
                    <Typography component='span' style={{ margin: 'auto 1px' }}>
                        <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Courses</Button>

                    </Typography>
                    <Typography component='span' style={{ margin: 'auto 1px' }}>
                        <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Partners</Button>

                    </Typography>
                    <Typography component='span' style={{ margin: 'auto 1px' }}  >
                        <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Learn More</Button>

                    </Typography>

                    <Typography component='div' style={{
                        position: 'absolute',
                        right: '40px'

                    }}>
                        {checkLogin ? <Avatar >U</Avatar> : <Typography>
                            <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Sign In</Button>
                            <Button size='large' style={{ color: 'white', textTransform: 'capitalize' }}> Sign up </Button>
                        </Typography>}

                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar