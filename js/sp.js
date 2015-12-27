/*                                     JQUERY ON DOC READY
__________________________________________________________
*/

$(document).ready(function(){



    /* ---SMOOTH SCROLL----------------------------- */
    
    $('div#navbar a').smoothScroll({
        afterScroll: function() {
            /* location.hash = this.hash; */
        }
    });
    
    



    /* ---NAV BAR ANIMATION------------------------- */

       var w = $(window).width();
       
       var nav_about = (w/2)-355;
       var nav_work = (w/2) - 250;
       var nav_projects = (w/2) - 146;
       var nav_contact = (w/2)-44;
       
       var lastclicked = 355;
    
    $('div#navbar').css({backgroundPosition: nav_about +'px 0'});
    
    
    
    /* ---FOOTER HEIGHT FIX------------------------- */
    
    var h = $(window).height();
    $("div#contact").css("min-height", h - 0 +'px');



    /* ---NAV BAR ANIMATION------------------------- */
    function mvRedArrow(index)
	{
		switch(index)
		{
			case 1:
				$('div#navbar').stop().animate({backgroundPosition: nav_about +'px 0'}, {duration:300});
				lastclicked = 355;
				break;
			case 2:
				 $('div#navbar').stop().animate({backgroundPosition: nav_work +'px 0'}, {duration:300});
				lastclicked = 250;
				break;
			case 3:
				$('div#navbar').stop().animate({backgroundPosition: nav_projects +'px 0'}, {duration:300});
               lastclicked = 146;
			   break;
			case 4:
				$('div#navbar').stop().animate({backgroundPosition: nav_contact +'px 0'}, {duration:300});
				lastclicked = 44;
				break;
		}
	}
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

	$('#nav_about').click(function(){mvRedArrow(1);});
	$('#nav_work').click(function(){mvRedArrow(2);});
	$('#nav_projects').click(function(){mvRedArrow(3);});
	$('#nav_contact').click(function(){mvRedArrow(4);});

    /* ---BROWSER RESIZE - NAVBAR FIX--------------- */
    
    $(window).resize(function() {
        var w = $(window).width();
        
           var nav_about = (w/2)-355;
           var nav_work = (w/2)-250;
           var nav_projects = (w/2)-146;
           var nav_contact = (w/2)-44;
        
        $('div#navbar').css({backgroundPosition: (w/2)-lastclicked +'px 0'});
        
        
        $('#nav_about').click(function(){mvRedArrow(1);});
		$('#nav_work').click(function(){mvRedArrow(2);});
		$('#nav_projects').click(function(){mvRedArrow(3);});
		$('#nav_contact').click(function(){mvRedArrow(4);});
        
        // Footer height fix after resize
        var h = $(window).height();
        $("div#contact").css("min-height", h - 100 +'px');
        
    });
    
        
    /* ---IE FIXES---------------------------------- */
    
    if ($.browser.msie && $.browser.version.substr(0,1)<=7) {
        $("a#switch").css("margin-top", "-35px");
        $("div#extras").css("background-position", "0 150px");
    }
    
    else {
        $("a#switch").css("margin-top", "6px");
        $("div#extras").css("background-position", "0 192px");
    }
    

});
