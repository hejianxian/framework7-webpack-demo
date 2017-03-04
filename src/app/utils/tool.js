'use strict';

import dateFormat from 'date-fns/format';

export default {
  bindEvents(events){
    for (let i = 0, l = events.length; i < l; i++) {
      if (!events[i].element) {
        $(events[i].target).on(events[i].event, events[i].handler)
      } else {
        $(events[i].element).on(events[i].event, events[i].target, events[i].handler)
      }
    }
  },
  renderTpl(tpl, data){
    return Template7.compile(tpl)(data);
  },
  publishTime(date){
    return dateFormat(date, polyglot.t('format.date'));
  }
};
