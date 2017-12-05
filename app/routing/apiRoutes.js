var express = require("express");
var app = express();
var friends = require("./../data/friends.js");

require("friends");


app.get("/api/friends", function(req, res) {
	res.sendFile(path.join(__dirname, "friends.js"));
});

app.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	
	for (var i = 0; i < newFriend.score.length; i ++) {
		newFriend.score[i] = parseInt(newFriend.score[i]);
	}

	var hardcoded = difference([4,1,1,5,2,1,5,3,4,2]);
	var matchUser = match(hardcoded);
	var matchIndex = hardcoded.indexOf(matchUser);
	var matched = friends[matchIndex];

	friends.push(newFriend);

	res.send(matched);

	})

function difference (userScore) {
	var scoreArr = [];

	for (var i=o; i < friends.length; i++) {
		scoreArr.push(friends[i].score);
	}
	var difference = [];

	for (var i = 0; i < scoreArr.length; i++) {
		var friendScore = scoreArr[i];
		var diff = 0;

		for (var k = 0; k < userScore.length; k++) {
			var differ = parseInt(userScore[k]) - friendScore[k];

			differ = Math.abs(differ);
			diff += differ;
		}
		difference.push(diff);	
	}

	return difference;
	}

function match (difference) {
	var bestmatch;
	for (var i = 0; i < differences.length; i++) {
		if (bestmatch > difference[i] || (!bestmatch && i===0)) {
			bestmatch = difference[i];
		}
	}
	return bestmatch
}

module.exports = app;




