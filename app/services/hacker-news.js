import Ember from 'ember';

export default Ember.Object.extend({

    /**
     * Fetch the top stories from hacker news.
     * @returns {Rx.Promise} - resolves to an int array.
     */
    getStories: function () {
        "use strict";

        var getStoriesUrl = window.DollarShaveChallenge.HACKER_NEWS_API + "/topstories.json?print=pretty";
        console.log("called getStories", getStoriesUrl);

        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.getJSON(getStoriesUrl).then(function (stories) {
                console.log("stories", stories);
                resolve(stories);
            }).fail(function (reason) {
                reject(reason);
            });
        });
    },

    /**
     * Fetch story details from hacker news given story id.
     * @param storyId
     * @returns {Rx.Promise} - resolves to a json object.
     */
    getStoryDetail: function (storyId) {
        "use strict";

        var getStoryUrl = window.DollarShaveChallenge.HACKER_NEWS_API + "/item/" +
            storyId +
            ".json?print=pretty";
        console.log("called getStoryDetail", getStoryUrl);

        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.getJSON(getStoryUrl).then(function (stories) {
                console.log("stories", stories);
                resolve(stories);
            }).fail(function (reason) {
                reject(reason);
            });
        });
    }

});
