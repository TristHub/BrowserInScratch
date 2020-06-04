(function(ext) {
/*_ExtenilK Scratch Exention_*/
ext._shutdown = (function() {})
ext._getStatus = (function() {return {status: 2, msg: "Created by enilK"}})
/*_Block Functions_*/
/*Dialog Boxes*/
ext.a = (function(x) {window.alert(x)})
ext.c = (function(x) {return window.confirm(x)})
ext.p = (function(x) {return window.prompt(x, "")})
ext.pd = (function(x, d) {return window.prompt(x, d)})
/*Console*/
ext.log = (function(x) {console.log(x)})
ext.err = (function(x) {console.error(x)})
ext.wrn = (function(x) {console.warn(x)})
ext.inf = (function(x) {console.info(x)})
ext.trc = (function(x) {console.trace(x)})
ext.clr = (function() {console.clear()})
/*Math and Strings*/
ext.power = (function(a, b) {return Math.pow(a, b)})
ext.const = (function(c) {return Math[c]})
ext.infin = (function() {return Infinity})
ext.comp = (function(a, sym, b) {return Boolean(eval(a.concat(sym, b)))})
ext.rand = (function() {return Math.random()})
ext.toCase = (function(x, c) {return eval("x".concat(".to", c, "Case()"))})
ext.cont = (function(a, b) {return a.indexOf(b) > -1})
ext.index = (function(a, b) {return a.indexOf(b) + 1})
ext.rev = (function(x) {return x.split("").reverse().join("")})
ext.trim = (function(x) {return x.trim()})
/*Scratch Website*/
ext.title = (function() {if(document.getElementById("title").innerHTML.charAt(0) == "<") {
//
}else{
return document.getElementById("title").innerHTML}}
ext.chngTitle = (function(x) {x = x.split(""); for(var i = 0; i < x.length; i++) {
switch(x[i]) {case "<": x[i] = "&lt;"; break;
case ">": x[i] = "&gt;"; break;
case "&": x[i] = "&amp;"}}
document.getElementById("title").innerHTML = x.join("")})
ext.whEd = (function() {if(location.hash == "#editor") {return true}})
ext.inEd = (function() {return location.hash == "#editor"})
ext.see = (function(h) {location.hash = "#".concat(h)})
ext.id = (function() {return location.pathname.slice(10, location.pathname.length-1)})
/*Window and Document*/
ext.tab = (function() {return document.title})
ext.setTab = (function(x) {document.title = x})
ext.open = (function(url) {window.open("https://".concat(url))})
ext.crEl = (function(type, id) {var myEl = document.createElement(type)
myEl.setAttribute("id", id); document.body.appendChild(myEl)})
ext.getEl = (function(id) {return document.getElementById(id).toString()})
ext.setAtt = (function(id, att, val) {document.getElementById(id).setAttribute(att, val)})
ext.getAtt = (function(id, att) {return document.getElementById(id).getAttribute(att)})
ext.rmvAtt = (function(id, att) {document.getElementById(id).removeAttribute(att)})
ext.runJS = (function(cmd) {eval(cmd)})
ext.evJS = (function(cmd) {return eval(cmd)})
/*ExtenilK Extras*/
var _once = true
ext.once = (function() {if(_once) {_once = false; return true}})
ext.bool = (function(b) {return b == "true"? true:false})
ext.test = (function (tst, t, f) {return tst? t:f})
ext.XXX = (function () {/**/})
ext.CCC = (function() {})
ext.nl = (function() {return "\n"})
ext.lnSp = (function(x, y) {return x.concat("\n", y)})
ext.whenEqual = (function(x, y) {return x == y})
ext.whenChange = (function(x) {var current = x; while(current == x) {}; return true})
/*Alarms and Counters*/
var AnA = [], AvA = []
ext.AsetA = (function(x, t) {if(AnA.indexOf(x) == -1) {AnA.push(x); AvA.push(false)}
else {AvA[AnA.indexOf(x)] = false}
window.setTimeout(function() {if(AvA[AnA.indexOf(x)] == false) {
AvA[AnA.indexOf(x)] = true
try {console.delayingTheNullValueSoThatTheHatBlockCanDetectTrueValue()}
catch(error) {var err = error}
finally {AvA[AnA.indexOf(x)] == null}}}, t*1000)})
ext.AoffA = (function(x) {return AvA[AnA.indexOf(x)]})
ext.AcancelA = (function(x) {AvA[AnA.indexOf(x)] = null})
ext.AisA = (function(x) {return AvA[AnA.indexOf(x)] == false})
var CNnCN = [], CNvCN = []
ext.CNresetCN = (function(x) {if(CNnCN.indexOf(x) == -1) {CNnCN.push(x); CNvCN.push(0)}
else {CNvCN[CNnCN.indexOf(x)] = 0}})
ext.CN = (function(x) {if(CNnCN.indexOf(x) == -1) {CNnCN.push(x); CNvCN.push(0)}
CNvCN[CNnCN.indexOf(x)] += 1; return CNvCN[CNnCN.indexOf(x)]})
ext.CNresetallCN = (function() {CNvCN = []; for(var i = 0; i < CNnCN.length; i++) {
CNvCN.push(0)}})
/*_Block Descriptors_*/
var descriptor = {blocks: [
["L", "Dialog Boxes", ""],
[" ", "alert %s", "a", "Hello, world!"],
["b", "confirm %s", "c", "Is JavaScript awesome?"],
["r", "prompt %s", "p", "Type in the box."],
["r", "prompt %s default %s", "pd", "What is your name?", "John Doe"],
["-"],
["L", "Console", ""],
[" ", "log in console %s", "log", "Press F12 to see this message"],
[" ", "error in console %s", "err", "Something went wrong!"],
[" ", "warn in console %s", "wrn", "Be careful when using the internet"],
[" ", "info in console %s", "inf", "I have something to tell you!"],
[" ", "trace in console %s", "trc", "How did I get here?"],
[" ", "clear console", "clr"],
["-"],
["L", "Math and Strings", ""],
["r", "%n ^ %n", "power", "2", "3"],
["r", "math constant %m.consts", "const", "PI"],
["r", "infinity", "infin"],
["b", "compare %n %m.syms %n", "comp", "1", "<", "2"],
["r", "random decimal", "rand"],
["r", "%s to %m.cases case", "toCase", "Scratch", "Upper"],
["b", "%s contains %s ?", "cont", "Scratch", "rat"],
["r", "%s has %s at index", "index", "Scratch", "rat"],
["r", "reverse %s", "rev", "racecar"],
["r", "trim %s", "trim", "   [space]   "],
["-"],
["L", "Scratch Website", ""],
["r", "project title", "title"],
[" ", "change project title to %s", "chngTitle", "ExtenilK Experiment"],
["h", "when in editor", "whEd"],
["b", "in editor?", "inEd"],
[" ", "see %m.pages", "see", "player"],
["r", "project id", "id"],
["-"],
["L", "Window and Document", ""],
["r", "tab name", "tab"],
[" ", "set tab name to %s", "setTab", "This is Scratch"],
[" ", "open website http:// %s", "open", "youtube.com"],
[" ", "create element %s id: %s", "crEl", "audio", "myMusic"],
["r", "get element by id: %s", "getEl", "myMusic"],
[" ", "set attribute of element id: %s att: %s value: %s", "setAtt", "myMusic", "controls", "ctrls"],
["r", "get attribute of element id: %s att: %s", "getAtt", "myMusic", "controls"],
[" ", "remove attribute of element id: %s att: %s", "rmvAtt", "myMusic", "controls"],
[" ", "run JavaScript %s", "runJS", "var txt = \"Hi!\"; alert(txt)"],
["r", "eval JavaScript %s", "evJS", "var five = 5, seven = 7; five + seven"],
["-"],
["L", "ExtenilK Extras", ""],
["h", "run once when ExtenilK installed", "once"],
["b", "Boolean constant %m.tf", "bool", "true"],
["r", "test %b if true %s if false %s", "test", "", "It’s True", "It’s False"],
[" ", "/* %s */", "XXX", "comment; it's ignored"],
["c", "block holder (doesn't run):", "CCC"],
["r", "new line", "nl"],
["r", "%s line split %s", "lnSp", "Top", "Bottom"],
["h", "when %s = %s", "whenEqual", "this", "that"],
["h", "when %s changes", "whenChange", "var"],
["-"],
["L", "Alarms and Counters", ""],
[" ", "set alarm %s for %n secs", "AsetA", "myAlarm", "10"],
["h", "when alarm %s goes off", "AoffA", "myAlarm"],
[" ", "cancel alarm %s", "AcancelA", "myAlarm"],
["b", "alarm %s is set?", "AisA", "myAlarm"],
[" ", "reset counter %s", "CNresetCN", "myCounter"],
["r", "counter %s", "CN", "myCounter"],
[" ", "reset all counters", "CNresetallCN"]
],
menus: {
consts: ["PI", "E", "SQRT2", "SQRT1_2", "LN2", "LN10", "LOG2E", "LOG10E"],
syms: ["<", "!=", ">", "<=", "==", ">="],
cases: ["Upper", "Lower"],
pages: ["player", "editor", "fullscreen"],
tf: ["true", "false"]
},
url: "https://scratch.mit.edu/projects/117593195/"
}
var working = true
try {ScratchExtensions.register("ExtenilK", descriptor, ext)}
catch(e) {window.alert("✖ ExtenilK cannot be installed at this time.\n\
ERROR: ".concat(e))
console.error(e)
working = false}
if(working) {alert("✔ ExtenilK has been successfully installed!\n\
Caution: ExtenilK can run user JavaScript commands and can add/change elements.")}
})({})
