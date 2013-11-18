# Checkerboard Slider

A simple jquery slider reproducing the checkerboard transition effect.

[See it in action](http://www.checkerboard-slider.com).

## Usage

### Dependencies
Include jQuery, `src/checkerboard.js` and `src/checkerboard.css`.

	<!-- Include the jQuery library (local or CDN) -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>

	<!-- Include the plugin *after* the jQuery library -->
	<script src="checkerboard.min.js"></script>

	<!-- Include the basic styles -->
	<link type="text/css" rel="Stylesheet" href="checkerboard.css" />

### Markup

	<div id="checkerboard_slideshow">
	   <ul class="checkerboard">
	      <li><img src="image1_url"></li>
	      <li><img src="image2_url"></li>
	      ...
	   </ul>
	</div>

### Activation

	$(document).ready(function() {
	   $("#checkerboard_slideshow").checkerboard({
	      'width'	: 940,
	      'height'	: 470,
	      'border'	: 1,
	   });
	});

## Options
Here is a full list of all the possible parameters and their default values.
	'width'   : 1024, 	// width in px
	'height'  : 600, 		// height in px
	'border'  : 2, 		// cell border in px, set it to 0 to have a real checkerboard effect
	'rows'    : 3, 		// number of rows
	'cols'    : 4, 		// number of cells in one row
	'cell_ms'	: 300, 		// transition time, in ms, between 2 images in a cell
	'img_ms'	: 3000 		// display time, in ms, of each image once fully loaded
