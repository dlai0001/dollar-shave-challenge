import {
    moduleFor,
    test
    } from 'ember-qunit';

if (!window.DollarShaveChallenge) {
    window.DollarShaveChallenge = {};
}
window.DollarShaveChallenge.HACKER_NEWS_API = "https://hacker-news.firebaseio.com/v0";

moduleFor('service:hacker-news', 'HackerNewsService', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function () {
    var service = this.subject();
    ok(service);
});

test('it fetches array of ids of top stories', function () {
    "use strict";

    var service = this.subject();
    stop();

    service.getStories().then(function (results) {
        //alert("hi");
        ok(results);
        ok(results.length > 1);
        start();
    }).catch(function(reason){
        ok(false, "failed: " + reason);
        start();
    });

});

test('it shold fetch story details', function () {
    var service = this.subject();
    stop();

    service.getStoryDetail(1).then(function(result){
        "use strict";

        equal(result.title, "Y Combinator");

        start();
    }).catch(function(reason){
        "use strict";

        ok(false, "failed: " + reason);
        start();
    });

});