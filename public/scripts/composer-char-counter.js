$(document).ready(function() {
  $('#tweet-text').on("input", function (event) {
    const count = $(this).val().length
    if (count < 140) {
      $('.counter').html(140 - count).css('color', 'gray')
    } else {
      $('.counter').html(140 - count).css('color', 'red')
    }
  })
});