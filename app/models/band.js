import DS from 'ember-data';

export default DS.Model.extend({
	name : "",
	description : "",
	name : DS.attr('string'),
	description : DS.attr(),
	songs : DS.hasMany('song'),
	
	/*slug : Ember.computed('name',function(){
		return this.get('name').dasherize();
	}),*/

	/*setupSongs : Ember.on('init',function(){
		if(!this.get('songs')){
			this.set('songs',[]);
		}
	}),*/

	/*init : function (){
		console.log(this,arguments);
		this._super.apply(this,arguments);
		if(!this.get('songs')){
			this.set('songs',[]);
		}
	}*/
});