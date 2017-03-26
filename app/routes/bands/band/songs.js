import Ember from 'ember';
import wait from '../../../utils/wait';

export default Ember.Route.extend({
	model : function (){
		//return parent bands.band Model
		var band = this.modelFor('bands.band');
		//show if promise rejected
		//return Ember.RSVP.reject(this.modelFor('bands.band'));

		return wait(band, 500);
		//return this.modelFor('bands.band');
	},

	actions: {
		createSong: function() {
			var controller = this.get('controller');
			var band = this.modelFor('bands.band');

			var song = this.store.createRecord('song',{
				title : controller.get('title'),
				band : band,

			});
			song.save().then(function(){
				controller.set('title', '');
			});
		},

		/*didTransition:function(){
			var band = this.modelFor('bands.band');
			console.log(band);
			document.title = `${band.get('name')} songs - Rock & Roll `;
		}*/
	},

	resetController: function(controller) {
		controller.set('songCreationStarted', false);
	},

});