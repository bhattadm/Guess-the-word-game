const loginWeb = {
    loginPage: function(){
      return `
        <!doctype html>
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="login-web.css">
            <title>Login Page</title>
          </head>
          <body>
            <div id="login-app">
            <h1 class = "title">Guess Game</h1>
            <div class="login-display-panel">
                ${loginWeb.loginToPage()}      
            </div>
            </div>
          </body>
        </html>
      `;
    },

    loginToPage: function() {
      return `
      <div class="login-form">
        <form action = "/login" method = "POST">
          <label for="name" class= "text-display" >Name</label>
            <input name = "username">
          <br></br>
          <button type = "submit" class= "login-button" >Login</button>
        </form>
      </div>
      `;
    }
      
  };

module.exports = loginWeb;

