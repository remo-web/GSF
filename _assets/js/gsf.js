function gsf() {
    
    // Processos | Quadrados
    var cw = $('.gsf--square').width();
    $('.gsf--square').css({'height':cw+'px'});
    
    // Scroll
    $('#top-scroll').click(function() {
        $('html').animate({
            scrollTop: $('#top').offset().top
        }, 1000);
    });
    $('#processos-scroll').click(function() {
        $('html').animate({
            scrollTop: $('#nossos-processos').offset().top
        }, 1000);
    });
    $('#cobranca-scroll').click(function() {
        $('html').animate({
            scrollTop: $('#metodo-de-cobranca').offset().top
        }, 1000);
    });
    $('#agende-scroll').click(function() {
        $('html').animate({
            scrollTop: $('#agende-uma-visita').offset().top
        }, 1000);
    });
    
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
    
};