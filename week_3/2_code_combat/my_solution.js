// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue Mission 
//
// move down x2
// move right x2
// move up x2
// move right x2
// move down
// ATTACK
 this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
 // Grab the Mushroom
 //
 // move up
 // move right
 // move left
 // move up
 // ATTACK
 this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
// Drink Me
//
// ATTACK
// move right
// move down
// move up
// move right
// ATTACK
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guards
//
// after pre-scripted battle...
// move right x2
// move up
// move right
// say "something"
// move down
// move right
// move up
// move right
 this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Something!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap
//
// move down x2
// say "Ayn Rand is full of hot air!"
// move up

this.moveDown();
this.moveDown();
this.say("Ayn Rand is full of hot air!");
this.moveUp();
this.moveUp();

// Taunt
//
// after "hey":
// say "you smell like dog farts"
// say "but, like, if the dog ate its own poop"
// say "poop comprised of the last thing it ate, which was also its own poop"
this.say("Hey!");
this.say("you smell like dog farts");
this.say("but, like, if the dog ate its own poop");
this.say("poop comprised of the last thing it ate, which was also its own poop");

// Cowardly Taunt
//
// after moving to (50, 16)
// say "your code is boring and redundant"
// continue w/ pre-scripted skedaddle
this.moveXY(50, 16);
this.say("your code is boring and redundant");
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Commanding Followers
//
// after pre-scripted hullo:
// say "let's play follow the leader"
// move to (65, 40)
// say "let's play attack those dudes"
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("let's play follow the leader");
this.moveXY(65, 40);
this.say("let's play attack those dudes");

// Mobile Artillery
//
// shoot (50, 65) before pre-scripted move
// shoot (43, 66) to finish off the big fella
// pre-scripted move, attack
// move to (45, 26)
// move to (45, 55)
// shoot (68, 55)
// shoot (61, 50) to finish the job
 this.attackXY(50, 65);
this.attackXY(43, 66);
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(45, 26);
this.moveXY(45, 55);
this.attackXY(68, 55);
this.attackXY(61, 50);


// Reflection:
// Write your reflection here.
// First, the challenge-specific questions.
// 	* "this" is the js object that is your selected character. Not the wizard guy I made, but the sprites he's controlling.
// 	  All of the actions following "this." are methods of that object.
// 	* The () syntactically identifies functions/methods. It also holds any parameters of that function/method.
// 	* The semicolons explicitly end each discrete line of code. It's a clear signal to the computer to stop reading and execute
// 	  the current chunk of code. Without semicolons, the computer would have to divide up the code into discrete steps implicitly.
// 	  Ruby doesn't seem to mind that step, but divvying it up explicitly removes any guesswork. Also makes for a whole class of
// 	  annoying typo, but c'est la vie.

// I had already gone through the CodeAcademy JS course before doing this challenge, so the basic syntax of JS methods was familiar
// to me. Honestly, that was the only JS-specific task of the beginning missions, and fully half of the coding tasks (the other half
// was simply to explicitly write every step of a given process). With all that, the real issues were level-specific: understanding
// the scope of each level's task; getting a feel for the specific mechanics of each method—the distance each .moveDirection took the
// sprite, the range of various actions, etc; the timing and trajectory of an ogre's retaliatory charge. I'm actually curious, looking
// through the Learning Competencies, at the bit about syntax error messages. The syntax of Code Combat, at least to start, is really
// simple and I didn't make a simgle error.

// I thought I'd enjoy the artillery level more than the dungeon bit, but I didn't. The cartesian navigation was more interesting in
// theory, but just added a level of tedium in practice. Given a task that simple, the added complexity just meant I had to do one or
// two more tests to get the parameters just right.

// So, to wrap up, I feel totaly confident with this challenge. The syntax was familiar, the logical demands were fairly trivial, and
// each instance of troubleshooting followed the same mental narrative of "I'll try algorithm A because it takes less typing; if that
// doesn't work, I'll have to (add this fairly obvious other step || tweak this parameter a bit)".