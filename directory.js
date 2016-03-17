var game = new Phaser.Game(720, 480, Phaser.AUTO, 'gameDiv');
//add the TitleScreen as a Phaser state to the game
game.state.add('TitleScreen', TitleScreen);

//the create method is run after preload method
// it is where we set up the basics of the game, what it looks like when we start the game
game.state.start('TitleScreen');