var loadState = {
    
    // the preload function is a standard Phaser function 
    // that we use to define and load our assets
    preload: function() {
        
        // add a loading label on the screen
        var loadingLabel = game.add.text(80, 150, 'loading...',textStyleNormal);
        
        // load all assets. The first parameter is the variable that
        // will point to the image, and the second parameter is the
        // image file itself
        game.load.image('paddleBlue', 'assets/img/paddleBlu.png');
        game.load.image('paddleRed', 'assets/img/paddleRed.png');
        game.load.image('ball', 'assets/img/ballGrey.png');
        
    },
    
    create: function() {
        // call the menu state
        game.state.start('menu');
    }
};