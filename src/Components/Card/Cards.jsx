import React from 'react'
import Codeforces from '../../Images/cf.png'

import Codechef from '../../Images/cc.png'
import Hackerrank from '../../Images/hr.png'
import leetcode from '../../Images/lt.png'
import google from '../../Images/gk.png'
import atcoder from '../../Images/atcoder.png'

import './Card.css'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='card'>
      <Link to='/codeforces'><img src={Codeforces} label='Codeforces'></img></Link>
      <Link to='/codechef'><img src={Codechef}></img></Link>
      <Link to='/leetcode'><img src={leetcode}></img></Link>
      <Link to='/hackerrank'><img src={Hackerrank}></img></Link>
      <Link to='/kickstart'><img src={google}></img></Link>
      <Link to='/atcoder'><img src={atcoder}></img></Link>
    
    </div>
  )
}

export default Cards