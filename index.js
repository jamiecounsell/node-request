const request = require('request');

request.get("http://api.icndb.com/jokes/random", {
    'exclude': ['explicit']
}, (error, response, body) => {
    if (error) {
        console.error(error);
    } else if (response.statusCode !== 200) {
        console.error(body);
    } else {
        let data = JSON.parse(body);
        console.log(unescape(data['value']['joke']));
    }
});