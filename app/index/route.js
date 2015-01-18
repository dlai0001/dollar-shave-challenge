import Ember from 'ember';

export default Ember.Route.extend({

    model: function () {
        "use strict";
        var storiesArray = Ember.A([]);

        // Get the list of top stories.
        this.hackerNewsService.getStories().then(function (storyIds) {
            console.log("Fetching ids of top stories");

            //Convert Id's into a array of partially loaded models.
            storyIds.forEach(function (storyId) {
                var storyModel = this.store.push('story', {
                    id: storyId,
                    isLoaded: false
                });
                console.log("created Model", storyModel);
                storiesArray.pushObject(storyModel);
            }.bind(this));

            return storiesArray;

        }.bind(this)).then(function (storiesArray) {
            console.log("Queing up fetching stories.");

            var progressHandler = function (storyData, model, percent) {
                console.log("Progress handler", storyData, model, percent);

                this.set("percentLoaded", percent);

                model.set("url", storyData.url);
                model.set("by", storyData.by);
                model.set("kids", storyData.kids);
                model.set("score", storyData.score);
                model.set("text", storyData.text);
                model.set("time", storyData.time);
                model.set("title", storyData.title);
                model.set("isLoaded", true);

            }.bind(this);

            var doneHandler = function () {
                console.log("done processing queue handler");
            };

            this.storyQueueProcessorService.processStories(storiesArray, progressHandler, doneHandler);

        }.bind(this));

        return storiesArray;
    }
});
