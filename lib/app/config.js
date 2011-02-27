var Config = (function() {
    var that = this,
        _path = "",
        _data = {};

    function getData(key) {
        return _data[key];
    };

    that.getData = getData;

    function loadFromFile(path) {
        var file = air.File.applicationDirectory.resolvePath(path);
        if (file.exists) {
            var stream = new air.FileStream();
            stream.open(file, air.FileMode.READ);
            _data = JSON.parse(
                stream.readMultiByte(stream.bytesAvailable, air.File.systemCharset)
            );
            return true;
        }
        return false;
    };

    that.loadFromFile = loadFromFile;
    
    return that;
})();
