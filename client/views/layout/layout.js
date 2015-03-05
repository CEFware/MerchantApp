/**
 * Created by piyushthapa on 3/4/15.
 */
Template.layout.events({
   'click .logout':function(e,t){
       e.preventDefault();
       Meteor.logout(function(err,res){
          if(!err)
            Router.go('/');
       });
   }
});
Template.layout.helpers({
   appointmentCount:function(){
       return db.appointment.find({isNew:true,to:Meteor.userId()}).count();
   }
});