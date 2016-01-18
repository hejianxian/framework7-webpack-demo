'use strict';

import './detail.less';

import Xhr from '../utils/xhr';
import detailTpl from './detail.tpl.html';
import Tool from '../utils/tool';
import Modal from '../components/modal';
import {showActionSheet} from '../components/action-sheet';
import {showPhotoBrowser} from '../components/photo-browser';
import Loading from '../components/loading';

export default {
    init(page){
        var _ID = page.query.id;
        this.getTopicDetail(_ID);
        this.bindEvent();
    },
    getTopicDetail(id){
        Loading.show();
        var params = {
            id: id,
            success: (res) => {
                console.log(res);
                Loading.hide();
                res.data.create_at = Tool.publishTime(res.data.create_at);
                var detailTPl = Tool.renderTpl(detailTpl, res.data);
                $('.detail-page').append($(detailTPl));
            },
            error: (err) => {
                console.log(err);
            }
        };
        Xhr.getDetailById(params);
    },
    showActionSheet(){
        var btns = [{
                text:'回复',
                onClick(){
                    Modal.alert('你点击了回复');
                }
            }];
        showActionSheet(btns);
    },
    showPhotoBrowser(){
        var _img = $(this); //注意这个this
        showPhotoBrowser(new Array(1).fill(_img.attr('src')));
        
    },
    bindEvent(){
        var events = [
            {
                element: '.detail-page',
                target: 'li.comment-list',
                event: 'click',
                handler: this.showActionSheet
            },{
                element: '.detail-page',
                target: '.markdown-text img',
                event: 'click',
                handler: this.showPhotoBrowser
            }
        ];
        Tool.bindEvents(events);
    }
};