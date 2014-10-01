// Lesson 01 

// **** When document is ready perform this function 
$(document).ready(function() {
	$('div.asideBody').addClass('emphasize');
}
); 

// Lesson 3

$(document).ready(function() {
	$('#selectedArticles > li ').addClass('horizontal');  // saying want tidrect descendants of articles to have class added to them
	// add horizontal to make list horizontal
	$('#selectedArticles li:not(.horizontal)').addClass('subItem'); // find all articles and then put subItem on them // advanced selector // selecting direct descendants 
});


// Lesson 4
$(document).ready(function(){
	$('img').attr('alt','Photos of Kenya.'); // add this to prevent errors can also have title shows up if there is an error 
	$('img').attr('title','Photo by Sarah Soward').addClass('kenyaPhotos'); // shows up when hovering over 
	
	// above is the same as below
	//$('img').attr('alt','Photos of Kenya.').attr('title','Photo by Sarah Soward').addClass('kenyaPhotos'); 
	//
	
	$('div#article-1').removeAttr('id'); // dear browser, find div 1 and remove attribute of id -- will remove all of them 
	
	//$('div').removeClass('aside');  // how to remove asside 
	
	});
	
	
	// Can also take attributes away -- ID #article-1 {}  
	
//$(document).ready(function(){
//$('img').attr('alt', 'photos of Kenya'); });


// Lesson 05
$(document).ready(function() {
	$('<a href="#top">Back to top.</a>').insertAfter('.asideBody p'); 
	// can pre-pend to 
	// linking to anchor 
	$('<a id="top"></a>').prependTo('body'); 
	}); 
	
// Lesson 06

$(document).ready(function(){
	
	$('#textDefault').addClass('selected'); 
	$('#textEnlarge').click(function(){
			$('body').addClass('large'); 
		}); 
		$('#textDefault').click(function(){
			$('body').removeClass('large'); // makes it default again
			}); 
		$('#textController button').click(function(){
			$('#textController button').removeClass('selected'); // change font when clicked 
			$(this).addClass('selected'); 
			}); 
	}); 

// Lesson 07
$(document).ready(function(){
	$('#show').hide(); 
	$('#hide').click(function(){
		$('#textController button').hide();
		$('#hide').hide(10);
		
		$('#show').show(1000); 
		
		}); 
		$('#show').click(function() {
			$('#textController button').show();
			$('#hide').show(10);
			$('#show').hide(1000);
			
			}); 
			
			$('#textController div').hover(function() {
				$(this).addClass('hover'); 
				}, function(){
					$(this).removeClass('hover');
					});  /* tell it what to do when you click and then hover away -- two coma separated functions... In this add a class first and then add a class second, proper hover */
	}); 
	
