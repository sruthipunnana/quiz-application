import React from 'react';
import './App.css';
import { Home } from './components/home';
import { Question } from './components/question';
import { Result } from './components/result';

export const myBasket= React.createContext()
function App() {
   const [page, setPage] = React.useState('home')
   const [score,setScore] = React.useState(0)

  return (
    <div className="App">
     <myBasket.Provider value={{setMyPage:setPage, myScore: score, setMyScore: setScore}}>
     {page==='home' && <Home/>}
     {page==='question' && <Question/>}
     {page==='result' && <Result/>}
     </myBasket.Provider>
   
    </div>
  );
}

export default App;
