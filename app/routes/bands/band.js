import Ember from 'ember';

export default Ember.Route.extend({
	model : function (params){
		//get parent route model,return parent Model slug
		//with computed method
		//console.log("Model hook called for `bands.band` called with",params.slug);
		//var bands  = this.modelFor('bands');
		//return bands.findBy('slug',params.slug);
		return this.store.findRecord('band',params.id);
	},
});
