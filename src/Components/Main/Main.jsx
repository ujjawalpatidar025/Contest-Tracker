import Cards from '../Card/Cards'
import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <h1>Contest Helper</h1>
        <Cards/>
        <h4 style={{textAlign:'center'}}>&copy; With Love IIST'ians Coders❤️</h4>
    </div>
  )
}

export default Main