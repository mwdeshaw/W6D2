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
      const $square = $(c.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
   const pos = $square.data("pos");
   const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (error) {
      alert("This " + error.msg.toLowerCase());
      return;
    }

    $square.addClass(currentPlayer);
    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");

      const champ = this.game.winner();
      const $caption = $("<figcaption>");

      if (champ) {
        this.$el.addClass(`champ-${champ}`);
        $caption.html(`YOU WIN, ${champ}!`);
      } else {
        $caption.html("It's a draw!");
      }
      this.$el.append($caption);
      const $restart = $("<button>Play Again</button>");
      $restart.on('click', () => window.location.reload());
      this.$el.append($restart);
    }
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