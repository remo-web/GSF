function gsfMDC(){
    
    // TOP APP BAR
    var topAppBars = document.querySelectorAll('.mdc-top-app-bar')
    for (var i = 0, topAppBar; topAppBar = topAppBars[i]; i++) {
        mdc.topAppBar.MDCTopAppBar.attachTo(topAppBar);
    }
    
    // DRAWER
    let drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer--modal'));
    document.querySelector('.gsf-drawer-open').addEventListener('click', () => drawer.open = true);

// RUNNING INSIDE INCLUDE.JS

    //TEXT FIELDS
    var textFields = document.querySelectorAll('.mdc-text-field')
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
    }  
};