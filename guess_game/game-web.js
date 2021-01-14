const gameWeb = {
    gamePage: function(game,word,userInfo) {
      return `
        <!doctype html>
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="page-web.css">
            <title>Game Web</title>
          </head>
          <body>
            <div id="game-app">
              <h2 class ="gametitle">Hi ${userInfo.username} let's play!!!</h2>
              <div class="game-display-panel">   
                <div class= "game-rules">
                <h3 class = "text-display"> How to play?</h3>
                <ol>
                  <li>Choose a word from the given Word List,otherwise you will get a warning.</li>
                  <li>Game will display the matched letters from the Secret Word.</li>
                  <li>If your guess id same as Secret Word, u win!</li>
                </ol>
                </div>
                <h3 class="text-display">Select the word from List:</h3>
                ${gameWeb.getWordList(word)}
              </div> 
                ${gameWeb.getOutgoing(userInfo)}
              <div class="message-display-panel">
                <h3 class = "text-disply">Your list of previously guess word:</h3>
                ${gameWeb.getPrevWordList(userInfo)} 
                <h3 class = "text-display">Scoring: </h3>
                ${gameWeb.getDisplayTextList(userInfo)}   
                ${gameWeb.restartGame()}  
                <br></br>
                ${gameWeb.logout(userInfo)}  
              </div>
            </div>
          </body>
        </html>
      `;
    },
  
    getWordList: function(word) {
        return `<ul class="wordList">` +
        Object.values(word.wordList).map( wordList => `
          <li>
            <div class="wordList">
              <span class="words">${wordList}</span>
            </div>
          </li>
        `).join('') +
        `</ul>`;
    },
    
    getPrevWordList: function(userInfo) {
        return `<ol class="messages">` +
        Object.values(userInfo.prevWordList).map( prevWordList => `
        <li>
          <div class="wordList">
            <span class="words">${prevWordList}</span>
          </div>
        </li>
      `).join('') +
          `</ol>`;
    },

      getDisplayTextList: function(userInfo) {
        return `<ul class="messages">` +
        Object.values(userInfo.messageList).map( messageList => `
          <li>
            <div class="messageList">
              <span class="message">${messageList}</span>
            </div>
          </li>
        `).join('') +
        `</ul>`;
      },

      getOutgoing: function(userInfo) {
        return `
        <div class="form">
          <form action="/guess" method="POST">
            <label for="guessWord">Guess the word:</label>
            <input type="text" id="guessWord" name="guessWord" value=""></input>
            <br></br>
            <button type = "submit">Submit</button>
            <input type = "hidden" id="username" name="username" value="${userInfo.username}"></input>
          </form>
        </div>
        `;
      },

      restartGame: function() {
        return `
        <div class="form">
          <form action="/restart" method="POST">
            <button type = "submit">Restart Game</button>
          </form>
        </div>
        `;
      },

      logout: function(userInfo) {
        return `
          <div class="logout">
            <form action="/logout" method="POST">
              <input  name="username" value="${userInfo.username}" type ="hidden"/>
              <button type="submit">Logout</button>
            </form>
          </div>
        `;
      }
      
};
module.exports = gameWeb;