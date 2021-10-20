var express = require('express');
var router = express.Router();
var normal;
var reversed;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  });
});

module.exports = router;
/*post the form data*/
router.post('/', function(req, res) {
  res.render('index',{
    phrase:req.body.userText,
   message:getResultDescription(req.body.userText)
  })
})

function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  var noSpaces = phrase.toLowerCase().replace(" ", "");
  var noPeriods = noSpaces.toLowerCase().replace(".", "");
  var noCommas = noPeriods.toLowerCase().replace(",", "");
  var noColons = noCommas.toLowerCase().replace(":", "");
  var noSemicolons = noColons.toLowerCase().replace(";", "");
  var noExclamations = noSemicolons.toLowerCase().replace("!", "");
  var noQuestions = noExclamations.toLowerCase().replace("?", "");
  var noApostrophes = noQuestions.toLowerCase().replace(`'`, ``);
  var noQuotes = noApostrophes.toLowerCase().replace(`"`, ``);
  noQuotes = noQuotes.toLowerCase();
  normal = noQuotes;
  var noSpaces2 = temp.toLowerCase().replace(" ", "");
  var noPeriods2 = noSpaces2.toLowerCase().replace(".", "");
  var noCommas2 = noPeriods2.toLowerCase().replace(",", "");
  var noColons2 = noCommas2.toLowerCase().replace(":", "");
  var noSemicolons2 = noColons2.toLowerCase().replace(";", "");
  var noExclamations2 = noSemicolons2.toLowerCase().replace("!", "");
  var noQuestions2 = noExclamations2.toLowerCase().replace("?", "");
  var noApostrophes2 = noQuestions2.toLowerCase().replace(`'`, ``);
  var noQuotes2 = noApostrophes2.toLowerCase().replace(`"`, ``);
  noQuotes2 = noQuotes2.toLowerCase();
  reversed = noQuotes2;
  return noQuotes === noQuotes2;
}

function getResultDescription(phrase){
  if (checkPalindrome(phrase)){
    return `${phrase} is a palindrome. Forward, it is ${normal}. Reversed, it is ${reversed}.`
  }
    return `${phrase} is not a palindrome. Forward, it is ${normal}. Reversed, it is ${reversed}.`
}