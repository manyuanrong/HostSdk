/**
 * Summary: js脚本所能执行的函数空间
 * Version 1.0
 * Date: 2016-05-09
 * Time: 下午4:40
 * Author:  满远荣
 * Copyright: Copyright (c) 2016
 */

package com.maplesoft.enok.test;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Build;
import android.telephony.TelephonyManager;
import android.webkit.WebView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import cn.pedant.SafeWebViewBridge.JsCallback;
import cn.pedant.SafeWebViewBridge.sample.util.TaskExecutor;

//HostSdkScope中需要被JS调用的函数，必须定义成public static，且必须包含WebView这个参数
public class HostSdkScope {
    
    /**
     * 分享
     * @param webView 浏览器
     * @param title 分享的标题
     * @param url 分享的链接
     * @param description 分享的文本描述信息
     * @param icon 分享的图片
     * @param type 分享的类型 1、文本分享 2、图片分享
     * @param platforms 分享的平台，多个平台用逗号分割 qzone,qq,wechat,weibo
     * @param cancelCallback 取消分享的回调
     * @param successCallback 分享成功的回调(String platform)
     * */
    public static void share (WebView webView, String title, String url, String description, String icon, int type, String platforms, JsCallback cancelCallback, JsCallback successCallback) {
        // 取消
        cancelCallback.apply();
        
        // 分享成功
        successCallback.apply("qzone");
    }
   
}