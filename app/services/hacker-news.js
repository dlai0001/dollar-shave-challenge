import Ember from 'ember';

export default Ember.Object.extend({

//    /**
//     * Fetch the top stories from hacker news.
//     * @returns {Rx.Promise} - resolves to an int array.
//     */
//    getStories: function () {
//        "use strict";
//
//        var getStoriesUrl = window.DollarShaveChallenge.HACKER_NEWS_API + "/topstories.json?print=pretty";
//        console.log("called getStories", getStoriesUrl);
//
//        return new Ember.RSVP.Promise(function (resolve, reject) {
//            Ember.$.getJSON(getStoriesUrl).then(function (stories) {
//                console.log("stories", stories);
//                resolve(stories);
//            }).fail(function (reason) {
//                reject(reason);
//            });
//        });
//    },
//
//    /**
//     * Fetch story details from hacker news given story id.
//     * @param storyId
//     * @returns {Rx.Promise} - resolves to a json object.
//     */
//    getStoryDetail: function (storyId) {
//        "use strict";
//
//        var getStoryUrl = window.DollarShaveChallenge.HACKER_NEWS_API + "/item/" +
//            storyId +
//            ".json?print=pretty";
//        console.log("called getStoryDetail", getStoryUrl);
//
//        return new Ember.RSVP.Promise(function (resolve, reject) {
//            Ember.$.getJSON(getStoryUrl).then(function (stories) {
//                console.log("stories", stories);
//                resolve(stories);
//            }).fail(function (reason) {
//                reject(reason);
//            });
//        });
//    }

    //debug: for dev testing
    getStories: function () {
        "use strict";


        return new Ember.RSVP.Promise(function (resolve) {
            resolve([1, 2, 3]);
        });
    },
    //debug: for dev testing.
    getStoryDetail: function () {
        "use strict";
        return new Ember.RSVP.Promise(function (resolve) {
            setTimeout(function() {
                resolve({
                    "by": "dhouston",
                    "id": 8863,
                    "kids": [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
                    "score": 111,
                    "time": 1175714200,
                    "title": "My YC app: Dropbox - Throw away your USB drive",
                    "type": "story",
                    "url": "http://www.getdropbox.com/u/2/screencast.html"
                });
            }, 1);
        });
    }


});
