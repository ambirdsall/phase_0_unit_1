// This is a solo challenge

// Your mission description:
// CAT BURGLAR! Steal the jewels by night. That's why there's no graphics. Because it's dark.
// You drop through a window into a jewelry store. That's where the game opens. You know one safe path past the motion detectors.
// You have to sneak 10' forwards, turn left, sneak 10' forwards, turn right, sneak 5' forwards, snatch the jewels. Luckily, you've
// trained long and hard to sneak exactly 5' at a time. Then you retrace your steps (turn around first, natch) and climb 
// back out the window.

// Pseudocode
// burglar object with location (x,y), orientation [north, east, south, west], jewelsPosession [boolean], and 
// functions: sneak forwards in increments of 5', turn left, turn right, pilfer, climb out
// path array with locations: (0,0), (5,0) (10,0), (10,5), (10,10), (15,10) 
// init/window location: (0,0); init orientation: east; jewels location: (15,10)
// if location is != path member, message "WOOP WOOP HELLA ALARMS WOOP"
// if snatch jewels and not at (15,10), message "WOOP WOOP HELLA ALARMS WOOP"
// if climb and not at (0,0), message "WOOP WOOP HELLA ALARMS WOOP"
// if climb and !jewelsPosession, message "Really? You're risking all that prison time and you don't even get the jewels? You're not a very good cat burglar."
// if climb and jewelsPosession, message "Aw yeah, who's the baddest cat around? IT'S THIS ONE RIGHT HERE WITH ALL THE JEWELS"

// Initial Code
var burglar = {
	location: [0,0],
	orientation: "east",
	jewelsPosession: false
}

var path = [[0,0], [5,0], [10,0], [10,5], [10,10], [15,10]];

var jewelsCase = [15,10];

var sneak = function() {
	case burglar.orientation {
		"north": burglar.location[1] += 5;
			break;
		"east": burglar.location[0] += 5;
			break;
		"south": burglar.location[1] -= 5;
			break;
		"west": burglar.location[0] -= 5;
			break;
		default: console.log("sneak error");
	}
}

var turnLeft = function() {
	case: burglar.orientation {
		"north": burglar.orientation = "west";
			break;
		"east": burglar.orientation = "north";
			break;
		"south": burglar.orientation = "east";
			break;
		"west": burglar.orientation = "south";
			break;
		default: console.log("turnLeft error");
	}
}

var turnRight = function() {
	case: burglar.orientation {
		"south": burglar.orientation = "west";
			break;
		"west": burglar.orientation = "north";
			break;
		"north": burglar.orientation = "east";
			break;
		"east": burglar.orientation = "south";
			break;
		default: console.log("turnRight error");
	}
}

var pilfer = function() {
	if (location === jewelsCase) {
		burglar.jewelsPosession = true;
		console.log("You carefully lift the jewels from their case. They feel... expensive.");
	} else {
		console.log("WOOP WOOP HELLA ALARMS WOOP");
	}
}


// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 