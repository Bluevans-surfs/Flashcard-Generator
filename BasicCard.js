var fs = require('fs');
var inquirer = require('inquirer');



module.exports = BasicCard;

function BasicCard (front, back) {
	this.front = front;
	this.back = back;
	this.newCard = function () {
		console.log(this.front, this.back);
	}
}

// inquirer.prompt([
// {
// 	name: 'front',
// 	message: 'Enter the question you would like on the front of this card.',
// }, 
// 	{
// 	name: 'back',
// 	message: 'Enter the answer that corresponds to the question on the front of the card.',

// }]).then(function(answers){
// 	var newCard = new BasicCard(answers.front, answers.back);

// 	fs.appendFile('./log.txt',"\n" + answers.front + ':')
// 	fs.appendFile('./log.txt',"\n" + answers.back)
	
// })

















// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// BasicCard();

// console.log(firstPresident.front);
// console.log(firstPresident.back);

// fs.appendFile("./logs.txt", "utf8", function(error, data){

//    console.log(firstPresident);



// });