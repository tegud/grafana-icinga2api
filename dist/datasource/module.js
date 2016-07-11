'use strict';

System.register(['./datasource'], function (_export, _context) {
    "use strict";

    var Icinga2apiDatasource, Icinga2apiConfigCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_datasource) {
            Icinga2apiDatasource = _datasource.Icinga2apiDatasource;
        }],
        execute: function () {
            _export('ConfigCtrl', Icinga2apiConfigCtrl = function Icinga2apiConfigCtrl() {
                _classCallCheck(this, Icinga2apiConfigCtrl);
            });

            Icinga2apiConfigCtrl.templateUrl = 'datasource/partials/config.html';
            //
            // class Icinga2apiQueryOptionsCtrl { }
            // Icinga2apiQueryOptionsCtrl.templateUrl = 'datasource/partials/query.options.html';

            _export('Datasource', Icinga2apiDatasource);

            _export('ConfigCtrl', Icinga2apiConfigCtrl);
        }
    };
});
//# sourceMappingURL=module.js.map
