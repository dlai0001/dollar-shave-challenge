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

            _this.hackerNewsService.getStoryDetail(storiesArray[currentItemIndex]).then(function (storyDetails) {

                //console.log("retreived story details", storyDetails);
                progressFunction(storyDetails, (currentItemIndex + 1) / storiesArray.length);

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
