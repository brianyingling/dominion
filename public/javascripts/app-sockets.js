$(document).ready(function() {
  
  var message = io.connect("http://localhost:3000/games/:id");
  message.on('message', function(data) {
    alert(data);
    $('#results').append(data.text);
  });
});
