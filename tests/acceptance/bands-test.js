import { test } from 'qunit';
import moduleForAcceptance from 'lesson-application/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

//moduleForAcceptance('Acceptance | bands');
moduleForAcceptance('Acceptance | bands',{
	afterEach(){
		server.shutdown();
	}
});

var server;

test('List bands', function(assert) {
	server = new Pretender(function(){
		this.get('/bands',function(){
			var response = {
				data : [
					{
						id : 1,
						type : 'bands',
						attributes : {
							name : "Radiohead"
						}
					},
					{
						id : 2,
						type : 'bands',
						attributes : {
							name : "Long Distance Calling"
						}
					},
				]
			};

			return [200 ,{'Content-Type' : 'application/vnd.api+json'}, JSON.stringify(response)];
		});

		this.get('/bands/1/songs',function(){
			var response = {
				data : []
			};
			return [200,{'Content-Type' : 'application/vnd.api+json'},JSON.stringify(response)];
		});

		this.post('/songs',function(){
			var response = {
				data : {
					id : 1,
					type : 'songs',
					attributes : {
						name : "Killer Cars"
					}
				},
			};
			return [200,{'Content-Type' : 'application/vnd.api+json'},JSON.stringify(response)];
		});

		this.get('/bands/1/songs', () => {
			return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: [] })];
		});

	});

	selectBand('Radiohead');
	click('a:contains("create one")');
	fillIn('.new-song', 'Killer Cars');
	submit('.new-song-form');


	andThen(function() {
		assertElement(assert, '.songs .song:contains("Killer Cars")', 'Creates the song and displays it in the list');
	});
});
