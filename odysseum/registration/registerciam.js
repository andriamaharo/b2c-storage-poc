$(document).ready(function() {
  // $('#birthDate_day option:first').text($('#birthDate_day option:first').html().concat('*'));
  // $('#birthDate_month option:first').text($('#birthDate_month option:first').html().concat('*'));
  // $('#birthDate_year option:first').text($('#birthDate_year option:first').html().concat('*'));
  if($('.login-container')) {
	  $('.login-container').addClass('row-reverse');
  }
 $(document).on("change", "input[name='extension_optins']", function () {
	 var phoneNumberValue = $("#extension_PhoneNumber").val();
	 if (this.checked && this.value =='D6DC3CD8-34A8-40A7-88C5-E65759927F7D') {
		 $(this).addClass('checked');
		 if(phoneNumberValue === '') {
			
			$("#continue").attr("disabled","disaled")
			
		} else {
			$("#continue").removeAttr("disabled");
			
		}
	 } else {
		 $(this).removeClass('checked');
		
	 }

	 $("#extension_PhoneNumber").keypress(function(){
			if($(this).val() === '') {
					$('label[for=extension_PhoneNumber] + div').addClass('show');
					$('label[for=extension_PhoneNumber] + div').attr('aria-hidden','false');
					$('label[for=extension_PhoneNumber] + div').html('the information is required');
					$("#continue").attr("disabled","disaled")
			 } else {
				   $("#continue").removeAttr("disabled");
			 }
	});
    if (this.checked && this.value =='D6DC3CD8-34A8-40A7-88C5-E65759927F7D' && $('#extension_optins_D6DC3CD8-34A8-40A7-88C5-E65759927F7D').hasClass('checked') ) {
		$('#extension_PhoneNumber').addClass('show');
		
	}
	if (this.checked && this.value =='DCB2B0E8-947A-40B8-B577-5A1F1575D300'  && $('#extension_optins_D6DC3CD8-34A8-40A7-88C5-E65759927F7D').hasClass('checked')) {
		$('#extension_PhoneNumber').addClass('show');
		if($("#extension_PhoneNumber").val() ==='') {
			$("#continue").attr("disabled","disaled")
		}
	}
	if(this.checked && this.value =='CE30336E-8505-453F-8D79-F8B7549D6A13'  && $('#extension_optins_D6DC3CD8-34A8-40A7-88C5-E65759927F7D').hasClass('checked')) {
		$('#extension_PhoneNumber').addClass('show');
		if($("#extension_PhoneNumber").val() ==='') {
			$("#continue").attr("disabled","disaled")
		}
		
	} 
	if( $('#extension_optins_D6DC3CD8-34A8-40A7-88C5-E65759927F7D').hasClass('checked') == false) {
		$('#extension_PhoneNumber').removeClass('show');
		$("#continue").removeAttr("disabled");
		 $('label[for=extension_PhoneNumber] + div').html('');
		 $("#extension_PhoneNumber").val('');
	}
	
});

// $("input").keypress(function () {
    // var giveNameValue = $("#givenName").val();
	// var surNameValue = $("#surname").val();
	// var emailValue= $("#email").val();
	// var paswValue= $("#newPassword").val();
	// var phoneNumberValue = $("#extension_PhoneNumber").val();
	// var day = $("#extension_DateOfBirth_day").val();
	// var month = $("#extension_DateOfBirth_month").val();
	// var year = $("#extension_DateOfBirth_year").val();
	// if(giveNameValue == '' || surNameValue=='' || paswValue=='' || emailValue =='' ) {
		
		// $("#continue").attr("disabled","disaled")
	// } else {
		// console.log('no disabled');
		// $("#continue").removeAttr("disabled");
		
		// }
		
// });
$("#extension_PhoneNumber").change(function() {
	if($(this).val() == '') {
					$('label[for=extension_PhoneNumber] + div').addClass('show');
					$('label[for=extension_PhoneNumber] + div').attr('aria-hidden','false');
					$('label[for=extension_PhoneNumber] + div').html('the information is required');
					$("#continue").attr("disabled","disaled")
			 } else {
				   $("#continue").removeAttr("disabled");
			 }
})

$("#continue").on('click',function() {
	
	
	if( $('#extension_optins_D6DC3CD8-34A8-40A7-88C5-E65759927F7D').hasClass('checked')) {

			if($('#extension_PhoneNumber').val() == '') {
					$('label[for=extension_PhoneNumber] + div').addClass('show');
					$('label[for=extension_PhoneNumber] + div').attr('aria-hidden','false');
					$('label[for=extension_PhoneNumber] + div').html('This information is required');
					$(this).attr("disabled","disaled")
			 } 
	}
	$("#extension_PhoneNumber").keypress(function(){
			if($(this).val() == '') {
					$('label[for=extension_PhoneNumber] + div').addClass('show');
					$('label[for=extension_PhoneNumber] + div').attr('aria-hidden','false');
					$('label[for=extension_PhoneNumber] + div').html('the information is required');
					$("#continue").attr("disabled","disaled")
			 } else {
				   $("#continue").removeAttr("disabled");
			 }
	});
	
		
});
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
	if ($("#toggle").hasClass("arrow-down")) {
		 $("#toggle").removeClass("arrow-down");
		 $("#toggle").addClass("arrow-up");
	} else {
		$("#toggle").removeClass("arrow-up");
		$("#toggle").addClass("arrow-down");
	}
  });
	function TestRegex(regex, value) {
		return regex.test(value);
	}
	function getFormPassword(value) {
		var pass_min_length = document.querySelector(".pass_min_length");
		var pass_uppercase = document.querySelector(".pass_uppercase");
		var pass_lowercase = document.querySelector(".pass_lowercase");
		var pass_number = document.querySelector(".pass_number");
		
		if (pass_min_length !== null) {
			if (value.length >= 6) {
				pass_min_length.classList.add('match-hint');
			} else {
				pass_min_length.classList.remove('match-hint');
			}
		}
		if (pass_uppercase !== null) {
			if (TestRegex(/[A-Z]/g, value)) {
				pass_uppercase.classList.add('match-hint');
			} else {
				pass_uppercase.classList.remove('match-hint');
			}
		}
		if (pass_uppercase !== null) {
			if (TestRegex(/[a-z]/g, value)) {
				pass_lowercase.classList.add('match-hint');
			} else {
				pass_lowercase.classList.remove('match-hint');
			}
		}
		if (pass_number !== null) {
			if (TestRegex(/\d/g, value)) {
				pass_number.classList.add('match-hint');
			} else {
				pass_number.classList.remove('match-hint');
			}
		}
	}

	function initCss() {
		const styleEl = document.createElement('style');
		styleEl.textContent = `
			.password-hint {
					padding-top: 10px;
					padding-bottom: 10px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					font-size: 12px;
					padding-left: 20px;
					color: #ccc;
			}

			.show-hint {
				display: flex !important;
			}

			.match-hint {
				color: green;
		}`;
		document.body.appendChild(styleEl);
	}

	function initHTML() {
		var PasswordContainer = document.querySelector(".Password");
		if (PasswordContainer) {
			const psHint = document.createElement('div');
			psHint.className = "password-hint";
			PasswordContainer.appendChild(psHint);
			var HintField = document.querySelector(".password-hint");  
			if (HintField) {
				HintField.innerHTML = `
					<span class="pass_min_length">Longueur minimale : 6 caractères</span>
					<span class="pass_uppercase">Au moins une majuscule</span>
					<span class="pass_lowercase">Au moins une minuscule</span>
					<span class="pass_number">Au moins un numéro</span>
				`;
			}
		}
	}

	function initCheckOnPassword() {
		initCss();
		initHTML();
		var inputPassword = document.querySelector("#newPassword");
		var passwordHit = document.querySelector(".password-hint");
		if (inputPassword && passwordHit) {
			passwordHit.addEventListener('focus', function(e) {
				e.target.classList.add('show-hint');
			}, true);
			inputPassword.addEventListener('input', function(e){
					getFormPassword(e.target.value);
				});
		}
	}
	initCheckOnPassword();
});