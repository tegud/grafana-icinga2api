'use strict';

System.register(['app/core/table_model', 'moment'], function (_export, _context) {
    "use strict";

    var TableModel, moment, _createClass, Icinga2apiDatasource;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_appCoreTable_model) {
            TableModel = _appCoreTable_model.default;
        }, function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Icinga2apiDatasource', Icinga2apiDatasource = function () {
                function Icinga2apiDatasource(instanceSettings, $q, backendSrv, templateSrv, $sce, $rootScope) {
                    _classCallCheck(this, Icinga2apiDatasource);

                    this.annotateUrl = instanceSettings.jsonData.annotateUrl;
                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.name = instanceSettings.name;
                    this.showHelper = instanceSettings.jsonData.enableQueryHelper;
                    this.q = $q;
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.sce = $sce;
                    this.$rootScope = $rootScope;
                }

                // Required
                // Used for testing datasource in datasource configuration pange


                _createClass(Icinga2apiDatasource, [{
                    key: 'testDatasource',
                    value: function testDatasource() {
                        return this.backendSrv.datasourceRequest({
                            url: this.url + '/v1/status',
                            method: 'GET'
                        }).then(function (response) {
                            if (response.status === 200) {
                                return { status: "success", message: "Data source is working", title: "Success" };
                            }
                            return { status: "success", message: "Non 200", title: "Success" };
                        });
                    }
                }]);

                return Icinga2apiDatasource;
            }());

            _export('Icinga2apiDatasource', Icinga2apiDatasource);
        }
    };
});
//# sourceMappingURL=datasource.js.map
