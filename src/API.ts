// use enum to describe difficulty types
export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard'
}

export const fetchTrivia = async (amount: number, difficulty: Difficulty) => {
	//config endpoint
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	console.log(endpoint);

	// fetch trivia
	const resp = await fetch(endpoint);
	const data = await resp.json();

	console.log(data);
};
