/*
game.js
Just like the index.html file, the game.js file is rather simple. It performs three basic functions for us:
1.Creates the Phaser.Game object, and maps it to the gameDiv element of the html file
2.Adds the various states
3.Starts the boot state
First two parameters are integers, X and Y size of the game canvas. I'm using 800x600 pixels as optimal (in my personal opinion) size for this kind of game in horizontal orientation. The last parameter is the name of div on HTML page, which will have the game attached to it.
*/
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

// adding states of the game, first is "casual" name of the state, second is "official" name of the state
game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("gameOver", gameOverState);

// after adding all states, start the game by calling boot state
game.state.start('boot');