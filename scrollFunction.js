window.onscroll = function() {
	scaleObject();
	scrollFunctionOne();
	scrollFunctionTwo();
	scrollFunctionThree();
	scrollFunctionFour();
	rotateAndScale();
	scrollFunctionTitle();
	scrollFunctionImg();
	scrollFunctionHeader();
	scrollFunctionContact();
};
	
	function scaleObject() {
  var objects = document.getElementsByClassName("scalingObject");
  var scaleRatio = 0.001; 
  
  for (var i = 0; i < objects.length; i++) {
    var scale = "scale(" + (1 + window.scrollY * scaleRatio) + ")";
    objects[i].style.transform = scale;
  }
}
	
	
function rotateAndScale() {
  var objects = document.getElementsByClassName("rotatingObject");
  var screenHeight = window.innerHeight;
  var rotationRatio = 0.2; 
  var scaleRatio = 0.001; 
  
  for (var i = 0; i < objects.length; i++) {
    var rotation = "rotate(" + (window.scrollY * rotationRatio) + "deg)"; 
    var scale = "scale(" + (1 + window.scrollY * scaleRatio) + ")"; 
    objects[i].style.transform = rotation + " " + scale;
  }
}
	
function scrollFunctionOne() {
  var objects = document.getElementsByClassName("movingObject");
  var screenWidth = window.innerWidth;
  var movementRatio; 
	
	if (screenWidth < 768) { // Mobile width breakpoint
    movementRatio = 2.5; 
  } else {
    movementRatio = 0.19; // Default movement ratio for desktop
  }
  
  for (var i = 0; i < objects.length; i++) {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    var movementAmount = (screenWidth * movementRatio * scrollPercentage);
    objects[i].style.left = (-movementAmount) + "%"; 
  }
}
	
	function scrollFunctionTwo() {
  var objects = document.getElementsByClassName("movingObjectTwo");
  var screenWidth = window.innerWidth;
  var movementRatio; 
		
		if (screenWidth < 768) { // Mobile width breakpoint
    movementRatio = 2.3; 
  } else {
    movementRatio = 0.13; // Default movement ratio for desktop
  }
  
  for (var i = 0; i < objects.length; i++) {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    var movementAmount = (screenWidth * movementRatio * scrollPercentage);
    objects[i].style.left = (-movementAmount) + "%"; 
  }
}	
	function scrollFunctionThree() {
  var objects = document.getElementsByClassName("movingObjectThree");
  var screenWidth = window.innerWidth;
  var movementRatio; 
		
		if (screenWidth < 768) { // Mobile width breakpoint
    movementRatio = 1.4; 
  } else {
    movementRatio = 0.1; // Default movement ratio for desktop
  }
  
  for (var i = 0; i < objects.length; i++) {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    var movementAmount = (screenWidth * movementRatio * scrollPercentage);
    objects[i].style.left = (-movementAmount) + "%"; 
  }
}
	
	function scrollFunctionFour() {
  var objects = document.getElementsByClassName("movingObjectFour");
  var screenWidth = window.innerWidth;
  var movementRatio; 
		
		if (screenWidth < 768) { // Mobile width breakpoint
    movementRatio = 1.0; 
  } else {
    movementRatio = 0.06; // Default movement ratio for desktop
  }
  
  for (var i = 0; i < objects.length; i++) {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    var movementAmount = (screenWidth * movementRatio * scrollPercentage);
    objects[i].style.left = (-movementAmount) + "%"; 
  }
}
	
	function scrollFunctionTitle() {
  var objects = document.getElementsByClassName("movingTitle");
  var screenWidth = window.innerWidth;
  var movementRatio = 0.15; 
  
  for (var i = 0; i < objects.length; i++) {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    var movementAmount = (screenWidth * movementRatio * scrollPercentage);
    objects[i].style.left = (-movementAmount) + "%"; 
  }
}
	
	
		function scrollFunctionImg() {
  var objects = document.getElementsByClassName("movingImg");
  var viewportWidth = window.innerWidth;
  var movementRatio = 0.06; 

  for (var i = 0; i < objects.length; i++) {
    var rect = objects[i].getBoundingClientRect();
    var distanceFromTop = rect.top;
    if (distanceFromTop < window.innerHeight && distanceFromTop > -rect.height) {
      var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      var movementAmount = viewportWidth * movementRatio * scrollPercentage;
      objects[i].style.left = (15 - movementAmount) + "%"; 
    }
  }
}


	function scrollFunctionHeader() {
  var objects = document.getElementsByClassName("header");
  var viewportHeight = window.innerHeight;
  var movementRatio = 0.12; 

  for (var i = 0; i < objects.length; i++) {
    var rect = objects[i].getBoundingClientRect();
    var distanceFromTop = rect.top;
    if (distanceFromTop < viewportHeight && distanceFromTop > -rect.height) {
      var movementAmount = viewportHeight * movementRatio * ((viewportHeight - distanceFromTop) / viewportHeight);
      objects[i].style.transform = "translate(0%, " + (80 - movementAmount) + "%)"; 
    }
  }
}
	
	function scrollFunctionContact() {
  var objects = document.getElementsByClassName("contact");
  var viewportHeight = window.innerHeight;
  var movementRatio = 0.12; 

  for (var i = 0; i < objects.length; i++) {
    var rect = objects[i].getBoundingClientRect();
    var distanceFromTop = rect.top;
    if (distanceFromTop < viewportHeight && distanceFromTop > -rect.height) {
      var movementAmount = viewportHeight * movementRatio * ((viewportHeight - distanceFromTop) / viewportHeight);
      objects[i].style.transform = "translate(0%, " + (80 - movementAmount) + "%)"; 
    }
  }
}
