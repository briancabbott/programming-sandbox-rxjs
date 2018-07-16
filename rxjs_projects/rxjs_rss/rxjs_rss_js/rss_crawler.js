/**
 * 
 * Crawl a collection of feeds and, when there is an update, emit the new content.
 *    - create a polling observable that polls on the feeds interval setting 
 *    - in the observables on next method, determine if it is new content from
 *      the last poll. If it is, emit to subscribers. 
 */

const {Observable} = require('rxjs');
// const fs = require('fs');
const http = require('http');
const https = require('https');
const net = require('net');
const url = require('url');

var fs = require('fs');
var obj;
var feeds = JSON.parse(fs.readFileSync('rss_feeds.json'));


feeds.rss_feeds.forEach(rss_feed => {
    console.log("feed_name: ", rss_feed.feed_name);
    console.log("feed_uri: ", rss_feed.feed_uri);
    console.log("feed_polling_interval: ", rss_feed.feed_polling_interval);

    const ob = Observable.create(subscriber => {
        let ht = http;
        if (rss_feed.feed_uri.startsWith('https')) {
            ht = https;
        } 
        ht.get(rss_feed.feed_uri, (resp) => {
            let lastModified = '';
            for (var i = 0; i < resp.rawHeaders.length; i++){
                if (resp.rawHeaders[i] === 'Last-Modified') { 
                    lastModified = resp.rawHeaders[i+1];
                }
            }
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                subscriber.next({ data: data, last_modified: lastModified});
                subscriber.complete();
            });
           
          }).on("error", (err) => {
              subscriber.error(err);
                console.log("Error: " + err.message);
          });
    });
    ob.subscribe(
        value => processNextFeed(rss_feed, value), 
        err => console.log("error occured: ", err), 
        () => console.log("complete"));
});

function processNextFeed(feed, value)  {
    console.log(value.last_modified);
    console.log(value.data);
    //console.log(value);


    console.log("feed_name: ", rss_feed.feed_name);
    console.log("feed_uri: ", rss_feed.feed_uri);
    console.log("feed_polling_interval: ", rss_feed.feed_polling_interval);


    var rss_feed_instance = { 
        feed_uri: rss_feed.feed_uri,
        feed_timestamp: new Date(),
        feed_lastModifiedTime: value.last_modified,
        feed_content: value.data
        feed_content_hash: // Compute and MD5 hash
    };

    var rss_feed_store = getRssFeedStore();
    let last_instance = rss_feed_store.getLastInstanceForUri(rss_feed_instance.feed_uri);

}

function getRssFeedStore() {

}
// var feeds;
// function rf(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     feeds = JSON.parse(data);
// }
// fs.readFile("./rss_feeds.json", rf);
// console.log(feeds);
// feeds.rss_feeds.forEach(element => {
//     console.log(element);
// });