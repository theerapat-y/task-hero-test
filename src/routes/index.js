'use strict';
let express = require('express');
let router = express.Router();
let FB = require('fb');
// let fs = require('fs');

// // temporary token
// FB.setAccessToken('CAACEdEose0cBAFQRQ8yuYn5e2QTNMyG0KLn8xQNfZBszMD4Bm2lotZBMMNmW4rkg5y7FnJZAj3WC9BuDIrcNVlUhkRBQZBApEReK6PAoCnCAZCyKV40XghM4LATwztOTFfGe05mT3qeX4ciaJjDE84VQ6bUsuMZA2rip9AflZAycjxDbBZAXFQdGGJupVcX4LTnQGZBS7yBXWLsxPshLf0ympdSgVZAZCCGr1IZD');
//
// FB.api('search', {
//     q: 'ช่างประปา', type: 'page', limit: 50
// }, function (res) {
//     if (!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }
//     // console.log(res.data[1].id);
//     var handys = res;
//     handys.data.forEach( function(place, id) {
//         FB.api( place.id, {
//             fields: 'location,description,phone,emails,about,general_info'
//         }, function(result) {
//             if (!result || result.error) {
//                 console.log(!result ? ' 2 error occurred' : result.error);
//                 return;
//             }
//
//             handys.data[id].description = result;
//             // if(res.location && res.location.city && res.location.city === 'Bangkok') {
//             //     console.log(res);
//             // }
//         });
//     });
//
// });

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
