USER = 'jairocaro';
PASS = 'descargarte';
URL = 'https://cloud.netelip.com';

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
        browser.tutorial_off();
    }
});

browser.addCommand("panel_servicios", function(user, pass) {
    if (!browser.isVisible('.userName text-left')) {
        browser.click('.pull-left');
        browser.click('.list-group-item');
        browser.error400();
        browser.tutorial_off();
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

browser.addCommand("acceso_servicios_sms", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=Envío de SMS');
    browser.error400();
    browser.pause(800);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.click('a.cancelar');
        browser.pause(800);
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_webphone", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=WebPhone');
    browser.error400();
    browser.pause(1000);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.switchTab(browser.getTabIds()[1]);
        browser.pause(1000);
        if (!browser.isVisible('#txtRegStatus') || browser.getText('#txtRegStatus') != 'Teléfono web') {
            throw new Error('WebPhone not found');
        }
        browser.close();
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_fax", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=vFax');
    browser.error400();
    browser.pause(800);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.click('a.cancelar');
        browser.pause(800);
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_conference", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=vConference');
    browser.error400();
    browser.pause(1000);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.switchTab(browser.getTabIds()[1]);
        browser.pause(1000);
        if (!browser.isVisible('#div_bienve')) {
            throw new Error('vConference not found');
        }
        browser.close();
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_vdrive", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=vDrive');
    browser.error400();
    browser.pause(1000);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.switchTab(browser.getTabIds()[1]);
        browser.pause(1000);
        if (browser.getTitle() != 'Archivos - vDrive') {
            throw new Error('vDrive not found');
        }
        browser.close();
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_vdesktop", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=vDesktop');
    browser.error400();
    browser.pause(1000);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.switchTab(browser.getTabIds()[1]);
        browser.pause(1000);
        if (browser.getTitle() != 'vDesktop') {
            throw new Error('vDesktop not found');
        }
        browser.close();
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("acceso_servicios_vERP", function(user, pass) {
    browser.panel_servicios();
    browser.click('h4*=vERP');
    browser.error400();
    browser.pause(1000);
    if (!browser.isVisible('.jumbotron h1') || browser.getText('.jumbotron h1') != 'No tienes acceso a este servicio') {
        browser.switchTab(browser.getTabIds()[1]);
        browser.pause(1000);
        if (browser.getTitle() != 'Archivos - vDrive') {
            throw new Error('vERP not found');
        }
        browser.close();
    } else {
        browser.click('.jumbotron a');
        browser.pause(700);
    }
});

browser.addCommand("UI_ayuda", function(user, pass) {
    browser.panel_administracion();
    browser.click('li:nth-child(17) a');
    browser.error400();
    browser.pause(1000);
    browser.switchTab(browser.getTabIds()[1]);
    if (!browser.isVisible('.breadcrumb li a') || browser.getText('.breadcrumb li a') != 'Centro de ayuda netelip') {
        throw new Error('Ayuda not found');
    }
    browser.close();
});

browser.addCommand("tutorial_off", function(user, pass) {
    browser.pause(600);
    if (browser.isVisible('.btn-default+ .btn-default')) {
        browser.click('.btn-default+ .btn-default');
    }
});

browser.addCommand("UI_panel_servicios", function(user, pass) {
    browser.click('.pull-left');
    browser.click('.list-group-item');
    browser.error400();
});
