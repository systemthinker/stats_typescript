import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { matchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

const testDate = reader.data[0][0];

console.log('testDate', testDate);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}
