import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams : {
		sortBy : 'sort',
		searchTerm : 's',
	},
	
	sortBy : "ratingDesc",
	sortProperties : Ember.computed('sortBy',function(){
		var options = {
			'ratingDesc': 'rating:desc,title:asc',
			'ratingAsc': 'rating:asc,title:asc',
			'titleDesc': 'title:desc',
			'titleAsc': 'title:asc',
		}
		return options[this.get('sortBy')].split(',');
	}),

	searchTerm: '',

	matchingSongs: Ember.computed('model.songs.@each.title','searchTerm', function() {
		var searchTerm = this.get('searchTerm').toLowerCase();

		return this.get('model.songs').filter(function(song) {
			return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
		});
	}),

	sortedSongs: Ember.computed.sort('matchingSongs', 'sortProperties'),

	actions: {
		updateRating : function (params){
			var song = params.item,
				rating = params.rating;

			if(song.get('rating')===rating){
				rating = 0 ;
			}
			song.set('rating',rating);
			return song.save();
		},
		enableSongCreation : function (){
			this.set('songCreationStarted',true);
		},
		setSorting: function(option) {
			this.set('sortBy', option);
		},

	},

	noSongs: Ember.computed('model.songs.length', function() {
		return this.get('model.songs.length') === 0;
	}),

	isAddButtonDisabled : Ember.computed('title',function(){
		return Ember.isEmpty(this.get('title'));
	}),

	canCreateSong : Ember.computed('songCreationStarted','model.songs.length',function(){
		return this.get('songCreationStarted') || this.get('model.songs.length');
	}),
});
