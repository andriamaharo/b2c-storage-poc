$(document).ready(function() {
	if($('.login-section-right-password-reset') != undefined) {
		if($('label[for="email"]').html() != undefined) {
			$('#continue').addClass('btn_continue_email');
			
		} else {
			$('#continue').addClass('btn_pwd');
			$('#cancel').html('');
			 
		}
	}
	 
	 

	 setTimeout(function() {
		if( $('#email_ver_but_send').attr('aria-hidden') == "true") {
		   $('#email_ver_but_send').addClass('hidden');
		}
	},200)
	
	/* hidden text label side eye icon for new password and reenter password */
	if( $('label[for="newPasswordtoggler"]') || $('label[for="reenterPasswordtoggler"]') ) {
		setTimeout(function() {
			$('label[for="newPasswordtoggler"]').text('')
			$('label[for="reenterPasswordtoggler"]').text('')
		},200)
		
	}
	function checkMatchingPasswords(){
                if( $('#reenterPassword').val() !== '') {
					 if( $('#reenterPassword').val() !== $('#newPassword').val() ){
						$('#continue').attr("disabled","disabled");  
						$("#reenterPassword").prev().html('Please make sure your passwords match. ');
					}
					if( $('#reenterPassword').val() === $('#newPassword').val() ){
						$("#continue").removeAttr("disabled");
						$("#reenterPassword").prev().html(' ');
					}
				}  
            
        }
	/*validation password */
	if( $('#reenterPassword').val() != undefined || $('#newPassword').val() !=undefined )  {
		$("#continue").removeAttr("disabled");
		$('#reenterPassword').on('mouseout', function () {
		   checkMatchingPasswords()
		});
	
	}
	
	
		
	/* back click*/
	$('.iconBack').on('click', function(e){
		 e.preventDefault();
      window.location.href = document.referrer;
	});
	
	
});
