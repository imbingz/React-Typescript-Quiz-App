import React, { useState } from 'react';
import { fetchTrivia, Difficulty } from './API';
import QuestionCard from './compoments/QuestionCard';

const TOTAL_QUESTIONS = 10;

function App () {
	//create states
	const [ loading, setLoading ] = useState(false);
	const [ questions, setQuestions ] = useState([]);
	const [ number, setNumber ] = useState(0);
	const [ userAnswers, setUserAnswers ] = useState([]);
	const [ score, setScore ] = useState(0);
	const [ gameOver, setGameOver ] = useState(false);

	fetchTrivia(TOTAL_QUESTIONS, Difficulty.EASY);

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className='App'>
			<h1>Trivia Time</h1>
			<button className='start' onClick={startTrivia}>
				Start
			</button>
			<p className='score'>Score:</p>
			<p>Loading Trivias</p>
			{/* <QuestionCard
				questionNumber={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={

						userAnswers ? userAnswers[number] :
						undefined
				}
				callback={checkAnswer}
			/> */}
			<button className='next' onClick={nextQuestion}>
				Next
			</button>
		</div>
	);
}

export default App;
