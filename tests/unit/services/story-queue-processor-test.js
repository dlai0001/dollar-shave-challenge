import {
    moduleFor,
    test
    } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:story-queue-processor', 'StoryQueueProcessorService', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function () {
    var service = this.subject();
    ok(service);
});

test('it should finish immediately when queue is empty', function () {
    "use strict";
    var service = this.subject({
        hackerNewsService: {
            getStoryDetail: function (id) {
                return new Ember.RSVP.Promise(function (resolve) {
                    resolve({id: 1});
                });
            }
        }
    });

    var progressFunc = function () {
        ok(false);
    };
    var doneFunc = function () {
        ok(true);
    };

    service.processStories([], progressFunc, doneFunc);
});

test('it should process all items in the queue', function () {
    "use strict";
    var service = this.subject({
        hackerNewsService: {
            getStoryDetail: function (id) {
                return new Ember.RSVP.Promise(function (resolve) {
                    resolve({id: 1});
                });
            }
        }
    });

    var progressCount = 0;
    var progressFunc = function (model, percent) {
        progressCount++;
    };
    var doneFunc = function () {

        //console.log("unit test progress count: doneFunc called", progressCount);
        equal(progressCount, 2);
        start();
    };

    stop();
    service.processStories([1, 2], progressFunc, doneFunc);


});