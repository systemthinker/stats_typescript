import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

const csvFileReader = new CsvFileReader('football.csv');

const matches = new MatchReader(csvFileReader)
matches.load();

const manWins = new WinsAnalysis("Man United");
manWins.run(matches.matches)





