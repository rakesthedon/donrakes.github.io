function Dimension(w, h) {
	this.height = h;
	this.width = w;
}

Dimension.prototype.toString = function () {
	return this.width + " " + this.height;
}