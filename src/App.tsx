import React, { useState } from 'react';
import { fetchTrivia, Difficulty, QuestionState } from './API';
import QuestionCard from './compoments/QuestionCard';

const TOTAL_QUESTIONS = 10;

//Create a type for the answer
type AnswerObj = {
	question: string;
	answer: string; //user answer
	correct: boolean; //tell if user answered correctly
	correctAnswer: string;
};

function App () {
	//create states
	const [ loading, setLoading ] = useState(false);
	const [ questions, setQuestions ] = useState<QuestionState[]>([]);
	const [ number, setNumber ] = useState(0);
	const [ userAnswers, setUserAnswers ] = useState<AnswerObj[]>([]);
	const [ score, setScore ] = useState(0);
	const [ gameOver, setGameOver ] = useState(true);

	// console.log(fetchTrivia(TOTAL_QUESTIONS, Difficulty.EASY));
	console.log(questions);

	const startTrivia = async () => {
		try {
			//fetch trivia
			setLoading(true);
			setGameOver(false);
			const newQuestions = await fetchTrivia(TOTAL_QUESTIONS, Difficulty.EASY);

			//set questions with newQuestions
			setQuestions(newQuestions);
			setScore(0);
			setUserAnswers([]);
			setNumber(0);
			setLoading(false);
		} catch (error) {
			//error handling
			console.error(error);
		}
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className='App'>
			<h1>Trivia Time</h1>
			{(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
				<button className='start' onClick={startTrivia}>
					Start
				</button>
			)}
			{!gameOver && <p className='score'>Score: {score}</p>}
			{loading && <p>Loading Trivias ... </p>}
			{!loading &&
			!gameOver &&
			questions.length > 0 && (
				<QuestionCard
					questionNumber={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!loading &&
			!gameOver &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 && (
				<button className='next' onClick={nextQuestion}>
					Next
				</button>
			)}
		</div>
	);
}

export default App;
