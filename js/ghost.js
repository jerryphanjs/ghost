
var load_num= 0;
var loading_paint_num= 0;
var load_max= 2;
var start_boo= false;
var box_opned = false;
var text_click = true;
var meguru_link = false;
var bat_num = 0;
var sc_per = 0;
var svg,eFaceBefore,eFaceAfter,dFaceBefore,dFaceAfter;


(function() {

	svg = Snap('.snap'+0+'');
	eFaceBefore = svg.select('.startShape'+0+'');
	eFaceAfter = svg.select('.endShape'+0+'');
	dFaceBefore = eFaceBefore.attr('d');
	dFaceAfter = eFaceAfter.attr('d');

	for (var i = 0; i < $(".snap").length; i++) {
		fnAnimation(i);
	};

	function fnAnimation(num){

			eFaceBefore.animate({
					'd': dFaceAfter
			}, 700, function() {
					this.animate({
							'd': dFaceBefore
					}, 700, function() {

							fnAnimation(0);
					});
			});
		}

} ) ();
