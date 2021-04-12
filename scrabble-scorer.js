// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
  let inWord = input.question("Enter a word to score: ");
  //console.log(oldScrabbleScorer(inWord));
  //console.log(simpleScore(inWord));
  //console.log(vowelBonusScore(inWord));
  return inWord;
};

let simpleScore = function(inWord) {
  return inWord.length;
}

let vowelBonusScore = function(inWord) {
  let score = 0;
  inWord = inWord.toLowerCase();
  for (i = 0; i < inWord.length; i++) {
    if (inWord.charAt(i) === 'a'
      || inWord.charAt(i) === 'e'
      || inWord.charAt(i) === 'i'
      || inWord.charAt(i) === 'o'
      || inWord.charAt(i) === 'u') {
        score += 3;
      }
    else {
      score += 1;
    }
  }
  return score;
}

let scrabbleScore = function (word) {
	word = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
    letterPoints += newPointStructure[word[i]];
	}

	return letterPoints;
}

const scoringAlgorithms = [ [ 'Simple Score', 'Each letter is worth 1 point.', 'A function with a parameter for user input that returns a score.' ], [ 'Bonus Vowels', 'Vowels are 3 pts, consonants are 1pt.', 'A function that returns a score based on the number of vowels and consonants.' ], [ 'Scrabbel', 'The traditional scoring algorithm', 'Uses the oldScrabbleScorer() function to determine the score for a given word.' ] ];

function scorerPrompt() {
  let selOption = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
  return selOption;
}

function transform(oldPointStructure) {
	return oldPointStructure = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let chosenWord = initialPrompt();
  let scoreOption = scorerPrompt();
  if (scoreOption === '0') {
    console.log(simpleScore(chosenWord));
  }
  else if (scoreOption === '1') {
    console.log(vowelBonusScore(chosenWord));
  }
  else if (scoreOption === '2') {
    console.log(scrabbleScore(chosenWord));
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

