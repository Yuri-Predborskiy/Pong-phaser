// here we use the "official" name (bootState) when defining the state
// file name does not matter, its imported in index.html file
var bootState = {
    
    // The create function is a standard Phaser function, and is automatically called
    create: function() {
        
        // starting the physics system - in this case we are using the NINJA physics engine
        //game.physics.startSystem(Phaser.Physics.NINJA);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // calling the load state
        game.state.start('load');
    }
};