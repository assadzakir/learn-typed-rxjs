/// <reference path='./typings/tsd.d.ts' />
var Rx = require("rx");
var friends = Rx.Observable.from(["Inam", "Zeeshan", "Taha", "Hira"]);
friends.forEach(function (value) {
    console.log(value);
});
