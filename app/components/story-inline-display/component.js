import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        hideStory: function() {
            this.get("parentView").send('hideStory');
            return false;
        },

        openStory: function() {
            "use strict";
            window.open(this.get("url"), '_blank');
        }
    }
});
