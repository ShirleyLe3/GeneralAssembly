
// Core features
// - See a two "players" on the left side of the screen, one above another.
// - See a finish line on the right side of the screen.
// - Move each player towards the finish line by pressing a specific key (ex. right arrow for player one, 'd' for player 2).
// - Let the players know the race is over when one player has crossed the finish line

// each time a specific key is pressed, key count is updated.
// with key count, the placement of car is updated.
// if the key count reaches a threshold (finish line), game is over.

// function to register a keyevent
// function to advance the car for the right user
// function to reset the race
// timer

// start with the simplest program.
// with a press of a desinated button, the marker is advanced to the next spot.

const initTrack = function() {
	// Make lanes for each user.
	let trackLength = 20;
	makeLanes(0, trackLength);
	makeLanes(1, trackLength);

	let progress = [0,0];
	document.getElementById(progress[0]).style.backgroundColor = "red";
	document.getElementById(trackLength).style.backgroundColor = "blue";
	document.getElementById(trackLength - 1).style.backgroundColor = "black";
	document.getElementById(trackLength * 2 - 1).style.backgroundColor = "black";
	// Add event listner to the page for the key press.
	// Use keyup instead of keydown to make the game more interesting.
	document.addEventListener('keyup', (event) => {
		if (event.code === "KeyD") {
			if (progress[0] < trackLength - 1) {
				progress[0]++;		
			} else if (progress[0] == trackLength - 1) {
				alert("Red is the winner!");
			}
			document.getElementById(progress[0] - 1).style.backgroundColor = "lightGrey";
			document.getElementById(progress[0]).style.backgroundColor = "red";			
		} else if (event.code === "ArrowRight") {
			if (progress[1] < trackLength - 1) {
				progress[1]++;		
			} else if (progress[1] == trackLength - 1) {
				alert("Blue is the winner!");
			}
			document.getElementById(trackLength + progress[1]-1).style.backgroundColor = "lightGrey";
			document.getElementById(trackLength + progress[1]).style.backgroundColor = "blue";
		}
		document.getElementById("racer1").textContent = progress[0];
		document.getElementById("racer2").textContent = progress[1];
	});

}

// function to make the lanes for the race track.
const makeLanes = (user, length) => {
	let laneElement = document.createElement('tr');
	for (let i = 0; i < length; i++) {
		let positionElement = document.createElement('td');
		// positionElement.setAttribute('data-lane', user);
		positionElement.setAttribute('id', user * length + i);
		positionElement.setAttribute('style', 'background: grey');
		// trackElement.setAttribute('src', 'images/back.png');
		// trackElement.addEventListener('click', flipCard);
		laneElement.appendChild(positionElement);
	}
	document.getElementById("raceTrack").appendChild(laneElement);
}

initTrack();
