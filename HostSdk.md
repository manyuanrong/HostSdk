# ![logo](http://m.ireadercity.com/webapp/img/logo.png) 书香云集js与客户端交互接口文档

## 说明
本文档针对JavaScript如何与客户端交互做了详细说明
注：适用于网页前端开发人员

## 接口一览
|方法名|备注|
|---|---|
|share|分享|
|getInfo|获取环境信息（userId，deviceId，idfa，version，channel...）|
|openBook|打开并阅读一本书|
|openBookList|打开指定的书单|
|searchBook|直接搜索书籍，显示搜索结果|
|downloadBook|下载指定的书籍|
|showBookDetail|显示书籍详情|
|recharge|打开充值界面|
|getVip|开通VIP|
|login|打开登录界面|
|exit|关闭当前页面|
|setCloseable|设置是否可以关闭窗口（可以让js决定何时关闭窗口）|
|openUserCategory|打开用户个人书坊配置|

### share 分享
> 分享形式根据参数判断。比如，icon为空的情况下，分享文字内容。有description和icon的情况下，就是图文内容。
```javascript
window.hostsdk.share(options);
```

>##### 参数
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| title | String | 分享的标题 |
| url | String |分享的链接 **(可选)** |
| description | String | 分享描述 |
| icon | String | 分享的图片 **(可选)** |
| platforms | String | 要分享的平台，多个用逗号分割:qzone,qq,wechat,wechatcircle,weibo |
| cancelCallback | Function | 取消分享的回调 **(可选)** |
| successCallback | Function | 分享成功后的回调 **(可选)** |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.share(
	{
		title: "标题",
		description: "描述",
		url: "http://m.ireadercity.com",
		icon: "http://m.ireadercity.com/webapp/img/logo.png",
		platforms: "qzone,wechat",
		cancelCallback: function(){
			alert("用户取消了分享");
		},
		successCallback: function(platform){
			alert("分享成功！分享的平台为：" + platform);
		},
		errorCallback:function(msg){
			alert(msg);
		}
	}
);
```

### getInfo 获取环境信息
> 获取环境信息（userId，deviceId，idfa，version，channel...）
```javascript
window.hostsdk.getInfo(options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| successCallback | Function | 获取成功的回调（包含一个json字符串数据，描述了userId，deviceId等信息） **(可选)** |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.getInfo(
	{
		successCallback: function(info){
			alert("json类型的数据" + info);
		},
		errorCallback:function(msg){
			alert(msg);
		}
	}
);
```

### getVip 开通VIP
> 开通VIP
```javascript
window.hostsdk.getVip(options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| successCallback | Function | 开通成功的回调 **(可选)** |
| cancelCallback | Function | 取消开通的回调 **(可选)** |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.getVip(
	{
		successCallback: function(){
			alert("开通VIP成功");
		},
		errorCallback:function(msg){
			alert(msg);
		},
		cancelCallback:function(){
			alert("取消开通");
		}
	}
);
```

### openBook 打开并阅读一本书
```javascript
window.hostsdk.openBook (bookId,errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.openBook (
	"6b8bca1c2df24d9d844a9e0ac999cb07",
	function(msg){
		alert(msg);
	}
);
```

### openBookList 打开一个书单
```javascript
window.hostsdk.openBookList (bookListId, errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| bookListId | String | 书单的Id |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.openBookList (
	"d8d6aa3baadf4c5789735119b026e69f",
	function(msg){
		alert(msg);
	}
);
```

### searchBook 搜索书籍，显示搜索结果
```javascript
window.hostsdk.searchBook (keyword, errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| keyword | String | 搜索关键字 |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.searchBook (
	"总裁",
	function(msg){
		alert(msg);
	}
);
```

### downloadBook 下载指定书籍(可以多本)
```javascript
window.hostsdk.downloadBook (options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |
| successCallback | Function | 下载成功后的回调（携带bookId） **(可选)** |
| errorCallback | Function | 下载失败的回调（携带bookId） **(可选)** |

>##### js调用
```javascript
window.hostsdk.downloadBook (
	{
		bookId: "e809304b4c434b9fbe00a75eb2f7e31c,e809304b4c434b9fbe00a75eb2f7e31c",
		successCallback:function(bookId){
			alert("下载书籍成功" + bookId);
		},
		errorCallback:function(bookId){
			alert("下载书籍失败" + bookId);
		}
	}
);
```

### showBookDetail 显示书籍详情
```javascript
window.hostsdk.showBookDetail (bookId, errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| bookId | String | 书籍的Id |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.showBookDetail (
	"e809304b4c434b9fbe00a75eb2f7e31c",
	function(msg){
		alert(msg);
	}
);
```

### recharge 打开充值界面
> 用户调用充值过程中，我们可能会用到
```javascript
window.hostsdk.recharge (options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| cancelCallback | Function | 取消充值回调（如果用户充值过程中创建了订单，但是取消了支付，可以携带orderId参数。如果没有创建订单，则传递""） **(可选)** |
| successCallback | Function | 充值成功之后的回调 并携带 orderId 参数，表示用户充值的订单号 **(可选)** |

>##### js调用
```javascript
window.hostsdk.recharge (
	{
		cancelCallback:function(orderId){
			if(orderId!=""){
            alert("用户取消充值：取消的订单为：" + orderId);
	        } else {
	            alert("用户放弃充值");
	        }    
		},
		successCallback:function(orderId){
			alert("充值成功，充值订单号：" + orderId);
		}
	}
);
```

### login 打开登录界面
```javascript
window.hostsdk.login (options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| cancelCallback | Function | 取消登录时的回调 **(可选)** |
| successCallback | Function | 登录成功之后的回调 并携带 userId 参数，表示用户的id **(可选)** |

>##### js调用
```javascript
window.hostsdk.login (
	{
		cancelCallback:function(){
			alert("取消登录");  
		},
		successCallback:function(userId){
			alert("登录成功，用户ID：" + userId);
		}
	}
);
```

### exit 关闭当前页面
```javascript
window.hostsdk.exit(errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.exit (
	function(msg){
		alert(msg);
	}
);
```

### setCloseable 设置是否可以关闭窗口
```javascript
window.hostsdk.setCloseable(closable,errorCallback);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| closable | Boolean | 是否可以关闭窗口 |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用（允许关闭）
```javascript
window.hostsdk.setCloseable (
	true,
	function(msg){
		alert(msg);
	}
);
```
>##### js调用（不允许关闭）
```javascript
window.hostsdk.setCloseable (
	false,
	function(msg){
		alert(msg);
	}
);
```

### openUserCategory 打开用户个人书坊配置
> 打开用户个人书坊配置
```javascript
window.hostsdk.openUserCategory(options);
```

>##### 参数
> 
|参数名|类型|备注|
|---	|---|---|
| options | Object | 选项 |

>##### options 参数选项
|参数名|类型|备注|
|---	|---|---|
| successCallback | Function | 修改成功的回调 **(可选)** |
| cancelCallback | Function | 取消修改的回调 **(可选)** |
| errorCallback | Function | 发生错误后的回调 **(可选)** |

>##### js调用
```javascript
window.hostsdk.openUserCategory(
	{
		successCallback: function(){
			alert("修改成功");
		},
		errorCallback:function(msg){
			alert(msg);
		},
		cancelCallback:function(){
			alert("取消修改");
		}
	}
);
```
