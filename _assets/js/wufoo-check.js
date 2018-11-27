$("#saveForm").click(function() {
    var sent = document.getElementById("gsf-contato-sent");//get the button
    var not = document.getElementById("gsf-contato-not");//get the button
    var src = document.getElementById("dummyframe").contentWindow.location.href // get the src
    
    var url = "/enpage/";
    
    if(src.indexOf(url) !=-1){ //this will return -1 if false
        not.removeClass("gsf--none");//show the button
    } else {
        sent.removeClass("gsf--none");//hide the button
    }
});