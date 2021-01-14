function add(name, phone, address) {
  $("form").hide();
  $("ul").prepend(`<li> ${name} </li>`);

}

$(document).ready(function() {
  $("button#forms").click(function() {
    //event.preventDefault();
    $(".hidden").show();
    
  });
  
  $("form").submit(function() {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let address = $("#address").val() + ", " + $("#city").val() + " " + $("#state").val() + ", " + $("#zip").val();
    add(name, phone, address);
    });
  });