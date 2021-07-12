import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchesOverview = new MatchReader(csvFileReader);
matchesOverview.load();

const summary = new Summary(
  new WinsAnalysis("Man United"), 
  new ConsoleReport
)
summary.buildAndPrintReport(matchesOverview.matches)
