"use strict";
const ObjectID = require('mongodb').ObjectID;
// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
    db.collection("tweets").insertOne(newTweet, callback)
    },  

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(function(err, results) {
        callback(null, results.sort((a, b) => a.created_at - b.created_at));
      });
    },
    //Find the tweet in db by tweetid
    findTweet: function(id,callback) {
      db.collection("tweets").findOne({_id: ObjectID(id)}, callback)
    },
    //update likes according to the tweetid
    updateLikes: function(id, callback) {
      this.findTweet(id, function(err, tweet) {
        if (err) {
          callback(err);
        } else {
          db.collection('tweets').updateOne({_id: ObjectID(id)},{$inc: { likes: 1} },callback)
        }
      })
    } 
  } 
}