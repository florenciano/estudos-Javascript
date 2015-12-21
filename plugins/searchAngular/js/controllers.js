// vide example
// http://angular.github.io/angular-phonecat/step-3/app/

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
	{	'category'	: 'blackboard',
		// 'name'		: 'Nexus S',
		'snippet'	: 'Fast just got faster with Nexus S.',
		'snippet2'	: 'Lorem ipsum.',
		'snippet3'	: 'Lorem ipsum dolor.',
		'snippet4'	: 'Lorem ipsum dolor sit.',
		'snippet5'	: 'Lorem ipsum dolor sit amet.'},
		// dfalsdfjalsj

	{	'category'	: 'rubric',
		'name'		: 'Motorola XOOM™ with Wi-Fi',
		'snippet'	: 'The Next, Next Generation tablet.',
		'snippet2'	: 'Lorem ipsum.' },

	{	'category'	: 'catme',
		'name'		: 'MOTOROLA XOOM™',
		'snippet'	: 'The Next, Next Generation mobile.',
		'snippet2'	: 'Lorem ipsum.',
		'snippet3'	: 'Lorem ipsum dolor.' }
	];
});
