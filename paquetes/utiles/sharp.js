const sharp = require('sharp');

sharp('./logo_js.png')
	.resize(80)
	.grayscale()
	.toFile('resized.png');