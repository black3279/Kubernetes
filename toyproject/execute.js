var Crawler = require("crawler");
var HTMLParser = require('node-html-parser');

const parsing = function(res) {
    const parsed = HTMLParser.parse(res.body)
    const text = parsed.querySelectorAll('.post-link > h3');
    text.forEach(child => { console.log(child.childNodes[0]._rawText);});
};

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            parsing(res);
        }
        done();
    }
});

const executeCrawler = function (){
    // Queue just one URL, with default callback
    const res = c.queue('https://black3279.github.io');
};

module.exports = executeCrawler;