import DS from 'ember-data';

export default DS.Model.extend({
	title : '',
	rating : 0,
	band : null, 

	title : DS.attr('string'),
	rating : DS.attr('number'),
	band : DS.belongsTo('band')
});