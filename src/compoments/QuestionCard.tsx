import React from 'react';

//types
import { AnswerObj } from '../App';

//create type for props (can be any name)
//https://stackoverflow.com/questions/54433183/typescript-interface-signature-for-the-onclick-event-in-reactjs
type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void; // void does not care about return
	userAnswer: AnswerObj | undefined;
	questionNumber: number;
	totalQuestions: number;
};

// need to specify the component is function component (React.FC)
// pass the Props we defined
//deconstruct the Props in parameter
const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
	<div>
		<p className='number'>
			Questions: {questionNumber} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer, i) => (
				<div key={i}>
					<button
						disabled={userAnswer ? true : false} // or !!userAnswer
						onClick={callback}
						dangerouslySetInnerHTML={{ __html: answer }}
						value={answer}
					/>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
