import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {
        foobar: function() {
            "use strict";

            this.hackerNewsService.getStories();
        }
    }
});
