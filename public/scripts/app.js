/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//fake data
$(function() {
    var data = [
        {
        "user": {
            "name": "Newton",
            "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
        },
        {
        "user": {
            "name": "Descartes",
            "avatars": {
            "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
            "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
            "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
        },
        {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
            "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
        }
    ];
    
    function renderTweets(tweets) {
        data.forEach(function(item){
            let $value = createTweetElement(item);
            $('#tweets-container').append($value);
        })   
    }
    
    function createTweetElement(tweet) {
        const {user, content, created_at} = tweet;
        const {avatars, name, handle} = tweet.user;
        const $tweet = $('<article>').addClass("tweet");
        const $header = $('<header>');
        $header.append(($("<img>").addClass("avatars")).attr('src', avatars.small));
        $header.append(($("<span>").addClass("name")).text(name));
        $header.append(($("<span>").addClass("handle")).text(handle));
        const $footer = $("<footer>");
        $footer.append(($("<span>").addClass("created_at")).text(created_at));
        const $icons = ($("<span>").addClass("icons"));
        $icons.append($("<span>").addClass("fa fa-flag"));
        $icons.append($("<span>").addClass("fa fa-retweet"));
        $icons.append($("<span>").addClass("fa fa-heart"));
        $footer.append($icons);
        $tweet.append($header);
        $tweet.append($("<p>").text(content.text));
        $tweet.append($footer);
        return $tweet;
    }
    
    renderTweets(data);
})
