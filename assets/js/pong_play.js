// Create
// The purpose of the create function is simply 
// to prepare the keyboard for input and to create 
// our ‘player’ and ‘win’ sprites:

var playState = {

    create: function() {
        // prepare the keyboard so that the human player can move
        // the player sprite around
        this.keyboard = game.input.keyboard;
        this.cursors = game.input.keyboard.createCursorKeys();

        // create the player sprite and enable physics
        this.playerLeft = game.add.sprite(playerLeftStartX, playerLeftStartY, 'paddleBlue');
        game.physics.enable(this.playerLeft, Phaser.Physics.ARCADE);
        this.playerLeft.anchor.set(0.5,0.5);
        this.playerLeft.body.immovable = true;

        // create the win sprite and enable physics
        this.playerRight = game.add.sprite(playerRightStartX, playerRightStartY, 'paddleRed');
        game.physics.enable(this.playerRight, Phaser.Physics.ARCADE);
        this.playerRight.anchor.set(0.5,0.5);
        this.playerRight.body.immovable = true;
        
        this.ball = game.add.sprite(game.width/2, game.height/2, 'ball');
        game.physics.enable(this.ball, Phaser.Physics.ARCADE);
        this.ball.anchor.set(0.5,0.5);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(1);
        
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

        // enabling moving up and down
        var velocityLeft = 0;
        if(this.keyboard.isDown(Phaser.Keyboard.W)) {
            velocityLeft += -paddleSpeed;
        }
        if(this.keyboard.isDown(Phaser.Keyboard.S)) {
            velocityLeft += paddleSpeed;
        }
        this.playerLeft.body.velocity.y = velocityLeft;

        var velocityRight = 0;
        if(this.cursors.up.isDown) {
            velocityRight += -paddleSpeed;
        }
        if(this.cursors.down.isDown) {
            velocityRight += paddleSpeed;
        }
        this.playerRight.body.velocity.y = velocityRight;
        
        game.physics.arcade.collide(this.ball, this.playerLeft);
        game.physics.arcade.collide(this.ball, this.playerRight);

    },
    
    gameOver: function() {
        // we start the win state
        game.state.start('gameOver');
    }
};