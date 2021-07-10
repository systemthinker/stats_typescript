import fs from 'fs';

const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' });

let matchesArr: string[] = matches.split('\n');

let newMatchesArr: string[][] = [];

matchesArr.map((line: string) => {
  const newLine = line.split(',');
  newMatchesArr.push(newLine);
});
