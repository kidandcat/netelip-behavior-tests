require('../../commands');

describe('Administracion de los servicios', function() {
    it('Login', function() {
        browser.url(URL);
        browser.login(USER, PASS);
    });

    it('SMS', function() {
        browser.acceso_servicios_sms();
    });

    it('WebPhone', function() {
        browser.acceso_servicios_webphone();
    });

    it('fax', function() {
        browser.acceso_servicios_fax();
    });

    it('conference', function() {
        browser.acceso_servicios_conference();
    });

    it('vdrive', function() {
        browser.acceso_servicios_vdrive();
    });

    it('vdesktop', function() {
        browser.acceso_servicios_vdesktop();
    });

    it('verp', function() {
        browser.acceso_servicios_vERP();
    });
});
