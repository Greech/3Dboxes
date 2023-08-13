//Function animate header and the footer when all 3d boxes are opened
function checkActiveNumberOfBoxes (){
	if($('.box3dClose').length === 0) {
		$('header').stop().animate({top: 262 + 'px'}, 3000, function(){});
		$('footer').stop().animate({bottom: 246 + 'px'}, 3000, function(){});
	} else {
		$('header').stop().animate({top: 0 + 'px'}, 3000, function() {});
		$('footer').stop().animate({bottom: 0 + 'px'}, 3000, function() {});
	}
}
//Function sends data from form to php server and animate the popup conteinner
function sendDataShowPopup () {
	var form = $('#myform');
	var formMessages = $('#form-messages')

	$(form).submit(function(event) {
        event.preventDefault();

        var formData = $(form).serialize();
        var transitionTime = 1000;
        $.ajax({
    		type: 'POST',
    		url: $(form).attr('action'),
    		data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).fadeIn(transitionTime).removeClass('error');
			$('#overlay').fadeIn(transitionTime).removeClass('overlayDisplay');
			$(formMessages).fadeIn(transitionTime).removeClass('overlayDisplay');
			// Set the message text.
			$(formMessages).text(response);

			setTimeout(function(){
				$('#overlay').fadeOut(transitionTime).addClass('overlayDisplay');
				$(formMessages).fadeOut(transitionTime).addClass('overlayDisplay');
    		}, 2000);

			// Clear the form.
			$('.subject').val('');
			$('.email').val('');
			$('.message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
    });
}

function closePopup () {
	var okBtn = $('.closePopup');
	okBtn.click( function() {
		$('#overlay').addClass('overlayDisplay');
		$('#formMessages').addClass('overlayDisplay');
	});
}

function formValidation () {
	if( document.myFormName.subject.value == "" ){
            alert( "Proszę wprowadzić temat wiadomości!" );
            document.myFormName.subject.focus();
            return false;
         }
         
         if( document.myFormName.email.value == "" ){
            alert( "Proszę podać email!" );
            document.myFormName.email.focus() ;
            return false;
         } else {
         	var emailID = document.myFormName.email.value;
         	atpos = emailID.indexOf("@");
         	dotpos = emailID.lastIndexOf(".");
         
	         if (atpos < 1 || ( dotpos - atpos < 2 )) 
	         {
	            alert("Proszę wprowadzić email poprawnie.")
	            document.myFormName.email.focus() ;
	            return false;
	         }
	     }
         
         if( document.myFormName.message.value == ""){
            alert( "Proszę wprowadzić wiadomość!" );
            document.myFormName.message.focus() ;
            return false;
         }
        
         return( true );
}
//main function 
$(document).ready(function (){
	//2dboxes

	var transitionTime = 1000;
	$('#firstBox').click( function() {
		$('.aboutMeOpen').addClass('boxActive');
		$('.aboutMeOpen .closeButton').click(function() {
			$('.aboutMeOpen').removeClass('boxActive');
		});
	});
	$('#secondBox').click( function() {
		$('.skillsOpen').addClass('boxActive');
		$('.skillsOpen .closeButton').click(function() {
			$('.skillsOpen').removeClass('boxActive');
		});
	});
	$("#thirdBox").click(function() {
		$('.portfolioOpen').addClass('boxActive');
		$('.portfolioOpen .closeButton').click(function() {
			$('.portfolioOpen').removeClass('boxActive');
		});
	});
	$("#fourthBox").click(function() {
		$('.contactOpen').addClass('boxActive');
		$('.contactOpen .closeButton').click(function() {
			$('.contactOpen').removeClass('boxActive');
		});
	});
	//3dboxes animation
	//	box1
	$('.box1').mouseover(function(){
		 var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#2b2b3a";
    	}
	})
	$('.box1').mouseout(function() {
		var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#c3bce7";
        }
	})

	$('.box1').click( function() {
		$('.aboutMeOpen').fadeIn(transitionTime).addClass('boxActive');
		$(this).children('div').fadeOut(transitionTime).removeClass('box3dClose');
		checkActiveNumberOfBoxes ();
		$('.aboutMeOpen .closeButton').click(function() {
			$('.aboutMeOpen').fadeOut(transitionTime).removeClass('boxActive');
			$('.box1').children('div').fadeIn(transitionTime).addClass('box3dClose');
			checkActiveNumberOfBoxes ();
		});
	});

	//	box2 -----
	$('.box2').mouseover(function(){
		 var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#2b2b3a";
    	}
	})
	$('.box2').mouseout(function(){
		var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#c3bce7";
        }
	})
	$('.box2').click(function(){
		$('.portfolioOpen').fadeIn(transitionTime).addClass('boxActive');
		$(this).children('div').fadeOut(transitionTime).removeClass('box3dClose');
		checkActiveNumberOfBoxes ();
		$('.portfolioOpen .closeButton').click(function() {
			$('.portfolioOpen').fadeOut(transitionTime).removeClass('boxActive');
			$('.box2').children('div').fadeIn(transitionTime).addClass('box3dClose');
			checkActiveNumberOfBoxes ();
		});
	});

	//	box3
	$('.box3').mouseover(function(){
		 var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#2b2b3a";
    	}
	})
	$('.box3').mouseout(function() {
		var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#c3bce7";
        }
	})
	$('.box3').click(function() {
		$('.skillsOpen').fadeIn(transitionTime).addClass('boxActive');
		$(this).children('div').fadeOut(transitionTime).removeClass('box3dClose');
		checkActiveNumberOfBoxes ();
		$('.skillsOpen .closeButton').click(function() {
			$('.skillsOpen').fadeOut(transitionTime).removeClass('boxActive');
			$('.box3').children('div').fadeIn(transitionTime).addClass('box3dClose');
			checkActiveNumberOfBoxes ();
		});
	});

	//box4
	$('.box4').mouseover(function(){
		 var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#2b2b3a";
    	}
	})
	$('.box4').mouseout(function() {
		var childDiv = this.getElementsByTagName('div');
		 for (var i = 0; i < childDiv.length; i++) {
        	childDiv[i].style.borderColor = "#c3bce7";
        }
	})
	$('.box4').click(function() {
		$('.contactOpen').fadeIn(transitionTime).addClass('boxActive');
		$(this).children('div').fadeOut(transitionTime).removeClass('box3dClose');
		checkActiveNumberOfBoxes ();
		$('.contactOpen .closeButton').click(function() {
			$('.contactOpen').fadeOut(transitionTime).removeClass('boxActive');
			$('.box4').children('div').fadeIn(transitionTime).addClass('box3dClose');
			checkActiveNumberOfBoxes ();
		});
	});
	sendDataShowPopup ();
	closePopup ();
	//Portfolio details for tablets and smartphones
	var width = $(document).width();
	if (width < 600){
		$('.first').click(function(){
			$('.first').css({
				transform: 'translateX(100%)'
			});
			$('.first-container').css({
				transform: 'translateX(0)'
			});
		});
		$('.first-container').click(function(){
			$('.first').css({
				transform: 'translateX(0)'
			});
			$('.first-container').css({
				transform: 'translateX(-100%)'
			});
		});
		$('.second').click(function(){
			$('.second').css({
				transform: 'translateX(100%)'
			});
			$('.second-container').css({
				transform: 'translateX(0)'
			});
		});
		$('.second-container').click(function(){
			$('.second').css({
				transform: 'translateX(0)'
			});
			$('.second-container').css({
				transform: 'translateX(-100%)'
			});
		});
	};
});



