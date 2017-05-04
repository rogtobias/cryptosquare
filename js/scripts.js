$(document).ready(function() {
  $("#submitForm").submit(function(event) {
    event.preventDefault();
    debugger;
    var userInput = $("input#userInput").val();

    $("#output").text(result);
  });
});
