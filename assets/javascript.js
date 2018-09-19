var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
url += '?' + $.param({
  'api-key': "e0c52ab585fa4e60b569c3a3803d83ae",
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {

  console.log(result);
  console.log(result.response.docs[0]);

}).fail(function(err) {
  throw err;
});