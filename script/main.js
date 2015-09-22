$(document).ready(function () {

	
	/**
	 * setting up title font size according to the window dimensions
	 */
	
	
	var scr = new Dimension(screen.width, screen.height);
	var dim = new Dimension($(window).width(),$(window).height());
	

/*
	$("#menu").html("<nav id=\"gridMenu\">");

	$("#menu").append("<li class=\"gridMenuItem\"><a href=\"curriculum.html\"> Curriculum </a></li>");
	$("#menu").append("<li class=\"gridMenuItem\"><a href=\"galery.html\"> Galerie </a></li>");

	$("#menu").append("</nav>");*/
});

$.fn.textWidth = function () {
	var sensor = $('<div />').css({ margin: 0, padding: 0 });
	$(this).append(sensor);
	var width = sensor.width();
	sensor.remove();
	return width;
};

