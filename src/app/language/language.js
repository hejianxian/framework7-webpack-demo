'use strict';

import './language.less';
import languageTpl from './language.tpl.html';
import Tool from '../utils/tool';
import Constant from '../utils/constant';

export default {
  init(page){
    let _tpl = Tool.renderTpl(languageTpl, {});
    $('.language-page').append(_tpl);
    this.initSlectedStatus();
    this.bindEvent();
  },
  initSlectedStatus() {
    const locale = localStorage.getItem(Constant.LNG) || 'zh-CN';
    const raidoElms = $('.language-page input[type="radio"]');
    for (let i = 0; i < raidoElms.length; i += 1) {
      const raido = $(raidoElms[i]);
      if (raido.attr('value') === locale) {
        raido.prop('checked', true);
        break;
      }
    }
  },
  savaLocale() {
    const raidoElms = $('.language-page input[type="radio"]');
    const locale = localStorage.getItem(Constant.LNG) || 'zh-CN';
    for (let i = 0; i < raidoElms.length; i += 1) {
      const raido = $(raidoElms[i]);
      if (raido.prop('checked') && raido.attr('value') !== locale) {
        localStorage.setItem(Constant.LNG, raido.attr('value'));
        window.location.reload();
        break;
      }
    }
  },
  bindEvent(){
    const events = [{
      element: 'body',
      target: '.save-locale',
      event: 'click',
      handler: this.savaLocale
    }];
    Tool.bindEvents(events);
  }
};
