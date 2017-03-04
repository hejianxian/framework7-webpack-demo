'use strict';

import 'framework7';
import 'framework7/dist/css/framework7.material.css';
import 'framework7/dist/css/framework7.material.colors.css';
import '../assets/app.less';

import mainModule from './main/main';
import Router from './router';

import Utils from './utils/tool';
import navTPl from './nav.html';
import { initI18n } from './utils/i18n';
import Constant from './utils/constant';

var app = {
  init() {
    // Init App
    window.$ = Dom7;
    window.myApp = new Framework7({
      // Enable Material theme
      material: true,
      pushState: true
    });
    myApp.addView('.view-main', {
      domCache: true
    });

    var lng = localStorage.getItem(Constant.LNG) || 'zh-CN';
    window.polyglot = initI18n(lng);
    $('#app-name').html(polyglot.t('appName'));

    app.renderNavList();
    mainModule.init();
    Router.init();
  },
  renderNavList() {
    let nav_tpl = Utils.renderTpl(navTPl, {});
    $('.panel-nav-list').html(nav_tpl);
  },
  // 如果需要调用cordova 需要在deviceReady后 调用 mainModule.init()
  deviceReady() {
    document.addEventListener('deviceready', function() {
      // 绑定返回事件
      document.addEventListener("backbutton", function(){
        app.cordovaBackEvent();
      }, false);
    }, false);
  },
  cordovaBackEvent() {
    // 物理返回事件
  }
};
app.init();
