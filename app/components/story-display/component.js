import Ember from 'ember';

export default Ember.Component.extend({
    displayStory: false,

    actions: {
        displayStory: function (action) {
            "use strict";
            console.log("display story clicked", action);
            this.set("displayStory", true);
            return false;
        },
        hideStory: function (action) {
            "use strict";
            console.log("received hidestory action", action);
            this.set("displayStory", false);
            return false;
        }
    }


});
