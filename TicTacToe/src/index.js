const View = require('./ttt-view.js');
const Game = require('../TicTacToeNodeSolution/game.js');

  $( () => {
    const rootEl = $('.ttt');
    const newGame = new Game();
    new View(newGame, rootEl);
  });
