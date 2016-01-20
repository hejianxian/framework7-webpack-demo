'use strict';

import 'framework7';
import 'framework7.material.css';
import 'framework7.material.color.css';
import '../assets/app.less';

import mainModule from './main/main';
import Router from './router';

var app = {
    init(){
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            // Enable Material theme
            material: true,
        });
        myApp.addView('.view-main', {
            domCache: true
        });
        
        mainModule.init();
        Router.init();
    }
};
app.init();
