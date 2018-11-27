function gsfMenu(){
    //caches a jQuery object containing the menu element
    var menu = $(".gsf--scroll");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            menu.removeClass('gsf--visibility__no').addClass("gsf--visibility__yes");
        } else {
            menu.removeClass("gsf--visibility__yes").addClass('gsf--visibility__no');
        }
    });
    $(document).ready(function () {
        if((window.location.href.indexOf("residencia") > -1) || (window.location.href.indexOf("condominio") > -1) || (window.location.href.indexOf("empresa") > -1)){
            $("#main").toggleClass("gsf-menu__active");
        }
    });
    $(document).ready(function () {
        var past = document.referrer;
        if(past.match("residencia")) {
            $("#main").text("RESIDÊNCIA").attr("href", "../residencia/index.html");
        }
        else if(past.match("condominio")) {
            $("#main").text("CONDOMÍNIO").attr("href", "../condominio/index.html");
        }
        else if(past.match("empresa")) {
            $("#main").text("EMPRESA").attr("href", "../empresa/index.html");
        }
        else {
            $("#main").text("INÍCIO").attr("href", "../index.html");
        }
    });
    $(document).ready(function () {
        if(window.location.href.indexOf("residencia") > -1) {
            $("#main").attr("href", "#top").text("RESIDÊNCIA");
        }
        else if(window.location.href.indexOf("condominio") > -1) {
            $("#main").attr("href", "#top").text("CONDOMÍNIO");
        }
        else if(window.location.href.indexOf("empresa") > -1) {
            $("#main").attr("href", "#top").text("EMPRESA");
        }
        else if(window.location.href.indexOf("quemsomos") > -1) {
            $("#quemsomos").toggleClass("gsf-menu__active");
        }
        else if(window.location.href.indexOf("orcamento") > -1) {
            $("#orcamento").toggleClass("gsf-menu__active");
        }
        else if(window.location.href.indexOf("loja") > -1) {
            $("#loja").toggleClass("gsf-menu__active");
        }
    });
};