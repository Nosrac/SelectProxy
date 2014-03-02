/**
 * jQuery Plugin to easily create visual replacements for <select> elements.
 * Assumes you have a <select> inside the selector
 *
 * @param  {string} targetSelector Selector which will contain the Inner HTML of the selected <option>.  Must be inside the primary selector
 */
$.fn.selectProxy = function(targetSelector)
{
	$(this).each(function()
	{
		var proxy = this;

		$(proxy).wrap(
			$("<div>").css(
			{
				display: "inline-block",
				position: 'relative',
				padding: 0,
				margin: 0
			})
		) ;

		var updateTarget = function()
		{
			var selectedOption = $(proxy).find('select option:selected');
			$(proxy).find(targetSelector).html(   $(selectedOption). html() );
		};

		updateTarget();

		$(proxy).find('select').change( updateTarget ).css({
			position : 'absolute',

			width : '100%',
			height : '100%',
			left : 0,
			top : 0,

			padding: 0,
			margin: 0,

			opacity : 0,
			display: 'inline-block',
			visibility: 'visible',

			'z-index' : 100,
			cursor: 'pointer',

			'-webkit-appearance' : 'none',
			'-moz-appearance' : 'none',

		});
	});
};