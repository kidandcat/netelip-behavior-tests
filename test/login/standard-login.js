require('../commands');

var USER = 'jairocaro';
var PASS = 'descargarte';

describe('Login-Logout', function() {
    it('Login', function() {
        browser.url('https://cloud.netelip.com');
        browser.login(USER, PASS);
    });

    it('Logout', function() {
        browser.logout();
    });
});
