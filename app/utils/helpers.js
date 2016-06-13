var axios = require('axios');

var APIKey = "1b329b3adb2e43d2894217574797e976";

var helpers = {
	runQuery: function(term, start, end) {
		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";

		console.log("Query Runin!");

		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1b329b3adb2e43d2894217574797e976', {
			params: {
				q: term,
				begin_date: start,
				end_date: end
			}
		}).then(function (results) {
			return results.data.response;
		});
	},
	getSaved: function() {
		return axios.get('/api/saved').then(function(results) {
			console.log("axios results", results);
			return results;
		});
	},
	postSaved: function (title, date, url) {
		var newArticle = {
			title: title,
			date: date,
			url: url
		};
		return axios.post('/api/saved', newArticle).then(function (results) {
			console.log("axios results", results._id);
			return results._id;
		});
	},
	deleteSaved: function (title, data, url) {
		return axios.delete('/api/saved', {
			params: {
				title: title,
				data: data,
				url: url
			}
		}).then(function (results) {
			return results;
		});
	}
};

module.exports = helpers;