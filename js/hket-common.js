// JavaScript Document
$(document).ready(function(){	
	// dotdotdot
	$(".ellipsis").dotdotdot({
		ellipsis: '...',
		wrap: 'letter',
		watch: "window",
	});
		
	$('a[data-toggle="tab"]').on('shown.bs.tab', function() {
		$(".ellipsis").dotdotdot({
			ellipsis: '...',
			wrap: 'letter',
			watch: "window",
		});
	});
	
	// share button
	$("[hovereffect]").on("click", function() {
		$("[hovereffect]").parent().next("div.share-pop").removeClass("share-pop-open");
		$(this).parent().next("div.share-pop").addClass("share-pop-open");	
	});
	
	$("[share-pop-close]").on("click", function(){
		$(this).parent("div.share-pop").removeClass("share-pop-open");
	});
	
	// top news carousel
	$('.top-news__carousel').flickity({
	  	// options
	  	cellAlign: 'left',
	  	contain: true,
		autoPlay: 6000,
		wrapAround : true,
		resize: false,
		prevNextButtons: true,
		pageDots: false,
	}).on('mouseleave touchend', function(){
		$(this).flickity('playPlayer'); 
	});
	
	// sub menu carousel
	$('.sub-menu-carousel').flickity({
	  // options
		cellAlign: 'left',
		contain: true,
		percentPosition: true,
		resize: true,
		groupCells : true,
		prevNextButtons: true,
		pageDots: false,
		watchCSS: true,
	});
	
	// tooltips
		/*$('[data-tooltip="tooltip"]').tooltip();*/
	
	// search button 
	function adjustSearchCollapse(){
		var searchBtn = $("a.search-btn, #nav-search-01-btn, #nav-search-02-btn");
		var targetCollapse = $("#search-bar-widget");
		
		$(searchBtn).click(function(){
			if ($(targetCollapse).attr('aria-expanded') === 'true') {
				$(searchBtn).children(".hket-icon-search").attr("data-icon" , '\ue904').css("font-size", "18px").next(".icon-text").html("搜尋");
				$('.header-menu-region.affix .header-main-menu-region').css({'background':'#484848',});
				$('.header-mmenu-region').css({'background':'#cc0022',});
			} else {
				$(searchBtn).children(".hket-icon-search").attr("data-icon" , '\ue920').css("font-size", "16px").next(".icon-text").html("關閉");
				$('.header-mmenu-region, .header-menu-region.affix .header-main-menu-region').css({'background':'#52000e',});
			}
		});
	}
	
	// affix menu
	var $attribute = $('#menu, #progress-title');
	$(window).on("load resize", function(){
		$(window).off('.affix');
		$attribute.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
		$attribute.affix({ offset: { top: $attribute.offset().top, }}).on('affixed-top.bs.affix', function(){
			$('.main-content-region').css({'margin-top':'15px',});
			$("#nav-menu").addClass("collapsed").attr("aria-expanded","false");
			$("#navbar-collapse").removeClass("in").attr("aria-expanded","false");
		}).on('affixed.bs.affix', function(){
			$('.main-content-region').css({'margin-top':'47px',});
		});
	});
	
	// mega menu
	$(document).on('click', '.yamm .dropdown-menu', function(e) {
	  e.stopPropagation();
	});
	
	//mmenu
	var $menu = $('#mmenu');
    $menu.mmenu({
		"extensions": [ "fullscreen", /*"pagedim-black",*/ "theme-dark", "fx-listitems-slide" ],
        offCanvas: { pageSelector: "#page", zposition: "front", position: "left" },
		navbar: { title: "香港經濟日報" },
		
		navbars: { content : [ "<div class='mm-navbars-title1'><a class='mm-navbar-icon' href='#'><span data-icon='&#xe902' class='hket-icon-user-guide'></span></a><a class='mm-navbar-logo' href='http://www.hket.com'><span></span></a><button id='mm-close-btn'><span data-icon='&#xe920' class='hket-icon-close'></span></button></div>","<div id='advance-search-mmenu' class='advance-search-mmenu'><input id='searchbox-02' type='search' class='searchbox' placeholder='新聞搜尋......' name='keyword'><a class='search-submit-btn' href='#'><span data-icon='&#xe904' class='hket-icon-search'></span></a></div>","<div class='mm-navbars-title2'><a class='mm-navbar-icon' href='#'><span data-icon='&#xe97c' class='hket-icon-previous-news'></span><span>昔日新聞</span></a><a class='mm-navbar-icon' href='#'><span data-icon='&#xe940' class='hket-icon-e-newspaper'></span><span>電子報</span></a><a class='mm-navbar-icon' href=''><span data-icon='&#xe903' class='hket-icon-flip-paper'></span><span>訂閱</span></a></div>" ]}      
    });
	
	$("#my-account-btn").on("click", function(){
		if ($(this).attr('aria-expanded') === "true") {
			$('div.mm-panels').removeClass('scroll-down');
			$('.mm-navbars-title2').css({'border-bottom':'0'});
		} else {
			$('div.mm-panels').addClass('scroll-down');
			$('.mm-navbars-title2').css({'border-bottom':'1px solid'});
    	}
	});
	
	var API = $menu.data("mmenu");
	$("#mm-close-btn").on('click', function(){
		API.close();
	});
    
	// sticky 
	function sticky(){
		//var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		var browserWidth = window.innerWidth;
		if (browserWidth >= 1200){
			$('[data-sticky="column-01"]').stick_in_parent({parent: "[data-sticky_parent_01]", spacer: false, offset_top: 70,});
			$('[data-sticky="column-02"]').stick_in_parent({parent: "[data-sticky_parent_02]", spacer: false,});
			$('[data-sticky_parent_01], [data-sticky_parent_02]').removeAttr('style').css({'position':'relative'});
		} else if (browserWidth >= 1024){
			$('[data-sticky="column-01"]').stick_in_parent({parent: "[data-sticky_parent_01]", spacer: false, offset_top: 70,});
			$('[data-sticky_parent_01], [data-sticky_parent_02]').removeAttr('style').css({'position':'relative'});
		} else {
			$('[data-sticky_parent_01], [data-sticky_parent_02]').removeAttr('style');
			$('[data-sticky^="column-"]').trigger("sticky_kit:detach").parent().removeAttr('style');
		}
	}
	
	function stickyCheck(){
		$('div[class*="is_stuck"]')
		.on('sticky_kit:bottom', function() {
			$(this).parent().css('position', 'static');
		})
		.on('sticky_kit:unbottom', function() {
			$(this).parent().css('position', 'relative');
		});
    }
	
	// final all
	// $(document.body).trigger("sticky_kit:recalc");
	$(window).on('load resize', function(){
		//$('[data-sticky^="column-"]').trigger("sticky_kit:recalc");
		$('[data-sticky^="column-"]').trigger("sticky_kit:detach").removeData("sticky_kit");
		sticky(); 
		stickyCheck();
	});	
	
	$(window).on('touchmove scroll', function(){
		//$('[data-sticky^="column-"]').trigger("sticky_kit:recalc");
		$('[data-sticky^="column-"]').trigger("sticky_kit:recalc");
		stickyCheck();
	});	
	
	adjustSearchCollapse();
	
});