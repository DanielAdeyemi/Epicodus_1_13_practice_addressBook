//function add() {
//$("form").hide();
//}

$(document).ready(function() {
  $("#forms").click(function(event) {
    event.preventDefault();
    $(".hidden").show();

  });
  $("form").submit(function(event) {
    event.preventDefault();
    $("form").hide();
    alert("ok!");
  });
});