$(document).ready(function() {
	
	$('#localAccountForm #next').on('click',function() {
		$('#localAccountForm input').each(function(index) {
			var input = $(this)
			if(input.hasClass('highlightError')) {
				input.parent().addClass('column-reverse');
				input.next().children().last().addClass('top-28');
			    input.parent().children().first().children().last().addClass('top-80');
			} else {
				input.parent().removeClass('column-reverse');
				input.next().children().last().removeClass('top-28');
				input.parent().children().first().children().last().removeClass('top-80')
			}
			
		})
	
	
		
	
		
	});
	
	
	function getParameterByName(name, url) {
		 if (!url) url = window.location.href;
		 name = name.replace(/[\[\]]/g, "\\$&");
		 var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			 results = regex.exec(url);
		 if (!results) return null;
		 if (!results[2]) return '';
		 return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var pageCountry = getParameterByName('pageCountry');
	var pageLanguage = getParameterByName('pageLanguage');
	var pageMall = getParameterByName('pageMall');
	
	implementDataLayer(pageCountry,pageLanguage,pageMall)
	
})
function implementDataLayer (pC,pL,pM) {

		var utag_data = {
		    "pageCountry"   : pC,//Required
		    "pageLanguage"  : pL,//Required
		    "pageMall"      : pM,   //Required
		    "pageName"      : "login",      //Required
		    "pagePath"      : "/stores/handm",  //Required
		    "pageType"      : "login"           //Required
		 }
	 
}