const GithubApi = require('./GithubApi')
const Github = require('./Github')

describe('Github client', () => {
    it('should return a JS object with the repo information', () => {
        const api = new GithubApi();
        const github = new Github(api);
        github.fetch('sinatra/sinatra');
        expect(github.getRepoData()).toContain({
        "id": 106995,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMDY5OTU=",
        "name": "sinatra",
        "full_name": "sinatra/sinatra",
        "private": false,
        });
    });
});