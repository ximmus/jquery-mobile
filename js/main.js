// Define a click binding for all anchors in the page
$( "a" ).on( "click", function( event ) {

	// Prevent the usual navigation behavior
	event.preventDefault();

	// Alter the url according to the anchor's href attribute, and
	// store the data-foo attribute information with the url
	$.mobile.navigate( $(this).attr( "href" ), {
		foo: $(this).attr("data-foo")
	});

	// Hypothetical content alteration based on the url. E.g, make
	// an Ajax request for JSON data and render a template into the page.
	// alterContent( $(this).attr("href") );
});

// Navigate to the data-log page on longhold of header bar.
$(function(){
  $( "header" ).bind( "taphold", tapholdHandler );
  function tapholdHandler( event ){
    $.mobile.navigate("#data-log", { transition: "flip"});
    // $.mobile.changePage( "../resources/us.html", { transition: "slideup", changeHash: false });
  }
});