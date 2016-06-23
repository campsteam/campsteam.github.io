$(document).ready(function() {
	$("#search").keypress(function(e){
	   if (e.keyCode === 13) {
	   
             window.location.href ="https://www.google.com/search?q="+$("#search").val();
	   }
         });
});