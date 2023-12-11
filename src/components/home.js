import React from 'react'
import { myBasket } from '../App'

export const Home = () => {
    const {setMyPage}=React.useContext(myBasket)
    const startQuiz=()=>{
       setMyPage('question')
    }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10rem'}}>
        <div>
        <button onClick={startQuiz} className='btn btn-success'>Start Quiz</button>
        </div>  
        <p className='mt-1' style={{textAlign:'center'}}>Try to answer all the questions. All the best🙂</p>
    </div>
  )
}
