require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInput = process.argv[2];

switch (userInput) {
    case "my-tweets":
        getUserTweets();
        break;
    case "post":
        postTweet();
        break;
}


function getUserTweets() {
    /*COULD WORK IF I FOUND A WAY TO GET TWEET ID'S AND LOOP THROUGH THEM*/
    client.get(`statuses/lookup`, { id: 20 }, function (error, tweet, response) {
        if (error) throw error;
        console.log(tweet);
        // console.log(tweet[0].text);
    });

    // client.get('search/tweets', { q: 'SkyNet10100' }, function (error, tweets, response) {
    //     for (var i = 0; i < tweets.statuses.length; i++) {
    //         console.log(tweets.statuses[i].text);
    //         if (i === 20) {
    //             i = tweets.statuses.length;
    //         }
    //     }
    // });
}
// console.log(client);



//*TO-WORK*
//add function to switch case statement
//add argument to function
// acount for multiple spaces in argument *could use reduce* *could use for loop found in week-5 activity-18*
function postTweet() {
    client.post('statuses/update', { status: 'Has anyone seen T-800 Model 101? I miss him.' }, function (error, tweet, response) {
        if (error) throw error;
        console.log(tweet);  // Tweet body.
        console.log(response);  // Raw response object.
    });
}
