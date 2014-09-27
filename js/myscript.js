$(document).ready(function(){

	$('#tweet-submit').hide();
	$('#char-count').hide();


		// TWEET BOX ANIMATIONS

	

		$('.tweet-compose').on('focus', function(){
				$('#tweet-submit').show();
				$('#char-count').show();
				$('.tweet-compose').css('height', '5em');
		});

		$('.tweet-content').on('blur', function(){

				$('#tweet-submit').hide();
				$('#char-count').hide();
				$('.tweet-compose').css('height', '2.5em');
		})




		$('.tweet-compose').on('keyup', function(){
				//text area val ..... length (140-length)
				var tweetString = $('.tweet-compose').val();
				var currentLength = (140 - tweetString.length);
				$('#char-count').html(currentLength);

				if(currentLength <= 10){
					$('#char-count').css('color', 'red');
				} else if(currentLength > 10){
					$('#char-count').css('color', '#999');
				} 

				if(currentLength < 0 ){
					//$('#tweet-submit').disableTweetButton
					$('#tweet-submit').css('background-color', '#999');
					$('#tweet-submit').css('background-image', 'none');
					$('#tweet-submit').css('border-color', '#666');
				} else if (currentLength >= 0){

					$('#tweet-submit').css('background-image', 'linear-gradient(#33bcef,#019ad2)');
					$('#tweet-submit').css('border-color', '#057ed0');
				}
		});


				// ADD TWEET TO TWEET STREAM

		$('#tweet-submit').on('click', function(){

			// If user has entered text, on tweet button click ..... take the value of the string of what they entered.... prepend(variable) in html

				//clone function

			var tweetTweet = $('.tweet-compose').val();

			if (tweetTweet.length <= 140 && tweetTweet.length > 0) {
				var cloney = $('.tweet:first').clone();
				cloney.find('.avatar').prop('src', './img/funwatercat.jpg');
				cloney.find('.fullname').html('Spencer Wise');
				cloney.find('.username').html('@spencerrwise');
				cloney.find('.tweet-text').html(tweetTweet);
				cloney.find('.stats').hide();
				cloney.find('.reply').hide();
				$('#stream').prepend(cloney);
				$('#tweet-submit').hide();
				$('#char-count').hide();
				$('.tweet-compose').css('height', '2.5em');
				$('.tweet-compose').val('');


			}
		});


		$('.stats').hide();
		$('.reply').hide();

		$(this).find('#stream').on('click', '.tweet', function(){
			$(this).find('.stats').toggle(170);
			$(this).find('.reply').toggle(170);

		});



});