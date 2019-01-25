$(function() {
    $( ".gsf-home" ).hover(function() {
        $(this).children( ".gsf-home--bg" ).toggleClass( "gsf-home--bg__mouseover" );
        $(this).children( ".gsf-home--text" ).toggleClass( "gsf-home--text__mouseover" );
    });
    
    const snackbar = document.querySelector('.mdc-snackbar');
    
    setTimeout(
        function() {
            $('.mdc-snackbar__surface').css("opacity", "1");
            $('.mdc-snackbar__surface').css("transform", "scale(1)");
        }, 3000);
});