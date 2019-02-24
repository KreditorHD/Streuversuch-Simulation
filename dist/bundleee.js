/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AlphaTeilchen.ts":
/*!******************************!*\
  !*** ./src/AlphaTeilchen.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar GoldAtom_1 = __webpack_require__(/*! ./GoldAtom */ \"./src/GoldAtom.ts\");\r\nvar AlphaTeilchen = /** @class */ (function () {\r\n    function AlphaTeilchen(x, y) {\r\n        this.masse = 6.64 * Math.pow(10, -27);\r\n        this.velocityX = 0;\r\n        this.velocityY = -20000000 * Math.pow(10, -7);\r\n        this.timeInS = 0;\r\n        this.streckeInM = 0;\r\n        this.DistanceToNearestGoldAtomy = null;\r\n        this.DistanceToNearestGoldAtomx = null;\r\n        this.forcey = 0;\r\n        this.forcex = 0;\r\n        this.beschleunigungy = 0;\r\n        this.beschleunigungx = 0;\r\n        this.isClicked = false;\r\n        this.CorX = x;\r\n        this.CorY = y;\r\n    }\r\n    AlphaTeilchen.prototype.getNearestGoldAtom = function () {\r\n        return this.nearestGoldAtom;\r\n    };\r\n    AlphaTeilchen.prototype.getIsClicked = function () {\r\n        return this.isClicked;\r\n    };\r\n    AlphaTeilchen.prototype.setNearestGoldAtom = function (ga) {\r\n        this.nearestGoldAtom = new GoldAtom_1[\"default\"](ga.getCorX(), ga.getCorY());\r\n    };\r\n    AlphaTeilchen.prototype.getMasse = function () {\r\n        return this.masse;\r\n    };\r\n    AlphaTeilchen.prototype.getVelocityX = function () {\r\n        return this.velocityX;\r\n    };\r\n    AlphaTeilchen.prototype.getVelocityY = function () {\r\n        return this.velocityY;\r\n    };\r\n    AlphaTeilchen.prototype.getCorX = function () {\r\n        return this.CorX;\r\n    };\r\n    AlphaTeilchen.prototype.getCorY = function () {\r\n        return this.CorY;\r\n    };\r\n    AlphaTeilchen.prototype.getDistanceToNearestGoldAtomy = function () {\r\n        return this.DistanceToNearestGoldAtomy;\r\n    };\r\n    AlphaTeilchen.prototype.getDistanceToNearestGoldAtomx = function () {\r\n        return this.DistanceToNearestGoldAtomx;\r\n    };\r\n    AlphaTeilchen.prototype.setVelocityX = function (vX) {\r\n        this.velocityX = vX;\r\n    };\r\n    AlphaTeilchen.prototype.setIsClicked = function (b) {\r\n        this.isClicked = b;\r\n    };\r\n    AlphaTeilchen.prototype.setVelocityY = function (vY) {\r\n        this.velocityY = vY;\r\n    };\r\n    AlphaTeilchen.prototype.setCorX = function (CorX) {\r\n        this.CorX = CorX;\r\n    };\r\n    AlphaTeilchen.prototype.setCorY = function (CorY) {\r\n        this.CorY = CorY;\r\n    };\r\n    AlphaTeilchen.prototype.setDistanceToNearestGoldAtomy = function (dinstance) {\r\n        this.DistanceToNearestGoldAtomy = dinstance;\r\n    };\r\n    AlphaTeilchen.prototype.setDistanceToNearestGoldAtomx = function (dinstance) {\r\n        this.DistanceToNearestGoldAtomx = dinstance;\r\n    };\r\n    AlphaTeilchen.prototype.getTime = function () {\r\n        return this.timeInS;\r\n    };\r\n    AlphaTeilchen.prototype.getStrecke = function () {\r\n        return this.streckeInM;\r\n    };\r\n    AlphaTeilchen.prototype.round = function (wert, dez) {\r\n        wert = parseFloat(wert);\r\n        if (!wert)\r\n            return 0;\r\n        dez = parseInt(dez);\r\n        if (!dez)\r\n            dez = 0;\r\n        var umrechnungsfaktor = Math.pow(10, dez);\r\n        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;\r\n    };\r\n    AlphaTeilchen.prototype.clicked = function (mouseY, mouseX) {\r\n        var d = Math.pow((mouseY - this.getCorY()), 2) + Math.pow((mouseX - this.getCorX()), 2);\r\n        d = Math.sqrt(d);\r\n        if (d < 15) {\r\n            console.log(\"AtomClicked\");\r\n            this.setIsClicked(true);\r\n        }\r\n    };\r\n    return AlphaTeilchen;\r\n}());\r\nexports[\"default\"] = AlphaTeilchen;\r\n\n\n//# sourceURL=webpack:///./src/AlphaTeilchen.ts?");

/***/ }),

/***/ "./src/GoldAtom.ts":
/*!*************************!*\
  !*** ./src/GoldAtom.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar GoldAtom = /** @class */ (function () {\r\n    function GoldAtom(x, y) {\r\n        this.CorX = 630;\r\n        this.CorY = 360;\r\n        this.CorX = x;\r\n        this.CorY = y;\r\n    }\r\n    GoldAtom.prototype.getMasse = function () {\r\n        return this.masse;\r\n    };\r\n    GoldAtom.prototype.getCorX = function () {\r\n        return this.CorX;\r\n    };\r\n    GoldAtom.prototype.getCorY = function () {\r\n        return this.CorY;\r\n    };\r\n    GoldAtom.prototype.setCorX = function (CorX) {\r\n        this.CorX = CorX;\r\n    };\r\n    GoldAtom.prototype.setCorY = function (CorY) {\r\n        this.CorY = CorY;\r\n    };\r\n    return GoldAtom;\r\n}());\r\nexports[\"default\"] = GoldAtom;\r\n\n\n//# sourceURL=webpack:///./src/GoldAtom.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar GoldAtom_1 = __webpack_require__(/*! ./GoldAtom */ \"./src/GoldAtom.ts\");\r\n//import * as p5 from 'p5';\r\nvar AlphaTeilchen_1 = __webpack_require__(/*! ./AlphaTeilchen */ \"./src/AlphaTeilchen.ts\");\r\n//var at: AT = new AT(630,710);\r\n//var at1: AT = new AT(700,710);\r\n//var at2: AT = new AT(720,710);\r\n//var at3: AT = new AT(610,710);\r\n//var at4: AT = new AT(590,710);\r\nvar alphaTeilchenArray = [];\r\nvar width = 800;\r\nvar height = 600;\r\nvar ga = new GoldAtom_1[\"default\"](700, 200);\r\nvar ga2 = new GoldAtom_1[\"default\"](100, 200);\r\nvar ga3 = new GoldAtom_1[\"default\"](400, 300);\r\nvar paused = true;\r\nvar goldAtomArray = [ga, ga2, ga3];\r\nvar consoleLogArray = [];\r\nvar abgelengt = [];\r\nvar slider = document.getElementById(\"myRange\");\r\nslider.oninput = function () {\r\n    document.getElementById(\"Value\").innerHTML = slider.value;\r\n};\r\nvar sketch = function (s) {\r\n    s.preload = function () {\r\n    };\r\n    s.setup = function () {\r\n        s.createCanvas(width, height);\r\n        newAT(parseInt(slider.value));\r\n        console.log(slider.value);\r\n        s.background(255);\r\n        s.drawGold();\r\n        s.noStroke();\r\n        simplifyDraw(alphaTeilchenArray);\r\n        s.hasEnded();\r\n        s.DataLog();\r\n    };\r\n    s.draw = function () {\r\n        if (paused == false) {\r\n            s.drawGold();\r\n            s.noStroke();\r\n            simplifyDraw(alphaTeilchenArray);\r\n            s.hasEnded();\r\n            s.DataLog();\r\n        }\r\n        //  console.table([{DistanceX: at.getDistanceToNearestGoldAtomx(), DistanceY: at.getDistanceToNearestGoldAtomy(), ForceX: at.forcex, ForceY: at.forcey}])\r\n    };\r\n    s.drawGold = function () {\r\n        s.fill(255, 0, 0);\r\n        s.stroke(0, 0, 0);\r\n        for (var i = 0; i < goldAtomArray.length; i++) {\r\n            s.ellipse(goldAtomArray[i].getCorX(), goldAtomArray[i].getCorY(), 10, 10);\r\n        }\r\n    };\r\n    s.drawAplha = function (atp) {\r\n        if (atp.getCorX() > width || atp.getCorX() < 0 || atp.getCorY() > 700 || atp.getCorY() < 0) {\r\n            //atp.setCorX(Math.random()*width);\r\n            //atp.setCorY(590);\r\n            //atp.setVelocityX(0);\r\n            //atp.setVelocityY(0);\r\n            //  atp.beschleunigungx = 0;\r\n            //  atp.beschleunigungy = 0;\r\n        }\r\n        if (round((atp.getVelocityX() * Math.pow(10, 7)), 3) > 100 || round((atp.getVelocityX() * Math.pow(10, 7)), 3) < -100) {\r\n            s.fill(255, 0, 0);\r\n            console.log(\"TEST\");\r\n            var isInside = false;\r\n            for (var i = -1; i < abgelengt.length; i++) {\r\n                if (atp == abgelengt[i + 1]) {\r\n                    console.log(\"TRUE\");\r\n                    isInside = true;\r\n                }\r\n                console.log(\"NOT TRUE\");\r\n            }\r\n            if (isInside == false) {\r\n                console.log(\"PUSHED\");\r\n                abgelengt.push(atp);\r\n            }\r\n        }\r\n        else {\r\n            s.fill(0, 255, 0);\r\n        }\r\n        s.ellipse(atp.getCorX(), atp.getCorY(), 5, 5);\r\n        var speedy = atp.getVelocityY() + atp.beschleunigungy;\r\n        if (!(atp.getCorX() == atp.getNearestGoldAtom().getCorX())) {\r\n            if (atp.getCorX() > atp.getNearestGoldAtom().getCorX()) {\r\n                var speedx = atp.getVelocityX() + atp.beschleunigungx;\r\n                atp.setCorX(atp.getCorX() + speedx);\r\n            }\r\n            else {\r\n                speedx = atp.getVelocityX() - atp.beschleunigungx;\r\n                atp.setCorX(atp.getCorX() + speedx);\r\n            }\r\n        }\r\n        if (atp.getCorY() < atp.getNearestGoldAtom().getCorY()) {\r\n            var speedy = atp.getVelocityY() - atp.beschleunigungy;\r\n        }\r\n        else {\r\n            speedy = atp.getVelocityY() + atp.beschleunigungy;\r\n        }\r\n        atp.setCorY(atp.getCorY() + speedy);\r\n        atp.setVelocityY(speedy);\r\n        atp.setVelocityX(speedx);\r\n        //console.log(speedx);\r\n    };\r\n    s.calcMinDistance = function (atp) {\r\n        var distances = [];\r\n        var d;\r\n        for (var i = 0; i < goldAtomArray.length; i++) {\r\n            d = Math.pow((goldAtomArray[i].getCorY() - atp.getCorY()), 2) + Math.pow((goldAtomArray[i].getCorX() - atp.getCorX()), 2);\r\n            d = Math.sqrt(d);\r\n            distances.push(d);\r\n        }\r\n        for (var i = 0; i < distances.length; i++) {\r\n            if (distances[i] <= d) {\r\n                d = distances[i];\r\n                atp.setNearestGoldAtom(goldAtomArray[i]);\r\n            }\r\n            else { }\r\n        }\r\n        atp.setDistanceToNearestGoldAtomy(d * Math.pow(10, -4)); //*10**-4\r\n        atp.setDistanceToNearestGoldAtomx(d * Math.pow(10, -4)); //*10**-4\r\n        //Berechnung der Coulombkraft und die resultierende Beschleunigung\r\n        var a = 1 / (4 * Math.PI * (8.85419 * Math.pow(10, -12)));\r\n        var by = (4.05581 * Math.pow((10), -36)) / Math.pow((atp.getDistanceToNearestGoldAtomy()), 2);\r\n        var bx = (4.05581 * Math.pow((10), -36)) / Math.pow((atp.getDistanceToNearestGoldAtomx()), 2);\r\n        atp.forcey = a * by;\r\n        atp.forcex = a * bx;\r\n        atp.forcey = atp.forcey * Math.pow(10, -8);\r\n        atp.forcex = atp.forcex * Math.pow(10, -8);\r\n        atp.beschleunigungy = atp.round(atp.forcey / atp.getMasse(), 2);\r\n        atp.beschleunigungx = atp.round(atp.forcex / atp.getMasse(), 2);\r\n    };\r\n    s.mousePressed = function () {\r\n        console.log(\"Clicked\");\r\n        console.log(s.mouseX + \" \" + s.mouseY);\r\n        alphaTeilchenArray.forEach(function (element) { element.clicked(s.mouseY, s.mouseX); });\r\n    };\r\n    s.keyPressed = function () {\r\n        if (paused == true && s.keyCode == 80) {\r\n            paused = false;\r\n        }\r\n        else if (s.keyCode == 80) {\r\n            paused = true;\r\n        }\r\n    };\r\n    s.showConsole = function (p) {\r\n        if (p.getIsClicked() == true && consoleLogArray[0] == null) {\r\n            consoleLogArray[0] = p;\r\n        }\r\n        else if (p.getIsClicked() == true && consoleLogArray[0] != p) {\r\n            consoleLogArray[0].setIsClicked(false);\r\n            consoleLogArray[0] = p;\r\n        }\r\n    };\r\n    s.DataLog = function () {\r\n        document.getElementById(\"GY\").innerHTML = \"Abgelengte Alpha-Teilchen: \" + abgelengt.length.toString();\r\n    };\r\n    function round(wert, dez) {\r\n        wert = parseFloat(wert);\r\n        if (!wert)\r\n            return 0;\r\n        dez = parseInt(dez);\r\n        if (!dez)\r\n            dez = 0;\r\n        var umrechnungsfaktor = Math.pow(10, dez);\r\n        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;\r\n    }\r\n    s.hasEnded = function () {\r\n        for (var i = 0; i < alphaTeilchenArray.length; i++) {\r\n            if (alphaTeilchenArray[i].getVelocityY() == 0) {\r\n                alphaTeilchenArray.splice(i, 1);\r\n            }\r\n        }\r\n    };\r\n    var ia;\r\n    function newAT(n) {\r\n        for (var i = 0; i < n; i++) {\r\n            alphaTeilchenArray.push(new AlphaTeilchen_1[\"default\"]((Math.random() * 40) * 20, 590 + i * 10));\r\n        }\r\n    }\r\n    function simplifyDraw(p) {\r\n        for (var i = 0; i < p.length; i++) {\r\n            s.calcMinDistance(p[i]);\r\n            s.showConsole(p[i]);\r\n            s.drawAplha(p[i]);\r\n            //s.calcForce(p[i]);\r\n        }\r\n        i = ia;\r\n    }\r\n    document.getElementById(\"restart\").onclick = function () {\r\n        paused = true;\r\n        s.background(255);\r\n        var a = alphaTeilchenArray.length;\r\n        for (var i = 0; i < a; i++) {\r\n            alphaTeilchenArray.pop();\r\n            console.log(alphaTeilchenArray.length);\r\n        }\r\n        console.log(slider.value);\r\n        newAT(parseInt(slider.value));\r\n        s.drawGold();\r\n        s.noStroke();\r\n        simplifyDraw(alphaTeilchenArray);\r\n        s.hasEnded();\r\n        s.DataLog();\r\n    };\r\n};\r\nvar canvas = new p5(sketch);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ });