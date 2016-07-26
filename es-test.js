/**
 * Created by PalMurugan C on 3/18/2016.
 */

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '127.0.0.1:9200'
  //  log: 'trace'
});

client.search({
    index: 'user',
    type: 'post',
    body: {
    query: {
        bool: {
            must: [
                {
                    query_string: {
                        query: "lenova",
                        fields: [
                            "postName"
                        ]
                    }
                },
                {
                    query_string: {
                        query: "white ",
                        fields: [
                            "description"
                        ],
                        default_operator: "or"
                    }
                }
            ]
        }
    }
}



}).then(function (resp) {
    var hits = resp.hits.hits;
console.log("Hits :",hits);
}, function (err) {
    console.trace(err.message);
});