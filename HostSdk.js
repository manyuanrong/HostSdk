/**
 * 与客户端交互的SDK
 */
(function () {
    // 判断平台的工具方法
    var _ua = navigator.userAgent;
    var client_tool = {
        // 是否是Android
        isAndroid: _ua.toLowerCase().indexOf("android") > -1 || _ua.toLowerCase().indexOf("linux") > -1,
        // 是否是iPad
        isIpad: _ua.indexOf("iPad") > -1,
        // 是否是iPhone
        isIphone: _ua.indexOf("iPhone") > -1,
        // 是否在苹果设备
        isApple: false
    };
    client_tool.isApple = (client_tool.isIphone === true || client_tool.isIpad === true);

    // 苹果客户端jbridge
    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
    setupWebViewJavascriptBridge(function (bridge) {
        window.ios_hostsdk = bridge;
    });

    // 客户端回调
    window.host_sdk = {
        // 生命周期方法，初始化
        onInit: function () {
            if (hostsdk && hostsdk.onInit) hostsdk.onInit();
        },
        // 生命周期方法，暂停执行
        onPause: function () {
            if (hostsdk && hostsdk.onPause) hostsdk.onPause();
        },
        // 生命周期方法，恢复执行
        onResume: function () {
            if (hostsdk && hostsdk.onResume) hostsdk.onResume();
        },
        // 生命周期方法，结束执行
        onStop: function () {
            if (hostsdk && hostsdk.onStop) hostsdk.onStop();
        },

        // 发生错误的回调
        errorCallback: function (errorMsg) { },
        // 取消操作后的回调
        cancelCallback: function () { },
        // 操作成功后回调
        successCallback: function (platform) { }
    };

    // 封装SDK
    window.hostsdk = {
        share: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (options.cancelCallback) window.host_sdk.cancelCallback = options.cancelCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("share", { "title": options.title, "desc": options.description, "url": options.url, "icon": options.icon, "platforms": options.platforms });
            } else {
                android_hostsdk.share(options.title, options.description, options.url, options.icon, options.platforms);
            }
        },
        login: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (options.cancelCallback) window.host_sdk.cancelCallback = options.cancelCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("login");
            } else {
                android_hostsdk.login();
            }
        },
        recharge: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (options.cancelCallback) window.host_sdk.cancelCallback = options.cancelCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("recharge");
            } else {
                android_hostsdk.recharge();
            }
        },
        downloadBook: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("downloadBook", options.bookId);
            } else {
                android_hostsdk.downloadBook(options.bookId);
            }
        },
        getVip: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.cancelCallback) window.host_sdk.cancelCallback = options.cancelCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("getVip");
            } else {
                android_hostsdk.getVip();
            }
        },
        openUserCategory: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.cancelCallback) window.host_sdk.cancelCallback = options.cancelCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("openUserCategory");
            } else {
                android_hostsdk.openUserCategory();
            }
        },
        getInfo: function (options) {
            if (options.successCallback) window.host_sdk.successCallback = options.successCallback;
            if (options.errorCallback) window.host_sdk.errorCallback = options.errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("getInfo");
            } else {
                android_hostsdk.getInfo();
            }
        },
        openBook: function (bookId, errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("openBook", bookId);
            } else {
                android_hostsdk.openBook(bookId);
            }
        },
        showBookDetail: function (bookId, errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("showBookDetail", bookId);
            } else {
                android_hostsdk.showBookDetail(bookId);
            }
        },
        openBookList: function (bookListId, errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("openBookList", bookListId);
            } else {
                android_hostsdk.openBookList(bookListId);
            }
        },
        searchBook: function (keyword, errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("searchBook", keyword);
            } else {
                android_hostsdk.searchBook(keyword);
            }
        },
        exit: function (errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("exit");
            } else {
                android_hostsdk.exit();
            }
        },
        setCloseable: function (closable, errorCallback) {
            if (errorCallback) window.host_sdk.errorCallback = errorCallback;
            if (client_tool.isApple) {
                ios_hostsdk.callHandler("setCloseable", closable);
            } else {
                android_hostsdk.setCloseable(closable);
            }
        }
    };
})();