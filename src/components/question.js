
import React from 'react';
import { myBasket } from '../App';

const questions=[
    {
        title: "What is the use of useState()?",
        A: "To store the data",
        B: "To not store the data",
        C: "Both A and B",
        D: "None of the above",
        Answer: "A"
    },
    {
        title: "What is 10 + 20?",
        A: 100,
        B: 130,
        C: 30,
        D: 70,
        Answer: "C"
    },
    {
        title: "What is React?",
        A: "It is a library",
        B: "It is framework",
        C: "Both A and B",
        D: "None of the above",
        Answer: "A"
    },
    {
        title: "What is Redux?",
        A: "It is a state management library",
        B: "It is framework",
        C: "It is a language",
        D: "None of the above",
        Answer: "A"
    }
]


export const Question = () => {
    const [options, setOptions] = React.useState({}); // Store selected options for each question
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const { setMyScore, setMyPage } = React.useContext(myBasket);
  
    const setOption = (selectedOption) => {
      const updatedOptions = { ...options, [currentQuestion]: selectedOption };
      setOptions(updatedOptions);
    };
  
    const goToQuestion = () => {
      setCurrentQuestion(currentQuestion + 1);
    };
  
    const goToPrevious = () => {
      setCurrentQuestion(currentQuestion - 1);
    };
  
    const clickSubmit = () => {
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        if (options[i] === questions[i].Answer) {
          score++;
        }
      }
      setMyScore(score);
      setMyPage('result');
    };
  
    return (
      <div style={{ marginLeft: '5px', marginTop: '10px', marginRight: '5px' }}>
        <h1 style={{ fontSize: '20px' }}>Q.{questions[currentQuestion].title}</h1>
        {['A', 'B', 'C', 'D'].map((option) => (
          <div style={{display:'flex'}}>
          <span style={{marginTop:'3px'}}>{option+'.'}</span>
          <button style={{display:'block', marginBottom:'1rem'}}
            key={option}
            className={`btn btn-outline-dark${options[currentQuestion] === option ? ' active' : ''}`}
            onClick={() => setOption(option)}
          >
            {questions[currentQuestion][option]}
          </button>
          </div>
        ))}
  
        <div style={{ display: 'flex' }}>
          {currentQuestion > 0 && currentQuestion < questions.length ? (
            <button className='btn btn-primary' style={{ marginRight: '8rem' }} onClick={goToPrevious}>
              Back
            </button>
          ) : null}
          {currentQuestion === questions.length - 1 ? (
            <button className='btn btn-danger' onClick={clickSubmit}>
              Submit
            </button>
          ) : (
            <button className='btn btn-primary' onClick={goToQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Question;

