import Ember from 'ember';
import wait from '../utils/wait';

/*//Band extend from Ember Object
var Band = Ember.Object.extend({
	name: "",

	//slug Computed method for match slugs
	slug : Ember.computed('name',function () {
		console.log('Recomputing slug');
		return this.get('name').dasherize();
	}),
})

//Song extend from Ember Object
var Song = Ember.Object.extend({
	title : "",
	band : "",
	rating : 0,
});*/
/*	function wait(promise,delay){
		return new Ember.RSVP.Promise(function(resolve){
			setTimeout(function(){
				promise.then(function(result){
					resolve(result);
				})
			},delay);
		})
	}*/

export default Ember.Route.extend({
	model:function(){

		//creating Song and Band objects
/*		var blackDog = Song.create({
			title: 'Black Dog',
			band: 'Led Zeppelin',
			rating: 3
		});

		var yellowLedbetter = Song.create({
			title: 'Yellow Ledbetter',
			band: 'Pearl Jam',
			rating 4
		});

		var pretender = Song.create({
			title: 'The Pretender',
			band: 'Foo Fighters',
			rating: 2
		});

		var daughter = Song.create({
			title: 'Daughter',
			band: 'Pearl Jam',
			rating: 5
		});

		var ledZeppelin = Band.create({ 
			name: 'Led Zeppelin', 
			songs:[blackDog] 
		});

		var pearlJam = Band.create({ 
			name: 'Pearl Jam', 
			description: 'Pearl Jam is an American rock band, formed in Seattle, Washington in 1990.', 
			songs : [yellowLedbetter, daughter] 
		});

		var fooFighters = Band.create({ 
			name: 'Foo Fighters', 
			songs:[pretender] 
		});
*/
		//pearlJam.get('songs').pushObject(daughter);
		/*console.log(pearlJam.get('songs.firstObject.title'));
		console.log(ledZeppelin.get('songs.firstObject.title'));*/
		/*return [ledZeppelin, pearlJam, fooFighters];*/
		var bands =this.get('store').findAll('band')
		return wait(bands, 3 * 1000);
	},


	actions : {
		createBand : function (){
			var route = this,
				controller = this.get('controller');
			var band = this.store.createRecord('band',controller.getProperties('name'));
			band.save().then(function(){
				controller.set('name','');
				route.transitionTo('bands.band.songs',band);
			})
		},
		didTransition: function() {
			document.title = 'Bands - Rock & Roll';
		},

	},

	afterModel : function (model) {
		var bands = model;
		if(bands.length === 1){
			this.transitionTo('bands.band',bands.get('firstObject'));
		}
	}
});
