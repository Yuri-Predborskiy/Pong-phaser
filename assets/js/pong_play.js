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
        this.player = game.add.sprite(playerStartX, playerStartY, 'paddleBlue');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);

        // create the win sprite and enable physics
        this.win = game.add.sprite(winStartX, winStartY, 'paddleRed');
        game.physics.enable(this.win, Phaser.Physics.ARCADE);
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
        game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

        // finally, we give the human player a means of moving
        // the "player" sprite (WASD to move)
        // enabling movement along the X axis
        if(this.keyboard.isDown(Phaser.Keyboard.A)) {
            this.player.body.velocity.x = -175;
        } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
            this.player.body.velocity.x = 175;
        } else {
            this.player.body.velocity.x = 0;
        }
        // enabling movement along Y axis
        if(this.keyboard.isDown(Phaser.Keyboard.W)) {
            this.player.body.velocity.y = -175;
        } else if(this.keyboard.isDown(Phaser.Keyboard.S)) {
            this.player.body.velocity.y = 175;
        } else {
            this.player.body.velocity.y = 0;
        }
    },

    win: function() {
        // we start the win state
        game.state.start('win');
    }
};