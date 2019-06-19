class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
    this.clickTower();
  }

  setupTowers() {
    const towers = this.game.towers;
    for(let i = 0; i < towers.length; i++) {
      const $ul = $('<ul>');
      for(let j = 0; j < towers.length; j++) {
        const $li = $('<li>');
        $li.data('startTowerIdx', 'endTowerIdx', i, j);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }

  render() {

  }
}