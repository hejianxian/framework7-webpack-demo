'use strict';

export function showActionSheet (buttons) {
    var normalBtn = [
        {
            text: polyglot.t('message.choose'),
            label: true
        }
    ];
    var cancelBtn = [
        {
            text: polyglot.t('message.cancel'),
            color: 'red'
        }
    ];
    Array.prototype.push.apply(normalBtn, buttons);
    var groups = [normalBtn, cancelBtn];
    myApp.actions(groups);
};
