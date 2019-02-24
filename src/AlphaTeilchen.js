"use strict";
exports.__esModule = true;
var GoldAtom_1 = require("./GoldAtom");
var AlphaTeilchen = /** @class */ (function () {
    function AlphaTeilchen(x, y) {
        this.masse = 6.64 * Math.pow(10, -27);
        this.velocityX = 0;
        this.velocityY = -20000000 * Math.pow(10, -7);
        this.timeInS = 0;
        this.streckeInM = 0;
        this.DistanceToNearestGoldAtomy = null;
        this.DistanceToNearestGoldAtomx = null;
        this.forcey = 0;
        this.forcex = 0;
        this.beschleunigungy = 0;
        this.beschleunigungx = 0;
        this.isClicked = false;
        this.CorX = x;
        this.CorY = y;
    }
    AlphaTeilchen.prototype.getNearestGoldAtom = function () {
        return this.nearestGoldAtom;
    };
    AlphaTeilchen.prototype.getIsClicked = function () {
        return this.isClicked;
    };
    AlphaTeilchen.prototype.setNearestGoldAtom = function (ga) {
        this.nearestGoldAtom = new GoldAtom_1["default"](ga.getCorX(), ga.getCorY());
    };
    AlphaTeilchen.prototype.getMasse = function () {
        return this.masse;
    };
    AlphaTeilchen.prototype.getVelocityX = function () {
        return this.velocityX;
    };
    AlphaTeilchen.prototype.getVelocityY = function () {
        return this.velocityY;
    };
    AlphaTeilchen.prototype.getCorX = function () {
        return this.CorX;
    };
    AlphaTeilchen.prototype.getCorY = function () {
        return this.CorY;
    };
    AlphaTeilchen.prototype.getDistanceToNearestGoldAtomy = function () {
        return this.DistanceToNearestGoldAtomy;
    };
    AlphaTeilchen.prototype.getDistanceToNearestGoldAtomx = function () {
        return this.DistanceToNearestGoldAtomx;
    };
    AlphaTeilchen.prototype.setVelocityX = function (vX) {
        this.velocityX = vX;
    };
    AlphaTeilchen.prototype.setIsClicked = function (b) {
        this.isClicked = b;
    };
    AlphaTeilchen.prototype.setVelocityY = function (vY) {
        this.velocityY = vY;
    };
    AlphaTeilchen.prototype.setCorX = function (CorX) {
        this.CorX = CorX;
    };
    AlphaTeilchen.prototype.setCorY = function (CorY) {
        this.CorY = CorY;
    };
    AlphaTeilchen.prototype.setDistanceToNearestGoldAtomy = function (dinstance) {
        this.DistanceToNearestGoldAtomy = dinstance;
    };
    AlphaTeilchen.prototype.setDistanceToNearestGoldAtomx = function (dinstance) {
        this.DistanceToNearestGoldAtomx = dinstance;
    };
    AlphaTeilchen.prototype.getTime = function () {
        return this.timeInS;
    };
    AlphaTeilchen.prototype.getStrecke = function () {
        return this.streckeInM;
    };
    AlphaTeilchen.prototype.round = function (wert, dez) {
        wert = parseFloat(wert);
        if (!wert)
            return 0;
        dez = parseInt(dez);
        if (!dez)
            dez = 0;
        var umrechnungsfaktor = Math.pow(10, dez);
        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
    };
    AlphaTeilchen.prototype.clicked = function (mouseY, mouseX) {
        var d = Math.pow((mouseY - this.getCorY()), 2) + Math.pow((mouseX - this.getCorX()), 2);
        d = Math.sqrt(d);
        if (d < 15) {
            console.log("AtomClicked");
            this.setIsClicked(true);
        }
    };
    return AlphaTeilchen;
}());
exports["default"] = AlphaTeilchen;
