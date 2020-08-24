try {
  var x = document.getElementById("interstitial");
  if(x){
	var y = document.getElementsByClassName("buttonBox continue");
	ref = y[0].href;
	window.location.href = ref;
}
}
catch  {

}
document.cookie = "sid=lolnoty; path=/";
document.cookie = "countdownToAd=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


