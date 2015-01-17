import Ember from 'ember';

export default Ember.ArrayController.extend({

    prop: "hello",

    //TODO: for test/debug, will use a component model for app.
    actions: {
        foobar: function () {
            "use strict";

            var progress = function (model, percent) {
                console.log("processed model:", model, " percent: ", percent);
            };

            var done = function () {
                return;
            };

            this.storyQueueProcessorService.processStories([1, 2], progress, done);
        }
    }
});
