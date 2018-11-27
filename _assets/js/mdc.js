function gsfMDC(){
    
    // TOP APP BAR
    var topAppBars = document.querySelectorAll('.mdc-top-app-bar')
    for (var i = 0, topAppBar; topAppBar = topAppBars[i]; i++) {
        mdc.topAppBar.MDCTopAppBar.attachTo(topAppBar);
    }

// RUNNING INSIDE INCLUDE.JS

    //TEXT FIELDS
    var textFields = document.querySelectorAll('.mdc-text-field')
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
    }

    // DIALOGS
    var dialogs = document.querySelectorAll('.mdc-dialog')
    for (var i = 0, dialog; dialog = dialogs[i]; i++) {
        mdc.dialog.MDCDialog.attachTo(dialog);
    }

    var dialogAnalise = new mdc.dialog.MDCDialog(document.querySelector('#gsf-dialog-analise'));
    document.querySelector('#gsf-mais-analise').addEventListener('click', function (evt) {
        dialogAnalise.lastFocusedTarget = evt.target;
        dialogAnalise.open();
    })

    var dialogOperacao = new mdc.dialog.MDCDialog(document.querySelector('#gsf-dialog-operacao'));
    document.querySelector('#gsf-mais-operacao').addEventListener('click', function (evt) {
        dialogOperacao.lastFocusedTarget = evt.target;
        dialogOperacao.open();
    })

    var dialogManutencao = new mdc.dialog.MDCDialog(document.querySelector('#gsf-dialog-manutencao'));
    document.querySelector('#gsf-mais-manutencao').addEventListener('click', function (evt) {
        dialogManutencao.lastFocusedTarget = evt.target;
        dialogManutencao.open();
    })

    var dialogContato = new mdc.dialog.MDCDialog(document.querySelector('#gsf-dialog-contato'));
    document.querySelector('#saveForm').addEventListener('click', function (evt) {
        dialogContato.lastFocusedTarget = evt.target;
        dialogContato.open();
    })
    
    // DRAWER
    let drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer--modal'));
    document.querySelector('.gsf-drawer__icon').addEventListener('click', () => drawer.open = true);
    var drawerClose = document.querySelectorAll('.gsf-drawer--item');
    for (var i = 0, dC; dC = drawerClose[i]; i++) {
        dC.addEventListener('click', () => drawer.open = false);
    }
    
    const listEl = document.querySelector('.mdc-drawer .mdc-list');
    const mainContentEl = document.querySelector('.main-content');

    listEl.addEventListener('click', (event) => {
      drawer.open = false;
    });

    document.body.addEventListener('MDCDrawer:closed', () => {
      mainContentEl.querySelector('input, button').focus();
    });
    mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer--modal'));

};