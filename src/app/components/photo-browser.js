'use strict';

export function showPhotoBrowser (pic) {
    var myPhotoBrowserStandalone = myApp.photoBrowser({
        photos: pic
    });
    myPhotoBrowserStandalone.open();
};