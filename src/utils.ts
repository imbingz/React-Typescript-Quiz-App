// use math.random as sort method cb function to sort the array randomly
//each comparison of array elements will be sorted on a new random order (>0, <0, =0)
// not the best solution but it works here. using Yates is better as below
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffleArray = (array: any[]) => [ ...array ].sort(() => Math.random() - 0.5);
