document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('content').style.visibility="hidden";
  } else if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('content').style.visibility="visible";
         document.getElementById('load').style.visibility="hidden";
  }
}