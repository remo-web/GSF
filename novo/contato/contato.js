$("#gsf_contato").submit(function(event){
    var nome = document.forms["gsf-contato"]["gsf-contato-nome"].value;
    var contato_nome = document.getElementById("gsf-contato-nome");
    var email = document.forms["gsf-contato"]["gsf-contato-email"].value;
    var contato_email = document.getElementById("gsf-contato-email");
    var telefone = document.forms["gsf-contato"]["gsf-contato-telefone"].value;
    var contato_tel = document.getElementById("gsf-contato-telefone");
    var ramal = document.forms["gsf-contato"]["gsf-contato-ramal"].value;
    var contato_ram = document.getElementById("gsf-contato-ramal");
    var assunto = document.forms["gsf-contato"]["gsf-contato-assunto"].value;
    var contato_ass = document.getElementById("gsf-contato-assunto");
    var mensagem = document.forms["gsf-contato"]["gsf-contato-mensagem"].value;
    var contato_msg = document.getElementById("gsf-contato-mensagem");
    var att = document.createAttribute("required");
    if (nome == "") {
        contato_nome.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (email == "") {
        contato_email.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (mensagem == "") {
        contato_msg.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    } 
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        contatoError();
    } else {
        // everything looks good!
        event.preventDefault();
        submitContato();
    }
});

function submitContato(){
    // Initiate Variables With Form Content
    var nome = $("#gsf-contato-nome").val();
    var email = $("#gsf-contato-email").val();
    var telefone = $("#gsf-contato-telefone").val();
    var ramal = $("#gsf-contato-ramal").val();
    var assunto = $("#gsf-contato-assunto").val();
    var mensagem = $("#gsf-contato-mensagem").val();
 
    $.ajax({
        type: "POST",
        url: "contato/contato.php",
        data: "gsf-contato-nome=" + nome + "&gsf-contato-email=" + email + "&gsf-contato-telefone=" + telefone + "&gsf-contato-ramal=" + ramal + "&gsf-contato-assunto=" + assunto + "&gsf-contato-mensagem=" + mensagem,
        success : function(text){
            if (text == "success"){
                contatoSuccess();
            } else {
                contatoError();
            }
        }
    });
}

function contatoSuccess(){
    $( "#gsf-contato-enviado" ).removeClass( "gsf-hide" );
    $( '#gsf-contato-nome, #gsf-contato-email, #gsf-contato-telefone, #gsf-contato-ramal, #gsf-contato-assunto, #gsf-contato-mensagem' ).val('');
}

function contatoError(){
    $( "#gsf-contato-erro" ).removeClass( "gsf-hide" );
}

