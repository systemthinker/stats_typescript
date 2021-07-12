import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchesOverview = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchesOverview.load();
summary.buildAndPrintReport(matchesOverview.matches);
