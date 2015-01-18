import Ember from 'ember';

export default Ember.Object.extend({
    // has dependency on - this.hackerNewsService

    /**
     * Processes an array of ints and fetches the stories for each one while emitting progress events.
     * @param storiesArray - int array
     * @param progressFunction - function(model, percent)
     * @param doneFunction - function()
     */
    processStories: function (storiesArray, progressFunction, doneFunction) {
        "use strict";

        if (storiesArray.length === 0) {
            return doneFunction();
        }

        var currentItemIndex = 0;
        var _this = this;

        var processItemFunction = function () {
            storiesArray[currentItemIndex].set("isLoading", true);
            _this.hackerNewsService.getStoryDetail(storiesArray[currentItemIndex].id).then(function (storyDetails) {

                console.log("retreived story details", storyDetails);

                var model = storiesArray[currentItemIndex];
                model.set("isLoading", false);
                model.set("isLoaded", true);

                model.set("url", storyDetails.url);
                model.set("by", storyDetails.by);
                model.set("kids", storyDetails.kids);
                model.set("score", storyDetails.score);
                model.set("text", storyDetails.text);
                model.set("time", storyDetails.time);
                model.set("title", storyDetails.title);

                progressFunction(100 * (currentItemIndex + 1)/storiesArray.length);

            }).finally(function () {

                currentItemIndex++;
                if (currentItemIndex >= storiesArray.length) {
                    return doneFunction();
                } else {
                    Ember.run.later(function () {
                        processItemFunction();
                    });
                }
            });
        };


        Ember.run.later(function () {
            processItemFunction();
        });
    }
});
