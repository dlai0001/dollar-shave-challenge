import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        hideStory: function() {
            this.get("parentView").send('hideStory');
            return false;
        }
    }
});
