AirJenkins = function() {
    var _endpoint = Config.getData("endpoint");
    var _user = Config.getData("user");
    var _pass = Config.getData("pass");

    this.getJobs = function(cb) {
        var request = new air.URLRequest(_endpoint+"/api/json");
        var details = btoa(_user+":"+_pass);
        request.requestHeaders.push(
            new air.URLRequestHeader("Authorization", "Basic "+details)
        );
        var loader = new air.URLLoader();
        loader.addEventListener(air.Event.COMPLETE, function(e) {
            var _data = JSON.parse(e.target.data);
            cb(_data.jobs);
        });
        loader.load(request);
    };
};
