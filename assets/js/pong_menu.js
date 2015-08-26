var menuState = {
    
    create: function() {
        // here we display the name of the game. When defining the text,
        // the first two parameters are X and Y position values,
        // then comes the actual text,
        // and then the "font" which defines the font
        // and "fill" refers to the font color
        var nameLabel = game.add.text(80, 80, "Pong Game for 2 players",textStyleHeader);
        
        // we give the player instructions on how to start the game
        var startLabel = game.add.text(80, game.world.height-80,
                                       "press W key to start", textStyleNormal)
        
        // we define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // when the player presses the W key, we call the start function
        wkey.onDown.addOnce(this.start, this);
    },
    
    // the start function calls the play state
    start: function () {
        game.state.start('play');
    }
};