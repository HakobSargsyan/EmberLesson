import Ember from 'ember';

export default Ember.Route.extend({
	model : function (params){
		//get parent route model,return parent Model slug
		//with computed method
		var bands  = this.modelFor('bands');
		return bands.findBy('slug',params.slug);
	}
});
