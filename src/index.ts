import fs from 'fs';

const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' });

let matchesArr: string[] = matches.split('\n');

let newMatchesArr: string[][] = [];

matchesArr.map((line: string) => {
  const newLine = line.split(',');
  newMatchesArr.push(newLine);
});

enum matchResult {
  homeWin = 'H',
  awayWin ='A',
  draw = 'D',
};




let manUnitedWins = 0;

for (let match of newMatchesArr) {
  if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log('man wins:', manUnitedWins);
