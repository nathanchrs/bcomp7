var startPoint = 350;
var endPoint = 450;

var calculateOpacity = function(position) {
	if(position < startPoint) {
		return 0;
	} else if(position > endPoint) {
		return 1;
	} else {
		return (position-startPoint) / (endPoint-startPoint);
	}
};

$(window).scroll(function() {
	var position = $(window).scrollTop();
	if(position > startPoint) {
		$("#fixed-navbar").css("display", "block");
	} else {
		$("#fixed-navbar").css("display", "none");
	};

	$("#fixed-navbar").css("opacity", calculateOpacity(position));
});