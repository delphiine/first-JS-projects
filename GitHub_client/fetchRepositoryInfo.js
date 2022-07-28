const got = require('got');

const fetchRepositoryInfo = (path, callbackFunction) => {
    let url = 'https://api.github.com/repos/' + path;
      got(url)
        .then((response) => {
            callbackFunction(JSON.parse(response.body));
        });
}

module.exports = fetchRepositoryInfo;