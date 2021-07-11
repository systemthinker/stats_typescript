"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/');
    var year = Number(dateParts[2]);
    var month = Number(dateParts[1]) - 1;
    var day = Number(dateParts[0]) + 1;
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
