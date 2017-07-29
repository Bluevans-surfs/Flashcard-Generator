var fs = require('fs');
// var inquirer = require('inquirer');



function ClozeCard (fulltext, cloze) {
	
	this.fulltext = fulltext;

	this.cloze = cloze;

	this.partial = function () {

		if (fulltext.includes(cloze)){
			var word=fulltext.replace(cloze,"__________");
			console.log(word);
		} else {
			console.log("Oops, choose a fifferenc cloze, make sure it is from the sentence.");
		}

	}
}

module.exports = ClozeCard;






