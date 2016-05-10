/**
 * 与客户端交互的SDK
 */
class HostSdk {

    // HostSdk生命周期事件回调
    public event = {
        // 当宿主APP加载网页完成时调用
        onInit: function () {

        },
        // 当宿主APP的WebView变得不可操作时调用。例如：在Android中Activity被遮挡或者APP退回到桌面时
        onPause: function () {

        },
        // 当宿主APP重新回到可以操作状态调用
        onResume: function () {

        },
        // 当WebView被销毁时调用
        onStop: function () {

        }
    }

    // 调用客户端分享功能
    public share(
        // 分享的标题
        title: string,
        // 分享的链接
        url: string,
        // 分享的文字描述内容
        description: string,
        // 图片URL
        icon: string,
        // 分享的类型：1、文字分享 2、图片分享
        type: number,
        // 可以选择分享的平台多个平台逗号分割。qzone,wechat,qq,weibo
        platforms: string,
        // 取消分享后的回调
        cancelCallback: Function,
        // 分享成功的回调，回调参数(platform:string)用户分享的平台
        successCallback: Function) {

    }

    // 打开并阅读一本书
    public openBook(
        // 书籍Id
        bookId: string) {

    }

    // 打开一个书单
    public openBookList(
        // 书单ID
        bookListId: string) {

    }

    // 直接搜索书籍，显示搜索结果
    public searchBook(
        // 搜索关键字
        keyword: string) {

    }
    
    // 打开搜索界面
    public showSearch(
        // 搜索关键字
        keyword:string){
        
    }
    
    // 下载指定书籍
    public downloadBook(
        // 书籍Id
        bookId:string,
        // 下载错误的回调（msg:string）
        errorCallback:Function,
        // 下载成功的回调（msg:string）
        successCallback:Function){
        
    }
    
    // 显示书籍详情
    public showBookDetail(
        // 书籍Id
        bookId:string){
        
    }
    
    // 打开充值界面
    public recharge(
        // 取消充值的回调
        cancelCallback:Function,
        // 充值成功的回调(money:number, coin:number)
        successCallback:Function){
        
    }
    
    // 用户登录
    public login(
        // 取消登录的回调
        cancelCallback:Function,
        // 登录成功的回调(userId:string)
        successCallback:Function){
        
    }

}