//-----------------------------------------FRONT END
$(document).ready(function() {
  $("#submitForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userInput").val().replace(/\s/g,'');
    numRows(userInput);


    // $("#output").text(!!!!!);
  });
});

//-------------------------------------------BACK END
var numRows = function(userInput) {
  debugger;
  var stringLength = userInput.length;

  var rows = Math.ceil(Math.sqrt(stringLength));

  var newSent = "";
  var x = rows;

  for (j = 0; j < x; j++) {
    debugger;
    for (i = 0; i < stringLength; i+=x) {
      newSent += userInput.charAt(i + j);
    }
  }
  return newSent;

  console.log(rows);
};
