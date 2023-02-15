import { Container, Paper, Typography, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import image from '../Images/bg.svg'
import i1 from '../Images/1.png'
import i2 from '../Images/2.png'
import i3 from '../Images/3.png'
import { Link } from 'react-router-dom'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Homepage.css'


const Homepage = () => {
  return (
    <Container maxWidth={1} style={{ padding: '0', margin: '0' }}>




      {/* <Box style={{ height: '300px', width: '100vw', margin: '0', padding: '0' }}>


        <Typography variant='h2' color='primary' component='div' style={{ width: '600px', letterSpacing: '10px', fontWeight: 'bolder', textAlign: 'left', position: 'absolute', left: '80px', top: '170px' }}>Learn Without Limits 💡</Typography>


        <Typography variant='h5' component='div' style={{ width: '500px', fontWeight: 'bolder', letterSpacing: '7px', textAlign: 'left', position: 'absolute', left: '80px', top: '370px' }}> Be here to learn something new.....👍</Typography>



        <Typography variant='h6' component='div' style={{ width: '450px', letterSpacing: '3px', fontWeight: 'bolder', textAlign: 'center', position: 'absolute', right: '80px', top: '170px', fontWeight: 'bolder' }}>Start, switch, or advance your career with courses, Professional Certificates, and degrees from world-class universities and companies.</Typography>

        <Box style={{ width: '450px', fontWeight: 'bolder', fontFamily: 'sans-serif', textAlign: 'center', position: 'absolute', right: '80px', top: '370px' }}>
          <Button size='large' variant="contained" color='primary' style={{ textTransform: 'capitalize', width: '200px', margin: 'auto 10px' }}> Sign In</Button>

          <Button size='large' variant="outlined" color='primary' style={{ textTransform: 'capitalize', width: '200px', fontWeight: 'bold', }}> Sign up </Button>



        </Box>
      </Box>
      <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f51b5" fill-opacity="1" d="M0,256L1440,160L1440,320L0,320Z"></path></svg>
      <Box style={{ height: 'auto', backgroundColor: '#3f51b5', padding: '50px' }}>
        <Typography variant='h2' style={{ color: 'white' }} >
          Courses

        </Typography>

        <Typography variant='6' style={{ color: 'white', margin: '30px auto', textAlign: 'left', textDecoration: 'underline', textDecorationStyle: "dashed" }}>
          Web Development
        </Typography>
        <Typography variant='h6' style={{ color: 'white', margin: '30px auto', textAlign: 'justify' }}>
          Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
        </Typography>




        <Box style={{ width: '500px', height: '3px', backgroundColor: 'white' }}></Box>


        <Typography variant='6' style={{ color: 'white', margin: '30px auto', textAlign: 'left', textDecoration: 'underline', textDecorationStyle: "dashed" }}>
          App Development
        </Typography>
        <Typography variant='h6' style={{ color: 'white', margin: '30px auto', textAlign: 'justify' }}>
          Android software development is the process by which applications are created for devices running the Android operating system. Google states that[3] "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. All non-Java virtual machine (JVM) languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. The official Android app distribution mechanism to end users is Google Play; it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.
        </Typography>
        <Box style={{ width: '500px', height: '3px', backgroundColor: 'white' }}></Box>


        <Typography variant='h4' style={{ color: 'white', margin: '30px auto', textAlign: 'left', textDecoration: 'underline', textDecorationStyle: "dashed" }}>
          Programming Languages
        </Typography>
        <Typography variant='h6' style={{ color: 'white', margin: '30px auto', textAlign: 'justify' }}>
          A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.

          The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning), which are usually defined by a formal language. Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.

          Programming language theory is the subfield of computer science that studies the design, implementation, analysis, characterization, and classification of programming languages.
        </Typography>



      </Box>

      <Box maxWidth={1} style={{height:'300px'}}>

      </Box> */}


      <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'95vh'}} >
        <Paper  style={{height:'70vh',borderRadius:'0px 30px 30px 0',width:'50vw'}} elevation='4'>
      <Typography style={{ width:'600px', fontSize:'2.1rem',fontWeight:'bolder',fontFamily:'serif',margin:'50px' }}>“eLearning doesn't just "happen"! It requires careful planning and implementation.”</Typography>
      <Typography style={{ width:'600px', fontSize:'1rem',fontWeight:'bolder',fontFamily:'serif',margin:'50px' }}>Start, switch, or advance your career with courses, Professional Certificates, and degrees from world-class universities and companies.</Typography>
      <Button size='large' variant="contained" color='primary' style={{ textTransform: 'capitalize', width: '200px', margin: 'auto 10px' }}> Sign In</Button>

          <Button size='large' variant="outlined" color='primary' style={{ textTransform: 'capitalize', width: '200px', fontWeight: 'bold', }}> Sign up </Button>
      </Paper>
     

      <img src={image} style={{width:'50vw'}} />
    
    
      </Box>

      <Box style={{height:'auto',padding:'0px 50px'}}>
        <Paper style={{width:'95vw',height:'auto',margin:'auto',borderRadius:'20px'}} elevation='4'>

        <Box style={{ height: 'auto', padding: '50px' }}>
        <Typography variant='h2' style={{  color: '#3f51b5' }} >
          Courses

        </Typography>

        <Typography variant='h4' style={{ color: '#3f51b5', margin: '30px auto', textAlign: 'left',fontFamily:'serif' }}>
          Web Development
        </Typography>
        <Typography variant='h6' style={{ color: 'black', margin: '30px auto', textAlign: 'justify',fontFamily:'serif' }}>
          Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
        </Typography>




        <Box style={{ width: '500px', height: '3px', backgroundColor: 'black' }}></Box>


        <Typography variant='h4' style={{ color: '#3f51b5', margin: '30px auto', textAlign: 'left',fontFamily:'serif' }}>
          App Development
        </Typography>
        <Typography variant='h6' style={{ color: 'black', margin: '30px auto', textAlign: 'justify',fontFamily:'serif' }}>
          Android software development is the process by which applications are created for devices running the Android operating system. Google states that[3] "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. All non-Java virtual machine (JVM) languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. The official Android app distribution mechanism to end users is Google Play; it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.
        </Typography>
        <Box style={{ width: '500px', height: '3px', backgroundColor: 'black' }}></Box>


        <Typography variant='h4' style={{ color: '#3f51b5', margin: '30px auto', textAlign: 'left',fontFamily:'serif'}}>
          Programming Languages
        </Typography>
        <Typography variant='h6' style={{ color: 'black', margin: '30px auto', textAlign: 'justify',fontFamily:'serif' }}>
          A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.

          The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning), which are usually defined by a formal language. Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.

          Programming language theory is the subfield of computer science that studies the design, implementation, analysis, characterization, and classification of programming languages.
        </Typography>



      </Box>

        </Paper>


      </Box>
      <svg style={{display:'block'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f51b5" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,245.3C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
     
      <Box style={{height:'auto',width:'100vw',backgroundColor:'#3f51b5',paddingBottom:'20px'}}>
        <Typography variant='h3' style={{textAlign:'left',width:'80vw',margin:'auto',color:'white',letterSpacing:'4px'}}>
          Partners
         <hr></hr>
        </Typography>
        <Box>
          <img src={i1} style={{width:'200px',height:'200px',margin:'30px'}}></img>
          <img src={i2} style={{width:'200px',height:'200px',margin:'30px'}}></img>
          <img src={i3} style={{width:'200px',height:'200px',margin:'30px'}}></img>
        </Box>

       


        <Paper style={{height:'300px',width:'90vw',display:'flex',justifyContent:'space-around',alignItems:'center',borderRadius:'0 200px 200px 0px',margin:'40px 0',backgroundColor:'#rgb(237 238 245 / 96%)',textAlign:'left'}} elevation='4'>
          <Box style={{width:'20vw',height:'250px'}}>
            <Typography variant='h6' style={{color:'#3f51b5',fontWeight:'bolder',fontSize:'1.5rem',paddingLeft:'40px'}}>E-help</Typography>
            <Box >
              <ul style={{textDecoration:'none',listStyle:'none',textAlign:'left' }}>
              <li>About</li>
              <li>For business</li>
              <li>Affiliates</li>
              <li>Open E-help</li>
              <li>Advisory Councils</li>
              <li>Careers</li>
              <li>News</li>
              </ul>
            </Box>
          </Box>

          <Box style={{width:'20vw',height:'250px'}}>
          <Typography variant='h6' style={{color:'#3f51b5',fontWeight:'bolder',fontSize:'1.5rem',paddingLeft:'40px'}}>Connect</Typography>
          <Box >
              <ul style={{textDecoration:'none',listStyle:'none',textAlign:'left' }}>
              <li>Blog</li>
              <li>Contact Us </li>
              <li>Help Center</li>
              <li>Security</li>
              <li>Media Kit</li>
              </ul>
            </Box>
            
            </Box>

            <Box style={{width:'20vw',height:'250px'}}>
            <Typography variant='h6' style={{color:'#3f51b5',fontWeight:'bolder',fontSize:'1.5rem',paddingLeft:'40px'}}>Legal</Typography>
            <Box >
              <ul style={{textDecoration:'none',listStyle:'none',textAlign:'left' }}>
              <li>Terms & services</li>
              <li>Privacy Policy </li>
              <li>Cookie Policy</li>
              <li>Accessbility Policy</li>
              <li>Trademark policy</li>
              <li>Modern Slavery Statement</li>
              </ul>
            </Box>
            
          </Box>

          <Box style={{width:'20vw',height:'250px'}}>
          <Typography variant='h6' style={{color:'#3f51b5',fontWeight:'bolder',fontSize:'1.5rem',paddingLeft:'40px'}}>Socials</Typography>
          <Box style={{display:'flex',justifyContent:'space-around',height:'100px',alignItems:'center',width:'200px'}}>
            <FacebookIcon />
            <YouTubeIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
             
            </Box>
            
            
          </Box>
</Paper>
      

      </Box>
      
    
     
     


    </Container>
  )
}

export default Homepage