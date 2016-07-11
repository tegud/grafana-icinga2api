import TableModel from 'app/core/table_model';
import moment from 'moment';

export class Icinga2apiDatasource {
    constructor(instanceSettings, $q, backendSrv, templateSrv, $sce, $rootScope) {
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
    testDatasource() {
        return this.backendSrv.datasourceRequest({
            url: this.url + '/v1/status',
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return { status: "success", message: "Data source is working", title: "Success" };
            }
        });
    }
}
