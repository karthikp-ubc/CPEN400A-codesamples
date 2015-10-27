var changeImages = function(images) {
	var div4 = document.getElementById("four");
	var img = div4.getElementsByTagName("img")[0];
	var currentIndex = images.indexOf( img.src );
	if (currentIndex==-1) currentIndex = 0;
	var changeImage = function() {	
		currentIndex = (currentIndex + 1) % images.length;
		img.src = images[currentIndex]; 	
	};
	setInterval(changeImage, 5000);	// Change the image every 5 seconds
}

window.onload = function() {
	var images = ["images/one.jpg", "images/two.jpg", "images/three.jpg", "images/four.jpg", "images/five.jpg"];
	changeImages(images);
};
