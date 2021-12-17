/* ---- Understanding jQuery syntax
$(element) -> this is the element that we're targeting.
.ready -> a method that takes a callback and runs when the page is ready.
.on -> a method that attaches an event handler to a target selected by jQuery. In our case, it's the ID "tweet-text"
this -> a reference to a property within the same object.
.val -> allows us to get the value of a target selected by jQuery.
.css -> a method that takes the property name (i.e. color) & the value for that property (i.e. gray, red)

*/


$(document).ready(function() {
  $('#tweet-text').on("input", function () {
    $('.error').hide();
    const count = $(this).val().length
    if (count < 140) {
      $('.counter').html(140 - count).css('color', 'gray')
    } else {
      $('.counter').html(140 - count).css('color', 'red')
    }
  })
});