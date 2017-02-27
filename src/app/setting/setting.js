'use strict';

import './setting.less';
import settingTpl from './setting.tpl.html';

export default {
  init(page){
    var _ID = page.query.id;
    $('.setting-page').append($(settingTpl));
  },
  bindEvent(){
    var events = [

    ];
    Tool.bindEvents(events);
  }
};
