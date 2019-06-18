class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
    this.makeMove();
  }

  bindEvents() {
    $('li').click(c => {
      const $square = $(c.target);
      this.makeMove($square);
    });
  }
  
  makeMove($square) {
    
   const pos = $square.data("pos");
   const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("This " + e.msg.toLowerCase());
      return;
    }


    $square.addClass(currentPlayer);
    // if (this.game.isOver()) {
    //   this.$el.off('click');
    //   this.$el.addClass("game-over");
      
    // } else {
    //   this.bindEvents();
    //   this.game.swapTurn();
    // }
    
  }

  setupBoard(){
    const grid = this.game.board.grid;
    const $ul = $('<ul>');
    this.$el.append($ul);

    for (let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid.length; j++) {
        
        let $li = $('<li>');
        
        $li.data('pos', [i, j]);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
