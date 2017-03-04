'use strict';

export default {
    alert(text, callback){
        myApp.modal({
            title: polyglot.t('message.title'),
            text,
            buttons: [{
                text: polyglot.t('message.sure'),
                onClick(){
                    callback && callback();
                }
            }]
        });
    },
    confrim(text, callback){
        myApp.modal({
            title: polyglot.t('message.title'),
            text,
            buttons: [{
                text: polyglot.t('message.cancel')
            },{
                text: polyglot.t('message.sure'),
                onClick(){
                    callback && callback();
                }
            }]
        });
    }
};
