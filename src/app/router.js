'use strict';

import detailModule from './detail/detail';
import languageModule from './language/language';
import Utils from './utils/tool';

export default {
  init(){
    var that = this;
    $(document).on('pageBeforeInit', (e) => {
      e.srcElement.innerHTML = Utils.renderTpl(e.srcElement.innerHTML, {});
      that.pageBeforeInit(e.detail.page);
    });
  },
  pageBeforeInit(page){
    switch (page.name) {
      case 'detail':
        detailModule.init(page);
        break;
      case 'language':
        languageModule.init(page);
        break;
      default:
        break;
    }
  }
};
