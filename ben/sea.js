$(document).ready(function() {
	$("#search").keypress(function(e){
	   if (e.keyCode === 13) {
	   
             window.location.href ="https://www.google.com/search?q="+$("#search").val();
	   }
         });
	$("#cookie").keypress(function(e){
	   if (e.keyCode === 13) {
	   
             window.location.href ="https://www.google.com/search?q="+$("#cookie").val()+"&espv=2&biw=1366&bih=696&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjFp-je_cDNAhVFeSYKHRiVDu8Q_AUIBigB";
	   }
         });
});