import DS from 'ember-data';

export default DS.Model.extend({
    "by": DS.attr("string"),
    "kids": DS.attr("array"),
    "score": DS.attr("number"),
    "time": DS.attr("number"),
    "title": DS.attr("string"),
    "text": DS.attr("string"),
    "url": DS.attr("string"),

    // computed properties,
    formattedDate: function () {
        "use strict";
        return moment(this.get("time")).format("M/D/YYYY h:mm");
    }.property("time"),

    // added state variables
    "isLoaded": false,
    "isLoading": false,
    "isDisplayable": function () {
        "use strict";
        return this.get('isLoaded') || this.get('isLoading');
    }.property("isLoaded", "isLoading")
});
