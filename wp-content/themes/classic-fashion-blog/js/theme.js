// preloader
jQuery(window).on('load', function() {
  jQuery('#status').fadeOut();
  jQuery('#preloader').delay(350).fadeOut('slow');
  jQuery('body').delay(350).css({'overflow':'visible'});
})

// toggle button
jQuery(function($){
  $( '.toggle-nav button' ).click( function(e){
    $( 'body' ).toggleClass( 'show-main-menu' );
    var element = $( '.sidenav' );
    classic_fashion_blog_trapFocus( element );
  });

  $( '.close-button' ).click( function(e){
    $( '.toggle-nav button' ).click();
    $( '.toggle-nav button' ).focus();
  });
  $( document ).on( 'keyup',function(evt) {
    if ( $( 'body' ).hasClass( 'show-main-menu' ) && evt.keyCode == 27 ) {
      $( '.toggle-nav button' ).click();
      $( '.toggle-nav button' ).focus();
    }
  });
});

function classic_fashion_blog_trapFocus( element, namespace ) {
  var classic_fashion_blog_focusableEls = element.find( 'a, button' );
  var classic_fashion_blog_firstFocusableEl = classic_fashion_blog_focusableEls[0];
  var classic_fashion_blog_lastFocusableEl = classic_fashion_blog_focusableEls[classic_fashion_blog_focusableEls.length - 1];
  var KEYCODE_TAB = 9;

  element.keydown( function(e) {
    var isTabPressed = ( e.key === 'Tab' || e.keyCode === KEYCODE_TAB );

    if ( !isTabPressed ) {
      return;
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if ( document.activeElement === classic_fashion_blog_firstFocusableEl ) {
        classic_fashion_blog_lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if ( document.activeElement === classic_fashion_blog_lastFocusableEl ) {
        classic_fashion_blog_firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}

// scroll to top
jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('#button').fadeIn();
    } else {
      jQuery('#button').fadeOut();
    }
  });
  jQuery('#button').click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

// Posts
jQuery(document).ready(function() {
  jQuery('.banner-posts .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav:false,
    dots:false,
    rtl:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 2
      }
    },
    autoplay:true,
  });
});

// products
jQuery(document).ready(function() {
  jQuery('#product-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav:false,
    dots:false,
    rtl:false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    },
    autoplay:true,
  });
});

// Subheading
jQuery( document ).ready(function() {
  jQuery("#banner-cat .bannerbox .banner-smalltitle").each(function() {
    var t = jQuery(this).text();
    var splitT = t.split(" ");
    console.log(splitT);
    var halfIndex = 1;
    var newText = "";
    for(var i = 0; i < splitT.length; i++) {
      if(i == halfIndex) {
        newText += "<span style='color:#F7C59F'>";
        newText += splitT[i] + " ";
        newText += "</span>";
      }else{
        newText += splitT[i] + " ";
      }      
    }    
    jQuery(this).html(newText);
  });
});

// Product Title Color
jQuery(document).ready(function() {
  jQuery("#product-section .product-title").each(function() {
    var t = jQuery(this).text();
    var splitT = t.split(" ");
    console.log(splitT);
    var newText = "";

    for (var i = 0; i < splitT.length; i++) {
      if (i < 2) {
        newText += "<span style='background: rgba(255, 255, 255, 0);'>" + splitT[i] + "</span> ";
      } else if (i === 2) {
        newText += "<span class='product-title1'>" + splitT[i];
      } else {
        newText += " " + splitT[i];
      }
    }

    newText += "</span>";

    jQuery(this).html(newText);
  });
});

// homepage sidebar
jQuery(document).ready(function () {
  function classic_fashion_blog_search_loop_focus(element) {
    var classic_fashion_blog_focus = element.find('select, input, textarea, button, a[href]');
    var classic_fashion_blog_firstFocus = classic_fashion_blog_focus[0];  
    var classic_fashion_blog_lastFocus = classic_fashion_blog_focus[classic_fashion_blog_focus.length - 1];
    var KEYCODE_TAB = 9;

    element.on('keydown', function classic_fashion_blog_search_loop_focus(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

      if (!isTabPressed) { 
        return; 
      }

      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === classic_fashion_blog_firstFocus) {
        classic_fashion_blog_lastFocus.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === classic_fashion_blog_lastFocus) {
          classic_fashion_blog_firstFocus.focus();
          e.preventDefault();
        }
      }
    });
  }

  jQuery('.toggle-btn a').click(function(){
    jQuery(".header-sidebar").addClass('show');
    classic_fashion_blog_search_loop_focus(jQuery('.header-sidebar'));
  });

  jQuery('.header-sidebar .close-pop a').click(function(){
    jQuery(".header-sidebar").removeClass('show');
  });
});