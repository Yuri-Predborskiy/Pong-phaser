// the gameOverState state is almost identical to the Menu 
// state with the following function differences:
// 1. Instead of display the name of the game in white text,
//    we display "YOU WIN" in green text
// 2. all texts that reference "starting" the game are changed
//    to reference "restarting" the game
// 3. instead of calling the Play state, we call Menu state

var gameOverState = {
    create: function() {
        var winLabel = game.add.text(80, 80, "YOU WON!", textStyleWin);
        
        // giving player instructions how to restart the game
        var startLabel = game.add.text(80, game.world.height - 80,
                                      "press 'W' key to restart",
                                      textStyleNormal);
        
        // define wkey so we can restart the game
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // when player preses W, call restart function
        wkey.onDown.addOnce(this.restart, this);
    },
    
    // the restart function calls the menu state
    restart: function() {
        game.state.start('menu');
    }
};