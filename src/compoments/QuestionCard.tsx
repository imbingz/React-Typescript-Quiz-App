import React from 'react';

//create type for props (can be any name)
type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
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
						disabled={userAnswer}
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
