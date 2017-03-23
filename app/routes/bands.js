import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

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
			rating: 4
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

		return this.get('store').findAll('band');
	},


	actions : {
		createBand : function (){
			var name = this.get('controller').get('name');
			var band = Band.create({name : name});
			this.modelFor('bands').pushObject(band);
			this.get('controller').set('name','');
			this.transitionTo('bands.band.songs','band');
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
