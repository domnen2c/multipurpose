$(document).ready(function(){
	$('.rate1').raty({
		click: function(score, evt) {
		alert('ID: ' + this.id + "\nscore: " + score);
	 }
	});

	$('.rate2').raty({
		number : 5,
		starOff : 'img/rating_passiv.png',
		starOn  : 'img/rating_activ.png'
	});

	$('.rate3').raty({
		number : 4,
		target : '.name',
		hints  : ['очень плохо', 'плохо', 'нормально', 'хорошо', 'очень хорошо'],
	});

		$('.rate4').raty({
			number : 4,
			starOff : 'img/rating_passiv.png',
			starOn  : 'img/rating_activ.png'
		});

		$('.rate5').raty({
			number : 3,
			starOff : 'img/rating_passiv.png',
			starOn  : 'img/rating_activ.png'
		});
});
