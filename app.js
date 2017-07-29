var inquirer = require("inquirer");
var fs = require("fs");
var bcard = require("./BasicCard");
var ccard = require("./ClozeCard");

inquirer.prompt({
	type: 'rawlist',
	name: 'play',
	message: "Choose between the two cards you'd like to create, [ClozCard] or [BasicCard]",
	choices:["CLOZE", "BASIC"]
})



.then(function(answers){
if(answers.play.toUpperCase() === "CLOZE"){
inquirer.prompt([
  {
  type:"input",
  message:" Please Enter your sentence?",
  name:"fulltext"
},
{
  type:"input",
  message:"Enter a word to cloze",
  name:"cloze",
}]).then(function(result){
  var theCard = new ccard(result.fulltext, result.cloze);


  console.log(" Full text  "+ theCard.fulltext);
  console.log(" Your Close was "+ theCard.cloze);
  console.log(" You created your cloze card Yey!!!")
  fs.appendFile("./log.txt","\n"+theCard.fulltext);
  fs.appendFile("./log.txt",theCard.partial);

});
}
else if(answers.play.toUpperCase() === "BASIC"){
// ********************************************  BASIC CARD
inquirer.prompt([
	{

	name:'front',
	message:'What is the front question to start this card?',

},
	{
		name:'back',
		message:' please type the definition in the back of the card',

}]).then(function(answers){
	var newCard= new bcard(answers.front, answers.back)
	fs.appendFile('./text.txt',"\n" + answers.front + ':')
	fs.appendFile('./text.txt'," " + answers.back)
	console.log("Good Job you created one"+ newCard);
  console.log(newCard.front)
	console.log(newCard.back);

});
}

});