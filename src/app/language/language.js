'use strict';

import './language.less';
import languageTpl from './language.tpl.html';
import Utils from '../utils/tool';

export default {
  init(page){
    var _tpl = Utils.renderTpl(languageTpl, {});
    $('.language-page').append(_tpl);
  },
  bindEvent(){
    var events = [

    ];
    Tool.bindEvents(events);
  }
};
