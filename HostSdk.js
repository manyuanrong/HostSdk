/**
 * 与客户端交互的SDK
 */
var HostSdk = (function () {
    function HostSdk() {
    }
    // 当宿主APP加载网页完成时调用
    HostSdk.prototype.onInit = function (version, userId, idfa) {
    };
    // 当宿主APP的WebView变得不可操作时调用。例如：在Android中Activity被遮挡或者APP退回到桌面时
    HostSdk.prototype.onPause = function () {
    };
    // 当宿主APP重新回到可以操作状态调用
    HostSdk.prototype.onResume = function () {
    };
    // 当WebView被销毁时调用
    HostSdk.prototype.onStop = function () {
    };
    // 调用客户端分享功能
    HostSdk.prototype.share = function (
        // 分享的标题
        title, 
        // 分享的链接
        url, 
        // 分享的文字描述内容
        description, 
        // 图片URL
        icon, 
        // 分享的类型：1、文字分享 2、图片分享
        type, 
        // 可以选择分享的平台多个平台逗号分割。qzone,wechat,qq,weibo
        platforms, 
        // 取消分享后的回调
        cancelCallback, 
        // 分享成功的回调，回调参数(platform:string)用户分享的平台
        successCallback) {
    };
    // 打开并阅读一本书
    HostSdk.prototype.openBook = function (
        // 书籍Id
        bookId) {
    };
    // 打开一个书单
    HostSdk.prototype.openBookList = function (
        // 书单ID
        bookListId) {
    };
    // 直接搜索书籍，显示搜索结果
    HostSdk.prototype.searchBook = function (
        // 搜索关键字
        keyword) {
    };
    // 下载指定书籍
    HostSdk.prototype.downloadBook = function (
        // 书籍Id
        bookId, 
        // 下载错误的回调（msg:string）
        errorCallback, 
        // 下载成功的回调（msg:string）
        successCallback) {
    };
    // 显示书籍详情
    HostSdk.prototype.showBookDetail = function (
        // 书籍Id
        bookId) {
    };
    // 打开充值界面
    HostSdk.prototype.recharge = function (
        // 取消充值的回调
        cancelCallback, 
        // 充值成功的回调(money:number, coin:number)
        successCallback) {
    };
    // 用户登录
    HostSdk.prototype.login = function (
        // 取消登录的回调
        cancelCallback, 
        // 登录成功的回调(userId:string)
        successCallback) {
    };
    return HostSdk;
})();
//# sourceMappingURL=HostSdk.js.map