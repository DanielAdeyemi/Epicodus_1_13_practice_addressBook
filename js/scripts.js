//function add() {
//$("form").hide();
//}

$(document).ready(function() {
  $("#forms").click(function() {
    event.preventDefault();
    $(".hidden").show();

  });
  $("form").submit(function() {
    $("form").hide();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let address = $("#address").val() + ", " + $("#city").val() + " " + $("#state").val() + ", " + $("#zip").val();
    alert(address);
  });
});