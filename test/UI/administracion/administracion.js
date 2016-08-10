require('../../commands');

describe('Administracion de los servicios', function() {
    it('Login', function() {
        browser.url(URL);
        browser.login(USER, PASS);
    });

    it('Administracion', function() {
        browser.panel_administracion();
    });

    it('Perfil de usuarios', function() {
        browser.UI_perfil_de_usuarios();
    });

    it('Datos de facturacion', function() {
        browser.UI_datos_de_facturacion();
    });

    it('Mis contratos', function() {
        browser.UI_mis_contratos();
    });

    it('transacciones', function() {
        browser.UI_transacciones();
    });

    it('Facturas', function() {
        browser.UI_facturas();
    });

    it('Saldo', function() {
        browser.UI_saldo();
    });

    it('Tickets', function() {
        browser.UI_tickets();
    });

    it('Tarifa de llamadas', function() {
        browser.UI_tarifa_de_llamadas();
    });

    it('Informe de llamadas', function() {
        browser.UI_informe_de_llamadas();
    });

    it('Planes de llamadas', function() {
        browser.UI_planes_de_llamadas();
    });

    it('Planes de servicios', function() {
        browser.UI_planes_de_servicios();
    });

    it('Planes de soporte', function() {
        browser.UI_planes_de_soporte();
    });

    it('Renovar servicios', function() {
        browser.UI_renovar_servicios();
    });

    it('Ayuda', function() {
        browser.UI_ayuda();
    });

    it('Tienda', function() {
        browser.UI_tienda();
    });
});
