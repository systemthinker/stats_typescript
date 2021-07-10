"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', { encoding: 'utf-8' });
var matchesArr = matches.split('\n');
var newMatchesArr = [];
matchesArr.map(function (line) {
    var newLine = line.split(',');
    newMatchesArr.push(newLine);
});
var matchResult;
(function (matchResult) {
    matchResult["homeWin"] = "H";
    matchResult["awayWin"] = "A";
    matchResult["draw"] = "D";
})(matchResult || (matchResult = {}));
;
var manUnitedWins = 0;
for (var _i = 0, newMatchesArr_1 = newMatchesArr; _i < newMatchesArr_1.length; _i++) {
    var match = newMatchesArr_1[_i];
    if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log('man wins:', manUnitedWins);
