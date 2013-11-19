/*
 * Checkerboard Slider
 * Version 	: 0.9
 * Author	: Bertrand Svetchine
 * Url		: http://www.checkerboard-slider.com
 * Released under the MIT license :
 *   http://opensource.org/licenses/MIT
 */
;(function($) {

	"use strict";

	$.fn.checkerboard = function(o) {

		var defaults	= {
			width 	: 1024,
			height	: 600,
			border 	: 2,
			rows	: 3,
			cols	: 4,
			cell_ms : 300,
			img_ms	: 3000
		};

		var settings	= $.extend({}, defaults, o);

		var $wrapper 	= this,
		    $images	= $wrapper.find(".checkerboard img"),
	    	    swidth	= (settings.width - settings.border*settings.cols*2) / settings.cols,
		    sheight	= (settings.height - settings.border*settings.rows*2) / settings.rows,
		    loop	= 1;

		var init 	= function() {
			gen_grid();
			css_conf();
			animate();
		};

		var gen_grid 	= function() {
			for(var i=0; i<settings.rows*settings.cols; i++)
				$wrapper.append('<span class="cell"><span class="filter"></span></span>');
		};

		var css_conf 	= function() {
			$wrapper.css({
				'width': settings.width,
				'height': settings.height
			});
			$wrapper.children('.cell').each(function(i) {
				$(this).css({
					'border': settings.border + "px solid white",
					'-webkit-transition': "opacity 0.3s ease-out",
					'-moz-transition': "opacity 0.3 ease-out",
					'-o-transition': "opacity 0.3s ease-out",
					'transition': "opacity 0.3s ease-out",
					'width': swidth,
					'height': sheight,
					'background-image': "url(" + $($images[0]).attr("src") + ")",
					'background-position': img_pos_x(i) + "px " + img_pos_y(i) + "px",
					'background-size': settings.width + "px " + settings.height + "px"
				});
			});
			$wrapper.find('.filter').css({
				'width': swidth,
				'height': sheight
			});
		};

		var s_width	= function() {
			return (settings.width - settings.border*8) / 4;
		};

		var s_height	= function() {
			return (settings.height - settings.border*6) / 3;
		};

		var img_pos_x	= function(i) {
			var x = i%settings.cols;
			return -(swidth*x + 2*x*settings.border);
		};

		var img_pos_y	= function(i) {
			var x = i%settings.cols;
			var y = parseInt((i-x)/(settings.cols));
			return -(sheight*y + 2*y*settings.border);
		};

		var animate	= function() {
			var firstInterval = setInterval(function() {
				load_img();
				loop = 2;
				window.clearInterval(firstInterval);
				setInterval(function() {
					load_img();
					loop += 1;
				}, settings.img_ms + settings.cols*settings.rows*settings.cell_ms);
			}, settings.img_ms);
		};

		var load_img	= function() {
			var cells = $wrapper.find(".cell").toArray();
			var cellLoopInterval = setInterval(function() {
         			var rand_i = Math.random()*cells.length;
				var cell = cells.splice((parseInt(rand_i)), 1)[0];
				load_cell(cell);
         			if (cells.length == 0)
            				window.clearInterval(cellLoopInterval);
			}, settings.cell_ms);
		};

		var load_cell	= function(cell) {
			var img_index = (loop-1) % $images.length;
			$(cell).css({
				'opacity': 0,
			});
			setTimeout(function() {
				$(cell).css({
					'background-image': "url(" + $($images[img_index]).attr("src") + ")",
					'opacity': 1,
				});
			}, settings.cell_ms);
		};

		init();

	};

})(jQuery);
