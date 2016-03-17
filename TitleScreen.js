var TitleScreen = {
    //the preload method runs first
    //it is where we load our assets
    preload: function () {
        //loads an image called logo
        game.load.image('logo', 'logo-fb.png');
                game.load.image('button', 'button.png')

}, 
   
    create: function() {
    this.add.image(70, 60, 'logo');
    this.add.button(500, 200, 'button', this.startGame, this);
        
    },
    startGame: function () {
    this.state.start ('GameScreen');
    
    }
}