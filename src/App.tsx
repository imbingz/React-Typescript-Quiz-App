import React, { useState } from 'react';
import { fetchTrivia, Difficulty, QuestionState } from './API';
import QuestionCard from './compoments/QuestionCard';
import { GlobalStyle, Wrapper } from './App.style';

const TOTAL_QUESTIONS = 12;

//Create a type for the answer
//will be important in QuestionCard.tsx
export type AnswerObj = {
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
	// console.log(questions);

	const startTrivia = async () => {
		try {
			//reset
			setUserAnswers([]);
			setScore(0);
			setNumber(0);

			//fetch trivia
			setLoading(true);
			setGameOver(false);
			const newQuestions = await fetchTrivia(TOTAL_QUESTIONS, Difficulty.EASY);

			//set questions with newQuestions
			setQuestions(newQuestions);
			setLoading(false);
		} catch (error) {
			//error handling
			console.error(error);
		}
	};

	//cehckAnswer when user click on answer
	const checkAnswer = (e: any) => {
		// console.log(e.target.value);
		if (!gameOver) {
			const answer = e.target.value;
			//check answer, returns true or false
			const correct = answer === questions[number].correct_answer;
			if (correct) {
				setScore(prev => prev + 1);
			}

			// create an answerObj and save answer to answers
			const answerObj = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			};
			setUserAnswers(prev => [ ...prev, answerObj ]);
		}
	};

	//Display next questions if not the last one
	const nextQuestion = () => {
		const nextQuestion = number + 1;
		//check if it is the last one
		if (nextQuestion !== TOTAL_QUESTIONS) {
			setNumber(nextQuestion);
		} else {
			setGameOver(true);
		}
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<Wrapper>
				<h1>Trivia Time</h1>
				{!gameOver && <p className='score'>Score: {score}</p>}
				{userAnswers.length === TOTAL_QUESTIONS && <p>Game Over. Press Start button to play again</p>}
				{(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
					<button className='start' onClick={startTrivia}>
						Start
					</button>
				)}
				{loading && <p>Loading Trivias ... </p>}
				{!loading &&
				!gameOver &&
				userAnswers.length !== TOTAL_QUESTIONS &&
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
			</Wrapper>
		</React.Fragment>
	);
}

export default App;
