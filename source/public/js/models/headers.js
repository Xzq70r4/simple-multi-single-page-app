var app = app || {};

app.headers = (function () {
    function Headers(applicationId, restAPIKey) {
        this.appId = applicationId;
        this.restAPIKey = restAPIKey;
    }

    Headers.prototype.getHeaders = function (useSessionToken) {
        var headers = {
            'X-Parse-Application-Id': this.appId,
            'X-Parse-REST-API-Key': this.restAPIKey
        };

        return headers;
    };

    return {
        load : function (applicationId, restAPIKey) {
            return new Headers(applicationId, restAPIKey);
        }
    };
}());