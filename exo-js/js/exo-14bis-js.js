// var allPurple = function(div) {
// 	div.style = 'background-color: purple;';
// }
var resetDiv = function(div) {
	div.style = '';
}
var allPurple = function() {
	r2p();
	b2p();
}
var r2p = function() {
	var divs = Array.from(document.getElementsByClassName('red'));
	divs.forEach(function (e) {
		e.style = 'background-color: purple';
	});
}
var b2p = function() {
	var divs = Array.from(document.getElementsByClassName('blue'));
	divs.forEach(function (e) {
		e.style = 'background-color: purple';
	});
}
var reset = function() {
	var divs = Array.from(document.getElementsByTagName('div'));
	divs.forEach(resetDiv);
}
