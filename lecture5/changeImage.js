var changeImages = function(id,  interval) {
	var div = document.getElementById(id);
	var imgtags = div.getElementsByTagName("img");

	function changeImage() {
		if (imgtags.length==0) return;
		var first = imgtags[0].src;
		for (var i=0; i<imgtags.length; i++) {
			var img = imgtags[i];
			var nextIndex = (i + 1);
			console.log("Replacing " + i + " with " + nextIndex); 
			if (nextIndex==imgtags.length) 
				img.src = first;
			else
				img.src = imgtags[nextIndex].src;
		}
	}
	
	setInterval(changeImage, interval);	// Change the image every few seconds
}

window.onload = function() {
	var interval = 5000;
	changeImages("parent", interval);
};
