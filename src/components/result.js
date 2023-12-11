import React from 'react'
import { myBasket } from '../App'

export const Result = () => {
    const {myScore} =React.useContext(myBasket)
  return (
    <div style={{textAlign:'center', fontFamily:'Roboto', fontWeight:'bold', marginTop:'10rem', fontSize:'1.5rem' }}>
        {myScore===4? <p>Congratulations,Your Score is {myScore}/4🎊🎉</p>:<div>
            <p>Your Score is {myScore}/4</p>
            <p>It's Okay, Better luck next time🙂</p></div>}
       
        </div>
  )
}
