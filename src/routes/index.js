'use strict';
let express = require('express');
let router = express.Router();
let FB = require('fb');
let fs = require('fs');

FB.setAccessToken('CAACEdEose0cBAJZC6HvKVdcce794X52ZCnzzgl62C3M19ZCsqmbFu3gzRZBZAqLDZBnh5xqIK7DQZCw7J1u4b5MkYyy5N5wF3GTZAEH4ZC7obNR2ULg2dfFA6vgZAdJ5f93rMmYxQgdEiP4vjtOiRRRI15702gZAVZCiT9CUlYf4G609ARtSoPIV3zwvLRMfgmDjSS2IbPDLkIzGewZDZD');

FB.api('search', {
    q: 'ช่างประปา', type: 'page', limit: 500
}, function (res) {
    if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    // console.log(res.data[1].id);

    res.data.forEach( function(place, id) {
        FB.api( place.id, {
            fields: 'location,description,phone,emails,about,general_info'
        }, function(res) {
            if (!res || res.error) {
                console.log(!res ? ' 2 error occurred' : res.error);
                return;
            }

            res.data[id].description = res;
            if(res.location && res.location.city && res.location.city === 'Bangkok') {
                console.log(res);
            }
        });

        console.log('hi 2');
    });
    console.log('hi 1');
});

console.log('hi 0');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
