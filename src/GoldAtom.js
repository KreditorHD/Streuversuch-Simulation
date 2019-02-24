"use strict";
exports.__esModule = true;
var GoldAtom = /** @class */ (function () {
    function GoldAtom(x, y) {
        this.CorX = 630;
        this.CorY = 360;
        this.CorX = x;
        this.CorY = y;
    }
    GoldAtom.prototype.getMasse = function () {
        return this.masse;
    };
    GoldAtom.prototype.getCorX = function () {
        return this.CorX;
    };
    GoldAtom.prototype.getCorY = function () {
        return this.CorY;
    };
    GoldAtom.prototype.setCorX = function (CorX) {
        this.CorX = CorX;
    };
    GoldAtom.prototype.setCorY = function (CorY) {
        this.CorY = CorY;
    };
    return GoldAtom;
}());
exports["default"] = GoldAtom;
