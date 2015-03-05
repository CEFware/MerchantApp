/**
 * Created by piyushthapa on 3/4/15.
 */
Template.listServices.helpers({
    services:function(){
        return db.services.find({postedBy:Meteor.userId()});
    }
});