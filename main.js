$(document).ready(function() {
		$('.menu-button').click(function() {
				$('#flyout-navigation').toggle("drop");
			});
			// MAKES MENU INTERACTIVE
		$(window).on('orientationchange', function(){
			if (window.orientation != 0) {
				alert('Das Design dieser App ist für das Hochformat (Portrait-Modus) optimiert. Für die beste Darstellungsweise drehen Sie das Smartphone bitte wieder zurück.')
			};	
		});
		//SHOULD GIVE AN ALERT WHEN THE PHONE IS TURNED FROM PORTRAIT TO LANDSCAPE MODE.
		
	});

var n=0;
window.onerror = function (msg, url, line) {
  n++;
  if(n<3) alert(msg + url + line)
};