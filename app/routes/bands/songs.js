import Ember from 'ember';

export default Ember.Route.extend({
	model : function (){
		//return parent bands.band Model
		return this.modelFor('bands.band');
	}
});