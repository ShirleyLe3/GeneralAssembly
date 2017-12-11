
// Core features
// - See a two "players" on the left side of the screen, one above another.
// - See a finish line on the right side of the screen.
// - Move each player towards the finish line by pressing a specific key (ex. right arrow for player one, 'd' for player 2).
// - Let the players know the race is over when one player has crossed the finish line

// each time a specific key is pressed, key count is updated.
// with key count, the placement of car is updated.
// if the key count reaches a threshold (finish line), game is over.

// Bonus 
// Let the user know if player one or player two won!
// Keep track of multiple game rounds with a win counter.
// Make it look amazing!
// Allow customized players (name, symbol, color, avatar, etc.).
// Use localStorage to keep track of game state, even if the user refreshes the page.
// Get creative with inventive styling, e.g. use hover effects or animations to spiff things up. Get creative with backgrounds.
// Display a countdown timer ("3, 2, 1, Go!"), the winning time, and the best time.
// Race against a bot.
// Instant replay: record yourself and then race against yourself, in real-time.
// Integrate with a 3rd party API: flickr, youtube, spotify, giphy, etc.
// Whatever else your heart desires!

let trackLength = 50;
let progress = [0,0];
let raceOver = false;

const colorTrackElement = (index, color) => {
	document.getElementById(index).style.backgroundColor = color;
}	

const initTrack = () => {
	makeLanes(0, trackLength);
	makeLanes(1, trackLength);

	colorTrackElement(progress[0], "red");
	colorTrackElement(trackLength, "blue");
	colorTrackElement(trackLength - 1, "black");
	colorTrackElement(trackLength * 2 - 1, "black");

	// Add event listner to the page for the key press.
	// Use keyup instead of keydown to make the game more interesting.
	document.addEventListener('keyup', (event) => {
		if (event.code === "KeyD") {
			advance(0);
		} else if (event.code === "ArrowRight") {
			advance(1);
		}
	});
}

const advance = (racer) => {
	if (!raceOver && progress[racer] < trackLength - 1) {
		progress[racer]++;		
	} else if (progress[racer] == trackLength - 1) {
		alert((racer == 0 ? "Red" : "Blue") + " is the winner!");
		raceOver = true;
	}
	colorTrackElement(trackLength * racer + progress[racer] - 1, "lightGrey")
	colorTrackElement(trackLength * racer + progress[racer], (racer == 0 ? "red" : "blue"))	
}


// function to make the lanes for the race track.
const makeLanes = (user, length) => {
	let laneElement = document.createElement('tr');
	for (let i = 0; i < length; i++) {
		let positionElement = document.createElement('td');
		positionElement.setAttribute('id', user * length + i);
		positionElement.setAttribute('style', 'background: grey');
		laneElement.appendChild(positionElement);
	}
	document.getElementById("raceTrack").appendChild(laneElement);
}

initTrack();
