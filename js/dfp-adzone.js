// JavaScript Document
	var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
	(function() {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + 
	'//www.googletagservices.com/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
	})();
	
	var gptAdSlots = [];
	
	googletag.cmd.push(function() {
		var mapping_01 = googletag.sizeMapping().
			addSize([1400, 160], [[728, 90], [970, 90], [970, 160], [1320, 160]]).
			addSize([1200, 160], [[728, 90], [970, 90], [970, 160]]).
			addSize([1024, 160], [[728, 90]]).
			addSize([768, 90], [728, 90]).
			// Fits browsers of any size smaller than 640 x 480
			build();
		
		var mapping_03 = googletag.sizeMapping().
			addSize([1400, 250], [[300, 600], [300, 250]]).
			addSize([1200, 250], [[300, 600], [300, 250]]).
			addSize([1024, 250], [[300, 600], [300, 250]]).
			addSize([768, 90], [[300, 250]]).
			addSize([640, 0], [[300, 250], [320, 100]]).
  			addSize([0, 0], [[300, 250], [320, 100]]).
			// Fits browsers of any size smaller than 640 x 480
			build();
		
		var mapping_04 = googletag.sizeMapping().
			addSize([1400, 250], [728, 90]).
			addSize([1200, 250], [728, 90]).
			addSize([992, 160], [[300, 250], [320, 100]]).
			addSize([768, 0], [[300, 250], [320, 100]]).
			addSize([640, 0], [[300, 250], [320, 100]]).
  			addSize([0, 0], [[300, 250], [320, 100]]).
			// Fits browsers of any size smaller than 640 x 480
			build();
		
		var mapping_05 = googletag.sizeMapping().
			addSize([1400, 250], [300, 250]).
			addSize([1200, 250], [300, 250]).
			addSize([1024, 250], [300, 250]).
			addSize([768, 90], [300, 250]).
			addSize([640, 0], [[300, 250], [320, 100]]).
  			addSize([0, 0], [[300, 250], [320, 100]]).
			// Fits browsers of any size smaller than 640 x 480
			build();
		
		var mapping_09 = googletag.sizeMapping().
			addSize([1400, 160], [[728, 90], [970, 90], [970, 160], [1320, 160]]).
			addSize([1200, 160], [[728, 90], [970, 90], [970, 160]]).
			addSize([1024, 160], [[728, 90]]).
			addSize([768, 90], [728, 90]).
			addSize([640, 0], [[300, 250], [320, 100]]).
  			addSize([0, 0], [[300, 250], [320, 100]]).
			// Fits browsers of any size smaller than 640 x 480
			build();
		
    	gptAdSlots[0] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed01', [[728, 90], [1320, 160], [970, 90], [970, 160]], 'div-gpt-ad-1493694298175-0').defineSizeMapping(mapping_01).addService(googletag.pubads());
    	//gptAdSlots[1] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed02a', [[160, 600], [120, 600]], 'div-gpt-ad-1493694298175-1').addService(googletag.pubads());
    	//gptAdSlots[2] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed02b', [[160, 600], [120, 600]], 'div-gpt-ad-1493694298175-2').addService(googletag.pubads());
		gptAdSlots[3] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed03', [[300, 250], [300, 600], [320, 100]], 'div-gpt-ad-1493694298175-3').defineSizeMapping(mapping_03).addService(googletag.pubads());
    	gptAdSlots[4] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed04', [[300, 250], [728, 90], [320, 100]], 'div-gpt-ad-1493694298175-4').defineSizeMapping(mapping_04).addService(googletag.pubads());
    	gptAdSlots[5] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed05', [[300, 250], [320, 100]], 'div-gpt-ad-1493694298175-5').defineSizeMapping(mapping_05).addService(googletag.pubads());
    	gptAdSlots[6] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed06', [[300, 250], [1320, 160], [970, 90], [970, 160], [728, 90], [320, 100]], 'div-gpt-ad-1493694298175-6').addService(googletag.pubads());
    	gptAdSlots[7] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed07', [[300, 250], [320, 100], [300, 600]], 'div-gpt-ad-1493694298175-7').defineSizeMapping(mapping_03).addService(googletag.pubads());
    	/*gptAdSlots[8] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed08', [[300, 250], [300, 600]], 'div-gpt-ad-1493694298175-8').addService(googletag.pubads());*/
    	gptAdSlots[9] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed09', [[300, 250], [1320, 160], [970, 90], [970, 160], [728, 90], [320, 100]], 'div-gpt-ad-1493694298175-9').defineSizeMapping(mapping_09).addService(googletag.pubads());
    	/*gptAdSlots[10] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed10', [[300, 250], [320, 100]], 'div-gpt-ad-1493694298175-10').addService(googletag.pubads());
    	gptAdSlots[11] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed11', [[300, 250], [320, 100]], 'div-gpt-ad-1493694298175-11').addService(googletag.pubads());
    	gptAdSlots[12] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_fixed12', [[300, 250], [320, 100]], 'div-gpt-ad-1493694298175-12').addService(googletag.pubads());
    	gptAdSlots[13] = googletag.defineSlot('/183518426/zeno_webrp_sectionfront_special', [1, 1], 'div-gpt-ad-1493694298175-13').addService(googletag.pubads());*/
    	googletag.pubads().enableSingleRequest();
    	googletag.pubads().collapseEmptyDivs();
    	googletag.enableServices();
	});
	
	var startBrowserWidth = window.innerWidth;

	function adsRefresh(currentBrowserWidth){
		startBrowserWidth = currentBrowserWidth;
		googletag.pubads().refresh();
	}
	
	function adsResize(){
		Number.prototype.between = function(a, b){
			var min = Math.min(a, b),
				max = Math.max(a, b);
			return this >= min && this <= max;
		};

		window.onresize = function(){
			var currentBrowserWidth = window.innerWidth;
			//console.log('current : ' + currentBrowserWidth);
			if ((startBrowserWidth >= 1400 !== currentBrowserWidth >= 1400) || 
				(startBrowserWidth.between(1400, 1200) !== currentBrowserWidth.between(1400, 1200)) || 
				(startBrowserWidth.between(1200, 992) !== currentBrowserWidth.between(1200, 992)) || 
				(startBrowserWidth.between(992, 768) !== currentBrowserWidth.between(992, 768)) || 
				(startBrowserWidth.between(768, 640) !== currentBrowserWidth.between(768, 640)) || 
				(startBrowserWidth.between(640, 0) !== currentBrowserWidth.between(640, 0))){
				adsRefresh(currentBrowserWidth);
				$('[data-sticky_column*=""]').trigger("sticky_kit:recalc");
				//console.log('resfresh');
			} else {
				//console.log('nothing');
				return;
			}
		};
	}

	adsResize();