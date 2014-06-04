// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Alex Birdsall
//  2. Evan Simoni


// 0. "YOU SIGNED... WHO?!"
var clients = [{name: "Arnold Schwarzenegger", age: 60, quote: "Get to da choppa!"}, {name: "Luke Skywalker", age: 22, quote: "You killed my father!"}];

// testing clients object
// clients.push({name: "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home?!"});

// console.log(clients[2].name);


// 1. "Here they Come!"





// 2. "TIME IS MONEY!"

//YOUR CODE HERE!


function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function() {
  console.log(quote);
  }
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");

var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");

var jimCarrey = new Client("Jim Carrey", 52, "So you're telling me there's a chance?");

var newClients = [adamSandler, kristenBell, jimCarrey];

adamSandler.showQuote();



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var display = function() {
    for (var i=0; i < newClients.length; i++)
    {
        console.log("My client's name is " + newClients[i].name + ", and he/she is " + newClients[i].age + " years old. Their quote, \"" + newClients[i].quote + "\" is so famous it doesn't need attribution.");
    }
}

display();



// 4. "But wait, there's more!"

// Rather than give a single instance of the client object a showQuote function, we just added it to the constructor so that they all would inherit the function. Hope that's cool.

// 5.  ** BONUS **


//  6.  Your Reflection:

// This project was definitely harder than any previous one, just because the gaps in our syntactical knowledge were more profound. For example,
// neither Evan nor I knew how to make the constructor function, which was a really important step in the project. And then, having constructed
// the constructor, we didn't know how to add a function to it. It took independent research after the end of the video call before I realized
// that we needed the keyword 'this' in the function definition. It was mighty satisfying, given how frustrating it was to leave the video chat
// without a working showQuote, to get it up and running finally.

// I also realized that I needed to be a bit more rigorous in using the driver/navigator roles when there's a disparity in knowledge or skill.
// Evan had less exposure to JavaScript functions than I did, so I ended up taking the reins a little too much, both driving and navigating in a
// way that made it harder for Evan to contribute. It took instructor feedback and some reflection to figure out what to do the next time I'm in
// a similar situation, but now I've figured out that I should really restrict myself to navigating when I'm the only one with a conceptual
// roadmap for the task. That way, I have to articulate more thoroughly what we're doing, and that way my partner is fully engaged with creating
// the code, which helps them become familiar with the syntax we're using. It was an 'aha' moment, albeit a belated one.