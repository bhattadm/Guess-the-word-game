const { text } = require('body-parser');
const { wordList } = require('./words');
const word = require('./words');

const game = {
  getRandomWord(wordList){
    return wordList[Math.floor(Math.random() * wordList.length)];
  },

  isValid:function(userInfo,wordList){
    let guessWord  = userInfo.guessWord.toLowerCase();  
    let secretWord = userInfo.secretWord.toLowerCase();  
   
    if(guessWord.length != secretWord.length)
       return false;
    for(let word of wordList)
    {
       word = word.toLowerCase();
       if(guessWord===word)
          return true;
    }
    return false;
  },

  compare:function(userInfo) {  
     let guessWord  = userInfo.guessWord.toLowerCase();
     let secretWord = userInfo.secretWord.toLowerCase(); 
    if(guessWord.length===0 || secretWord.length===0)
      return 0;  
    let matchCount = 0;
    userInfo.guessCount++;
    game.addGuessWord(guessWord,userInfo);
    
    if(guessWord===secretWord)
    {game.addMessage("Congratulations!You have guess right word",userInfo);}
    for( let letter in secretWord)
    {
      if(guessWord.indexOf(secretWord[letter])!=-1)
        {
          let index = guessWord.indexOf(secretWord[letter]);
          matchCount++;
          guessWord = guessWord.slice(0,index)+guessWord.slice(index+1,guessWord.length);
          
        }
    }

     game.addMessage("There are "+ matchCount+ " letters in common",userInfo);
     game.addMessage("Your number of turns "+ userInfo.guessCount,userInfo);
  },
  
  addMessage:function(text,userInfo) {
    userInfo.messageList.push(text);
  },

  addGuessWord:function(guessWord,userInfo) {
    userInfo.prevWordList.push(guessWord);
  },

} 
  
    
module.exports = game;