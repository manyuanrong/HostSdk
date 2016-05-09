## 生命周期
>生命周期事件回调是App客户端主动调用，用于告知/通知 js,以便于js可以在适当时候做特殊处理。

##### onInit(初始化)
`window.hostsdk.onInit(version,userId,idfa)`

参数：
|参数名|类型|备注|
|-|-|-|
|version|String|App版本|
|userId|String|用户ID、临时用户为deviceId|
|idfa|String||

##### onPause(暂停执行)
`window.hostsdk.onPause()`
##### onResume(恢复执行)
`window.hostsdk.onResume()`
##### onStop(结束执行)
`window.hostsdk.onStop()`

返回值：

| 取值  | 备注     |
| :---- | :----    |
| 0     | 关闭     |
| 1     | 阻止关闭 |

## 接口方法

####方法一览
|方法名|备注|
|-|-|
|share|分享|
|openBook|打开并阅读一本书|
|openBookList|打开指定的书单|
|searchBook|直接搜索书籍，显示搜索结果|
|showSearch|打开搜索界面|
|downloadBook|下载指定的书籍|
|showBookDetail|显示书籍详情|
|recharge|打开充值界面|
|login|打开登录界面|

##### 分享

    
