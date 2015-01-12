import DS from 'ember-data';

export default DS.Model.extend({
    "by": DS.attr("string"),
    "kids": DS.hasMany('story', {async: false}),
    "score": DS.attr("number"),
    "time": DS.attr("number"),
    "title": DS.attr("string"),
    "url": DS.attr("string"),

    // computed properties,

    // added state variables
    "isLoading": null
});
