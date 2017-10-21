/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//fake data
$(function() {
    function renderTweets() {
		$.ajax({
			method: 'GET',
			url: '/tweets'
		}).done(function (tweets) {
			$('tweet-container').empty();
			tweets.forEach(function(tweet){
            	let tweetHTML = createTweetElement(tweet);
				$('#tweets-container').prepend(tweetHTML);
			})
        })   
	}

    function createTweetElement(tweet) {
        const {user, content, created_at} = tweet;
		const {avatars, name, handle} = tweet.user;
		let timestamp = moment(created_at).fromNow();
		if(timestamp === "in a few seconds"){
			timestamp = "a few seconds ago";
		};
        const $tweet = $('<article>').addClass("tweet");
        const $header = $('<header>');
        $header.append(($("<img>").addClass("avatars")).attr('src', avatars.small));
        $header.append(($("<span>").addClass("name")).text(name));
        $header.append(($("<span>").addClass("handle")).text(handle));
        const $footer = $("<footer>");
		$footer.append(($("<span>").addClass("created_at")).text(timestamp));
		$footer.append($("<span>").addClass("likesCounter"));
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
    
	renderTweets();
	
	const maxLength = 140; 
	

	$('#tweet-form').on('submit', function (event) {
	const length = $(".new-tweet textarea").val().length;
		event.preventDefault();
		if (length > maxLength) {
			alert("Too many characters!")
			return;
		} else if (length == 0){
			alert("You can't leave it blank!")
			return;
		}
    	let form = this;
		let data = $(this).serialize();
    	$.ajax({
      		method: 'POST',
      		url: '/tweets',
      		data: data
    	}).done(function () {
			form.reset();
			$(".new-tweet .counter").text(140);
			renderTweets();
		});
	});
})

