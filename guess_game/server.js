const express = require('express');
const uuidv4 = require('uuid').v4;
const app = express();
const cookieParser = require('cookie-parser'); 
const PORT = 3000;
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
const loginWeb = require('./login-web');
const gameWeb = require('./game-web');
const game = require('./game');
const word = require('./words')

app.use(express.static('./public'));

const userinfo = {};

const isValid = function(sid){
    if(userinfo[sid]){
        return true;
    }
    return false;
};

app.get('/', (req, res) => {
  const sid = req.cookies.sid;

  if(!sid || !isValid(sid)){
     res.send(loginWeb.loginPage());
  }
  else
  {
    res.send(gameWeb.gamePage(game,word,userinfo[sid]));
  }
  });

  app.post('/login',(req,res)=>{
    const{username}= req.body;
    const uuid = uuidv4();
    userinfo[uuid]={
        username,
        loginTime:Date(),
        prevWordList:[],
        messageList:[],
        guessCount:0,

    };
    userinfo[uuid].secretWord = game.getRandomWord(word.wordList)//--megha
    res.cookie('sid',uuid);
    res.redirect('/');
  });

  app.get('/guess',(req,res)=>{
    const sid = req.cookies.sid;

    res.send(gameWeb.gamePage(game,word,userinfo[sid]));
  });

  app.post('/guess',(req,res)=>{
    
    const{guessWord}= req.body;
    const sid = req.cookies.sid;
    userinfo[sid].guessWord = guessWord;
    console.log("SecretWord:" + userinfo[sid].secretWord);
    
    if(game.isValid(userinfo[sid],word.wordList))
    { 
      game.compare(userinfo[sid]);
    }
    else
    {
      game.addMessage("Enter the word from the list",userinfo[sid]);
    }

    res.redirect('/guess');
  });

  app.post('/restart',(req,res)=>{
    const sid = req.cookies.sid;

    delete userinfo[sid].guessWord;
    delete userinfo[sid].secretWord;
    userinfo[sid].prevWordList.length=0;
    userinfo[sid].messageList.length=0 ;
    userinfo[sid].guessCount =0;
    userinfo[sid].secretWord = game.getRandomWord(word.wordList)

    res.send(gameWeb.gamePage(game,word,userinfo[sid]));
  });

  app.post('/logout',(req,res)=>{
    const sid = req.cookies.sid;

    res.clearCookie('sid');
    res.send(loginWeb.loginPage());
   
  });

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));