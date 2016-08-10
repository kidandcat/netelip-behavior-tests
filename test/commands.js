browser.setViewportSize({
    width: 1200,
    height: 700
}, true);

browser.addCommand("login", function(user, pass) {
    browser.setValue('#form_username', user);
    browser.setValue('#form_password', pass);
    browser.click('#form_login');
    browser.error400();
    browser.tutorial_off();
    browser.error400();
});

browser.addCommand("error400", function(user, pass) {
    if (browser.isVisible('h1') && browser.getText('h1') == '400') {
        throw new Error('Error 400');
    } else {
        return false;
    }
});

browser.addCommand("logout", function(user, pass) {
    browser.click('.pull-left');
    browser.click('.glyphicon-off');
    browser.error400();
});

browser.addCommand("panel_administracion", function(user, pass) {
    if (!browser.isVisible('.title-seccion') || browser.getText('.title-seccion') != 'Administración') {
        browser.click('.pull-left');
        browser.click('.btn-xs');
        browser.error400();
    }
});

browser.addCommand("UI_perfil_de_usuarios", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-users"] a');
    browser.error400();
});

browser.addCommand("UI_datos_de_facturacion", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-profile"] a');
    browser.error400();
});

browser.addCommand("UI_mis_contratos", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-agreements"] a');
    browser.error400();
});

browser.addCommand("UI_transacciones", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-payment"] a');
    browser.error400();
});

browser.addCommand("UI_facturas", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-invoices"] a');
    browser.error400();
});

browser.addCommand("UI_saldo", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-credit"] a');
    browser.error400();
});

browser.addCommand("UI_tickets", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-support"] a');
    browser.error400();
});

browser.addCommand("UI_tarifa_de_llamadas", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-rates"] a');
    browser.error400();
});

browser.addCommand("UI_informe_de_llamadas", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-calls"] a');
    browser.error400();
});

browser.addCommand("UI_planes_de_llamadas", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-callplans"] a');
    browser.error400();
});

browser.addCommand("UI_planes_de_servicios", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-servicesplans"] a');
    browser.error400();
});

browser.addCommand("UI_planes_de_soporte", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-supportplans"] a');
    browser.error400();
});

browser.addCommand("UI_renovar_servicios", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-renew"] a');
    browser.error400();
});

browser.addCommand("UI_tienda", function(user, pass) {
    browser.panel_administracion();
    browser.click('li[data-tour="step-store"] a');
    browser.error400();
});

browser.addCommand("tutorial_off", function(user, pass) {
    if (browser.isVisible('.btn-default+ .btn-default')) {
        browser.click('.btn-default+ .btn-default');
    }
});

browser.addCommand("UI_panel_servicios", function(user, pass) {
    browser.click('.pull-left');
    browser.click('.list-group-item');
    browser.error400();
});
