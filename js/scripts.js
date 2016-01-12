$(document).ready(function() {
  $(".btn").click(function() {
    $("#showing", this).toggle();
    $("#hidden", this).toggle();
  });
});
