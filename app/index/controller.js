import Ember from 'ember';

export default Ember.ArrayController.extend({
    filteredContent: function(){

        return this.get("arrangedContent").filter(function(item) {
            "use strict";

            if(item.get("isLoading")) {
                return true;
            }

            if(item.get("isLoaded")) {
                return true;
            }

            return false;
        });
    }.property('arrangedContent.@each.isLoading','arrangedContent.@each.isLoaded')
});
