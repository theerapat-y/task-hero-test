#!/usr/bin/env node

'use strict';
var Promise = require('Bluebird');
var models = require(__dirname + '/../models');

var reconstruct = function (raw, type) {
    var res = [];

    raw.forEach(function (item) {
        var struct = {
            name: item.name,
            phone: item.phone || '',
            description: item.description || '',
            facebookPage: 'www.facebook.com/' + item.id,
            category: type
        };

        struct.email = (item.emails && item.emails.length > 0) ? item.emails[0] : '';
        if (item.location) {
            struct.address = (item.location.street) ? item.location.street : '';
            struct.city = (item.location.city) ? item.location.city : '';
            struct.latitude = (item.location.latitude) ? item.location.latitude.toString() : '';
            struct.longitude = (item.location.longitude) ? item.location.longitude.toString() : '';
        }

        if (struct.phone.length > 100) {
            struct.phone = struct.phone.substring(0, 100);
            // console.log("phone: " + struct.phone + ", count: " + struct.phone.length + "\n");
        }

        if (struct.email.length > 50) {
            struct.email = struct.email.substring(0, 50);
            // console.log("email: " + struct.email + ", count: " + struct.email.length + "\n");
        }
        res.push(struct);
    });
    return res;
};

var exec = function () {
    var Handyman = models.Handyman;

    // use this to import from facebook
    var folders = require('./handyman-keywords');
    var total = [],
    data = [];

    folders.data.forEach( function (folder) {
        for (var i = 1; i < 27; i++) {
            var page = "./dataset/" + folder + "/page-" + i;
            var raw;
            try {
                raw = require(page);
                if (raw) {
                    total = total.concat(reconstruct(raw, folder));
                    raw = null;
                }
            }
 catch (e) {
                break;
            }
        }
    });

    data.push(Handyman.bulkCreate(total));

    // use this to import from web scrapper
    data.push(Handyman.bulkCreate(require('./handy-data1')));

    return Promise.all(data).then(function () {
        console.log('DONE!');
    });
};

exec();
