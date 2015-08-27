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

        // finally, we give the human player a means of moving
        // the "player" sprite (WASD to move)
        // enabling movement along the X axis
//        keyUP = this.input.keyboard.addKey(Phaser.Keyboard.W);
//        keyUP.onDown.add(function() { 
//            this.movePlayer("left", "up", "pressed") 
//        }, this);
//        keyUP.onUp.add(function() { 
//            this.movePlayer("left", "up", "released") 
//        }, this);
//        
//        keyDN = this.input.keyboard.addKey(Phaser.Keyboard.S);
//        keyDN.onDown.add(function() { 
//            this.movePlayer("left", "down", "pressed") 
//        }, this);
//        keyDN.onUp.add(function() { 
//            this.movePlayer("left", "down", "released") 
//        }, this);

        var up_pressed = false;
        var up_pressed_last = false;
        var down_pressed = false;
        var down_pressed_last = false;
        var total_speed=0;

        if(this.keyboard.isDown(Phaser.Keyboard.A)) {
            this.playerLeft.body.velocity.x = -175;
        } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
            this.playerLeft.body.velocity.x = 175;
        } else {
            this.playerLeft.body.velocity.x = 0;
        }
        // enabling movement along Y axis
        if(this.keyboard.isDown(Phaser.Keyboard.W)) {
            //this.playerLeft.body.velocity.y += -175;
            up_pressed = true;
        } else {
            up_pressed = false;
        } 
        if(this.keyboard.isDown(Phaser.Keyboard.S)) {
            //this.playerLeft.body.velocity.y += 175;
            down_pressed = true;
        } else {
            down_pressed = false;
        }
        
        if(up_pressed && !up_pressed_last) {
            // is pressed, was released
            total_speed += -175;
            up_pressed_last = true;
        } else if(!up_pressed && up_pressed_last) {
            // is released, was pressed
            total_speed -= -175;
            up_pressed_last = false;
        }
        
        if(down_pressed && !down_pressed_last) {
            // is pressed, was released
            total_speed += 175;
            down_pressed_last = true;
        } else if(!down_pressed && down_pressed_last) {
            // is released, was pressed
            total_speed -= 175;
            down_pressed_last = false;
        }
        
        this.playerLeft.body.velocity.y = total_speed;
        
        game.physics.arcade.collide(this.ball, this.playerLeft);
        game.physics.arcade.collide(this.ball, this.playerRight);

    },
    
    movePlayer: function(player, direction, state) {
        var speedX = 0;
        var speedY = 0;
        if(player == "left") {
            if(direction == "up") {
                if(state == "pressed") {
                    speedY = -175;
                } else if(state == "released") {
                    //speedY -= -175;
                }
            } else if(direction == "down") {
                if(state == "pressed") {
                    speedY = 175;
                } else if(state == "released") {
                    //speedY -= 175;
                }
            }
        } else if(player == "right") {
            var addLater;
        }
        //this.playerLeft.body.velocity.y += -175;
        this.playerLeft.body.velocity.y = speedY;
        //console.log("total x:",speedX,"y:",speedY);
        
    },
    
//    moveDN: function(key) {
//        this.playerLeft.body.velocity.y += 175;
//    },

    gameOver: function() {
        // we start the win state
        game.state.start('gameOver');
    }
};