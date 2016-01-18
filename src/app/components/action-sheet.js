'use strict';

export function showActionSheet (buttons) {
    var normalBtn = [
        {
            text: '请选择',
            label: true
        }
    ];
    var cancelBtn = [
        {
            text: '取消',
            color: 'red'
        }
    ];
    Array.prototype.push.apply(normalBtn, buttons);
    var groups = [normalBtn, cancelBtn];
    myApp.actions(groups);
};