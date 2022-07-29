const got = require('got')

class GithubApi {
  
  constructor() {
    this.apiGit = 'https://api.github.com/repos/';
  }
    
  fetchRepositoryData(path, callbackFunction) {
	let url = this.apiGit + path;
	got(url)
	.then((response) => {
		callbackFunction(JSON.parse(response.body));
	});
  }

}

module.exports = GithubApi;