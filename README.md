# ![logo](http://m.ireadercity.com/webapp/img/logo.png) 书香云集js与客户端交互文档

## 生命周期
>生命周期事件回调是App客户端主动调用，用于告知/通知 js,以便于js可以在适当时候做特殊处理。

##### onInit(初始化)
`window.hostsdk.onInit(version,userId,idfa)`

*参数：*

|参数名|类型|备注|
|---|---|---|
|version|String|App版本|
|userId|String|用户ID、临时用户为deviceId|
|idfa|String||

##### onPause(暂停执行)
`window.hostsdk.onPause()`
##### onResume(恢复执行)
`window.hostsdk.onResume()`
##### onStop(结束执行)
`window.hostsdk.onStop()`

*返回值：*

|取值|备注|
|---|---|
|0|关闭|
|1|阻止关闭|

## 接口方法

####方法一览

|方法名|备注|
|---|---|
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

	## 生命周期
>生命周期事件回调是App客户端主动调用，用于告知/通知 js,以便于js可以在适当时候做特殊处理。

##### onInit(初始化)
`window.hostsdk.onInit(version,userId,idfa)`

参数：

|参数名|类型|备注|
|---|---|---|
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

|取值|备注|
|---|---|
|0|关闭|
|1|阻止关闭|

## 接口方法

####方法一览

|方法名|备注|
|---|---|
|share|分享|
|openBook|打开并阅读一本书|
|openBookList|打开指定的书单|
|searchBook|直接搜索书籍，显示搜索结果|
|showSearch|打开搜索界面|
|downloadBook|下载指定的书籍|
|showBookDetail|显示书籍详情|
|recharge|打开充值界面|
|login|打开登录界面|

### share 分享

>##### js调用
>
	window.hostsdk.share(
		'标题',
		'http://www.baidu.com',
		'描述','http://m.ireadercity.com/webapp/img/logo.png',
		0,
		'qzone,wechat',
		function(){
			alert("分享成功");
		},
		function(platform){
			alert("分享成功！分享的平台为："+platform);
		});

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| title	| String | 要分享的标题 |
| url | String | 要分享的链接地址	|
| description | String | 要分享的文本描述内容 |
| icon | String | 分享的图片 |
| type | int | 分享的类型	：1、文本 2、图片 |
| platforms | String | 可以分享平台多个用逗号分割：qzone,qq,wechat,weibo |
| cancelCallback | Function | 取消分享时的回调 |
| successCallback | Function | 分享成功之后的回调 并携带 platform 参数，表示用户选择的平台 |

### openBook 打开并阅读一本书

>##### js调用
>
	window.hostsdk.openBook('e809304b4c434b9fbe00a75eb2f7e31c');

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |

### openBookList 打开一个书单

>##### js调用
>
	window.hostsdk.openBookList('e809304b4c434b9fbe00a75eb2f7e31c');

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| bookListId | String | 书单的Id |

### searchBook 直接搜索书籍，显示搜索结果

>##### js调用
>
	window.hostsdk.searchBook('总裁');

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| keyword | String | 搜索关键字 |

### showSearch 打开搜索界面

>##### js调用
>
	window.hostsdk.showSearch('总裁');

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| keyword | String | 搜索关键字 |

### downloadBook 下载指定书籍

>##### js调用
>[javascript]
	window.hostsdk.downloadBook('e809304b4c434b9fbe00a75eb2f7e31c',
		function(){
			alert("下载书籍失败");
		},
		function(){
			alert("下载书籍成功");
		});

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |
| cancelCallback | Function | 下载失败的回调 |
| successCallback | Function | 下载成功后的回调 |

### showBookDetail 显示书籍详情

>##### js调用
>
	window.hostsdk.showBookDetail('e809304b4c434b9fbe00a75eb2f7e31c');

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |

### recharge 打开充值界面

>##### js调用

>```javascript
	window.hostsdk.recharge(
		function(){
			alert("取消充值");
		},
		function(money){
			alert("充值成功，充值金额："+money);
		}););
```

> 参数：
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |
| cancelCallback | Function | 取消分享时的回调 |
| successCallback | Function | 分享成功之后的回调 并携带 platform 参数，表示用户选择的平台 |
