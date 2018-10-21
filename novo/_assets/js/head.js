function gsfHead() {
    if ( document.location.href.indexOf('residencia') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-residencia.css");
        $("#gsf-title").html("GSF | Residências");
    }
    else if ( document.location.href.indexOf('condominio') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-condominio.css");
        $("#gsf-title").html("GSF | Condomínios");
    }
    else if ( document.location.href.indexOf('empresa') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-empresa.css");
        $("#gsf-title").html("GSF | Empresas");
    }
    else if ( document.location.href.indexOf('quemsomos') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-quemsomos.css");
        $("#gsf-title").html("GSF | Quem Somos");
    }
    else if ( document.location.href.indexOf('orcamento') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-orcamento.css");
        $("#gsf-title").html("GSF | Orçamento");
    }
    else if ( document.location.href.indexOf('Loja') > -1 ) {
        $("#gsf-css").attr("href", "../_assets/css/gsf-loja.css");
        $("#gsf-title").html("GSF | Loja");
    }
};