/**
 * Created by piyushthapa on 3/4/15.
 */
Template.newService.events({
   'submit form':function(e,t){
       e.preventDefault();
       var service={
            title: t.find('#title').value,
           price: t.find('#price').value,
           desc: t.find('#desc').value
       }
       Meteor.call('insertServices',service,function(err){
          if(!err)
            Router.go('/');

       });
   }
});