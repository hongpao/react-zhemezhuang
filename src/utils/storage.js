/**
 * sessionStorage 存取
 * created by hongpao 2020.2.21
 */

var SessionState = (function (win) {

    function _isString(v) {
        return typeof (v) === "string";
    }

    function _isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }

    function _isJson(v) {
        return typeof (v) === "object" && Object.prototype.toString.call(v) === "[object Object]" && !v.length;
    }

    function _extend(obj, props) {
        for (var key in props) {
            obj[key] = props[key];
        }

        return obj;
    }

    function _serialize(v) {
        return JSON.stringify(v);
    }

    function _deserialize(v) {
        return v && JSON.parse(v);
    }

    function _getStorageInstance(storage) {
        var type = typeof storage
        if (type === 'string' && window[storage] instanceof Storage) {
            return window[storage]
        }

        return storage
    }

    // 缓存API
    var StorageCacheAPIHandler = {
        set: function (key, val) {
            try {
                if (!_isEmpty(key) && !_isEmpty(val)) {
                    this.storage.setItem(key, _serialize(val));
                }
            } catch(e) {
                return false;
            }
            return true;
        },

        get: function (key) {
            if (!_isString(key)) {
                key = String(key)
            }
            var res = this.storage.getItem(key)

            return res === undefined ? null : _deserialize(res);
        },

        delete: function (key) {
            if (!_isString(key)) {
                key = String(key)
            }

            try {
                this.storage.removeItem(key);
            } catch (e) {
                return false;
            }

            return true;
        },

        clear: function () {
            this.storage.clear();
        }
    }

    function SessionState() {
        var storage = _getStorageInstance('sessionStorage');
        this.storage = storage;
    }

    SessionState.prototype = StorageCacheAPIHandler;

    // 如果已经声明过了 则不新建 防止 重复初始化
    if (win.SessionState) {
        return win.SessionState;
    } else {
        return win.SessionState = new SessionState(); // 控制台调用
    }

})(window)

export default SessionState