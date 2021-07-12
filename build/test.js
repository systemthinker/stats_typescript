"use strict";
var HoldNumber = /** @class */ (function () {
    function HoldNumber(data) {
        this.data = data;
    }
    return HoldNumber;
}());
var HoldString = /** @class */ (function () {
    function HoldString(data) {
        this.data = data;
    }
    return HoldString;
}());
var HoldAnything = /** @class */ (function () {
    function HoldAnything(data) {
        this.data = data;
    }
    HoldAnything.prototype.add = function (a) {
        return a;
    };
    return HoldAnything;
}());
var holdString = new HoldString('adsf');
console.log('init holdstring is', holdString.data);
holdString.data = 'adsfasdf';
console.log('holdstring new', holdString.data);
var holdNumber = new HoldAnything(1);
holdNumber.data = 123;
