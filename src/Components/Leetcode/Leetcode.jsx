import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';
import './Leetcode.css'
import { Button } from 'react-bootstrap';

const Leetcode = () => {


    const [info, setinfo] = useState([])
   
    useEffect(() => {
    axios.get('https://kontests.net/api/v1/leet_code').then((resp)=>{
        
       setinfo(resp.data);
     
    }).catch((e)=>{
        console.log("error");
    })
      
    }, [])


    const dateconvert=(e)=>{
        var s = new Date(e). toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
      return s;
    }


    const secondsToTime=(sec)=>
{
    var hours = Math.floor(sec/3600);
    (hours >= 1) ? sec = sec - (hours*3600) : hours = '00';
    var min = Math.floor(sec/60);
    (min >= 1) ? sec = sec - (min*60) : min = '00';
    (sec < 1) ? sec='00' : void 0;

    (min.toString().length == 1) ? min = '0'+min : void 0;    
    (sec.toString().length == 1) ? sec = '0'+sec : void 0;    

    return hours+':'+min+':'+sec;
}


 

   

    
    

    
  return (
    <div className='Leetcode' >
        <h1>Leetcode Contest List</h1>
        <Table border={1} responsive style={{overflowX:'scroll'}}>
      <thead className='head'>
        <tr>
         
          
            <th className='block'>Contest Name</th>
            <th className='block'>Start time</th>
            <th className='block'>End time</th>
            <th className='block'>Duration</th>
            <th className='block'>Status</th>
            <th className='block'>Link</th>
          
        </tr>
      </thead>
      <tbody className='tbody'>

        {

            info.map((item)=>
           
            <tr>
                <td  className='block'>{item.name}</td>
                <td className='block'>{dateconvert(item.start_time)}</td>
                <td  className='block'>{dateconvert(item.end_time)}</td>

                <td  className='block'>{secondsToTime(item.duration)}</td>
                <td  className='block'>{item.status==="CODING"?<h5 style={{color:'green'}}>RUNNING</h5>:<h5 style={{color:'red'}}>UPCOMING</h5>}</td>
                <td  className='block'><Link to={item.url} style={{textDecoration:'none',color:'white'}}><LinkIcon/></Link></td>
               
            </tr>
            
            )
        }

    

       
        {/* <tr>
         
          {Array.from({ length: 6 }).map((_, index) => (
            <td  className='block' key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
         
          {Array.from({ length: 6 }).map((_, index) => (
            <td className='block' key={index}>Table cell {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>

    
    </div>
  )
}

export default Leetcode;