// Create
// The purpose of the create function is simply 
// to prepare the keyboard for input and to create 
// our ‘player’ and ‘win’ sprites:

var playState = {

    create: function() {
        // prepare the keyboard so that the human player can move
        // the player sprite around
        this.keyboard = game.input.keyboard;

        // create the player sprite and enable physics
        this.playerLeft = game.add.sprite(playerLeftStartX, playerLeftStartY, 'paddleBlue');
        game.physics.enable(this.playerLeft, Phaser.Physics.ARCADE);
        this.playerLeft.anchor.set(0.5,0.5);

        // create the win sprite and enable physics
        this.playerRight = game.add.sprite(playerRightStartX, playerRightStartY, 'paddleRed');
        game.physics.enable(this.playerRight, Phaser.Physics.ARCADE);
        this.playerRight.anchor.set(0.5,0.5);
    },

    // Update
    // The purpose of the update function is to define 
    // what happens when the ‘player’ sprite overlaps 
    // with the ‘win’ sprite (call the Win function), 
    // and allow the human player to move the ‘player’ 
    // sprite with W,A,S,D keyboard input:

    update: function() {
        // when the player sprite and win sprite overlap, the Win function
        // is called (notice that the Win function is capitalized while
        // the win sprite is not)
        game.physics.arcade.overlap(this.playerLeft, this.playerRight, this.gameOver, null, this);

        // finally, we give the human player a means of moving
        // the "player" sprite (WASD to move)
        // enabling movement along the X axis
        if(this.keyboard.isDown(Phaser.Keyboard.A)) {
            this.playerLeft.body.velocity.x = -175;
        } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
            this.playerLeft.body.velocity.x = 175;
        } else {
            this.playerLeft.body.velocity.x = 0;
        }
        // enabling movement along Y axis
        if(this.keyboard.isDown(Phaser.Keyboard.W)) {
            this.playerLeft.body.velocity.y = -175;
        } else if(this.keyboard.isDown(Phaser.Keyboard.S)) {
            this.playerLeft.body.velocity.y = 175;
        } else {
            this.playerLeft.body.velocity.y = 0;
        }
    },

    gameOver: function() {
        // we start the win state
        game.state.start('gameOver');
    }
};