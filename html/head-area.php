<?php global $wptouch_settings; ?>
<?php global $bnc_wptouch_version; ?>

<div class="metabox-holder" id="wptouch-head">
	<div class="postbox">
		<div id="wptouch-head-colour">
			<div id="wptouch-head-title">
				<?php WPtouch(); ?>
				<img class="ajax-load" src="<?php echo compat_get_plugin_url('wptouch'); ?>/images/admin-ajax-loader.gif" alt="ajax"/>
			</div>
				<div id="wptouch-head-links">
					<ul>
						<!-- <li><?php echo sprintf(__( "%sSupport Forums%s", "wptouch" ), '<a href="http://support.bravenewcode.com/forum/wptouch" target="_blank">','</a>'); ?> | </li> -->
						<li><?php echo sprintf(__( "%sWPtouch Homepage%s", "wptouch" ), '<a href="http://www.bravenewcode.com/wptouch" target="_blank">','</a>'); ?> | </li>
						<!-- <li><?php echo sprintf(__( "%sSupport Forums%s", "wptouch" ), '<a href="http://www.bravenewcode.com/support/" target="_blank">','</a>'); ?> | </li> -->
						<li><?php echo sprintf(__( "%sBNC on Twitter%s", "wordtwit" ), '<a href="http://www.twitter.com/bravenewcode" target="_blank">','</a>'); ?> | </li>
						<li><?php echo sprintf(__( "%sDonate%s", "wptouch" ), '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=paypal%40bravenewcode%2ecom&amp;item_name=WPtouch%20Beer%20Fund&amp;no_shipping=1&amp;tax=0&amp;currency_code=CAD&amp;lc=CA&amp;bn=PP%2dDonationsBF&amp;charset=UTF%2d8" target="_blank">','</a>'); ?></li>
					</ul>
				</div>
	<div class="bnc-clearer"></div>
			</div>	
	
		<div id="wptouch-news-support">

			<div id="wptouch-news-wrap">
			<h3><span class="rss-head">&nbsp;</span><?php _e( "WPtouch Wire", "wptouch" ); ?></h3>
				<div id="wptouch-news-content">
					
				</div>
			</div>

			<div id="wptouch-support-wrap">			
			<h3>&nbsp;</h3>
				<div id="wptouch-support-content">
				<p id="find-out-more"><a href="http://www.wptouch.com" target="_blank"><?php _e( "Find Out More &rsaquo;", "wptouch" ); ?></a></p>
				</div>
			</div>
			
		</div><!-- wptouch-news-support -->

	<div class="bnc-clearer"></div>
	</div><!-- postbox -->
</div><!-- wptouch-head -->
