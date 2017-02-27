'use strict';

import detailModule from './detail/detail';
import settingModule from './setting/setting';

export default {
  init(){
    var that = this;
    $(document).on('pageBeforeInit', (e) => {
      that.pageBeforeInit(e.detail.page);
    });
  },
  pageBeforeInit(page){
    switch (page.name) {
      case 'detail':
        detailModule.init(page);
        break;
      case 'setting':
        settingModule.init(page);
        break;
      default:
        break;
    }
  }
};
