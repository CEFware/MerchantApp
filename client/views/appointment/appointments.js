/**
 * Created by piyushthapa on 3/4/15.
 */
Template.appointment.helpers({
    newAppointments:function(){
        return db.appointment.find({isNew:true,to:Meteor.userId()});
    },
    toLocalDate:function(){
        return new Date(this.date).toLocaleDateString();
    },
    upcomingAppointment:function(){
        return db.appointment.find({isNew:false,accepted:true,to:Meteor.userId()});
    }

});
Template.appointment.events({
   'click .accept':function(e,t){
       e.preventDefault();
       Meteor.call('acceptAppointment',this._id,function(err,res){
           if(!err){

           }
       });
   }
});
Template.displayAppointment.helpers({
    startClock:function(){


    }
});
Template.displayAppointment.rendered=function(){
    var dom=$('#'+this.data._id);
    var dte=(new Date(this.data.date).toLocaleDateString() +' '+ new Date(this.data.date).toLocaleTimeString())
    dom.flipcountdown({
        size: 'md',
          beforeDateTime: dte

    });

}

