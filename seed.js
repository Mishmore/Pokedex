const levelup   = require('levelup');
const leveldown = require('leveldown');
const data      = require('./movies');

leveldown.destroy('./data', function (err) { console.log('BD Destruida') });

const db  = levelup('./data', {valueEncoding: 'json'});
