$("body").append("<p></p>");
$("button").click(function () {
  const input = $("input").val();
  $("p").html(input);
  if (!input) {
    $("p").html("Your email is required.").css("color", "#ec628b");
  } else {
    $("p").css("color", "black");
  }
});

