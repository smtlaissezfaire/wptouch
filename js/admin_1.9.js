/*
 * WPtouch 1.9 -The WPtouch Admin Javascript File
 * This file holds all the default jQuery & Ajax functions for the theme
 * Copyright (c) 2008-2010 Duane Storey & Dale Mugford (BraveNewCode Inc.)
 * Licensed under GPL.
 *
 * Last Updated: April 29th, 2010
 */
 
var wptouchSpinnerCount = 1;

function wptouchSpinnerDone() {
	wptouchSpinnerCount = wptouchSpinnerCount - 1;
	if ( wptouchSpinnerCount == 0 ) {
		jQuery('img.ajax-load').fadeOut( 1000 );
	}	
}

jQuery(document).ready(function(jQuery) {

	/* setTimeout(function() { jQuery('img.ajax-load').fadeOut(1000); }, 2000); */
	setTimeout(function() { jQuery('#wptouchupdated').fadeIn(250); }, 750);
	setTimeout(function() { jQuery( '#wptouchupdated' ).hide("slide", { direction: "up" }, 450);}, 2500);

	jQuery('#header-text-color, #header-background-color, #header-border-color, #link-color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) { jQuery(el).val(hex); jQuery(el).ColorPickerHide(); },
		onBeforeShow: function () { jQuery(this).ColorPickerSetColor( jQuery(this).attr('value') ); }
		});

	jQuery("a.fancylink").fancybox({
		'padding':	10, 'zoomSpeedIn': 250, 'zoomSpeedOut': 250, 'zoomOpacity': true, 'overlayShow': false, 'frameHeight': 320, 'frameWidth': 450, 'hideOnContentClick': true
	});
		
	
	wptouchAjaxTimeout = 5000;
	
	// uncomment this to simulate a failure
	// wptouchBlogUrl = 'http://somefakeurlasdf.com';
	jQuery.ajax( {
		'url': wptouchBlogUrl + '?wptouch-ajax=news',
		'success': function(data) { 
			jQuery( '#wptouch-news-content' ).hide().html( data ).fadeIn(); 
			wptouchSpinnerDone();
		},
		'timeout': wptouchAjaxTimeout,
		'error': function() {
			jQuery( '#wptouch-news-content' ).hide().html( '<ul><li class="ajax-error">Unable to load the news feed</li></ul>' ).fadeIn();
			wptouchSpinnerDone();
		},
		'dataType': 'html'
	});
	
//  	jQuery.ajax( {
//  		'url': wptouchBlogUrl + '?wptouch-ajax=support',
//  		'success': function(data) { 
//  			jQuery( '#wptouch-support-content' ).hide().html( data ).fadeIn(); 
//  			wptouchSpinnerDone();
//  		},
//  		'timeout': wptouchAjaxTimeout,
//  		'error': function() {
//  			jQuery( '#wptouch-support-content' ).hide().html( '<ul><li class="ajax-error">Unable to load the support feed</li></ul>' ).fadeIn();
//  			wptouchSpinnerDone();
//  		},
//  		'dataType': 'html'
//  	});	
});