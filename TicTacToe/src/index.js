const View = require('./ttt-view.js');
const Game = require('../TicTacToeNodeSolution/game.js');

// window.newGame = new Game();
// window.newGame = new Game();


  $( () => {
    const rootEl = $('.ttt');
    const newGame = new Game();
    new View(newGame, rootEl);
  });
